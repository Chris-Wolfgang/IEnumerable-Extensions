# Copilot Instructions for Wolfgang.Extensions.IEnumerable

## Project Overview
- **Package:** Wolfgang.Extensions.IEnumerable
- **Namespace:** Wolfgang.Extensions.IEnumerable
- **Purpose:** Extension methods for `System.Collections.Generic.IEnumerable<T>` — emptiness checks, iteration, and shuffling

## Key Types
- `IEnumerableExtensions` — static class with extension methods on `IEnumerable<T>`

## Extension Methods
- `ForEach(Action<T>)` — eagerly invokes an action for each item (void return)
- `Do(Action<T>)` — lazy variant of `ForEach` that yields each item after invoking the action (returns `IEnumerable<T>`)
- `IsEmpty()` — true when the sequence contains no elements
- `IsNullOrEmpty()` — true when the sequence is null OR contains no elements
- `None()` — inverse of `Any()` (no predicate)
- `None(Func<T, bool> predicate)` — true when no element matches the predicate
- `Shuffle()` — returns a new sequence in random order using Fisher-Yates with a thread-safe RNG

## Important Notes
- `ForEach` / `IsEmpty` / `IsNullOrEmpty` / `None` accept `null` sources (treated as empty / no-op)
- `Shuffle` requires a non-null source and materializes the input before shuffling
- Public API is tracked by `PublicAPI.Shipped.txt` / `PublicAPI.Unshipped.txt` when the analyzer baseline is activated — additions surface as RS0016 at compile time

## Code Style
- Allman brace style
- 3 blank lines between members
- File-scoped namespaces
- Warnings as errors in Release builds

## Target Frameworks
- net462, netstandard2.0, net8.0, net10.0
