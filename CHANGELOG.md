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

## [1.2.0] - 2026-04-27

### Added

- `Do()` extension method as an alias / mirror of `ForEach()` to match
  the naming used in `IAsyncEnumerable-Extensions`, plus example
  project demonstrating side-effect usage.

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

[Unreleased]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Chris-Wolfgang/IEnumerable-Extensions/releases/tag/v1.0.0
