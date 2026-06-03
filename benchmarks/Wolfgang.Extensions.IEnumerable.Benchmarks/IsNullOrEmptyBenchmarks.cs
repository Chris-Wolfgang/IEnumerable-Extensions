using BenchmarkDotNet.Attributes;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Dedicated benchmarks for <c>IsNullOrEmpty&lt;T&gt;()</c> that exercise the
/// null-input short-circuit alongside the empty / populated cases.
/// <see cref="IsEmptyBenchmarks"/> covers some IsNullOrEmpty calls already,
/// but skips the null-source path (since calling IsEmpty on null throws).
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class IsNullOrEmptyBenchmarks
{
    private IEnumerable<int>? _null;
    private List<int> _emptyList = null!;
    private List<int> _populatedList = null!;
    private IEnumerable<int> _emptyYield = null!;
    private IEnumerable<int> _populatedYield = null!;

    [GlobalSetup]
    public void Setup()
    {
        _null = null;
        _emptyList = new List<int>();
        _populatedList = Enumerable.Range(0, 1000).ToList();
        _emptyYield = YieldRange(0);
        _populatedYield = YieldRange(1000);
    }

    // ----- Null short-circuit -----

    [Benchmark(Baseline = true)]
    public bool ManualNullCheck_Null() => _null == null || !_null.Any();

    [Benchmark]
    public bool IsNullOrEmpty_Null() => _null.IsNullOrEmpty();

    // ----- Empty ICollection -----

    [Benchmark]
    public bool ManualNullCheck_EmptyList() => _emptyList == null || !_emptyList.Any();

    [Benchmark]
    public bool IsNullOrEmpty_EmptyList() => _emptyList.IsNullOrEmpty();

    // ----- Populated ICollection -----

    [Benchmark]
    public bool IsNullOrEmpty_PopulatedList() => _populatedList.IsNullOrEmpty();

    // ----- Yield-based enumerables (no ICollection fast path) -----

    [Benchmark]
    public bool IsNullOrEmpty_EmptyYield() => _emptyYield.IsNullOrEmpty();

    [Benchmark]
    public bool IsNullOrEmpty_PopulatedYield() => _populatedYield.IsNullOrEmpty();

    private static IEnumerable<int> YieldRange(int count)
    {
        for (var i = 0; i < count; i++)
        {
            yield return i;
        }
    }
}
