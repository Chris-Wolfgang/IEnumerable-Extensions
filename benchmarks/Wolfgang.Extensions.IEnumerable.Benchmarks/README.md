# Wolfgang.Extensions.IEnumerable Benchmarks

BenchmarkDotNet suites for the library's extension methods. Every suite compares the extension method with
the hand-written loop or LINQ call it replaces, and all of them use `[MemoryDiagnoser]`, so each result shows
time and allocation.

## Suites

| Suite | What it measures | Sizes |
|-------|------------------|-------|
| `DoBenchmarks` | `Do()` against a raw `foreach` and a side-effecting LINQ `Select` | 100 / 10,000 / 1,000,000 |
| `ForEachBenchmarks` | `ForEach()` on a list, an array and a yield iterator, against a raw loop, `List<T>.ForEach` and `ToList()` + `foreach` | 100 / 10,000 / 1,000,000 |
| `IsEmptyBenchmarks` | `IsEmpty()`, `IsNullOrEmpty()` and `None()` against `!Any()`, for empty and populated lists and yield iterators | 1,000 (populated) |
| `IsNullOrEmptyBenchmarks` | `IsNullOrEmpty()` against a manual `source == null \|\| !source.Any()` check, for null, empty and populated sources | 1,000 (populated) |
| `NonePredicateBenchmarks` | `None(predicate)` against `!Any(predicate)` with a late match | 100 / 10,000 / 1,000,000 |
| `ShuffleBenchmarks` | `Shuffle()` per source type (array, `List<T>`, other `ICollection<T>`, yield iterator) against an always-`ToArray()` Fisher-Yates reference | 100 / 1,000 / 10,000 |
| `ToEnumerableBenchmarks` | The cost of calling `ToEnumerable()` on an array, a list and a yield iterator | 1,000 |
| `ToEnumerableEnumerationBenchmarks` | Enumerating an array or list directly against enumerating it through `ToEnumerable()` | 1,000 |

`Program.cs` runs the suites through `BenchmarkSwitcher`, so you can run all of them or pick one with `--filter`.

## Running the benchmarks

Prerequisite: the .NET 10.0 SDK (the repository's build requirement; the benchmark project itself targets `net8.0`).

```bash
# From the repository root: every suite (interactive picker if no filter is given)
dotnet run --project benchmarks/Wolfgang.Extensions.IEnumerable.Benchmarks --configuration Release -- --filter "*"

# One suite
dotnet run --project benchmarks/Wolfgang.Extensions.IEnumerable.Benchmarks --configuration Release -- --filter "*ShuffleBenchmarks*"

# What CI runs (shorter job, JSON export)
dotnet run --project benchmarks/Wolfgang.Extensions.IEnumerable.Benchmarks --configuration Release -- --filter "*" --job short --memory --exporters json
```

Results are written to `BenchmarkDotNet.Artifacts/`.

## Published results

`.github/workflows/benchmarks.yaml` runs every suite and publishes the history as a chart on GitHub Pages:
<https://chris-wolfgang.github.io/IEnumerable-Extensions/dev/bench/>.

## Reading the results

- **Mean**: average time per operation.
- **Ratio**: time relative to the suite's `Baseline = true` benchmark (the raw loop or LINQ equivalent).
- **Allocated**: bytes allocated per operation. `IsEmpty()`, `IsNullOrEmpty()` and `None()` on arrays and lists,
  and `ForEach()` on a `List<T>`, are expected to allocate nothing; `ZeroAllocationTests` in the unit-test
  project enforces that.
