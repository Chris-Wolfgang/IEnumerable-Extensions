using System;
using System.Collections.Generic;
using Xunit;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class IsNullOrEmptyTests
{
    [Fact]
    public void IsNullOrEmpty_when_source_is_null_returns_true()
    {
        IEnumerable<int> source = null!;

        var result = source.IsNullOrEmpty();

        Assert.True(result);
    }



    [Fact]
    public void IsNullOrEmpty_when_source_is_empty_returns_true()
    {
        var source = Array.Empty<int>();

        var result = source.ToEnumerable().IsNullOrEmpty();

        Assert.True(result);
    }



    [Fact]
    public void IsNullOrEmpty_when_source_is_not_empty_returns_false()
    {
        var source = new[] { 1, 2, 3 };

        var result = source.ToEnumerable().IsNullOrEmpty();

        Assert.False(result);
    }



    [Fact]
    public void IsNullOrEmpty_when_ICollection_source_is_empty_returns_true()
    {
        var result = new List<int>().IsNullOrEmpty();

        Assert.True(result);
    }



    [Fact]
    public void IsNullOrEmpty_when_ICollection_source_has_elements_returns_false()
    {
        var result = new List<int> { 1, 2, 3 }.IsNullOrEmpty();

        Assert.False(result);
    }
}
