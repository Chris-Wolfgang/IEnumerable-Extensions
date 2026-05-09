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
    private IEnumerable<int> _listAsEnumerable = null!;
    private IEnumerable<int> _arrayAsEnumerable = null!;
    private IEnumerable<int> _yieldEnumerable = null!;

    [Params(100, 10_000, 1_000_000)]
    public int Size { get; set; }

    [GlobalSetup]
    public void Setup()
    {
        _list = Enumerable.Range(0, Size).ToList();
        _listAsEnumerable = _list;
        _arrayAsEnumerable = _list.ToArray();
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

    // The following benchmarks bind the call through IEnumerable<int> so
    // the extension method (and its List<T> fast-path dispatch) is actually
    // invoked, rather than the BCL List<T>.ForEach instance method.

    [Benchmark]
    public long Extension_OnListAsEnumerable()
    {
        long sum = 0;
        _listAsEnumerable.ForEach(i => sum += i);
        return sum;
    }

    [Benchmark]
    public long Extension_OnArrayAsEnumerable()
    {
        long sum = 0;
        _arrayAsEnumerable.ForEach(i => sum += i);
        return sum;
    }

    [Benchmark]
    public long Extension_OnYieldEnumerable()
    {
        long sum = 0;
        _yieldEnumerable.ForEach(i => sum += i);
        return sum;
    }

    [Benchmark]
    public long Bcl_ListForEach()
    {
        long sum = 0;
        _list.ForEach(i => sum += i);
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
