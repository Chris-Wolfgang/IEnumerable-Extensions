using IsNullOrEmptyExample;
using Wolfgang.Extensions.IEnumerable;

// IsNullOrEmpty safely checks whether a sequence is null or contains no elements.
// Unlike IsEmpty, it does NOT throw on null — it returns true instead.

Console.WriteLine("=== IsNullOrEmpty Example ===");
Console.WriteLine();

// Null reference
IEnumerable<string>? nullCollection = null;
Console.WriteLine($"Null collection: {nullCollection.IsNullOrEmpty()}");

// Empty collection
var emptyCollection = Array.Empty<string>();
Console.WriteLine($"Empty collection: {emptyCollection.IsNullOrEmpty()}");

// Populated collection
var populatedCollection = new[] { "one", "two", "three" };
Console.WriteLine($"Populated collection: {populatedCollection.IsNullOrEmpty()}");
Console.WriteLine();

// Practical example: guard clause in a method
ProcessOrders(null);
ProcessOrders(Array.Empty<Order>());
ProcessOrders(new[] { new Order("ORD-001", 29.99m), new Order("ORD-002", 49.99m) });

static void ProcessOrders(IEnumerable<Order>? orders)
{
    if (orders.IsNullOrEmpty())
    {
        Console.WriteLine("No orders to process.");
        return;
    }

    Console.WriteLine("Processing orders:");
    orders.ForEach(o => Console.WriteLine($"  {o.Id}: ${o.Amount}"));
}
