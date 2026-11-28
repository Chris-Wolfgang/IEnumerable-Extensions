using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Engines;

namespace Wolfgang.Extensions.IEnumerable.Benchmarks;

/// <summary>
/// Benchmarks for <c>Partition&lt;T&gt;(int)</c> on an array, a <see cref="List{T}"/> and a yield
/// iterator, against a hand-written round-robin split into pre-sized arrays. <c>Partition</c> is
/// eager: it reads the whole source into one buffer per partition and returns a read-only list of
/// lazy iterators over those buffers, so every row includes building the partitions and then
/// enumerating each of them once.
/// </summary>
[MemoryDiagnoser]
[RankColumn]
public class PartitionBenchmarks
{
    private readonly Consumer _consumer = new();

    private int[] _array = null!;
    private List<int> _list = null!;
    private IEnumerable<int> _yield = null!;

    [Params(100, 1000, 10000)]
    public int Size { get; set; }

    [Params(4)]
    public int PartitionCount { get; set; }



    [GlobalSetup]
    public void Setup()
    {
        _array = Enumerable.Range(0, Size).ToArray();
        _list = Enumerable.Range(0, Size).ToList();
        _yield = YieldRange(Size);
    }



    // ----- Baseline: hand-written round-robin into pre-sized arrays (the size is known) -----

    [Benchmark(Baseline = true)]
    public void Manual_RoundRobin_Array()
    {
        var buffers = new int[PartitionCount][];
        for (var p = 0; p < PartitionCount; p++)
        {
            // Partition p holds the items at p, p + n, p + 2n, ...
            buffers[p] = new int[(_array.Length - p + PartitionCount - 1) / PartitionCount];
        }

        for (var i = 0; i < _array.Length; i++)
        {
            buffers[i % PartitionCount][i / PartitionCount] = _array[i];
        }

        foreach (var buffer in buffers)
        {
            foreach (var item in buffer)
            {
                _consumer.Consume(item);
            }
        }
    }



    [Benchmark]
    public void Partition_Array() => ConsumeAll(_array.Partition(PartitionCount));



    [Benchmark]
    public void Partition_List() => ConsumeAll(_list.Partition(PartitionCount));



    [Benchmark]
    public void Partition_Yield() => ConsumeAll(_yield.Partition(PartitionCount));



    private void ConsumeAll(IReadOnlyList<IEnumerable<int>> partitions)
    {
        foreach (var partition in partitions)
        {
            partition.Consume(_consumer);
        }
    }



    private static IEnumerable<int> YieldRange(int count)
    {
        for (var i = 0; i < count; i++)
        {
            yield return i;
        }
    }
}
