using Wolfgang.Extensions.IEnumerable;

// ToEnumerable wraps the source in a lazy iterator so the returned
// sequence is guaranteed to NOT be a more concrete type. Pattern-match
// checks like `result is List<T>` / `is ICollection<T>` / `is T[]` all
// return false. Primarily useful in tests when you want to exercise
// the non-ICollection slow path of another extension method.

Console.WriteLine("=== ToEnumerable Example ===");
Console.WriteLine();

// Original concrete collections. The IEnumerable<T>-typed locals are
// what's interesting — at THIS static type, runtime pattern matching
// against List<T>/ICollection<T>/T[] is what extension methods see
// (and what their hot-path branches act on).
IEnumerable<int> array = new[] { 1, 2, 3, 4, 5 };
IEnumerable<string> list = new List<string> { "alpha", "beta", "gamma" };

Console.WriteLine("Source types and their runtime shapes:");
Console.WriteLine($"  int[]                    is List<int>:        {array is List<int>}");
Console.WriteLine($"  int[]                    is ICollection<int>: {array is ICollection<int>}");
Console.WriteLine($"  int[]                    is int[]:            {array is int[]}");
Console.WriteLine();

// Wrap with ToEnumerable: every pattern-match returns false
var wrappedArray = array.ToEnumerable();
var wrappedList = list.ToEnumerable();

Console.WriteLine("After ToEnumerable():");
Console.WriteLine($"  wrappedArray is List<int>:        {wrappedArray is List<int>}");
Console.WriteLine($"  wrappedArray is ICollection<int>: {wrappedArray is ICollection<int>}");
Console.WriteLine($"  wrappedArray is int[]:            {wrappedArray is int[]}");
Console.WriteLine($"  wrappedList  is List<string>:     {wrappedList is List<string>}");
Console.WriteLine();

// Values + ordering preserved
Console.WriteLine("Values flow through unchanged: " + string.Join(", ", wrappedArray));
Console.WriteLine();

// Practical use: forcing IsEmpty's non-ICollection slow path
// (without the wrap, IsEmpty short-circuits via array.Length == 0).
var slowPath = Array.Empty<int>().ToEnumerable();
Console.WriteLine($"slowPath.IsEmpty() (forced enumeration): {slowPath.IsEmpty()}");
