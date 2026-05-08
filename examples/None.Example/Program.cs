using Wolfgang.Extensions.IEnumerable;

// None is the inverse of Any.
// None() returns true if the sequence has no elements.
// None(predicate) returns true if no elements match the predicate.

Console.WriteLine("=== None Example ===");
Console.WriteLine();

// None() — check if sequence is empty
var emptyList = new List<int>();
var numbers = new[] { 1, 2, 3, 4, 5 };

Console.WriteLine($"Empty list has none: {emptyList.None()}");
Console.WriteLine($"Numbers has none: {numbers.None()}");
Console.WriteLine();

// None(predicate) — check if no elements match a condition
Console.WriteLine($"None divisible by 3: {numbers.None(n => n % 3 == 0)}");
Console.WriteLine($"None greater than 10: {numbers.None(n => n > 10)}");
Console.WriteLine($"None negative: {numbers.None(n => n < 0)}");
Console.WriteLine();

// Practical example: validation
var users = new[]
{
    new User("Alice", "alice@example.com", IsVerified: true),
    new User("Bob", "bob@example.com", IsVerified: true),
    new User("Charlie", "charlie@example.com", IsVerified: true),
};

if (users.None(u => !u.IsVerified))
{
    Console.WriteLine("All users are verified — ready to proceed.");
}
else
{
    Console.WriteLine("Some users are not yet verified.");
}

// Compare with Any — None reads more naturally in some cases
var errors = new List<string>();

// Instead of: if (!errors.Any())
if (errors.None())
{
    Console.WriteLine("No errors found — validation passed.");
}

internal record User(string Name, string Email, bool IsVerified);
