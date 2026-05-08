using Wolfgang.Extensions.IEnumerable;

// IsEmpty checks whether a sequence contains no elements.
// It is optimized for ICollection<T> types, using Count instead of enumerating.

Console.WriteLine("=== IsEmpty Example ===");
Console.WriteLine();

// Check an empty list
var emptyList = new List<string>();
Console.WriteLine($"Empty list is empty: {emptyList.IsEmpty()}");

// Check a populated list
var populatedList = new List<string> { "Hello", "World" };
Console.WriteLine($"Populated list is empty: {populatedList.IsEmpty()}");
Console.WriteLine();

// Use with LINQ query results
var numbers = new[] { 1, 2, 3, 4, 5 };

var bigNumbers = numbers.Where(n => n > 100);
Console.WriteLine($"Numbers > 100 is empty: {bigNumbers.IsEmpty()}");

var evenNumbers = numbers.Where(n => n % 2 == 0);
Console.WriteLine($"Even numbers is empty: {evenNumbers.IsEmpty()}");
Console.WriteLine();

// Practical example: early return when no results
var searchResults = SearchProducts("nonexistent");

if (searchResults.IsEmpty())
{
    Console.WriteLine("No products found matching your search.");
}
else
{
    searchResults.ForEach(p => Console.WriteLine($"  Found: {p}"));
}

static IEnumerable<string> SearchProducts(string query)
{
    var products = new[] { "Widget", "Gadget", "Doohickey" };
    return products.Where(p => p.Contains(query, StringComparison.OrdinalIgnoreCase));
}
