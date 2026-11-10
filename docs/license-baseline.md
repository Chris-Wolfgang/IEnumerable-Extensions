# Dependency license baseline

A baseline scan of the library's dependency licenses, measured on `main` at commit `57acc8d` on 2026-10-20.
It answers two questions: what does the shipped package depend on, and what licenses are in the build closure.

## What the shipped package depends on

The `Wolfgang.Extensions.IEnumerable` package declares **no dependencies** for any of its target frameworks
(`net462`, `netstandard2.0`, `net8.0`, `net10.0`). This was read from the `.nuspec` inside a package built from
`main`: each `<group targetFramework=...>` under `<dependencies>` is empty. Consumers take on no third-party
packages by installing it.

## Build-time closure

The `License audit` workflow (and `scripts/third-party-notices.ps1`) look at the full NuGet closure of the `src`
project, which includes packages used only to build it. Run on `main` with the workflow's own arguments, the audit
**passes** (exit code 0). Every license is on the allow-list in `.github/license-audit/allowed-licenses.json`:

| Package | Version | License |
|---|---|---|
| AsyncFixer | 2.1.0 | Apache-2.0 |
| Meziantou.Analyzer | 3.0.299 | MIT |
| Microsoft.Build.Tasks.Git | 10.0.402 | MIT |
| Microsoft.CodeAnalysis.BannedApiAnalyzers | 5.6.0 | MIT |
| Microsoft.CodeAnalysis.PublicApiAnalyzers | 5.6.0 | MIT |
| Microsoft.NET.ILLink.Tasks | 8.0.30, 10.0.11 | MIT |
| Microsoft.NETCore.Platforms | 1.1.0 | MS-.NET-Library |
| Microsoft.SourceLink.Common | 10.0.402 | MIT |
| Microsoft.SourceLink.GitHub | 10.0.402 | MIT |
| Microsoft.VisualStudio.Threading.Analyzers | 18.12.1 | MIT |
| NETStandard.Library | 2.0.3 | MIT |
| Roslynator.Analyzers | 5.0.1 | Apache-2.0 |
| System.Buffers | 4.6.1 | MIT |
| System.IO.Hashing | 10.0.13 | MIT |
| System.Memory | 4.6.3 | MIT |
| System.Numerics.Vectors | 4.6.1 | MIT |
| System.Runtime.CompilerServices.Unsafe | 6.1.2 | MIT |

`MS-.NET-Library` is the one non-OSI entry the policy allows: the Microsoft .NET Library license, which ships with
some older `System.*` packages and is freely redistributable. `SonarAnalyzer.CSharp` is excluded by
`ignored-packages.json` (a build-time analyzer under the SONAR Source-Available License that is never distributed).

## Reproduce it

```bash
dotnet tool restore
dotnet restore src/Wolfgang.Extensions.IEnumerable
dotnet nuget-license -i src/Wolfgang.Extensions.IEnumerable/Wolfgang.Extensions.IEnumerable.csproj -t \
  -a .github/license-audit/allowed-licenses.json \
  -ignore .github/license-audit/ignored-packages.json \
  -mapping .github/license-audit/url-license-mappings.json \
  -override .github/license-audit/package-overrides.json \
  -o Table
```

A new package with a license outside the allow-list fails the workflow. Adding a license to
`allowed-licenses.json` is a protected-file change and needs an explicit maintainer decision recorded in the pull
request; on pull requests the policy files are read from `main`, so a pull request cannot allow its own dependency.
