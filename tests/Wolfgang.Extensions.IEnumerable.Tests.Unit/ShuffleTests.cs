namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class ShuffleTests
{


    [Fact]
    public void Shuffle_called_with_null_list_throws_ArgumentNullException()
    {
        List<int> source = null!;

        var exception = Assert.Throws<ArgumentNullException>(() => source.Shuffle());

        Assert.Equal("source", exception.ParamName);
    }



    [Fact]
    public void Shuffle_returns_a_permutation_of_the_input_with_the_same_multiset_of_elements()
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
    public void Shuffle_with_large_input_moves_at_least_one_element_from_its_original_index()
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
    public void Shuffle_does_not_mutate_the_input_list_in_place()
    {
        // Pass a real List<T> (not a wrapped iterator) so that an in-place
        // Fisher-Yates implementation that forgets to copy would be observable.
        var source = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        var expectedResult = new[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        source.Shuffle().ToArray();

        Assert.Equal(expectedResult, source);
    }



    [Fact]
    public void Shuffle_with_empty_source_returns_empty()
    {
        var source = Array.Empty<int>();

        var result = source.Shuffle();

        Assert.Empty(result);
    }



    [Fact]
    public void Shuffle_with_single_element_returns_same_element()
    {
        var source = new[] { 42 };

        var result = source.Shuffle().ToArray();

        Assert.Single(result);
        Assert.Equal(42, result[0]);
    }



    [Fact]
    public void Shuffle_result_is_not_assignable_to_List()
    {
        var source = new[] { 1, 2, 3, 4, 5 };

        var result = source.Shuffle();

        Assert.False(result is List<int>);
    }



    [Fact]
    public void Shuffle_result_is_not_assignable_to_ICollection()
    {
        var source = new[] { 1, 2, 3, 4, 5 };

        var result = source.Shuffle();

        Assert.False(result is ICollection<int>);
    }



    [Fact]
    public void Shuffle_result_is_not_assignable_to_array()
    {
        var source = new[] { 1, 2, 3, 4, 5 };

        var result = source.Shuffle();

        Assert.False(result is int[]);
    }



    [Fact]
    public void Shuffle_with_ICollection_source_exercises_collection_fast_path()
    {
        // Custom ICollection<T> that is NOT a List<T>, T[], or any LINQ-recognized
        // collection — forces the `source is ICollection<T>` branch in Shuffle.
        var source = new CountingCollection<int>(new[] { 1, 2, 3, 4, 5 });

        var result = source.Shuffle().ToArray();

        Assert.Equal(5, result.Length);
        Assert.Equal(source.OrderBy(x => x), result.OrderBy(x => x));
    }



    [Fact]
    public void Shuffle_with_pure_IEnumerable_source_exercises_ToArray_fallback()
    {
        // ToEnumerable wraps the source in a yield iterator that is NOT an
        // ICollection<T>, forcing the `source.ToArray()` fallback in Shuffle.
        var source = new[] { 1, 2, 3, 4, 5 }.ToEnumerable();

        var result = source.Shuffle().ToArray();

        Assert.Equal(5, result.Length);
    }



    private sealed class CountingCollection<T> : ICollection<T>
    {
        private readonly List<T> _inner;

        public CountingCollection(IEnumerable<T> items)
        {
            _inner = new List<T>(items);
        }

        public int Count => _inner.Count;

        public bool IsReadOnly => true;

        public void Add(T item) => throw new NotSupportedException();

        public void Clear() => throw new NotSupportedException();

        public bool Contains(T item) => _inner.Contains(item);

        public void CopyTo(T[] array, int arrayIndex) => _inner.CopyTo(array, arrayIndex);

        public IEnumerator<T> GetEnumerator() => _inner.GetEnumerator();

        public bool Remove(T item) => throw new NotSupportedException();

        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator() => _inner.GetEnumerator();
    }
}