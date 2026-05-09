using BenchmarkDotNet.Attributes;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Compares IsEmpty / IsNullOrEmpty / None against the canonical LINQ
/// <c>!source.Any()</c> idiom. Highlights the ICollection{T} fast path.
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class IsEmptyBenchmarks
{
    private List<int> _emptyList = null!;
    private List<int> _populatedList = null!;
    private IEnumerable<int> _emptyYield = null!;
    private IEnumerable<int> _populatedYield = null!;

    [GlobalSetup]
    public void Setup()
    {
        _emptyList = new List<int>();
        _populatedList = Enumerable.Range(0, 1000).ToList();
        _emptyYield = YieldRange(0);
        _populatedYield = YieldRange(1000);
    }

    // ----- Empty ICollection -----

    [Benchmark(Baseline = true)]
    public bool Linq_NotAny_EmptyList() => !_emptyList.Any();

    [Benchmark]
    public bool IsEmpty_EmptyList() => _emptyList.IsEmpty();

    [Benchmark]
    public bool IsNullOrEmpty_EmptyList() => _emptyList.IsNullOrEmpty();

    [Benchmark]
    public bool None_EmptyList() => _emptyList.None();

    // ----- Populated ICollection -----

    [Benchmark]
    public bool Linq_NotAny_PopulatedList() => !_populatedList.Any();

    [Benchmark]
    public bool IsEmpty_PopulatedList() => _populatedList.IsEmpty();

    [Benchmark]
    public bool None_PopulatedList() => _populatedList.None();

    // ----- Yield enumerables (no ICollection fast path) -----

    [Benchmark]
    public bool IsEmpty_EmptyYield() => _emptyYield.IsEmpty();

    [Benchmark]
    public bool IsEmpty_PopulatedYield() => _populatedYield.IsEmpty();

    private static IEnumerable<int> YieldRange(int count)
    {
        for (var i = 0; i < count; i++)
        {
            yield return i;
        }
    }
}
