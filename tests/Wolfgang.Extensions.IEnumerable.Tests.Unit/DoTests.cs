namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class DoTests
{

    [Fact]
    public void Do_when_source_is_null_throws_ArgumentNullException()
    {
        IEnumerable<int> source = null!;

        var exception = Assert.Throws<ArgumentNullException>(() => source.Do(_ => { }).ToList());

        Assert.Equal("source", exception.ParamName);
    }



    [Fact]
    public void Do_when_action_is_null_throws_ArgumentNullException()
    {
        var source = new[] { 1, 2, 3 };

        var exception = Assert.Throws<ArgumentNullException>(() => source.ToEnumerable().Do(null!).ToList());

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
    public void Do_yields_original_items_unchanged()
    {
        var source = new[] { 10, 20, 30 };

        var result = source.ToEnumerable().Do(_ => { }).ToList();

        Assert.Equal(new[] { 10, 20, 30 }, result);
    }



    [Fact]
    public void Do_preserves_ordering()
    {
        var source = new[] { 5, 3, 1, 4, 2 };
        var observed = new List<int>();

        var result = source.ToEnumerable().Do(x => observed.Add(x)).ToList();

        Assert.Equal(new[] { 5, 3, 1, 4, 2 }, observed);
        Assert.Equal(new[] { 5, 3, 1, 4, 2 }, result);
    }



    [Fact]
    public void Do_does_not_enumerate_source_until_consumed()
    {
        var enumerated = false;
        var source = CreateTrackingEnumerable(() => enumerated = true, 1, 2, 3);

        var tapped = source.Do(_ => { });

        Assert.False(enumerated);

        tapped.ToList();

        Assert.True(enumerated);
    }



    [Fact]
    public void Do_executes_action_before_yielding_item()
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

        Assert.Throws<InvalidOperationException>
        (
            () => source.ToEnumerable().Do(x =>
            {
                if (x == 2)
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
