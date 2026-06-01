namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class ForEachTests
{

    [Fact]
    public void ForEach_when_passed_null_source_throws_ArgumentNullException()
    {
        IEnumerable<int> source = null!;
        var exception = Assert.Throws<ArgumentNullException>(() => source.ForEach(_ => { }));
        Assert.Equal("source", exception.ParamName);
    }

    

    [Fact]
    public void ForEach_when_passed_null_action_throws_ArgumentNullException()
    {
        var source = new[] { 1, 2, 3 };
        var exception = Assert.Throws<ArgumentNullException>(() => source.ToEnumerable().ForEach(null!));
        Assert.Equal("action", exception.ParamName);
    }



    [Fact]
    public void ForEach_executes_action_on_each_item_in_enumerable()
    {
        var source = new[] { 1, 2, 3, 4, 5 };
        var result = new List<int>();

        source.ToEnumerable().ForEach(i => result.Add(i * 2));
        var expected = new[] { 2, 4, 6, 8, 10 };
        Assert.Equal(expected, result);
    }



    [Fact]
    public void ForEach_with_empty_enumerable_does_not_execute_action()
    {
        var source = Array.Empty<int>();
        var result = new List<int>();
        source.ToEnumerable().ForEach(i => result.Add(i * 2));
        Assert.Empty(result);
    }



    [Fact]
    public void ForEach_when_called_on_a_concrete_List_invokes_the_instance_method_not_the_extension()
    {
        // Documents an intentional non-shadowing property: when `source` is statically
        // typed as `List<T>`, C# resolves `source.ForEach(...)` to `List<T>.ForEach`
        // (the BCL instance method) rather than to this library's extension. Our
        // extension only takes effect when the source is typed as `IEnumerable<T>` —
        // see the next test for that case.
        var source = new List<int> { 1, 2, 3, 4, 5 };
        var result = new List<int>();
        source.ForEach(i => result.Add(i * 2));
        var expected = new[] { 2, 4, 6, 8, 10 };
        Assert.Equal(expected, result);
    }



    [Fact]
    public void ForEach_when_source_is_List_cast_as_IEnumerable_uses_List_ForEach()
    {
        IEnumerable<int> source = new List<int> { 1, 2, 3, 4, 5 };
        var result = new List<int>();

        source.ForEach(i => result.Add(i * 2));

        var expected = new[] { 2, 4, 6, 8, 10 };
        Assert.Equal(expected, result);
    }

}
