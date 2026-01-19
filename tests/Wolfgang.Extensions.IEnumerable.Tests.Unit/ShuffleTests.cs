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

        var actualResult = source.Shuffle().ToArray();

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

        var source = new[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

        var expectedResult = new[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        source.Shuffle();

        Assert.Equal(expectedResult, source);
    }
}