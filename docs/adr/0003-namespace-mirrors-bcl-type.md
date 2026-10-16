# 0003. Namespace `Wolfgang.Extensions.IEnumerable` mirrors the BCL type

- **Status:** Accepted
- **Date:** 2026-10-16 (recorded retroactively)

## Context

Every `Wolfgang.Extensions.*` library is named after the type it extends (`IEnumerable`, `ICollection`, `IAsyncEnumerable`, ...). For this library that makes the last namespace segment look like a type name, which ReSharper's `InconsistentNaming` inspection flags.

## Decision

Keep the namespace and package id aligned with the extended BCL type. The inspection is suppressed once, with `// ReSharper disable once InconsistentNaming` and an explanatory comment, directly above the namespace declaration in `IEnumerableExtensions.cs`.

## Consequences

- Package, assembly and namespace names are predictable across the fleet.
- The suppression is the only one of its kind in the library, so a future rename would be a deliberate, visible break.
