# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## [1.4.0] - 2026-06-03

### Added

- `examples/ToEnumerable.Example/` — new example project demonstrating
  the `ToEnumerable<T>` type-opacity contract, mirroring the per-method
  example layout used for the other public methods.
- New benchmark suites: `IsNullOrEmptyBenchmarks` (fills the null-source
  short-circuit gap left by `IsEmptyBenchmarks`), `ToEnumerableBenchmarks`
  (wrap-only overhead), and `ToEnumerableEnumerationBenchmarks`
  (wrap + enumeration cost with apples-to-apples baselines).
- `Shuffle<T>` now has three internal fast paths chosen by the runtime
  source type, removing the previous "always allocate a `List<T>`" cost:
  - `T[]` source → `Array.Copy` into a new `T[]`
  - `ICollection<T>` source → preallocate `T[]` + `CopyTo` (no enumerator
    allocation, no growth resizing)
  - pure `IEnumerable<T>` → `source.ToArray()` fallback

### Changed

- **Behavior**: `Shuffle<T>()` return type is now opaque. Pattern matches
  like `result is List<T>`, `result is ICollection<T>`, and `result is T[]`
  all return `false`. Previously the method returned its internal
  `List<T>` buffer cast to `IEnumerable<T>`, letting callers downcast and
  mutate the buffer. Shuffled values, order randomness, eagerness, and
  exception contract are unchanged.
- **Public API**: `Shuffle<T>(this IEnumerable<T>?)` and
  `ToEnumerable<T>(this IEnumerable<T>?)` — parameter nullability aligned
  with every other public method on `IEnumerableExtensions`. Annotation
  change only; runtime behavior unchanged (both still throw
  `ArgumentNullException` on a null source). Strictly additive — callers
  passing `IEnumerable<T>?` sources no longer need the `!` null-forgiving
  operator.
- `Do<T>()` internal iterator refactored to a `static` local function
  (matching the v1.3.0 `ToEnumerable<T>` pattern). No public surface
  change; the eager null-checks still fire at call time.
- Test csproj: pin `xunit.runner.visualstudio` to `[2.8.2]` on net8/9/10
  matching every other TFM group, keeping all targets on the xunit v2
  runner family.
- csproj indentation normalized to 2 spaces across every project file,
  matching `.editorconfig`'s `[*.csproj] indent_size = 2`.
- Workflow drift sync from `Chris-Wolfgang/repo-template`:
  - `docfx.yaml` — adds the `overlay_canonical_docs_assets` workflow
    input + step so rebuilds of older tags can backfill the canonical
    version-picker UI onto pre-picker docs.
  - `codeql.yaml`, `release.yaml` — cosmetic alignment.

### Fixed

- `docs/readme.md` IsEmpty/IsNullOrEmpty section structure + signatures
  updated to match the live public surface.
- `tests/ForEachTests.cs` — vacuous-looking test renamed to
  `ForEach_when_called_on_a_concrete_List_invokes_the_instance_method_not_the_extension`
  with an explanatory comment, making clear it documents an intentional
  NON-shadowing property of the extension (the previous name implied it
  was testing the extension).

### Security

- `docfx_project/public/version-picker.js` — defensive scheme allowlist
  on dropdown navigation. The picker now refuses to navigate to anything
  that isn't a root-relative path (`/...`) or an explicit `http(s)://`
  URL. Closes an XSS vector where a compromised `versions.json` could
  slip a `javascript:` or `data:` URL into the dropdown and execute
  script in the docs origin.
- `docfx_project/public/version-picker.js` — CNAME path-prefix handling
  fix: stop stripping the first path segment on custom-domain setups
  that legitimately serve docs under `/<prefix>/...`.

## [1.3.0] - 2026-05-30

### Added

- `ToEnumerable<T>()` extension method on `IEnumerable<T>` — wraps the
  source in a lazy iterator so the returned sequence is guaranteed to
  NOT be a more concrete type (e.g., `List<T>`, `ICollection<T>`, array).
  Useful in tests and production code that wants to defeat type-checks
  for fast paths that pattern-match on the runtime type of the source.
  Throws `ArgumentNullException` on a null source (consistent with the
  other public methods in this library).

### Changed

- Internal test helper `IEnumerableTestHelper.ToEnumerable` removed —
  the 27 in-tree call sites now resolve to the new public
  `IEnumerableExtensions.ToEnumerable<T>` instead. No behavior change
  for tests beyond stricter null-handling (the internal helper silently
  yielded an empty sequence on null source; the public version throws
  `ArgumentNullException`, matching the rest of the library's API
  contract). No tests passed null into the helper.

## [1.2.1] - 2026-05-29

### Fixed

