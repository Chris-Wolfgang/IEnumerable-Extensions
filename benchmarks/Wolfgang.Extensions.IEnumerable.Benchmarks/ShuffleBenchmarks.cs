using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Engines;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Benchmarks comparing different shuffle implementations
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class ShuffleBenchmarks
{
    private readonly Consumer _consumer = new();
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
    public void CurrentImplementation_Small() => _smallList.Shuffle().Consume(_consumer);

    [Benchmark]
    public void FisherYates_Small() => ShuffleFisherYates(_smallList).Consume(_consumer);

    // ===== Medium List (1,000 items) =====

    [Benchmark]
    public void CurrentImplementation_Medium() => _mediumList.Shuffle().Consume(_consumer);

    [Benchmark]
    public void FisherYates_Medium() => ShuffleFisherYates(_mediumList).Consume(_consumer);

    // ===== Large List (10,000 items) =====

    [Benchmark]
    public void CurrentImplementation_Large() => _largeList.Shuffle().Consume(_consumer);

    [Benchmark]
    public void FisherYates_Large() => ShuffleFisherYates(_largeList).Consume(_consumer);

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
        // Using Random.Shared (requires .NET 6+) - this is why benchmark targets net8.0 only
        var rng = Random.Shared;

        for (var i = list.Count - 1; i > 0; i--)
        {
            var j = rng.Next(i + 1);
            (list[i], list[j]) = (list[j], list[i]);
        }

        return list;
    }
}
