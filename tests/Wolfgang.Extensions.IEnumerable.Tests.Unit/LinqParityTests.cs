using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using NonGenericEnumerable = System.Collections.IEnumerable;
using NonGenericEnumerator = System.Collections.IEnumerator;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

/// <summary>
/// <c>None</c>, <c>IsEmpty</c> and the non-null branch of <c>IsNullOrEmpty</c> are logically
/// <c>!Enumerable.Any(...)</c>, so for the same input they must produce the same result and the same
/// errors: the same exception type and <c>ParamName</c>, the same exception instance when the source
/// or predicate throws, the same number of elements pulled, and the same disposal. Every case runs
/// LINQ and the library over two identical, independent sources and compares everything observable.
/// </summary>
/// <remarks>
/// The sources are deliberately not <see cref="ICollection{T}"/>: <c>IsEmpty</c> and
/// <c>IsNullOrEmpty</c> read <c>Count</c> on collections instead of enumerating them, which is an
/// intentional difference covered by its own tests below.
/// </remarks>
public class LinqParityTests
{
    private static readonly Exception _predicateFailure = new InvalidOperationException("predicate failed");
    private static readonly IEnumerable<int> _nullSource = null!;
    private static readonly Func<int, bool> _nullPredicate = null!;



    // ------------------------------------------------------------------ None()

    [Theory]
    [InlineData(Empty)]
    [InlineData(Single)]
    [InlineData(Many)]
    [InlineData(ThrowsOnFirstMoveNext)]
    [InlineData(ThrowsMidway)]
    [InlineData(DisposeThrows)]
    public void None_matches_not_Any(string scenario)
    {
        AssertParity(scenario, source => !source.Any(), source => source.None());
    }



    [Theory]
    [InlineData(Empty)]
    [InlineData(Single)]
    [InlineData(Many)]
    [InlineData(ThrowsOnFirstMoveNext)]
    [InlineData(ThrowsMidway)]
    [InlineData(DisposeThrows)]
    public void IsEmpty_matches_not_Any(string scenario)
    {
        AssertParity(scenario, source => !source.Any(), source => source.IsEmpty());
    }



    [Theory]
    [InlineData(Empty)]
    [InlineData(Single)]
    [InlineData(Many)]
    [InlineData(ThrowsOnFirstMoveNext)]
    [InlineData(ThrowsMidway)]
    [InlineData(DisposeThrows)]
    public void IsNullOrEmpty_when_source_is_not_null_matches_not_Any(string scenario)
    {
        AssertParity(scenario, source => !source.Any(), source => source.IsNullOrEmpty());
    }



    // ------------------------------------------------------------------ None(predicate)

    [Theory]
    [InlineData(Empty)]
    [InlineData(Single)]
    [InlineData(Many)]
    [InlineData(ThrowsOnFirstMoveNext)]
    [InlineData(ThrowsMidway)]
    [InlineData(DisposeThrows)]
    public void None_with_predicate_that_matches_the_first_item_matches_not_Any(string scenario)
    {
        AssertParity(scenario, source => !source.Any(static x => x == 1), source => source.None(static x => x == 1));
    }



    [Theory]
    [InlineData(Empty)]
    [InlineData(Single)]
    [InlineData(Many)]
    [InlineData(ThrowsMidway)]
    [InlineData(DisposeThrows)]
    public void None_with_predicate_that_matches_the_last_item_matches_not_Any(string scenario)
    {
        AssertParity(scenario, source => !source.Any(static x => x == 5), source => source.None(static x => x == 5));
    }



    [Theory]
    [InlineData(Empty)]
    [InlineData(Single)]
    [InlineData(Many)]
    [InlineData(ThrowsMidway)]
    [InlineData(DisposeThrows)]
    public void None_with_predicate_that_never_matches_matches_not_Any(string scenario)
    {
        AssertParity(scenario, source => !source.Any(static x => x == 99), source => source.None(static x => x == 99));
    }



    [Theory]
    [InlineData(Single)]
    [InlineData(Many)]
    [InlineData(DisposeThrows)]
    public void None_with_predicate_that_throws_matches_not_Any(string scenario)
    {
        AssertParity(scenario, source => !source.Any(ThrowingPredicate), source => source.None(ThrowingPredicate));
    }



    // ------------------------------------------------------------------ null arguments

    [Fact]
    public void None_when_source_is_null_throws_the_same_exception_as_Any()
    {
        AssertSameError(() => _nullSource.Any(), () => _nullSource.None());
    }



