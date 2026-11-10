using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class PartitionTests
{
    [Fact]
    public void Partition_when_source_is_null_throws_ArgumentNullException()
    {
        IEnumerable<int> source = null!;

        var exception = Assert.Throws<ArgumentNullException>(() => source.Partition(3));

        Assert.Equal("source", exception.ParamName);
    }



    [Theory]
    [InlineData(0)]
    [InlineData(-1)]
    [InlineData(int.MinValue)]
    public void Partition_when_partitionCount_is_less_than_1_throws_ArgumentOutOfRangeException(int partitionCount)
    {
        var source = new[] { 1, 2, 3 };

        var exception = Assert.Throws<ArgumentOutOfRangeException>(() => source.Partition(partitionCount));

        Assert.Equal("partitionCount", exception.ParamName);
        Assert.Equal(partitionCount, exception.ActualValue);
        Assert.StartsWith("partitionCount must be at least 1.", exception.Message, StringComparison.Ordinal);
    }



    [Theory]
    [InlineData(9, 3, new[] { 3, 3, 3 })]
    [InlineData(10, 3, new[] { 4, 3, 3 })]
    [InlineData(3, 3, new[] { 1, 1, 1 })]
    [InlineData(2, 5, new[] { 1, 1, 0, 0, 0 })]
    [InlineData(0, 3, new[] { 0, 0, 0 })]
    [InlineData(5, 1, new[] { 5 })]
    public void Partition_when_called_returns_partitionCount_groups_with_the_expected_sizes
    (
        int itemCount,
        int partitionCount,
        int[] expectedSizes
    )
    {
        var source = Enumerable.Range(1, itemCount).ToEnumerable();

        var result = source.Partition(partitionCount);

        Assert.Equal
        (
            expectedSizes,
            result.Select(partition => partition.Count()).ToArray()
        );
    }



    [Fact]
    public void Partition_when_source_has_items_distributes_them_round_robin_in_order()
    {
        var source = new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        var result = source.Partition(3);

        Assert.Equal([1, 4, 7, 10], result[0]);
        Assert.Equal([2, 5, 8], result[1]);
        Assert.Equal([3, 6, 9], result[2]);
    }



    [Fact]
    public void Partition_when_partitions_are_interleaved_back_reproduces_the_source()
    {
        for (var itemCount = 0; itemCount <= 25; itemCount++)
        {
            for (var partitionCount = 1; partitionCount <= 7; partitionCount++)
            {
                var source = Enumerable.Range(0, itemCount).ToArray();

                var partitions = source.Partition(partitionCount).Select(p => p.ToArray()).ToArray();

                var rebuilt = new List<int>();
                for (var i = 0; i < itemCount; i++)
                {
                    rebuilt.Add(partitions[i % partitionCount][i / partitionCount]);
                }

                Assert.Equal(source, rebuilt);
                Assert.Equal(itemCount, partitions.Sum(p => p.Length));
            }
        }
    }



    [Fact]
    public void Partition_when_called_enumerates_the_source_exactly_once_and_eagerly()
    {
        var enumerations = 0;
        var source = CountEnumerations(() => enumerations++);

        var result = source.Partition(2);

        Assert.Equal(1, enumerations);

        _ = result[0].ToArray();
        _ = result[1].ToArray();
        _ = result[0].ToArray();

        Assert.Equal(1, enumerations);
    }



    [Fact]
    public void Partition_when_source_changes_after_the_call_does_not_reflect_the_change()
    {
        var source = new List<int> { 1, 2, 3, 4 };

        var result = source.Partition(2);
        source.Add(5);

        Assert.Equal([1, 3], result[0]);
        Assert.Equal([2, 4], result[1]);
    }



    [Fact]
    public void Partition_when_called_returns_a_read_only_list()
    {
        var result = new[] { 1, 2, 3 }.Partition(2);

        var asList = Assert.IsAssignableFrom<IList<IEnumerable<int>>>(result);

        Assert.True(asList.IsReadOnly);
        Assert.Throws<NotSupportedException>(() => asList[0] = Array.Empty<int>());
    }



    [Fact]
    public void Partition_when_called_returns_partitions_that_are_not_concrete_collections()
    {
        var result = new[] { 1, 2, 3, 4 }.Partition(2);

        foreach (var partition in result)
        {
            Assert.False(partition is List<int>);
            Assert.False(partition is ICollection<int>);
            Assert.False(partition is int[]);
        }
    }



    private static IEnumerable<int> CountEnumerations(Action onEnumerate)
    {
        onEnumerate();

        for (var i = 1; i <= 4; i++)
        {
            yield return i;
        }
    }
}
