# 0001. Pin AssemblyVersion at 1.0.0.0

- **Status:** Accepted
- **Date:** 2026-10-16 (recorded retroactively)

## Context

The assembly identity includes `AssemblyVersion`. If it changed on every release, consumers that reference the library from signed or strongly-bound assemblies would need binding redirects or a recompile for every minor and patch bump.

## Decision

`AssemblyVersion` is pinned at `1.0.0.0` in `src/Wolfgang.Extensions.IEnumerable/Wolfgang.Extensions.IEnumerable.csproj`. `FileVersion` is derived from `<Version>`, and `InformationalVersion` is derived from `<Version>` by the SDK, so the real release version stays visible. The pin is bumped only on a deliberate breaking API change.

## Consequences

- Minor and patch releases are drop-in for consumers.
- Tooling that reads `AssemblyVersion` to identify the release sees `1.0.0.0` for every 1.x build; it must read `FileVersion` or `InformationalVersion` instead.
- A breaking API change is the only reason to touch the pin, which makes the change easy to spot in review.