    [Fact]
    public void IsEmpty_when_source_is_null_throws_the_same_exception_as_Any()
    {
        AssertSameError(() => _nullSource.Any(), () => _nullSource.IsEmpty());
    }



    [Fact]
    public void None_with_predicate_when_source_is_null_throws_the_same_exception_as_Any()
    {
        AssertSameError(() => _nullSource.Any(static x => x > 0), () => _nullSource.None(static x => x > 0));
    }



    [Fact]
    public void None_with_predicate_when_predicate_is_null_throws_the_same_exception_as_Any()
    {
        AssertSameError(() => new[] { 1 }.Any(_nullPredicate), () => new[] { 1 }.None(_nullPredicate));
    }



    [Fact]
    public void None_with_predicate_when_source_and_predicate_are_null_reports_the_source_first_like_Any()
    {
        AssertSameError
        (
            () => _nullSource.Any(_nullPredicate),
            () => _nullSource.None(_nullPredicate)
        );
    }



    // ------------------------------------------------------------------ collections (intentional difference)

    [Fact]
    public void IsEmpty_when_source_is_a_collection_reads_Count_without_enumerating()
    {
        Assert.False(new CountOnlyCollection(count: 3).IsEmpty());
        Assert.False(new CountOnlyCollection(count: 3).IsNullOrEmpty());
        Assert.False(new CountOnlyCollection(count: 3).None());
    }



    [Fact]
    public void IsEmpty_when_source_is_an_empty_collection_returns_true_without_enumerating()
    {
        Assert.True(new CountOnlyCollection(count: 0).IsEmpty());
        Assert.True(new CountOnlyCollection(count: 0).IsNullOrEmpty());
        Assert.True(new CountOnlyCollection(count: 0).None());
    }



    // ------------------------------------------------------------------ the test doubles themselves

    [Fact]
    public void Probe_supports_non_generic_enumeration_and_Reset()
    {
        var probe = new Probe(new[] { 1, 2 });

        var enumerator = ((NonGenericEnumerable)probe).GetEnumerator();
        Assert.True(enumerator.MoveNext());
        Assert.Equal(1, enumerator.Current);

        enumerator.Reset();
        Assert.True(enumerator.MoveNext());
        Assert.Equal(1, enumerator.Current);

        ((IDisposable)enumerator).Dispose();
        Assert.Equal(1, probe.Disposals);
    }



    [Fact]
    public void CountOnlyCollection_supports_Count_and_nothing_else()
    {
        var collection = new CountOnlyCollection(count: 2);

        Assert.Equal(2, collection.Count);
        Assert.True(collection.IsReadOnly);
        Assert.Throws<NotSupportedException>(() => collection.GetEnumerator());
        Assert.Throws<NotSupportedException>(() => ((NonGenericEnumerable)collection).GetEnumerator());
        Assert.Throws<NotSupportedException>(() => collection.Add(1));
        Assert.Throws<NotSupportedException>(() => collection.Clear());
        Assert.Throws<NotSupportedException>(() => collection.Contains(1));
        Assert.Throws<NotSupportedException>(() => collection.CopyTo(new int[2], 0));
        Assert.Throws<NotSupportedException>(() => collection.Remove(1));
    }



    // ------------------------------------------------------------------ harness

    private const string Empty = "empty";
    private const string Single = "single";
    private const string Many = "many";
    private const string ThrowsOnFirstMoveNext = "throws-on-first-MoveNext";
    private const string ThrowsMidway = "throws-midway";
    private const string DisposeThrows = "dispose-throws";



    private static bool ThrowingPredicate(int value) => throw _predicateFailure;



    private static readonly Dictionary<string, Func<Probe>> _scenarios = new Dictionary<string, Func<Probe>>
    {
        [Empty] = () => new Probe(Array.Empty<int>()),
        [Single] = () => new Probe(new[] { 1 }),
        [Many] = () => new Probe(new[] { 1, 2, 3, 4, 5 }),
        [ThrowsOnFirstMoveNext] = () => new Probe(new[] { 1, 2, 3 }, failAtMoveNext: 1),
        [ThrowsMidway] = () => new Probe(new[] { 1, 2, 3, 4, 5 }, failAtMoveNext: 3),
        [DisposeThrows] = () => new Probe(new[] { 1, 2, 3 }, failOnDispose: true)
    };



    private static Probe Create(string scenario) => _scenarios[scenario]();



