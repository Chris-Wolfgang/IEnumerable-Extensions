namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;



// ReSharper disable once InconsistentNaming
internal static class IEnumerableExtensionTestHelper
{
    internal static IEnumerable<T> ToEnumerable<T>(this IEnumerable<T>? source)
    {
        if (source is null)
        {
            yield break;
        }

        foreach (var item in source)
        {
            yield return item;
        }
    }
}