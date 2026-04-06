namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class IsEmptyTests
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
        var result = source.ToEnumerable().IsEmpty();
        Assert.True(result);
    }



    [Fact]
    public void IsEmpty_with_non_empty_source_returns_false()
    {
        var source = new[] { 1, 2, 3 };
        var result = source.ToEnumerable().IsEmpty();
        Assert.False(result);
    }



    [Fact]
    public void IsEmpty_with_ICollection_source_empty_returns_true()
    {
        var result = new List<int>().IsEmpty();
        Assert.True(result);
    }



    [Fact]
    public void IsEmpty_with_ICollection_source_with_elements_returns_false()
    {
        var result = new List<int>{1,2,4,5}.IsEmpty();
        Assert.False(result);
    }

}
