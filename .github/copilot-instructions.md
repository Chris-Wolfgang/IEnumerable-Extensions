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
- `ToEnumerable()` — wraps the source in a lazy iterator so the result is never a `List<T>`, `ICollection<T>` or array (defeats type-based fast paths in tests)

## Important Notes
- All methods **except `IsNullOrEmpty`** throw `ArgumentNullException` when `source` is null. Only `IsNullOrEmpty` returns `true` for a null source.
- `None`, `Do`, `ForEach`, `Shuffle` also throw `ArgumentNullException` when their `action` / `predicate` argument is null.
- `Shuffle` copies the input into a `T[]` buffer (`Array.Copy` for arrays, `ICollection<T>.CopyTo` for collections, `ToArray()` otherwise), shuffles it, and returns an opaque iterator over it (see `docs/adr/0002`).
- `ForEach` has a fast path for `List<T>` (delegates to `List<T>.ForEach`); `IsEmpty` / `IsNullOrEmpty` have a fast path for `ICollection<T>` (uses `Count` without enumerating).
- Public API is tracked by `PublicAPI.Shipped.txt` / `PublicAPI.Unshipped.txt` — additions surface as RS0016 at compile time

## Code Style
- Allman brace style
- 3 blank lines between members
- File-scoped namespaces
- Warnings as errors in Release builds

## Target Frameworks
- net462, netstandard2.0, net8.0, net10.0
