#if NET8_0_OR_GREATER
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
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
/// <para>
/// Before its random cases, every property replays the seeds listed for it in
/// <c>fuzz-replay/seeds.txt</c> (one <c>&lt;property method name&gt; &lt;CsCheck seed&gt;</c> per line), one
/// deterministic case each. A failing input found by a fuzz run (<c>fuzz.yaml</c>) is added there, so
/// every later short run checks it as a regression.
/// </para>
/// </remarks>
public class PropertyTests
{
    private const string ReplayFileName = "seeds.txt";

    private static readonly Gen<List<int>> _items = Gen.Int[-50, 50].List[0, 40];

    private static readonly Gen<(List<int> Items, int PartitionCount)> _itemsAndPartitionCount =
        Gen.Select(_items, Gen.Int[1, 8]);



    [Fact]
    public async Task IsEmpty_when_given_any_runtime_shape_agrees_with_Any()
    {
        await SampleAsync
        (
            nameof(IsEmpty_when_given_any_runtime_shape_agrees_with_Any),
            _items,
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
    public async Task IsNullOrEmpty_when_given_any_runtime_shape_agrees_with_Any_and_is_true_for_null()
    {
        await SampleAsync
        (
            nameof(IsNullOrEmpty_when_given_any_runtime_shape_agrees_with_Any_and_is_true_for_null),
            _items,
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
    public async Task None_when_given_any_runtime_shape_agrees_with_not_Any()
    {
        await SampleAsync
        (
            nameof(None_when_given_any_runtime_shape_agrees_with_not_Any),
            _items,
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
    public async Task None_when_given_a_predicate_and_any_runtime_shape_agrees_with_not_Any_with_that_predicate()
    {
        await SampleAsync
        (
            nameof(None_when_given_a_predicate_and_any_runtime_shape_agrees_with_not_Any_with_that_predicate),
            _items,
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
    public async Task ForEach_when_given_any_runtime_shape_visits_every_item_once_in_order()
    {
        await SampleAsync
        (
            nameof(ForEach_when_given_any_runtime_shape_visits_every_item_once_in_order),
            _items,
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
    public async Task Do_when_enumerated_yields_the_source_unchanged_and_runs_the_action_once_per_item_in_order()
    {
        await SampleAsync
        (
            nameof(Do_when_enumerated_yields_the_source_unchanged_and_runs_the_action_once_per_item_in_order),
            _items,
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
    public async Task Shuffle_when_given_any_source_returns_a_permutation_and_does_not_modify_the_source()
    {
        await SampleAsync
        (
            nameof(Shuffle_when_given_any_source_returns_a_permutation_and_does_not_modify_the_source),
            _items,
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
    public async Task ToEnumerable_when_given_any_source_yields_the_same_sequence_and_is_never_a_more_concrete_collection()
    {
        await SampleAsync
        (
            nameof(ToEnumerable_when_given_any_source_yields_the_same_sequence_and_is_never_a_more_concrete_collection),
            _items,
            items =>
            {
                var wrapped = items.ToEnumerable();

                Assert.Equal(items, wrapped.ToList());
                Assert.IsNotType<List<int>>(wrapped);
                Assert.False(wrapped is ICollection<int>);
            }
        );
    }



    [Fact]
    public async Task Partition_when_given_any_runtime_shape_deals_items_round_robin_into_exactly_partitionCount_groups()
    {
        await SampleAsync
        (
            nameof(Partition_when_given_any_runtime_shape_deals_items_round_robin_into_exactly_partitionCount_groups),
            _itemsAndPartitionCount,
            input =>
            {
                var (items, partitionCount) = input;
                foreach (var shape in Shapes(items))
                {
                    var groups = shape.Partition(partitionCount);

                    Assert.Equal(partitionCount, groups.Count);
                    for (var group = 0; group < partitionCount; group++)
                    {
                        var expected = items.Where((_, index) => index % partitionCount == group);
                        Assert.Equal(expected, groups[group]);
                    }
                }
            }
        );
    }



    [Fact]
    public async Task ReplaySeeds_when_loaded_name_only_existing_properties_and_cover_every_property()
    {
        var seeds = await LoadReplaySeedsAsync();
        var properties = typeof(PropertyTests)
            .GetMethods(BindingFlags.Public | BindingFlags.Instance)
            .Where(static method => method.GetCustomAttribute<FactAttribute>() != null)
            .Select(static method => method.Name)
            .Where(static name => !name.StartsWith("ReplaySeeds_", StringComparison.Ordinal))
            .ToList();

        Assert.Empty(seeds.Keys.Except(properties, StringComparer.Ordinal));
        Assert.Empty(properties.Except(seeds.Keys, StringComparer.Ordinal));
    }



    [Fact]
    public void ReplaySeeds_when_parsed_skip_blank_and_comment_lines_and_group_seeds_by_property()
    {
        var seeds = ParseReplaySeeds
        (
            new[]
            {
                "# comment",
                "",
                "   ",
                "First seedA",
                "  Second   seedB  ",
                "First seedC",
            }
        );

        Assert.Equal(new[] { "seedA", "seedC" }, seeds["First"]);
        Assert.Equal(new[] { "seedB" }, seeds["Second"]);
        Assert.Equal(2, seeds.Count);
    }



    [Theory]
    [InlineData("OnlyAProperty")]
    [InlineData("Property seed extra")]
    public void ReplaySeeds_when_a_line_is_not_a_property_and_a_seed_throws_FormatException(string line)
    {
        var exception = Assert.Throws<FormatException>(() => ParseReplaySeeds(new[] { line }));

        Assert.Contains(line, exception.Message, StringComparison.Ordinal);
    }



    private static bool IsMultipleOfThree(int value) => value % 3 == 0;



    private static bool IsAboveTen(int value) => value > 10;



    private static async Task SampleAsync<T>(string property, Gen<T> gen, Action<T> assert)
    {
        var seeds = await LoadReplaySeedsAsync();
        if (seeds.TryGetValue(property, out var replay))
        {
            foreach (var seed in replay)
            {
                gen.Sample(assert, seed: seed, iter: 1, time: 0, threads: 1);
            }
        }

        gen.Sample(assert);
    }



    private static async Task<Dictionary<string, List<string>>> LoadReplaySeedsAsync()
    {
        var path = Path.Combine(AppContext.BaseDirectory, "fuzz-replay", ReplayFileName);
        var lines = await File.ReadAllLinesAsync(path);

        return ParseReplaySeeds(lines);
    }



    private static Dictionary<string, List<string>> ParseReplaySeeds(IEnumerable<string> lines)
    {
        var seeds = new Dictionary<string, List<string>>(StringComparer.Ordinal);
        foreach (var raw in lines)
        {
            var line = raw.Trim();
            if (line.Length == 0 || line.StartsWith('#'))
            {
                continue;
            }

            var parts = line.Split((char[]?)null, StringSplitOptions.RemoveEmptyEntries);
            if (parts.Length != 2)
            {
                throw new FormatException($"Replay line is not '<property> <seed>': '{line}'");
            }

            if (!seeds.TryGetValue(parts[0], out var forProperty))
            {
                forProperty = new List<string>();
                seeds.Add(parts[0], forProperty);
            }

            forProperty.Add(parts[1]);
        }

        return seeds;
    }



    private static IEnumerable<IEnumerable<int>> Shapes(List<int> items)
    {
        yield return items.ToArray();
        yield return new List<int>(items);
        yield return items.ToEnumerable();
    }
}
#endif