    private static void AssertParity
    (
        string scenario,
        Func<IEnumerable<int>, bool> viaLinq,
        Func<IEnumerable<int>, bool> viaLibrary
    )
    {
        var linqSource = Create(scenario);
        var librarySource = Create(scenario);

        var linq = Run(() => viaLinq(linqSource));
        var library = Run(() => viaLibrary(librarySource));

        Assert.Equal(linq.Result, library.Result);
        Assert.Equal(linq.Error?.GetType(), library.Error?.GetType());
        Assert.Equal(ParamNameOf(linq.Error), ParamNameOf(library.Error));
        Assert.Equal(IsOwnFailure(linq.Error, linqSource), IsOwnFailure(library.Error, librarySource));
        Assert.Equal(linqSource.EnumeratorsCreated, librarySource.EnumeratorsCreated);
        Assert.Equal(linqSource.Pulled, librarySource.Pulled);
        Assert.Equal(linqSource.Disposals, librarySource.Disposals);
    }



    private static void AssertSameError(Func<bool> viaLinq, Func<bool> viaLibrary)
    {
        var linq = Run(viaLinq);
        var library = Run(viaLibrary);

        Assert.NotNull(linq.Error);
        Assert.Equal(linq.Error.GetType(), library.Error?.GetType());
        Assert.Equal(ParamNameOf(linq.Error), ParamNameOf(library.Error));
    }



    private static Outcome Run(Func<bool> call)
    {
        try
        {
            return new Outcome(call(), null);
        }
        catch (Exception exception)
        {
            return new Outcome(null, exception);
        }
    }



    private static string? ParamNameOf(Exception? exception) => (exception as ArgumentException)?.ParamName;



    private static bool IsOwnFailure(Exception? exception, Probe source)
        => exception != null && (ReferenceEquals(exception, source.Failure) || ReferenceEquals(exception, _predicateFailure));



    private sealed class Outcome
    {
        public Outcome(bool? result, Exception? error)
        {
            Result = result;
            Error = error;
        }



        public bool? Result { get; }



        public Exception? Error { get; }
    }



    /// <summary>A sequence that is deliberately not a collection and records how it was used.</summary>
    private sealed class Probe : IEnumerable<int>
    {
        private readonly int[] _items;
        private readonly int _failAtMoveNext;
        private readonly bool _failOnDispose;



        public Probe(int[] items, int failAtMoveNext = 0, bool failOnDispose = false)
        {
            _items = items;
            _failAtMoveNext = failAtMoveNext;
            _failOnDispose = failOnDispose;
            Failure = new InvalidOperationException("source failed");
        }



        public Exception Failure { get; }



        public int EnumeratorsCreated { get; private set; }



        public int Pulled { get; private set; }



        public int Disposals { get; private set; }



        public IEnumerator<int> GetEnumerator()
        {
            EnumeratorsCreated++;
            return new ProbeEnumerator(this);
        }



        NonGenericEnumerator NonGenericEnumerable.GetEnumerator() => GetEnumerator();



        private sealed class ProbeEnumerator : IEnumerator<int>
        {
            private readonly Probe _owner;
            private int _index = -1;
            private int _moveNextCalls;



            public ProbeEnumerator(Probe owner)
            {
                _owner = owner;
            }



            public int Current => _owner._items[_index];



            object NonGenericEnumerator.Current => Current;



            public bool MoveNext()
            {
                _moveNextCalls++;
                if (_moveNextCalls == _owner._failAtMoveNext)
                {
                    throw _owner.Failure;
                }

                _index++;
                if (_index >= _owner._items.Length)
                {
                    return false;
                }

                _owner.Pulled++;
                return true;
            }



            public void Reset() => _index = -1;



            public void Dispose()
            {
                _owner.Disposals++;
                if (_owner._failOnDispose)
                {
#pragma warning disable S3877 // a source whose disposal fails is exactly the scenario under test
                    throw _owner.Failure;
#pragma warning restore S3877
                }
            }
        }
    }



    /// <summary>A collection whose Count is real and whose enumeration must never be used.</summary>
    private sealed class CountOnlyCollection : ICollection<int>
    {
        public CountOnlyCollection(int count)
        {
            Count = count;
        }



        public int Count { get; }



        public bool IsReadOnly => true;



        public IEnumerator<int> GetEnumerator() => throw new NotSupportedException("The collection must not be enumerated.");



        NonGenericEnumerator NonGenericEnumerable.GetEnumerator() => GetEnumerator();



        public void Add(int item) => throw new NotSupportedException();



        public void Clear() => throw new NotSupportedException();



        public bool Contains(int item) => throw new NotSupportedException();



        public void CopyTo(int[] array, int arrayIndex) => throw new NotSupportedException();



        public bool Remove(int item) => throw new NotSupportedException();
    }
}
