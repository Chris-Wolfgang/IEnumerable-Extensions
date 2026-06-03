using BenchmarkDotNet.Attributes;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Measures the wrap + full enumeration cost of <c>ToEnumerable&lt;T&gt;()</c>
/// vs direct enumeration of the underlying source. Each "via ToEnumerable"
/// benchmark has its own baseline of the same shape so the RankColumn
/// stays interpretable.
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class ToEnumerableEnumerationBenchmarks
{
    private int[] _array = null!;
    private List<int> _list = null!;

    [GlobalSetup]
    public void Setup()
    {
        _array = Enumerable.Range(0, 1000).ToArray();
        _list = Enumerable.Range(0, 1000).ToList();
    }

    // ----- Array source: baseline vs via ToEnumerable -----

    [Benchmark(Baseline = true)]
    public int Enumerate_Array_Baseline()
    {
        var total = 0;
        foreach (var x in _array)
        {
            total += x;
        }
        return total;
    }

    [Benchmark]
    public int Enumerate_Array_ViaToEnumerable()
    {
        var total = 0;
        foreach (var x in _array.ToEnumerable())
        {
            total += x;
        }
        return total;
    }

    // ----- List source: baseline vs via ToEnumerable -----

    [Benchmark]
    public int Enumerate_List_Baseline()
    {
        var total = 0;
        foreach (var x in _list)
        {
            total += x;
        }
        return total;
    }

    [Benchmark]
    public int Enumerate_List_ViaToEnumerable()
    {
        var total = 0;
        foreach (var x in _list.ToEnumerable())
        {
            total += x;
        }
        return total;
    }
}
