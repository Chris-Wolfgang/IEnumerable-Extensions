using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace Wolfgang.Extensions.IEnumerable;

/// <summary>
/// A collection of extension methods for IEnumerable{T}
/// </summary>
// ReSharper disable once InconsistentNaming
public static class IEnumerableExtensions
{
    /// <summary>
    /// Executes the specified action on each item in the enumerable
    /// </summary>
    /// <typeparam name="T">The type of the elements of source.</typeparam>
    /// <param name="source">An IEnumerable{T} whose elements the action will be executed on.</param>
    /// <param name="action">The action to execute on each item in the enumerable</param>
    /// <exception cref="ArgumentNullException">source or action is null.</exception>
    /// <example>
    /// <code>
    /// var numbers = new[] { 1, 2, 3, 4, 5 };
    /// numbers.ForEach(n => Console.WriteLine(n));
    /// </code>
    /// </example>
    public static void ForEach<T>(this IEnumerable<T>? source, Action<T> action)
    {
        if (source == null)
        {
            throw new ArgumentNullException(nameof(source));
        }

        if (action == null)
        {
            throw new ArgumentNullException(nameof(action));
        }

        // This block should not be hit as the List<T>.ForEach should get selected by the compiler
        // but adding it for performance reasons in case it does not
        if (source is List<T> s)
        {
            s.ForEach(action);
            return;
        }

        foreach (var item in source)
        {
            action(item);
        }
    }



    /// <summary>
    /// Gets a value indicating whether a sequence contains no elements.
    /// </summary>
    /// <param name="source">The IEnumerable{T} to check.</param>
    /// <typeparam name="T">The type of the elements of source.</typeparam>
    /// <returns>
    /// true if the source sequence contains no elements; otherwise, false.
    /// </returns>
    /// <example>
    /// <code>
    /// var items = new List&lt;string&gt;();
    /// Console.WriteLine(items.IsEmpty()); // Prints true
    /// </code>
    /// </example>
    public static bool IsEmpty<T>(this IEnumerable<T>? source)
    {
        if (source == null)
        {
            throw new ArgumentNullException(nameof(source));
        }

        if (source is ICollection<T> s)
        {
            return s.Count == 0;
        }

        return !source.Any();
    }



    /// <summary>
    /// Gets a value indicating whether a sequence is null or contains no elements.
    /// </summary>
    /// <param name="source">The IEnumerable{T} to check.</param>
    /// <typeparam name="T">The type of the elements of source.</typeparam>
    /// <returns>
    /// true if the source sequence is null or contains no elements; otherwise, false.
    /// </returns>
    /// <example>
    /// <code>
    /// IEnumerable&lt;string&gt;? data = null;
    /// Console.WriteLine(data.IsNullOrEmpty()); // Prints true
    /// </code>
    /// </example>
    public static bool IsNullOrEmpty<T>(this IEnumerable<T>? source)
    {
        if (source == null)
        {
            return true;
        }

        if (source is ICollection<T> collection)
        {
            return collection.Count == 0;
        }

        return !source.Any();
    }



    /// <summary>
    /// Determines whether a sequence contains no elements.
    /// </summary>
    /// <typeparam name="T">The type of the elements of source.</typeparam>
    /// <param name="source">The IEnumerable{T} to check.</param>
    /// <returns>false if the source sequence contains any elements; otherwise, true.</returns>
    /// <exception cref="ArgumentNullException">source is null.</exception>
    /// <example>
    /// <code>
    /// var numbers = new[] { 1, 2, 3, 4 };
    /// Console.WriteLine(numbers.None()); // Prints false
    ///
    /// numbers = new int[] {};
    /// Console.WriteLine(numbers.None()); // Prints true
    /// </code>
    /// </example>
    public static bool None<T>(this IEnumerable<T>? source)
    {
        if (source == null)
        {
            throw new ArgumentNullException(nameof(source));
        }

        if (source is ICollection<T> s)
        {
            return s.Count == 0;
        }

        return !source.Any();
    }


