using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Engines;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Measures the overhead of <c>Do</c> (side-effect iterator) compared to
/// <c>Select</c> with a side-effecting selector and a raw foreach.
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class DoBenchmarks
{
    private readonly Consumer _consumer = new();
    private int[] _data = null!;

    [Params(100, 10_000, 1_000_000)]
    public int Size { get; set; }

    [GlobalSetup]
    public void Setup() => _data = Enumerable.Range(0, Size).ToArray();

    [Benchmark(Baseline = true)]
    public long Foreach_RawLoop()
    {
        long sum = 0;
        foreach (var x in _data)
        {
            sum += x;
        }
        return sum;
    }

    [Benchmark]
    public void Do_Iterator()
    {
        long sum = 0;
        _data.Do(x => sum += x).Consume(_consumer);
    }

    [Benchmark]
    public void Linq_Select_SideEffect()
    {
        long sum = 0;
        _data.Select(x => { sum += x; return x; }).Consume(_consumer);
    }
}
