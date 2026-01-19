namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class IsNullOrEmptyTests
{


    [Fact]
    public void IsNullOrEmpty_with_null_source_returns_true()
    {
        List<int> source = null!;
        var result = source.ToEnumerable().IsNullOrEmpty();
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
}
