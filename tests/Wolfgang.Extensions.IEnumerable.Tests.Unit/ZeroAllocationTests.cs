#if NETCOREAPP3_0_OR_GREATER
using System;
using System.Collections.Generic;
using Xunit;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

/// <summary>
/// Pins the call patterns that are documented to be allocation-free: the <c>ICollection&lt;T&gt;</c>
/// fast paths of <c>IsEmpty</c>, <c>IsNullOrEmpty</c> and <c>None()</c>, and the <c>List&lt;T&gt;</c>
/// fast path of <c>ForEach</c>. Everything else (for example <c>ForEach</c> over an array typed as
/// <c>IEnumerable&lt;T&gt;</c>, or any lazy sequence) allocates an enumerator and is deliberately
/// not asserted here.
/// </summary>
/// <remarks>
/// Each call pattern is run once to warm up the JIT, then <see cref="Iterations"/> times; the
/// per-thread allocated-byte counter must not move. The data and delegates are static so the
/// measured lambda captures nothing.
/// </remarks>
public class ZeroAllocationTests
{
    private const int Iterations = 1000;

    private static readonly int[] _array = { 1, 2, 3 };
    private static readonly int[] _emptyArray = Array.Empty<int>();
    private static readonly List<int> _list = new() { 1, 2, 3 };
    private static readonly List<int> _emptyList = new();
    private static readonly Action<int> _noOp = static _ => { };



    [Fact]
    public void IsEmpty_when_source_is_an_array_does_not_allocate()
    {
        AssertZeroAllocation(static () => _array.IsEmpty());
        AssertZeroAllocation(static () => _emptyArray.IsEmpty());
    }



    [Fact]
    public void IsEmpty_when_source_is_a_List_does_not_allocate()
    {
        AssertZeroAllocation(static () => _list.IsEmpty());
        AssertZeroAllocation(static () => _emptyList.IsEmpty());
    }



    [Fact]
    public void IsNullOrEmpty_when_source_is_null_does_not_allocate()
    {
        AssertZeroAllocation(static () => ((IEnumerable<int>?)null).IsNullOrEmpty());
    }



    [Fact]
    public void IsNullOrEmpty_when_source_is_an_array_or_List_does_not_allocate()
    {
        AssertZeroAllocation(static () => _array.IsNullOrEmpty());
        AssertZeroAllocation(static () => _list.IsNullOrEmpty());
        AssertZeroAllocation(static () => _emptyList.IsNullOrEmpty());
    }



    [Fact]
    public void None_when_source_is_an_array_or_List_does_not_allocate()
    {
        AssertZeroAllocation(static () => _array.None());
        AssertZeroAllocation(static () => _list.None());
    }



    [Fact]
    public void ForEach_when_source_is_a_List_does_not_allocate()
    {
        AssertZeroAllocation(static () => ((IEnumerable<int>)_list).ForEach(_noOp));
    }



    [Fact]
    public void AllocatedBytes_when_the_measured_call_allocates_reports_bytes()
    {
        var allocated = MeasureAllocatedBytes(static () => _ = new int[16]);

        Assert.True(allocated > 0, "The measurement must be able to see an allocation, otherwise the zero-allocation assertions prove nothing.");
    }



    private static void AssertZeroAllocation(Action call)
    {
        var allocated = MeasureAllocatedBytes(call);

        Assert.True(allocated == 0, $"Expected 0 bytes allocated over {Iterations} calls but measured {allocated}.");
    }



    private static long MeasureAllocatedBytes(Action call)
    {
        call();

        var before = GC.GetAllocatedBytesForCurrentThread();
        for (var i = 0; i < Iterations; i++)
        {
            call();
        }

        return GC.GetAllocatedBytesForCurrentThread() - before;
    }
}
#endif
