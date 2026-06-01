# Wolfgang.Extensions.IEnumerable Documentation

Welcome to the documentation for **Wolfgang.Extensions.IEnumerable**, a comprehensive collection of extension methods for types that implement `IEnumerable<T>`.

## Quick Links

- **[Introduction](introduction.md)** - Learn about the library's purpose and features
- **[Getting Started](getting-started.md)** - Installation and usage guide
- **[Setup Guide](setup.md)** - Development environment setup
- **[GitHub Repository](https://github.com/Chris-Wolfgang/IEnumerable-Extensions)** - Source code and issues
- **[NuGet Package](https://www.nuget.org/packages/Wolfgang.Extensions.IEnumerable)** - Download the package

## Overview

Wolfgang.Extensions.IEnumerable provides essential extension methods that complement the standard LINQ operators. The library offers:

✅ **ForEach** - Execute actions on each element  
✅ **Do** - Lazy passthrough side-effect action  
✅ **IsEmpty** - Check if a sequence is empty  
✅ **IsNullOrEmpty** - Safely check for null or empty sequences  
✅ **None** - Determine if no elements match criteria  
✅ **Shuffle** - Randomize collection order  
✅ **ToEnumerable** - Strip the concrete type for slow-path testing  

## Quick Example

```csharp
using Wolfgang.Extensions.IEnumerable;

var numbers = new[] { 1, 2, 3, 4, 5 };

// ForEach with action
numbers.ForEach(n => Console.WriteLine(n));

// Check if empty
if (numbers.IsEmpty())
    Console.WriteLine("Empty!");

// None - inverse of Any
if (numbers.None(n => n > 10))
    Console.WriteLine("No numbers greater than 10");

// Shuffle
var shuffled = numbers.Shuffle();
```

## Installation

Install via NuGet Package Manager:

```bash
dotnet add package Wolfgang.Extensions.IEnumerable
```

## Supported Frameworks

Supports .NET Framework 4.6.2 through .NET 10:

- .NET Framework 4.6.2+
- .NET Standard 2.0
- .NET Core 2.0+
- .NET 5-10

## Features

### Performance Optimized
Extension methods include optimizations for specific collection types like `List<T>` and `ICollection<T>`.

### Thoroughly Tested
Comprehensive unit test coverage ensures reliability across all supported frameworks.

### Well Documented
Every method includes XML documentation with parameters, return values, exceptions, and code examples.

### Null Safe Options
Methods like `IsNullOrEmpty` provide safe null checking without throwing exceptions.

## Documentation Sections

### [Introduction](introduction.md)
Detailed overview of the library's purpose, design philosophy, and use cases.

### [Getting Started](getting-started.md)
Step-by-step guide to installing and using the library in your projects. Includes:
- Installation instructions
- Basic usage examples
- Performance considerations
- Error handling guidelines

### [Setup Guide](setup.md)
Instructions for setting up a development environment to contribute to the library. Includes:
- Prerequisites and tools
- Building from source
- Running tests
- Contributing guidelines

## Extension Methods Reference

### ForEach&lt;T&gt;
**Signature**: `void ForEach<T>(this IEnumerable<T>? source, Action<T> action)`

Eagerly executes the specified action on each item in the enumerable. Optimized for `List<T>` instances. Throws `ArgumentNullException` when `source` or `action` is null.

### Do&lt;T&gt;
**Signature**: `IEnumerable<T> Do<T>(this IEnumerable<T>? source, Action<T> action)`

Lazy variant of `ForEach` — executes the action on each element and yields the element unchanged. Useful for taps in LINQ pipelines (e.g., logging). Throws `ArgumentNullException` when `source` or `action` is null.

### IsEmpty&lt;T&gt;
**Signature**: `bool IsEmpty<T>(this IEnumerable<T>? source)`

Efficiently determines whether a sequence contains no elements. Uses `ICollection<T>.Count` when available. Throws `ArgumentNullException` when `source` is null.

### IsNullOrEmpty&lt;T&gt;
**Signature**: `bool IsNullOrEmpty<T>(this IEnumerable<T>? source)`

Returns true if the source sequence is null or contains no elements. Does not throw on null.

### None&lt;T&gt;
**Signature**: 
- `bool None<T>(this IEnumerable<T>? source)`
- `bool None<T>(this IEnumerable<T>? source, Func<T, bool> predicate)`

Determines whether a sequence contains no elements or no element satisfies a condition. The inverse of `Any()`. Throws `ArgumentNullException` when `source` (or `predicate`, for the overload) is null.

### Shuffle&lt;T&gt;
**Signature**: `IEnumerable<T> Shuffle<T>(this IEnumerable<T>? source)`

Creates a new collection containing elements in random order using the Fisher-Yates shuffle algorithm. **Eager** — the entire input is consumed before the method returns. Throws `ArgumentNullException` when `source` is null.

### ToEnumerable&lt;T&gt;
**Signature**: `IEnumerable<T> ToEnumerable<T>(this IEnumerable<T>? source)`

Wraps the source in a lazy iterator so that pattern-matching checks like `result is List<T>` or `result is ICollection<T>` return false. Primarily useful in unit tests for exercising the non-`ICollection` slow path of other extension methods. Throws `ArgumentNullException` when `source` is null.

## Contributing

Contributions are welcome! Please see the repository's [Contributing Guidelines](https://github.com/Chris-Wolfgang/IEnumerable-Extensions/blob/main/CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Chris-Wolfgang/IEnumerable-Extensions/blob/main/LICENSE) file for details.

## Support

- **Bug Reports**: [GitHub Issues](https://github.com/Chris-Wolfgang/IEnumerable-Extensions/issues)
- **Feature Requests**: [GitHub Issues](https://github.com/Chris-Wolfgang/IEnumerable-Extensions/issues)
- **Source Code**: [GitHub Repository](https://github.com/Chris-Wolfgang/IEnumerable-Extensions)

---

**Author**: Chris Wolfgang  
**Copyright**: © 2026 Chris Wolfgang
