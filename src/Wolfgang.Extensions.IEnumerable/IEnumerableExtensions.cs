using System;
using System.Collections.Generic;
using System.Linq;

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
    /// <param name="source">An IEnumerable{T} whose will be randomly ordered.</param>
    /// <param name="action">The action to execute on each item in the enumerable</param>
    /// <exception cref="ArgumentNullException">source is null.</exception>
    public static void ForEach<T>(this IEnumerable<T> source, Action<T> action)
    {
        if (source == null)
        {
            throw new ArgumentNullException(nameof(source));
        }

        if (action == null)
        {
            throw new ArgumentNullException(nameof(action));
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
    /// <typeparam name="T"></typeparam>
    /// <returns>
    /// true if the source sequence contains no elements; otherwise, false.
    /// </returns>
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
    /// <typeparam name="T"></typeparam>
    /// <returns>
    /// true if the source sequence is null or contains no elements; otherwise, false.
    /// </returns>
    public static bool IsNullOrEmpty<T>(this IEnumerable<T>? source)
    {
        return source == null || !source.Any();
    }



    /// <summary>
    /// Determines whether a sequence contains no elements.
    /// </summary>
    /// <typeparam name="T">The type of the elements of source.</typeparam>
    /// <param name="source">The IEnumerable{T} to check.</param>
    /// <returns>false if the source sequence contains any elements; otherwise, true.</returns>
    /// <exception cref="ArgumentNullException">source is null.</exception>
    /// <example>
    ///
    ///     public void AnyExample()
    ///     {
    ///         var numbers = new[] { 1, 2, 3, 4 };
    ///
    ///         Console.WriteLine (number.None()); // Prints false
    ///
    ///         numbers = new [] {};
    ///         Console.WriteLine (number.None()); // Prints true
    ///     }
    /// 
    /// </example>
    public static bool None<T>(this IEnumerable<T> source)
        => !source.Any();



    /// <summary>
    /// Determines whether no element of a sequence satisfies a condition.
    /// </summary>
    /// <typeparam name="T">The type of the elements of source.</typeparam>
    /// <param name="source">An IEnumerable{T} whose elements to apply the predicate to.</param>
    /// <param name="predicate">A function to test each element for a condition.</param>
    /// <returns>true if no elements in the source sequence pass the test in the specified predicate; otherwise, false.</returns>
    /// <exception cref="ArgumentNullException">source or predicate is null.</exception>
    /// <example>
    ///
    ///     public void AnyExample()
    ///     {
    ///         var numbers = new[] { 1, 2, 3, 4 };
    ///
    ///         Console.WriteLine (number.None(n => n % 3)); // Prints false
    ///         Console.WriteLine (number.None(n => n % 5)); // Prints true
    ///     }
    /// 
    /// </example>
    public static bool None<T>(this IEnumerable<T> source, Func<T, bool> predicate)
        => !source.Any(predicate);



    /// <summary>
    /// Creates a new IEnumerable{T} containing the elements from source in a random order
    /// </summary>
    /// <typeparam name="T">The type of the elements of source.</typeparam>
    /// <param name="source">An IEnumerable{T} whose will be randomly ordered.</param>
    /// <returns>A new IEnumerable{T} containing the elements from source in a random order.</returns>
    /// <exception cref="ArgumentNullException">source is null.</exception>
    public static IEnumerable<T> Shuffle<T>(this IEnumerable<T> source)
        => source
            .OrderBy(_ => Guid.NewGuid())
            .ToList();
}