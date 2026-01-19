namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class IsEmpty
{


    [Fact]
    public void IsEmpty_with_null_source_throws_ArgumentNullException()
    {
        List<int> source = null!;
        var exception = Assert.Throws<ArgumentNullException>(() => source.IsEmpty());
        Assert.Equal("source", exception.ParamName);
    }



    [Fact]
    public void IsEmpty_with_empty_source_returns_true()
    {
        var source = new int[] { };
        var result = source.IsEmpty();
        Assert.True(result);
    }



    [Fact]
    public void IsEmpty_with_non_empty_source_returns_false()
    {
        var source = new[] { 1, 2, 3 };
        var result = source.IsEmpty();
        Assert.False(result);
    }
}
