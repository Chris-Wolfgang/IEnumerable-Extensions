using Wolfgang.Extensions.IEnumerable;

// ForEach executes an action on each item in the enumerable.
// It is a terminal operation — it consumes the sequence and returns void.

Console.WriteLine("=== ForEach Example ===");
Console.WriteLine();

// Basic usage: print each item
var fruits = new[] { "Apple", "Banana", "Cherry", "Date" };

Console.WriteLine("Printing each fruit:");
fruits.ForEach(fruit => Console.WriteLine($"  - {fruit}"));
Console.WriteLine();

// Accumulating results with a side effect
var numbers = new[] { 1, 2, 3, 4, 5 };
var doubled = new List<int>();

numbers.ForEach(n => doubled.Add(n * 2));

Console.WriteLine("Original numbers: " + string.Join(", ", numbers));
Console.WriteLine("Doubled numbers:  " + string.Join(", ", doubled));
Console.WriteLine();

// Using ForEach to update objects in place
var users = new List<User>
{
    new() { Name = "Alice", IsActive = false },
    new() { Name = "Bob", IsActive = false },
    new() { Name = "Charlie", IsActive = false },
};

users.ForEach(u => u.IsActive = true);

Console.WriteLine("After activating all users:");
users.ForEach(u => Console.WriteLine($"  {u.Name}: Active = {u.IsActive}"));

internal class User
{
    public string Name { get; set; } = "";

    public bool IsActive { get; set; }
}
