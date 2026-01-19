using BenchmarkDotNet.Attributes;
using Wolfgang.Extensions.IEnumerable;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Benchmarks comparing different shuffle implementations
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class ShuffleBenchmarks
{
    private List<int> _smallList = null!;
    private List<int> _mediumList = null!;
    private List<int> _largeList = null!;

    [GlobalSetup]
    public void Setup()
    {
        _smallList = Enumerable.Range(0, 100).ToList();
        _mediumList = Enumerable.Range(0, 1000).ToList();
        _largeList = Enumerable.Range(0, 10000).ToList();
    }

    // ===== Small List (100 items) =====

    [Benchmark]
    public IEnumerable<int> CurrentImplementation_Small()
    {
        return _smallList.Shuffle();
    }

    [Benchmark]
    public IEnumerable<int> FisherYates_Small()
    {
        return ShuffleFisherYates(_smallList);
    }

    // ===== Medium List (1,000 items) =====

    [Benchmark]
    public IEnumerable<int> CurrentImplementation_Medium()
    {
        return _mediumList.Shuffle();
    }

    [Benchmark]
    public IEnumerable<int> FisherYates_Medium()
    {
        return ShuffleFisherYates(_mediumList);
    }

    // ===== Large List (10,000 items) =====

    [Benchmark]
    public IEnumerable<int> CurrentImplementation_Large()
    {
        return _largeList.Shuffle();
    }

    [Benchmark]
    public IEnumerable<int> FisherYates_Large()
    {
        return ShuffleFisherYates(_largeList);
    }

    /// <summary>
    /// Fisher-Yates shuffle implementation as suggested in the PR review
    /// </summary>
    private static IEnumerable<T> ShuffleFisherYates<T>(IEnumerable<T> source)
    {
        if (source == null)
        {
            throw new ArgumentNullException(nameof(source));
        }

        var list = source.ToList();
        var rng = Random.Shared;

        for (var i = list.Count - 1; i > 0; i--)
        {
            var j = rng.Next(i + 1);
            (list[i], list[j]) = (list[j], list[i]);
        }

        return list;
    }
}
