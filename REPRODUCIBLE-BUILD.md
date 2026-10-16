# Reproducible builds

The assemblies in the `Wolfgang.Extensions.IEnumerable` package are built deterministically: the same source commit, built with the same .NET SDK, produces byte-identical DLLs and PDBs regardless of the machine or checkout path on the same operating system. This relies on `Deterministic` and `ContinuousIntegrationBuild` (set when `CI=true`) in `Directory.Build.props`, which normalise source paths, plus SourceLink, which embeds the commit.

## What CI checks

The [Reproducible Build](.github/workflows/reproducible-build.yaml) workflow, on each of `ubuntu-latest` and `windows-latest`, builds the commit twice from two different directories, hashes every `.dll` and `.pdb` the `src/` projects produce, and fails when the two sets of hashes differ. The `.nupkg` itself is not compared, because a zip records entry timestamps; the files inside are what must match.

Linux and Windows output are **not** compared with each other and are not byte-identical. The SDK writes `obj/*.AssemblyInfo.cs` and `obj/*.AssemblyAttributes.cs` with the operating system's newline, and the PDB records those files' checksums, so PDBs (and the DLL debug-directory bytes derived from them) differ across operating systems. The compiled IL and metadata are the same. Verify on the same operating system as the build you are checking.

## Verify a release yourself

1. Check out the release tag and use the .NET SDK version and operating system the release workflow used (its `pack-and-validate` job runs on `windows-latest`).
2. Build each `src/` project with `dotnet build -c Release -p:ContinuousIntegrationBuild=true`.
3. Extract the published `.nupkg` (it is a zip) and compare `sha256sum` of each `lib/<tfm>/*.dll` with the file your build wrote to `bin/Release/<tfm>/`.

The guarantee covers the library's own assemblies. It does not cover a different SDK or compiler version, and the PDB embeds the repository URL and commit, so a fork builds different PDBs.
