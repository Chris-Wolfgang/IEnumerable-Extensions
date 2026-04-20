namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class ShuffleTests
{


    [Fact]
    public void Shuffle_called_with_null_list_throws_ArgumentNullException()
    {
        List<int> source = null!;

        var exception = Assert.Throws<ArgumentNullException>(() => source.Shuffle());

        Assert.Equal("source", exception.ParamName);
    }



    [Fact]
    public void Shuffle_returns_original_items_in_random_order()
    {
        var source = new[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        var actualResult = source.ToEnumerable().Shuffle().ToArray();

        Assert.NotEqual(source, actualResult);
        Assert.Equal(source.Length, actualResult.Length);

        foreach (var number in source)
        {
            Assert.Contains(number, actualResult);
        }
    }


    [Fact]
    public void Shuffle_does_not_change_the_order_of_the_original_list()
    {
        var source = new[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        var expectedResult = new[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        source.ToEnumerable().Shuffle();

        Assert.Equal(expectedResult, source);
    }



    [Fact]
    public void Shuffle_with_empty_source_returns_empty()
    {
        var source = Array.Empty<int>();

        var result = source.ToEnumerable().Shuffle();

        Assert.Empty(result);
    }



    [Fact]
    public void Shuffle_with_single_element_returns_same_element()
    {
        var source = new[] { 42 };

        var result = source.ToEnumerable().Shuffle().ToArray();

        Assert.Single(result);
        Assert.Equal(42, result[0]);
    }
}