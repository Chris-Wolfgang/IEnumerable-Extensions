using System.Runtime.CompilerServices;
using BenchmarkDotNet.Attributes;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Measures the wrapping overhead of <c>ToEnumerable&lt;T&gt;()</c> in isolation
/// — wrap the source and return a materialized scalar so the BDN validator
/// accepts the result. Baseline is <c>Identity_Array</c>, which returns the
/// identity hash of the source array (no wrap, same shape of measurement).
/// <para>
/// Why <see cref="RuntimeHelpers.GetHashCode(object)"/>: BDN rejects benchmarks
/// returning an unconsumed <see cref="IEnumerable{T}"/> (deferred-execution
/// result). A naive <c>is object</c> null check would satisfy the validator
/// but is constant-foldable to <c>true</c> by the JIT — it could prove the
/// wrapper is non-null and elide the <see cref="IEnumerableExtensions.ToEnumerable{T}"/>
/// call entirely. <see cref="RuntimeHelpers.GetHashCode(object)"/> reads the
/// object header of the wrapper instance, which forces materialization and
/// keeps the call live without pulling enumeration cost into the measurement.
/// </para>
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class ToEnumerableBenchmarks
{
    private int[] _array = null!;
    private List<int> _list = null!;
    private IEnumerable<int> _yield = null!;

    [GlobalSetup]
    public void Setup()
    {
        _array = Enumerable.Range(0, 1000).ToArray();
        _list = Enumerable.Range(0, 1000).ToList();
        _yield = YieldRange(1000);
    }

    [Benchmark(Baseline = true)]
    public int Identity_Array() => RuntimeHelpers.GetHashCode(_array);

    [Benchmark]
    public int ToEnumerable_Array() => RuntimeHelpers.GetHashCode(_array.ToEnumerable());

    [Benchmark]
    public int ToEnumerable_List() => RuntimeHelpers.GetHashCode(_list.ToEnumerable());

    [Benchmark]
    public int ToEnumerable_Yield() => RuntimeHelpers.GetHashCode(_yield.ToEnumerable());

    private static IEnumerable<int> YieldRange(int count)
    {
        for (var i = 0; i < count; i++)
        {
            yield return i;
        }
    }
}
