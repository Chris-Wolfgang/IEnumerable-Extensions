# Reproducible builds

The assemblies in the `Wolfgang.Extensions.IEnumerable` package are built deterministically: the same source commit, built with the same .NET SDK, produces byte-identical DLLs and PDBs regardless of the machine or checkout path on the same operating system, **within the same calendar year**. `Directory.Build.props` derives `Copyright` from `UtcNow.Year`, and the SDK emits it as `AssemblyCopyrightAttribute`, so a rebuild in a later year changes the DLL unless the original year is passed back in (see below). This relies on `Deterministic` and `ContinuousIntegrationBuild` (set when `CI=true`) in `Directory.Build.props`, which normalise source paths, plus SourceLink, which embeds the commit.

## What CI checks

The [Reproducible Build](.github/workflows/reproducible-build.yaml) workflow, on each of `ubuntu-latest` and `windows-latest`, builds the commit twice from two different directories, hashes every `.dll` and `.pdb` the `src/` projects produce, and fails when the two sets of hashes differ. The `.nupkg` itself is not compared, because a zip records entry timestamps; the files inside are what must match. Both builds run in the same job, so the check cannot detect the year dependence described above.

Linux and Windows output are **not** compared with each other and are not byte-identical. The SDK writes `obj/*.AssemblyInfo.cs` and `obj/*.AssemblyAttributes.cs` with the operating system's newline, and the PDB records those files' checksums, so PDBs (and the DLL debug-directory bytes derived from them) differ across operating systems. The compiled IL and metadata are the same. Verify on the same operating system as the build you are checking.

## Verify a release yourself

1. Check out the release tag, on the same operating system as the release build (its `pack-and-validate` job runs on `windows-latest`), with the .NET SDK that job installed. The SDK version is printed in the release run's "Setup .NET" log, but GitHub deletes run logs after 90 days, so for an old release it may no longer be recoverable.
2. Build the library: `dotnet build src/Wolfgang.Extensions.IEnumerable -c Release -p:ContinuousIntegrationBuild=true -p:NuGetAudit=false "-p:Copyright=Copyright (c) <year> Chris Wolfgang"`, where `<year>` is the year the release was built (the `AssemblyCopyright` attribute of the published DLL shows it; omit the override when you build in that same year). Set `CI=true` in the environment as well. `NuGetAudit=false` is needed for older tags: NuGet's vulnerability audit is time-dependent, so a tag that restored cleanly on release day can fail today with `NU1902` once an advisory is published against one of its build-time packages. It switches off the audit only and does not change the output.
3. Download the `.nupkg` from the GitHub Release (or nuget.org) and extract it; it is a zip. For each `lib/<tfm>/Wolfgang.Extensions.IEnumerable.dll`, compare it with `src/Wolfgang.Extensions.IEnumerable/bin/Release/<tfm>/Wolfgang.Extensions.IEnumerable.dll`. `cmp -l published.dll rebuilt.dll | wc -l` prints the number of differing bytes (`0` means byte-identical). A `sha256sum` of each file gives the same yes/no answer.

The guarantee covers the library's own assemblies. The PDB embeds the repository URL and commit, so a fork builds different PDBs.

### What a near-match looks like (v1.4.0, measured)

Rebuilding the `v1.4.0` tag (commit `5b3770b`) on Windows with SDK 10.0.400 and comparing it with the published 1.4.0 package gave **72 differing bytes in each of the four assemblies** (`net462`, `netstandard2.0`, `net8.0`, `net10.0`), with identical file sizes. The differences sit in five fixed fields and nowhere else:

| Field | Bytes |
|---|---|
| PE header `TimeDateStamp` | 4 |
| Module version id (MVID) in the metadata GUID heap | 16 |
| `TimeDateStamp` of the CodeView debug-directory entry | 4 |
| CodeView PDB id (GUID) | 16 |
| PDB checksum (SHA-256) | 32 |

For `net8.0` these are at file offsets `0x88`, `0x1c60`, `0x215c`, `0x21b0` and `0x2229`; the MVID and PDB id values were read with `System.Reflection.PortableExecutable` and matched those offsets. Every other byte, including the IL, the metadata tables and the resources, was identical. These five fields are derived from a hash of the compilation, so a different compiler version, a different operating system, or different generated source files change them while leaving the code unchanged.

What I could not establish is why v1.4.0 differs: its release-run log has expired, so the SDK it used is unknown. A different SDK is consistent with the result but is not proven. A mismatch confined to these five ranges is the expected shape of "same source, different toolchain"; a mismatch anywhere else is a real discrepancy.

### Reporting a discrepancy

Open an issue and include: the release tag and commit, your operating system and `dotnet --info`, the exact build command, the `cmp -l` byte count per target framework and the offsets of the differing ranges (for example `cmp -l a.dll b.dll | awk '{printf "%x\n", $1-1}'`). Say whether you passed `-p:Copyright`. Ranges outside the five fields above are the interesting ones.

### Not provided yet

There is no per-release manifest of expected hashes published by the release workflow, and no procedure for uploading a third-party verification attestation; both are described in #207 and are not implemented. Until a manifest exists, the published `.nupkg` is the reference to compare against.
