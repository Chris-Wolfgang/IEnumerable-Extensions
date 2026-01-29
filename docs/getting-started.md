# Getting Started

This guide will help you install and start using Wolfgang.Extensions.IEnumerable in your .NET projects.

## Installation

### Via NuGet Package Manager

```bash
dotnet add package Wolfgang.Extensions.IEnumerable
```

### Via Package Manager Console (Visual Studio)

```powershell
Install-Package Wolfgang.Extensions.IEnumerable
```

### Via NuGet Package Manager UI

1. Right-click on your project in Solution Explorer
2. Select "Manage NuGet Packages"
3. Search for "Wolfgang.Extensions.IEnumerable"
4. Click "Install"

## Requirements

- **.NET Framework 4.6.2** or later
- **.NET Standard 2.0** compatible runtime
- **.NET 8.0** or later
- **.NET 10.0** or later

## Basic Usage

After installation, add the using directive to your code:

```csharp
using Wolfgang.Extensions.IEnumerable;
```

### Examples

#### ForEach - Iterate with Actions

```csharp
var numbers = new[] { 1, 2, 3, 4, 5 };

// Print each number
numbers.ForEach(n => Console.WriteLine(n));

// Execute complex actions
var users = GetUsers();
users.ForEach(user => 
{
    user.IsActive = true;
    user.LastUpdated = DateTime.Now;
});
```

#### IsEmpty - Check for Empty Collections

```csharp
var items = new List<string>();

if (items.IsEmpty())
{
    Console.WriteLine("No items found");
}

// Performance-optimized for ICollection<T>
var numbers = new int[] { };
bool isEmpty = numbers.IsEmpty(); // Returns true
```

#### IsNullOrEmpty - Safe Null and Empty Checking

```csharp
IEnumerable<string>? data = GetData(); // May return null

if (data.IsNullOrEmpty())
{
    Console.WriteLine("Data is null or empty");
    return;
}

// Safe to use data here
data.ForEach(item => Process(item));
```

#### None - Inverse of Any

```csharp
var numbers = new[] { 1, 2, 3, 4 };

// Check if sequence has no elements
var emptyList = new List<int>();
bool hasNoElements = emptyList.None(); // Returns true

// Check if no elements match a condition
bool noOddNumbers = numbers.None(n => n % 2 == 1); // Returns false
bool noNegatives = numbers.None(n => n < 0);       // Returns true
```

#### Shuffle - Randomize Collection Order

```csharp
var deck = new[] { "Ace", "King", "Queen", "Jack", "10" };

// Create a shuffled copy
var shuffledDeck = deck.Shuffle();

// Original deck remains unchanged
foreach (var card in shuffledDeck)
{
    Console.WriteLine(card);
}
```

## Method Chaining

All extension methods can be chained with LINQ and other extension methods:

```csharp
var numbers = Enumerable.Range(1, 100)
    .Where(n => n % 2 == 0)
    .Shuffle()
    .Take(10);

if (numbers.None(n => n > 50))
{
    Console.WriteLine("No numbers greater than 50 in sample");
}
```

## Performance Considerations

### Optimized for Common Types

The library includes optimizations for common collection types:

- `IsEmpty()` and `None()` use `ICollection<T>.Count` when available instead of enumerating
- `ForEach()` delegates to `List<T>.ForEach` for list instances
- `Shuffle()` converts to `List<T>` once for efficient random access

### Thread Safety

- `Shuffle()` uses thread-safe random number generation
  - .NET 6.0+: Uses `Random.Shared`
  - Earlier versions: Uses `ThreadLocal<Random>` for thread safety

## Error Handling

The library follows LINQ conventions for error handling:

```csharp
// Throws ArgumentNullException
IEnumerable<int>? nullCollection = null;
nullCollection.ForEach(x => Console.WriteLine(x)); // Throws

// IsNullOrEmpty handles null safely
bool result = nullCollection.IsNullOrEmpty(); // Returns true (no exception)

// None throws on null
nullCollection.None(); // Throws ArgumentNullException
```

## Next Steps

- Review the [Introduction](introduction.md) for a complete overview of features
- See the [Setup Guide](setup.md) for development environment configuration
- Check the API documentation for detailed method signatures and parameters
- Explore the unit tests in the repository for additional usage examples

## Support

- **Issues**: Report bugs or request features on [GitHub Issues](https://github.com/Chris-Wolfgang/IEnumerable-Extensions/issues)
- **Source Code**: Available on [GitHub](https://github.com/Chris-Wolfgang/IEnumerable-Extensions)
- **License**: MIT License
