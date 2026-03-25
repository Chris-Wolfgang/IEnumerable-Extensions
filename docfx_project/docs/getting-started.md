# Getting Started

This guide will help you install and start using Wolfgang.Extensions.IEnumerable in your .NET projects.

## Installation

### Via NuGet Package Manager

```bash
dotnet add package Wolfgang.Extensions.IEnumerable
```

## Basic Usage

Add the using directive to your code:

```csharp
using Wolfgang.Extensions.IEnumerable;
```

### ForEach - Terminal Iteration

```csharp
var numbers = new[] { 1, 2, 3, 4, 5 };
numbers.ForEach(n => Console.WriteLine(n));
```

### Do - Passthrough Side Effects

```csharp
var results = items
    .Do(x => Console.WriteLine($"Processing: {x}"))
    .Where(x => x.IsActive)
    .ToList();
```

### IsEmpty / IsNullOrEmpty

```csharp
if (items.IsEmpty())
{
    Console.WriteLine("No items found");
}

IEnumerable<string>? data = GetData();
if (data.IsNullOrEmpty())
{
    Console.WriteLine("Data is null or empty");
}
```

### None - Inverse of Any

```csharp
bool noNegatives = numbers.None(n => n < 0);
```

### Shuffle - Randomize Order

```csharp
var shuffled = deck.Shuffle();
```