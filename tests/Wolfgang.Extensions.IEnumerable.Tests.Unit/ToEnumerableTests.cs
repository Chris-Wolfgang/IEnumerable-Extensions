namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

public class ToEnumerableTests
{


	[Fact]
	public void ToEnumerable_when_source_is_null_throws_ArgumentNullException()
	{
		IEnumerable<int> source = null!;

		var exception = Assert.Throws<ArgumentNullException>(() => _ = IEnumerableExtensions.ToEnumerable(source));

		Assert.Equal("source", exception.ParamName);
	}



	[Fact]
	public void ToEnumerable_when_source_is_array_returns_equivalent_sequence()
	{
		var source = new[] { 1, 2, 3 };

		var result = IEnumerableExtensions
            .ToEnumerable(source)
            .ToArray();

		Assert.Equal(source, result);
	}



	[Fact]
	public void ToEnumerable_when_source_is_array_result_cannot_be_cast_back_to_array()
	{
		var source = new[] { 1, 2, 3 };

		var result = IEnumerableExtensions.ToEnumerable(source);

		Assert.False(result is int[]);
		Assert.False(ReferenceEquals(source, result));
	}



	[Fact]
	public void ToEnumerable_when_source_is_list_returns_equivalent_sequence()
	{
		var source = new List<string> { "alpha", "beta", "gamma" };

		var result = IEnumerableExtensions.ToEnumerable(source).ToArray();

		Assert.Equal(source, result);
	}



	[Fact]
	public void ToEnumerable_when_source_is_list_result_cannot_be_cast_back_to_list()
	{
		var source = new List<string> { "alpha", "beta" };

		var result = IEnumerableExtensions.ToEnumerable(source);

		Assert.False(result is List<string>);
	}



	[Fact]
	public void ToEnumerable_when_source_is_queue_preserves_fifo_order()
	{
		var source = new Queue<char>(['a', 'b', 'c']);

		var result = IEnumerableExtensions.ToEnumerable(source).ToArray();

		Assert.Equal(source.ToArray(), result);
	}



	[Fact]
	public void ToEnumerable_can_be_enumerated_multiple_times()
	{
		var source = Enumerable.Range(0, 3);

		var enumerable = IEnumerableExtensions.ToEnumerable(source);

        // ReSharper disable PossibleMultipleEnumeration
        var firstPass = enumerable.ToArray();
        var secondPass = enumerable.ToArray();
        // ReSharper restore PossibleMultipleEnumeration

        Assert.Equal(firstPass, secondPass);
	}



	[Fact]
	public void ToEnumerable_uses_deferred_execution()
	{
		var yieldCount = 0;
		var source = CreateTrackingSequence(() => yieldCount++);

		var enumerable = IEnumerableExtensions.ToEnumerable(source);

		Assert.Equal(0, yieldCount);

		var materialized = enumerable.ToArray();

		Assert.Equal(3, yieldCount);
		Assert.Equal([1, 2, 3], materialized);
	}



	private static IEnumerable<int> CreateTrackingSequence(Action onYield)
	{
		foreach (var value in new[] { 1, 2, 3 })
		{
			onYield();
			yield return value;
		}
	}
}
