# Introduction

**Wolfgang.Extensions.IEnumerable** is a .NET library that provides a collection of useful extension methods for types that implement `IEnumerable<T>`. These extensions enhance the functionality of standard LINQ operations and add commonly-needed utilities that make working with collections more intuitive and efficient.

## Purpose

The library addresses common scenarios when working with collections in .NET that aren't covered by the standard LINQ operators. Whether you need to check if a collection is empty, iterate with side effects, or randomize elements, this library provides clean, well-tested extension methods that integrate seamlessly with your existing code.

## Key Features

- **Broad .NET Platform Support**: Supports .NET Framework 4.6.2 through .NET 10, including .NET Standard 2.0, .NET Core, and modern .NET versions
- **Performance-Optimized**: Implements optimizations for specific collection types (e.g., `List<T>`, `ICollection<T>`)
- **Well-Documented**: Comprehensive XML documentation with code examples
- **Thoroughly Tested**: Extensive unit test coverage ensuring reliability
- **MIT Licensed**: Free to use in both open-source and commercial projects

## Available Extension Methods

### ForEach
Executes the specified action on each item in the enumerable, providing a more functional approach to iteration with side effects.

### IsEmpty
Efficiently determines whether a sequence contains no elements, with optimizations for common collection types.

### IsNullOrEmpty
Safely checks whether a sequence is null or contains no elements in a single operation.

### None (Two Overloads)
- **None()**: Determines whether a sequence contains no elements (inverse of `Any()`)
- **None(predicate)**: Determines whether no element of a sequence satisfies a condition (inverse of `Any(predicate)`)

### Shuffle
Creates a new `IEnumerable<T>` containing the elements from the source in a random order using the Fisher-Yates shuffle algorithm.

## Design Philosophy

The library follows these principles:

1. **Consistency**: Methods follow naming and behavior patterns established by LINQ
2. **Safety**: Null checks and argument validation prevent runtime errors
3. **Performance**: Optimized implementations for common collection types
4. **Clarity**: Clear, descriptive names that communicate intent
5. **Compatibility**: Wide framework support for maximum usability

## Use Cases

This library is particularly useful for:

- **Application developers** who want cleaner, more expressive collection operations
- **Library authors** building on top of .NET's collection framework
- **Teams** standardizing on common utility methods across projects
- **Projects** requiring both modern and legacy .NET framework support

## Getting Started

To start using Wolfgang.Extensions.IEnumerable, see the [Getting Started](getting-started.md) guide for installation instructions and basic examples.
