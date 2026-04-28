# Introduction

**Wolfgang.Extensions.IEnumerable** is a .NET library that provides a collection of useful extension methods for types that implement `IEnumerable<T>`.

## Available Extension Methods

### ForEach
Executes the specified action on each item in the enumerable. This is a terminal operation that consumes the sequence.

### Do
Executes a side-effect action on each element without transforming the elements. The original items are yielded unchanged, making it ideal for logging, metrics, or debugging within a pipeline.

### IsEmpty
Efficiently determines whether a sequence contains no elements, with optimizations for `ICollection<T>`.

### IsNullOrEmpty
Safely checks whether a sequence is null or contains no elements in a single operation.

### None (Two Overloads)
- **None()**: Determines whether a sequence contains no elements (inverse of `Any()`)
- **None(predicate)**: Determines whether no element of a sequence satisfies a condition (inverse of `Any(predicate)`)

### Shuffle
Creates a new `IEnumerable<T>` containing the elements from the source in a random order using the Fisher-Yates shuffle algorithm.

## Getting Started

To start using Wolfgang.Extensions.IEnumerable, see the [Getting Started](getting-started.md) guide for installation instructions and basic examples.