    /// <summary>
    /// Determines whether no element of a sequence satisfies a condition.
    /// </summary>
    /// <typeparam name="T">The type of the elements of source.</typeparam>
    /// <param name="source">An IEnumerable{T} whose elements to apply the predicate to.</param>
    /// <param name="predicate">A function to test each element for a condition.</param>
    /// <returns>true if no elements in the source sequence pass the test in the specified predicate; otherwise, false.</returns>
    /// <exception cref="ArgumentNullException">source or predicate is null.</exception>
    /// <example>
    /// <code>
    /// var numbers = new[] { 1, 2, 3, 4 };
    /// Console.WriteLine(numbers.None(n => n % 3 == 0)); // Prints false
    /// Console.WriteLine(numbers.None(n => n % 5 == 0)); // Prints true
    /// </code>
    /// </example>
    public static bool None<T>(this IEnumerable<T>? source, Func<T, bool> predicate)
    {
        if (source == null)
        {
            throw new ArgumentNullException(nameof(source));
        }

        if (predicate == null)
        {
            throw new ArgumentNullException(nameof(predicate));
        }

        return !source.Any(predicate);
    }


    /// <summary>
    /// Executes a side-effect action on each element of an IEnumerable{T}
    /// without transforming the elements. The original items are yielded unchanged.
    /// </summary>
    /// <typeparam name="T">The type of the elements of source.</typeparam>
    /// <param name="source">An IEnumerable{T} whose elements the action will be executed on.</param>
    /// <param name="action">The action to execute on each element.</param>
    /// <returns>An IEnumerable{T} that yields the original elements after executing the action.</returns>
    /// <exception cref="ArgumentNullException">source or action is null.</exception>
    /// <example>
    /// <code>
    /// foreach (var item in source.Do(x => Console.WriteLine($"Processing: {x}")))
    /// {
    ///     // item is unchanged
    /// }
    /// </code>
    /// </example>
    public static IEnumerable<T> Do<T>(this IEnumerable<T>? source, Action<T> action)
    {
        if (source == null)
        {
            throw new ArgumentNullException(nameof(source));
        }

        if (action == null)
        {
            throw new ArgumentNullException(nameof(action));
        }

        return DoIterator(source, action);
    }



    private static IEnumerable<T> DoIterator<T>(IEnumerable<T> source, Action<T> action)
    {
        foreach (var item in source)
        {
            action(item);
            yield return item;
        }
    }



    /// <summary>
    /// Creates a new IEnumerable{T} containing the elements from source in a random order
    /// </summary>
    /// <typeparam name="T">The type of the elements of source.</typeparam>
    /// <param name="source">An IEnumerable{T} whose elements will be randomly ordered.</param>
    /// <returns>A new IEnumerable{T} containing the elements from source in a random order.</returns>
    /// <exception cref="ArgumentNullException">source is null.</exception>
    /// <example>
    /// <code>
    /// var deck = new[] { "Ace", "King", "Queen", "Jack" };
    /// var shuffled = deck.Shuffle();
    /// </code>
    /// </example>
    public static IEnumerable<T> Shuffle<T>(this IEnumerable<T> source)
    {
        if (source == null)
        {
            throw new ArgumentNullException(nameof(source));
        }

        // Fisher-Yates shuffle implementation as suggested in the PR review
        var list = source.ToList();
        var rng = RandomSource;

        for (var i = list.Count - 1; i > 0; i--)
        {
            var j = rng.Next(i + 1);
            var temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }

        return list;
    }

#if NET6_0_OR_GREATER
    private static Random RandomSource => Random.Shared;
#else
    private static readonly ThreadLocal<Random> SThreadLocalRandom = new(CreateRandom);
    private static Random RandomSource => SThreadLocalRandom.Value!;

    private static Random CreateRandom()
        => new(unchecked((Environment.TickCount * 31) + Thread.CurrentThread.ManagedThreadId));
#endif
}