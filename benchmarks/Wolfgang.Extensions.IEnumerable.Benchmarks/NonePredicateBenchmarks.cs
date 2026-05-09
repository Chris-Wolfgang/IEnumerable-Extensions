using BenchmarkDotNet.Attributes;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Compares <c>None(predicate)</c> against the canonical <c>!source.Any(predicate)</c>
/// idiom. Should be a wash since None just delegates to !Any.
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class NonePredicateBenchmarks
{
    private int[] _data = null!;

    [Params(100, 10_000, 1_000_000)]
    public int Size { get; set; }

    [GlobalSetup]
    public void Setup() => _data = Enumerable.Range(0, Size).ToArray();

    // Predicate that fails near the end (worst case for short-circuit)
    [Benchmark(Baseline = true)]
    public bool Linq_NotAny_LateMatch() => !_data.Any(x => x == Size - 1);

    [Benchmark]
    public bool None_LateMatch() => _data.None(x => x == Size - 1);

    // Predicate that never matches (full traversal)
    [Benchmark]
    public bool Linq_NotAny_NoMatch() => !_data.Any(x => x < 0);

    [Benchmark]
    public bool None_NoMatch() => _data.None(x => x < 0);
}
