using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

/// <summary>
/// The library is a set of synchronous extension methods with exactly one piece of shared state:
/// the thread-local <see cref="Random"/> behind <c>Shuffle</c>. These tests exercise that state, and
/// concurrent reads of one shared source, from several dedicated threads at once. Assertions are
/// structural (every result is a valid permutation, the source is untouched, nothing throws) so they
/// do not depend on timing.
/// </summary>
public class ConcurrencyTests
{
    private const int Threads = 8;
    private const int IterationsPerThread = 500;
    private const int ItemCount = 64;



    [Fact]
    public async Task Shuffle_when_called_concurrently_on_a_shared_array_returns_valid_permutations()
    {
        var source = Enumerable.Range(0, ItemCount).ToArray();

        var invalidResults = 0;
        await RunOnDedicatedThreadsAsync
        (
            () =>
            {
                for (var i = 0; i < IterationsPerThread; i++)
                {
                    // Adds 0 for a valid permutation. One executed statement, rather than a branch that
                    // only runs when the test is failing.
                    Interlocked.Add(ref invalidResults, IsPermutationOfRange(source.Shuffle().ToArray(), ItemCount) ? 0 : 1);
                }
            }
        );

        Assert.Equal(0, invalidResults);
    }



    [Fact]
    public async Task Shuffle_when_called_concurrently_on_a_shared_source_does_not_modify_the_source()
    {
        var source = Enumerable.Range(0, ItemCount).ToArray();
        var list = new List<int>(source);

        await RunOnDedicatedThreadsAsync
        (
            () =>
            {
                for (var i = 0; i < IterationsPerThread; i++)
                {
                    _ = source.Shuffle().ToArray();
                    _ = list.Shuffle().ToArray();
                }
            }
        );

        Assert.Equal(Enumerable.Range(0, ItemCount), source);
        Assert.Equal(Enumerable.Range(0, ItemCount), list);
    }



    [Fact]
    public async Task Shuffle_when_called_at_the_same_moment_on_many_threads_gives_each_thread_its_own_sequence()
    {
        // Every thread shuffles 52 items once, released together. Two threads sharing one random
        // sequence would return the same order; the chance of two independent shuffles matching is
        // 1 / 52!, so a collision means the per-thread generators are not independent.
        var source = Enumerable.Range(0, 52).ToArray();
        var orders = new string[Threads];
        var next = -1;

        await RunOnDedicatedThreadsAsync
        (
            () =>
            {
                var slot = Interlocked.Increment(ref next);
                orders[slot] = string.Join(",", source.Shuffle());
            }
        );

        Assert.Equal(Threads, orders.Distinct().Count());
    }



    [Fact]
    public async Task Enumerating_one_shared_ToEnumerable_result_from_many_threads_yields_the_full_sequence_each_time()
    {
        var shared = Enumerable.Range(0, ItemCount).ToArray().ToEnumerable();

        var wrongLengths = 0;
        await RunOnDedicatedThreadsAsync
        (
            () =>
            {
                for (var i = 0; i < IterationsPerThread; i++)
                {
                    Interlocked.Add(ref wrongLengths, shared.Count() == ItemCount ? 0 : 1);
                }
            }
        );

        Assert.Equal(0, wrongLengths);
    }



    [Fact]
    public async Task Do_when_one_shared_result_is_enumerated_from_many_threads_runs_the_action_once_per_item_per_enumeration()
    {
        var calls = 0;
        var shared = Enumerable.Range(0, ItemCount).ToArray().Do(_ => Interlocked.Increment(ref calls));

        await RunOnDedicatedThreadsAsync
        (
            () =>
            {
                for (var i = 0; i < IterationsPerThread; i++)
                {
                    _ = shared.ToArray();
                }
            }
        );

        Assert.Equal(Threads * IterationsPerThread * ItemCount, calls);
    }



    [Fact]
    public void IsPermutationOfRange_when_an_item_is_duplicated_or_missing_returns_false()
    {
        Assert.True(IsPermutationOfRange(new[] { 2, 0, 1 }, 3));
        Assert.False(IsPermutationOfRange(new[] { 0, 0, 1 }, 3));
        Assert.False(IsPermutationOfRange(new[] { 0, 1 }, 3));
    }



    private static bool IsPermutationOfRange(int[] values, int count)
    {
        if (values.Length != count)
        {
            return false;
        }

        var seen = new bool[count];
        foreach (var value in values)
        {
            if (value < 0 || value >= count || seen[value])
            {
                return false;
            }

            seen[value] = true;
        }

        return true;
    }



    /// <summary>
    /// Runs <paramref name="body"/> on <see cref="Threads"/> dedicated threads that all start together
    /// (a pool thread could run the bodies one after another and hide an overlap).
    /// </summary>
    private static async Task RunOnDedicatedThreadsAsync(Action body)
    {
        using var barrier = new Barrier(Threads);

        var tasks = Enumerable
            .Range(0, Threads)
            .Select
            (
                _ => Task.Factory.StartNew
                (
                    () =>
                    {
                        barrier.SignalAndWait();
                        body();
                    },
                    CancellationToken.None,
                    TaskCreationOptions.LongRunning,
                    TaskScheduler.Default
                )
            )
            .ToArray();

        await Task.WhenAll(tasks);
    }
}
