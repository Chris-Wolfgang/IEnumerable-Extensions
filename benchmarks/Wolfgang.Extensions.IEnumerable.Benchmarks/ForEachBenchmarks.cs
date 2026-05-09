using BenchmarkDotNet.Attributes;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Compares the IEnumerable{T}.ForEach extension against the BCL List{T}.ForEach
/// fast path (which the extension dispatches to) and a hand-written foreach loop.
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class ForEachBenchmarks
{
    private List<int> _list = null!;
    private int[] _array = null!;
    private IEnumerable<int> _yieldEnumerable = null!;

    [Params(100, 10_000, 1_000_000)]
    public int Size { get; set; }

    [GlobalSetup]
    public void Setup()
    {
        _list = Enumerable.Range(0, Size).ToList();
        _array = _list.ToArray();
        _yieldEnumerable = YieldRange(Size);
    }

    [Benchmark(Baseline = true)]
    public long Foreach_RawLoop()
    {
        long sum = 0;
        foreach (var item in _list)
        {
            sum += item;
        }
        return sum;
    }

    [Benchmark]
    public long Extension_OnList()
    {
        long sum = 0;
        _list.ForEach(i => sum += i);
        return sum;
    }

    [Benchmark]
    public long Extension_OnArray()
    {
        long sum = 0;
        _array.ForEach(i => sum += i);
        return sum;
    }

    [Benchmark]
    public long Extension_OnYieldEnumerable()
    {
        long sum = 0;
        _yieldEnumerable.ForEach(i => sum += i);
        return sum;
    }

    private static IEnumerable<int> YieldRange(int count)
    {
        for (var i = 0; i < count; i++)
        {
            yield return i;
        }
    }
}
