using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class DoTests
{
    [Fact]
    public void Do_when_source_is_null_throws_ArgumentNullException()
    {
        IEnumerable<int> source = null!;

        // No enumeration inside the lambda: Do must throw when it is called, not on the first MoveNext.
        var exception = Assert.Throws<ArgumentNullException>(() => source.Do(_ => { }));

        Assert.Equal("source", exception.ParamName);
    }



    [Fact]
    public void Do_when_action_is_null_throws_ArgumentNullException()
    {
        var source = new[] { 1, 2, 3 };

        // No enumeration inside the lambda: Do must throw when it is called, not on the first MoveNext.
        var exception = Assert.Throws<ArgumentNullException>(() => source.ToEnumerable().Do(null!));

        Assert.Equal("action", exception.ParamName);
    }



    [Fact]
    public void Do_when_source_has_items_executes_action_on_each()
    {
        var source = new[] { 1, 2, 3 };
        var observed = new List<int>();

        var result = source.ToEnumerable().Do(x => observed.Add(x)).ToList();

        Assert.Equal(new[] { 1, 2, 3 }, observed);
        Assert.Equal(new[] { 1, 2, 3 }, result);
    }



    [Fact]
    public void Do_when_source_is_empty_executes_no_actions()
    {
        var source = Array.Empty<int>();
        var observed = new List<int>();

        var result = source.ToEnumerable().Do(x => observed.Add(x)).ToList();

        Assert.Empty(observed);
        Assert.Empty(result);
    }



    [Fact]
    public void Do_when_source_has_items_yields_them_unchanged()
    {
        var source = new[] { 10, 20, 30 };

        var result = source.ToEnumerable().Do(_ => { }).ToList();

        Assert.Equal(new[] { 10, 20, 30 }, result);
    }



    [Fact]
    public void Do_when_source_is_ordered_preserves_the_order()
    {
        var source = new[] { 5, 3, 1, 4, 2 };
        var observed = new List<int>();

        var result = source.ToEnumerable().Do(x => observed.Add(x)).ToList();

        Assert.Equal(new[] { 5, 3, 1, 4, 2 }, observed);
        Assert.Equal(new[] { 5, 3, 1, 4, 2 }, result);
    }



    [Fact]
    public void Do_when_result_is_not_enumerated_does_not_enumerate_source()
    {
        var enumerated = false;
        var source = CreateTrackingEnumerable(() => enumerated = true, 1, 2, 3);

        var tapped = source.Do(_ => { });

        Assert.False(enumerated);

        _ = tapped.ToList();

        Assert.True(enumerated);
    }



    [Fact]
    public void Do_when_an_item_is_yielded_has_already_run_the_action_on_it()
    {
        var source = new[] { 1, 2, 3 };
        var log = new List<string>();

        foreach (var item in source.ToEnumerable().Do(x => log.Add($"action:{x}")))
        {
            log.Add($"yield:{item}");
        }

        Assert.Equal
        (
            new[] { "action:1", "yield:1", "action:2", "yield:2", "action:3", "yield:3" },
            log
        );
    }



    [Fact]
    public void Do_when_action_throws_propagates_exception()
    {
        var source = new[] { 1, 2, 3 };
        var calls = 0;

        Assert.Throws<InvalidOperationException>
        (
            () => source.ToEnumerable().Do(_ =>
            {
                if (++calls == 2)
                {
                    throw new InvalidOperationException("test");
                }
            }).ToList()
        );
    }



    private static IEnumerable<T> CreateTrackingEnumerable<T>(Action onEnumerate, params T[] values)
    {
        onEnumerate();
        foreach (var value in values)
        {
            yield return value;
        }
    }
}
