#if NET8_0_OR_GREATER
using System;
using System.Collections.Generic;
using System.Linq;
using CsCheck;
using Xunit;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

/// <summary>
/// Property-based tests: for generated inputs, each extension method must agree with the equivalent
/// LINQ expression. Every input is presented in three runtime shapes (array, <see cref="List{T}"/>,
/// and a lazy sequence that is not an <see cref="ICollection{T}"/>) because several methods take a
/// different path for each.
/// </summary>
/// <remarks>
/// A run is 100 cases by default and is reproducible: a failure prints the CsCheck seed, which can be
/// replayed with the <c>CsCheck_Seed</c> environment variable. The same tests can be run as a long
/// fuzz session by setting <c>CsCheck_Iter</c> (a case count) or <c>CsCheck_Time</c> (seconds) in the
/// environment, with no code change.
/// </remarks>
public class PropertyTests
{
    private static readonly Gen<List<int>> _items = Gen.Int[-50, 50].List[0, 40];



    [Fact]
    public void IsEmpty_agrees_with_Any_for_every_runtime_shape()
    {
        _items.Sample
        (
            items =>
            {
                foreach (var shape in Shapes(items))
                {
                    Assert.Equal(!shape.Any(), shape.IsEmpty());
                }
            }
        );
    }



    [Fact]
    public void IsNullOrEmpty_agrees_with_Any_for_every_runtime_shape_and_is_true_for_null()
    {
        _items.Sample
        (
            items =>
            {
                foreach (var shape in Shapes(items))
                {
                    Assert.Equal(!shape.Any(), shape.IsNullOrEmpty());
                }
            }
        );

        Assert.True(((IEnumerable<int>?)null).IsNullOrEmpty());
    }



    [Fact]
    public void None_agrees_with_Any_for_every_runtime_shape()
    {
        _items.Sample
        (
            items =>
            {
                foreach (var shape in Shapes(items))
                {
                    Assert.Equal(!shape.Any(), shape.None());
                }
            }
        );
    }



    [Fact]
    public void None_with_predicate_agrees_with_not_Any_with_predicate_for_every_runtime_shape()
    {
        _items.Sample
        (
            items =>
            {
                foreach (var shape in Shapes(items))
                {
                    Assert.Equal(!shape.Any(IsMultipleOfThree), shape.None(IsMultipleOfThree));
                    Assert.Equal(!shape.Any(IsAboveTen), shape.None(IsAboveTen));
                }
            }
        );
    }



    [Fact]
    public void ForEach_visits_every_item_once_in_order_for_every_runtime_shape()
    {
        _items.Sample
        (
            items =>
            {
                foreach (var shape in Shapes(items))
                {
                    var visited = new List<int>();

                    shape.ForEach(visited.Add);

                    Assert.Equal(items, visited);
                }
            }
        );
    }



    [Fact]
    public void Do_yields_the_source_unchanged_and_runs_the_action_once_per_item_in_order()
    {
        _items.Sample
        (
            items =>
            {
                foreach (var shape in Shapes(items))
                {
                    var observed = new List<int>();

                    var result = shape.Do(observed.Add).ToList();

                    Assert.Equal(items, result);
                    Assert.Equal(items, observed);
                }
            }
        );
    }



    [Fact]
    public void Shuffle_returns_a_permutation_of_the_source_and_does_not_modify_it()
    {
        _items.Sample
        (
            items =>
            {
                foreach (var shape in Shapes(items))
                {
                    var shuffled = shape.Shuffle().ToList();

                    Assert.Equal(items.Count, shuffled.Count);
                    Assert.Equal(items.OrderBy(static x => x), shuffled.OrderBy(static x => x));
                    Assert.Equal(items, shape.ToList());
                }
            }
        );
    }



    [Fact]
    public void ToEnumerable_yields_the_same_sequence_and_is_never_a_more_concrete_collection()
    {
        _items.Sample
        (
            items =>
            {
                var wrapped = items.ToEnumerable();

                Assert.Equal(items, wrapped.ToList());
                Assert.IsNotType<List<int>>(wrapped);
                Assert.False(wrapped is ICollection<int>);
            }
        );
    }



    private static bool IsMultipleOfThree(int value) => value % 3 == 0;



    private static bool IsAboveTen(int value) => value > 10;



    private static IEnumerable<IEnumerable<int>> Shapes(List<int> items)
    {
        yield return items.ToArray();
        yield return new List<int>(items);
        yield return items.ToEnumerable();
    }
}
#endif
