namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class IsNullOrEmptyTests
{


    [Fact]
    public void IsNullOrEmpty_with_null_source_returns_true()
    {
        IEnumerable<int> source = null!;

        var result = source.IsNullOrEmpty();

        Assert.True(result);
    }



    [Fact]
    public void IsNullOrEmpty_with_empty_source_returns_true()
    {
        var source = new int[] { };

        var result = source.ToEnumerable().IsNullOrEmpty();

        Assert.True(result);
    }



    [Fact]
    public void IsNullOrEmpty_with_non_empty_source_returns_false()
    {
        var source = new[] { 1, 2, 3 };

        var result = source.ToEnumerable().IsNullOrEmpty();

        Assert.False(result);
    }



    [Fact]
    public void IsNullOrEmpty_with_ICollection_source_empty_returns_true()
    {
        var result = new List<int>().IsNullOrEmpty();

        Assert.True(result);
    }



    [Fact]
    public void IsNullOrEmpty_with_ICollection_source_with_elements_returns_false()
    {
        var result = new List<int> { 1, 2, 3 }.IsNullOrEmpty();

        Assert.False(result);
    }
}
