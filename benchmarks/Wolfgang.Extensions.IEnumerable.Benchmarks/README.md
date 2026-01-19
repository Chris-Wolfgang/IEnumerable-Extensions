# Shuffle Benchmarks

This benchmark project compares two implementations of the `Shuffle()` extension method:

## Implementations Compared

1. **Current Implementation (Guid-based)**
   - Uses `OrderBy(_ => Guid.NewGuid())`
   - Simple and readable, but slower
   - Creates a new GUID for each element

2. **Fisher-Yates Shuffle**
   - Uses the classic Fisher-Yates shuffle algorithm
   - More efficient with O(n) time complexity
   - Uses `Random.Shared` for random number generation

## Benchmark Sizes

The benchmarks test three different collection sizes:
- **Small**: 100 items
- **Medium**: 1,000 items  
- **Large**: 10,000 items

## Running the Benchmarks

### Prerequisites
- .NET 8.0 SDK or later

### Run Command

```bash
# From the repository root
dotnet run --project benchmarks/Wolfgang.Extensions.IEnumerable.Benchmarks/Wolfgang.Extensions.IEnumerable.Benchmarks.csproj --configuration Release
```

### Example Output

BenchmarkDotNet will generate detailed performance metrics including:
- Mean execution time
- Memory allocations
- Standard deviation
- Relative performance rankings

Results will be saved to `BenchmarkDotNet.Artifacts/` directory.

## Interpreting Results

Look for:
- **Mean**: Average execution time
- **Allocated**: Memory allocated per operation
- **Rank**: Relative performance ranking (1 is best)

The Fisher-Yates implementation should show:
- Faster execution time (lower Mean)
- Better scalability as collection size increases
- Similar or better memory efficiency