- **Binding stability on .NET Framework consumers.** Restored
  `<AssemblyVersion>1.0.0.0</AssemblyVersion>` (pinned) + added explicit
  `<FileVersion>$(Version).0</FileVersion>` to the src csproj. The v1.2.0
  pattern of letting the SDK derive AssemblyVersion from `<Version>`
  would have changed the binding identity on every minor/patch bump,
  breaking .NET Framework consumers without a binding redirect. v1.2.1
  pins AssemblyVersion to `1.0.0.0` for the entire 1.x line; future
  bumps only change it on a deliberate breaking API change.
- `PackageProjectUrl` corrected — previously pointed at
  `Chris-Wolfgang/Wolfgang.Extensions.IEnumerable` (404), now points at
  `Chris-Wolfgang/IEnumerable-Extensions` (the actual repository).

### Added

- `<PackageTags>` populated for NuGet search discoverability.
- `PublicApiAnalyzers` baseline activated with the v1.2.0 public surface
  captured in `PublicAPI.Shipped.txt`. Future surface changes surface
  as RS0016 / RS0017 at compile time as a breaking-change review gate.
- BenchmarkDotNet baseline project + `benchmarks.yaml` workflow
  publishing trend charts to gh-pages `/dev/bench/`.
- Stryker mutation-testing workflow (`stryker.yaml`).
- D6 / D8 docs-build verification + previous-version preservation
  guards in `docfx.yaml`.
- T1 coverage report deployed to docs pages.
- S1 CodeQL `security-extended` query pack.

### Changed

- CHANGELOG seeded with v1.0.0 / v1.1.0 / v1.2.0 entries from git tag history.
- README rewritten with Quick Start, badges, examples, methods table.
- `.github/copilot-instructions.md` rewritten from generic template
  scaffolding to IEnumerable-specific guidance.
- `IEnumerable-Extensions.slnx` cleaned up — stale `create-labels.yaml`
  reference dropped, new template-tracked workflows + root files added,
  `feature_request.md` renamed to `.yaml` to match repo state.

### Fixed

- README falsely claimed `ForEach` / `IsEmpty` / `None` accept null
  sources (treated as empty / no-op). Only `IsNullOrEmpty` is null-tolerant;
  every other method throws `ArgumentNullException`.
- `Shuffle` test was flaky — replaced `Assert.NotEqual(source, actualResult)`
  (1-in-3.6M flake rate via 10!) with multiset equality + a separate
  statistical test on a 100-element input (false-negative rate 1/100! ≈ 10⁻¹⁵⁸).
- `Shuffle_does_not_change_the_order_of_the_original_list` was vacuous
  — replaced with `Shuffle_does_not_mutate_the_input_list_in_place`
  that passes a real `List<int>` so an in-place implementation that
  forgot to copy would actually be observable.
- `build-pr.ps1` coverage gate hardened against silent-success when the
  parser regex matches zero modules (matches the pr.yaml Stage 1/2
  matched-count guard).
- `build-pr.ps1` gitleaks installer now detects macOS + CPU arch and
  downloads the right tarball (`darwin_arm64` / `darwin_x64` /
  `linux_arm64` / `linux_x64`) — previously always fetched `linux_x64`.

## [1.2.0] - 2026-04-27

### Changed

- Analyzer `PackageReference`s moved from `Directory.Build.props` into
  individual csproj files for this release (later reverted to
  `Directory.Build.props` as the canonical template-sync settled on
  fleet-wide source of truth).
- Bumped SonarAnalyzer.CSharp from 10.21.0 to 10.24.0; Meziantou.Analyzer
  from 3.0.27 to 3.0.50; coverlet.collector from 8.0.1 to 10.0.0;
  Microsoft.NET.Test.Sdk from 17.11.1 to 17.13.0.
- Upgraded `pr.yaml` to v3 (Gated) multi-stage workflow.

### Removed

- Stale `.github/workflows/create-labels.yaml` (replaced by
  `Setup-Labels.ps1` script run once at repo bootstrap).

### Fixed

- `None()` no longer duplicates `IsEmpty()` implementation (S4144).
- 18 analyzer violations in tests and examples (MA0047/MA0048/S3903
  and related).
- Documentation, test coverage, and code quality issues across the
  test suite.

## [1.1.0] - 2026-03-24

### Added

- `Do()` extension method (initial introduction with examples and
  documentation updates).

## [1.0.0] - 2026-01-19

### Added

- Initial stable release with `ForEach`, `None`, `IsEmpty`,
  `IsNullOrEmpty`, and `Shuffle` extension methods on
  `System.Collections.Generic.IEnumerable<T>`.
- Fisher-Yates `Shuffle` implementation with thread-safe RNG.
- Application and NuGet package icons.

[Unreleased]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/compare/v1.4.0...HEAD
[1.4.0]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/releases/tag/v1.0.0
