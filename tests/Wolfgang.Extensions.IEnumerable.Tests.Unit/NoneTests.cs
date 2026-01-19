namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class NoneTests
{


    [Fact]
    public void None_with_source_when_passed_null_source_throws_ArgumentNullException()
    {
        List<int> source = null!;

        var exception = Assert.Throws<ArgumentNullException>(() => source.None());

        Assert.Equal("source", exception.ParamName);
    }



    [Fact]
    public void None_with_source_when_list_of_objects_contains_items_returns_false()
    {
        var source = new[]
        {
            new Balloon {Color = "Red"},
            new Balloon {Color = "Red"},
            new Balloon {Color = "Red"},
            new Balloon {Color = "Red"},
        };

        Assert.False(source.ToEnumerable().None());
    }



    [Fact]
    public void None_with_source_when_list_of_objects_is_empty_returns_true()
    {
        var source = new Balloon[]
        {
        };

        Assert.True(source.ToEnumerable().None());
    }



    [Fact]
    public void None_with_source_when_list_of_integers_contains_items_returns_false()
    {
        var source = new[] { 3, 6, 9, 12 };

        Assert.False(source.ToEnumerable().None());
    }

        

    [Fact]
    public void None_with_source_when_list_of_integers_contains_no_items_returns_true()
    {
        var source = new int[] {};

        Assert.True(source.ToEnumerable().None());
    }



    [Fact]
    public void None_with_source_and_predicate_when_passed_null_source_throws_ArgumentNullException()
    {
        List<int> source = null!;

        var exception = Assert.Throws<ArgumentNullException>(() => source.None(n => n % 3 == 0));

        Assert.Equal("source", exception.ParamName);
    }



    [Fact]
    public void None_with_source_and_predicate_when_passed_null_predicate_throws_ArgumentNullException()
    {
        var source = new[] { 3, 6, 9, 12 };

        var exception = Assert.Throws<ArgumentNullException>(() => source.ToEnumerable().None(null!));

        Assert.Equal("predicate", exception.ParamName);
    }



    [Fact]
    public void None_with_source_and_predicate_when_all_items_in_list_of_objects_match_returns_false()
    {
        var source = new[]
        {
            new Balloon {Color = "Red"},
            new Balloon {Color = "Red"},
            new Balloon {Color = "Red"},
            new Balloon {Color = "Red"},
        };

        Assert.False(source.ToEnumerable().None(b => b.Color == "Red"));
    }



    [Fact]
    public void None_with_source_and_predicate_when_some_items_in_list_of_objects_match_returns_false()
    {
        var source = new[]
        {
            new Balloon {Color = "Blue"},
            new Balloon {Color = "Blue"},
            new Balloon {Color = "Red"},
            new Balloon {Color = "Blue"},
        };

        Assert.False(source.ToEnumerable().None(b => b.Color == "Red"));
    }



    [Fact]
    public void None_with_source_and_predicate_when_no_items_in_list_of_objects_match_returns_true()
    {
        var source = new[]
        {
            new Balloon {Color = "Blue"},
            new Balloon {Color = "Blue"},
            new Balloon {Color = "Blue"},
            new Balloon {Color = "Blue"},
        };

        Assert.True(source.ToEnumerable().None(b => b.Color == "Red"));
    }



    [Fact]
    public void None_with_source_and_predicate_when_all_items_in_list_of_integers_match_returns_false()
    {
        var source = new[] { 3, 6, 9, 12 };

        Assert.False(source.ToEnumerable().None(n => n % 3 == 0));
    }



    [Fact]
    public void None_with_source_and_predicate_when_some_items_in_list_of_integers_match_returns_false()
    {
        var source = new[] { 1, 2, 3, 4 };

        Assert.False(source.ToEnumerable().None(n => n % 3 == 0));
    }



    [Fact]
    public void None_with_source_and_predicate_when_no_items_in_list_of_integers_match_returns_true()
    {
        var source = new[] { 1, 2, 4, 5 };

        Assert.True(source.ToEnumerable().None(n => n % 3 == 0));
    }




    private class Balloon
    {
        public string? Color { get; set; }
    }


}