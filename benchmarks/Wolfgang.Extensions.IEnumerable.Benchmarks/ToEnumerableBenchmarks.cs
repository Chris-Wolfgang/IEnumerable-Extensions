using BenchmarkDotNet.Attributes;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Measures the wrapping overhead of <c>ToEnumerable&lt;T&gt;()</c> in isolation
/// — return-the-IEnumerable, no enumeration. Baseline is <c>Identity_Array</c>
/// (returning the source array directly).
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
    public IEnumerable<int> Identity_Array() => _array;

    [Benchmark]
    public IEnumerable<int> ToEnumerable_Array() => _array.ToEnumerable();

    [Benchmark]
    public IEnumerable<int> ToEnumerable_List() => _list.ToEnumerable();

    [Benchmark]
    public IEnumerable<int> ToEnumerable_Yield() => _yield.ToEnumerable();

    private static IEnumerable<int> YieldRange(int count)
    {
        for (var i = 0; i < count; i++)
        {
            yield return i;
        }
    }
}
