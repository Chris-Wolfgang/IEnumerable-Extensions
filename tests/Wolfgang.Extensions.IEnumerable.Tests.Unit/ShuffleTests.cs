using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class ShuffleTests
{
    [Fact]
    public void Shuffle_when_source_is_null_throws_ArgumentNullException()
    {
        List<int> source = null!;

        var exception = Assert.Throws<ArgumentNullException>(() => source.Shuffle());

        Assert.Equal("source", exception.ParamName);
    }



    [Fact]
    public void Shuffle_when_source_has_items_returns_a_permutation_with_the_same_multiset_of_elements()
    {
        // Multiset equality — every input element appears exactly once in the output,
        // and the output has the same length. No order assertion (would be flaky:
        // 1/N! chance of returning the original order, non-zero on small N).
        var source = new[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        var actualResult = source.ToEnumerable().Shuffle().ToArray();

        Assert.Equal(source.Length, actualResult.Length);
        Assert.Equal(source.OrderBy(x => x), actualResult.OrderBy(x => x));
    }



    [Fact]
    public void Shuffle_when_source_is_large_moves_at_least_one_element_from_its_original_index()
    {
        // Statistical "did anything actually shuffle?" check on a 100-element input.
        // Probability all 100 elements stay in place = 1/100! ≈ 10^-158 — effectively
        // zero. False-negative rate is far below any CI flakiness budget.
        var source = Enumerable.Range(0, 100).ToArray();

        var actualResult = source.ToEnumerable().Shuffle().ToArray();

        var movedCount = source.Where((value, index) => actualResult[index] != value).Count();
        Assert.True(movedCount > 0, "Expected Shuffle to move at least one element from its original index.");
    }



    [Fact]
    public void Shuffle_when_source_is_a_List_does_not_mutate_it_in_place()
    {
        // Pass a real List<T> (not a wrapped iterator) so that an in-place
        // Fisher-Yates implementation that forgets to copy would be observable.
        var source = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        var expectedResult = new[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        _ = source.Shuffle().ToArray();

        Assert.Equal(expectedResult, source);
    }



    [Fact]
    public void Shuffle_when_source_is_empty_returns_empty()
    {
        var source = Array.Empty<int>();

        var result = source.Shuffle();

        Assert.Empty(result);
    }



    [Fact]
    public void Shuffle_when_source_has_one_element_returns_that_element()
    {
        var source = new[] { 42 };

        var result = source.Shuffle().ToArray();

        Assert.Single(result);
        Assert.Equal(42, result[0]);
    }



    [Fact]
    public void Shuffle_when_called_returns_a_result_not_assignable_to_List()
    {
        var source = new[] { 1, 2, 3, 4, 5 };

        var result = source.Shuffle();

        Assert.False(result is List<int>);
    }



    [Fact]
    public void Shuffle_when_called_returns_a_result_not_assignable_to_ICollection()
    {
        var source = new[] { 1, 2, 3, 4, 5 };

        var result = source.Shuffle();

        Assert.False(result is ICollection<int>);
    }



    [Fact]
    public void Shuffle_when_called_returns_a_result_not_assignable_to_an_array()
    {
        var source = new[] { 1, 2, 3, 4, 5 };

        var result = source.Shuffle();

        Assert.False(result is int[]);
    }



    [Fact]
    public void Shuffle_when_source_is_a_non_array_ICollection_returns_a_permutation_via_CopyTo()
    {
        // An ICollection<T> that is not a T[] — forces the `source is ICollection<T>`
        // branch in Shuffle (Count + CopyTo) rather than the array copy or ToArray fallback.
        var source = new LinkedList<int>(new[] { 1, 2, 3, 4, 5 });

        var result = source.Shuffle().ToArray();

        Assert.Equal(5, result.Length);
        Assert.Equal(source.OrderBy(x => x), result.OrderBy(x => x));
    }



    [Fact]
    public void Shuffle_when_source_is_a_lazy_sequence_returns_every_item_via_the_ToArray_fallback()
    {
        // ToEnumerable wraps the source in a yield iterator that is NOT an
        // ICollection<T>, forcing the `source.ToArray()` fallback in Shuffle.
        var source = new[] { 1, 2, 3, 4, 5 }.ToEnumerable();

        var result = source.Shuffle().ToArray();

        Assert.Equal(5, result.Length);
    }
}