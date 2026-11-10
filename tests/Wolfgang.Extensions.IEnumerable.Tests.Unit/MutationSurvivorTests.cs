using System;
using System.Collections.Generic;
using Xunit;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

/// <summary>
/// Pins behaviour that a mutation run showed no other test observed. The null-argument guards are
/// followed by LINQ calls that throw the same <see cref="ArgumentNullException"/> for the same
/// parameter, so removing a guard changes nothing a caller can see except <em>which method threw</em>.
/// That is a real contract (a guard in the public method gives a better diagnostic than one two
/// frames down), so these tests assert the throwing method as well as the parameter name.
/// </summary>
public class MutationSurvivorTests
{
    private static readonly IEnumerable<int> _nullSource = null!;
    private static readonly Func<int, bool> _nullPredicate = null!;



    [Fact]
    public void IsEmpty_when_source_is_null_throws_from_IsEmpty_itself()
    {
        var exception = Assert.Throws<ArgumentNullException>(() => _nullSource.IsEmpty());

        Assert.Equal("source", exception.ParamName);
        Assert.Equal(nameof(IEnumerableExtensions.IsEmpty), exception.TargetSite?.Name);
    }



    [Fact]
    public void None_with_predicate_when_source_is_null_throws_from_None_itself()
    {
        var exception = Assert.Throws<ArgumentNullException>(() => _nullSource.None(static x => x > 0));

        Assert.Equal("source", exception.ParamName);
        Assert.Equal(nameof(IEnumerableExtensions.None), exception.TargetSite?.Name);
    }



    [Fact]
    public void None_with_predicate_when_predicate_is_null_throws_from_None_itself()
    {
        var exception = Assert.Throws<ArgumentNullException>(() => new[] { 1 }.None(_nullPredicate));

        Assert.Equal("predicate", exception.ParamName);
        Assert.Equal(nameof(IEnumerableExtensions.None), exception.TargetSite?.Name);
    }



    [Fact]
    public void Shuffle_when_source_is_null_throws_from_Shuffle_itself()
    {
        var exception = Assert.Throws<ArgumentNullException>(() => _nullSource.Shuffle());

        Assert.Equal("source", exception.ParamName);
        Assert.Equal(nameof(IEnumerableExtensions.Shuffle), exception.TargetSite?.Name);
    }



    [Fact]
    public void Shuffle_of_three_items_eventually_produces_every_one_of_the_six_orders()
    {
        // A Fisher-Yates shuffle reaches all n! orders. 5000 shuffles of 3 items miss a given order with
        // probability (5/6)^5000, so this cannot fail by chance; a shuffle that draws from the wrong range
        // reaches fewer orders and does.
        var source = new[] { 0, 1, 2 };

        var seen = new HashSet<string>();
        for (var i = 0; i < 5000; i++)
        {
            seen.Add(string.Join(",", source.Shuffle()));
        }

        Assert.Equal(6, seen.Count);
    }
}
