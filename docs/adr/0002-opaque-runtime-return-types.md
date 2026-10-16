# 0002. Return opaque iterators from Shuffle and ToEnumerable

- **Status:** Accepted
- **Date:** 2026-10-16 (recorded retroactively)

## Context

`Shuffle` once returned its internal `List<T>` buffer cast to `IEnumerable<T>`. A caller could downcast (`result is List<T>`, `ICollection<T>`, `IList<T>`) and mutate the buffer, which is an undocumented implementation detail that would have become a compatibility promise. `ToEnumerable<T>` exists to give tests a sequence that is *not* a more concrete type, so that code paths specific to `ICollection<T>` or arrays can be bypassed.

## Decision

Both methods return a compiler-generated `yield` iterator, so the runtime type is deliberately opaque. `Shuffle` is eager: it copies the source into a `T[]` (using `Array.Copy` for arrays, `CopyTo` for `ICollection<T>`, and `ToArray()` otherwise), runs Fisher-Yates in place, then yields from the array. The opacity contract is documented in the XML docs of both methods and covered by tests asserting that the result is not a `List<T>`, `ICollection<T>` or `T[]`.

## Consequences

- Callers cannot reach or mutate the shuffle buffer.
- The result does not implement `ICollection<T>`, so `Count()` and `ToList()` on it enumerate instead of using a fast path.
- Changing the returned runtime type later would be an observable change and needs a SemVer decision.
