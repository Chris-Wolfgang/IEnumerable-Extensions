using System;
using System.Collections.Generic;
using Xunit;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class IsEmptyTests
{
    [Fact]
    public void IsEmpty_when_source_is_null_throws_ArgumentNullException()
    {
        List<int> source = null!;

        var exception = Assert.Throws<ArgumentNullException>(() => source.IsEmpty());

        Assert.Equal("source", exception.ParamName);
    }



    [Fact]
    public void IsEmpty_when_source_is_empty_returns_true()
    {
        var source = Array.Empty<int>();

        var result = source.ToEnumerable().IsEmpty();

        Assert.True(result);
    }



    [Fact]
    public void IsEmpty_when_source_is_not_empty_returns_false()
    {
        var source = new[] { 1, 2, 3 };

        var result = source.ToEnumerable().IsEmpty();

        Assert.False(result);
    }



    [Fact]
    public void IsEmpty_when_ICollection_source_is_empty_returns_true()
    {
        var result = new List<int>().IsEmpty();

        Assert.True(result);
    }



    [Fact]
    public void IsEmpty_when_ICollection_source_has_elements_returns_false()
    {
        var result = new List<int> { 1, 2, 4, 5 }.IsEmpty();

        Assert.False(result);
    }
}
