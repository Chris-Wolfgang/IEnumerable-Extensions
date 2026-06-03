using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Engines;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Benchmarks for <c>Shuffle&lt;T&gt;()</c> broken down by runtime source type.
/// v1.4.0's implementation picks one of three fast paths based on a runtime
/// type check on <c>source</c>, with a fallback for everything else:
/// <list type="bullet">
///   <item><b>Fast path — T[]</b>: <see cref="System.Array.Copy(System.Array, System.Array, int)"/> into a new T[] (no enumerator allocation, no <see cref="List{T}"/> wrapper overhead)</item>
///   <item><b>Fast path — List&lt;T&gt;</b>: <see cref="ICollection{T}.CopyTo"/> (List is itself an ICollection — preallocate T[] of known length, single CopyTo)</item>
///   <item><b>Fast path — non-list, non-array ICollection&lt;T&gt;</b>: same CopyTo path as List, exercised via a custom wrapper below</item>
///   <item><b>Fallback — pure IEnumerable&lt;T&gt; (yield iterator)</b>: <see cref="Enumerable.ToArray{T}(IEnumerable{T})"/> (allocates + enumerates)</item>
/// </list>
/// The <c>Reference_ToArrayThenShuffle</c> benchmark always runs the
/// fallback path (regardless of source type), letting the fast-path
/// benchmarks be read as "how much do we save vs always going through
/// ToArray + manual Fisher-Yates?".
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class ShuffleBenchmarks
{
    private readonly Consumer _consumer = new();

    private int[] _array = null!;
    private List<int> _list = null!;
    private ICollection<int> _collection = null!;
    private IEnumerable<int> _yield = null!;

    [Params(100, 1000, 10000)]
    public int Size { get; set; }

    [GlobalSetup]
    public void Setup()
    {
        _array = Enumerable.Range(0, Size).ToArray();
        _list = Enumerable.Range(0, Size).ToList();
        // Wrap a List in a custom ICollection that is NOT a List/Array so
        // the `source is ICollection<T>` branch is exercised distinctly
        // from the (List-also-is-ICollection) case.
        _collection = new ReadOnlyCollectionWrapper<int>(Enumerable.Range(0, Size).ToList());
        _yield = YieldRange(Size);
    }

    // ----- Fast path: T[] source (Array.Copy into new T[]) -----

    [Benchmark(Baseline = true)]
    public void Shuffle_Array() => _array.Shuffle().Consume(_consumer);

    // ----- Fast path: List<T> source (ICollection<T>.CopyTo) -----

    [Benchmark]
    public void Shuffle_List() => _list.Shuffle().Consume(_consumer);

    // ----- Fast path: non-list, non-array ICollection<T> source (CopyTo) -----

    [Benchmark]
    public void Shuffle_ICollectionNotList() => _collection.Shuffle().Consume(_consumer);

    // ----- Fallback: pure IEnumerable<T> source (ToArray()) -----

    [Benchmark]
    public void Shuffle_Yield() => _yield.Shuffle().Consume(_consumer);

    // ----- Reference: always runs through the IEnumerable<T> fallback path
    //       (ToArray + manual Fisher-Yates), regardless of the source's
    //       runtime type. Lets the fast-path rows above be read as
    //       "how much does the runtime-type fast path save vs always
    //       going through the fallback?".

    [Benchmark]
    public void Reference_ToArrayThenShuffle()
    {
        var buffer = _array.ToArray();
        var rng = Random.Shared;
        for (var i = buffer.Length - 1; i > 0; i--)
        {
            var j = rng.Next(i + 1);
            (buffer[i], buffer[j]) = (buffer[j], buffer[i]);
        }
        foreach (var item in buffer)
        {
            _consumer.Consume(item);
        }
    }

    private static IEnumerable<int> YieldRange(int count)
    {
        for (var i = 0; i < count; i++)
        {
            yield return i;
        }
    }

    /// <summary>
    /// ICollection&lt;T&gt; wrapper that is deliberately not a List, not an
    /// array, and not an IList — exercises the ICollection CopyTo branch
    /// distinctly from the (List-also-is-ICollection) case.
    /// </summary>
    private sealed class ReadOnlyCollectionWrapper<T> : ICollection<T>
    {
        private readonly List<T> _inner;

        public ReadOnlyCollectionWrapper(List<T> inner) => _inner = inner;

        public int Count => _inner.Count;

        public bool IsReadOnly => true;

        public void Add(T item) => throw new NotSupportedException();

        public void Clear() => throw new NotSupportedException();

        public bool Contains(T item) => _inner.Contains(item);

        public void CopyTo(T[] array, int arrayIndex) => _inner.CopyTo(array, arrayIndex);

        public IEnumerator<T> GetEnumerator() => _inner.GetEnumerator();

        public bool Remove(T item) => throw new NotSupportedException();

        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator() => _inner.GetEnumerator();
    }
}
