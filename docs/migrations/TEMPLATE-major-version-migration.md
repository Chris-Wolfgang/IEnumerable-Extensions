# Migrating from vX to vY

Copy this file to `docs/migrations/vX-to-vY.md` during release prep for a major version, and link it from the GitHub Release notes.

## Summary

One paragraph: why the major version was needed and who is affected.

## Breaking-change inventory

| API | Change | Replacement |
|-----|--------|-------------|
| `Namespace.Type.Member` | Renamed / removed / behaviour changed | `Namespace.Type.NewMember` |

## Before and after

For each row above that needs more than a rename, show the code a consumer has today and what it becomes.

```csharp
// Before (vX)

// After (vY)
```

## Deprecation timeline

| Version | What happens |
|---------|--------------|
| vX.last | APIs marked `[Obsolete]` with the replacement in the message |
| vY.0 | APIs removed |

## Target frameworks and dependencies

Any dropped or added target framework, and any changed dependency range.
