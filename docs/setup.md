# Development Setup Guide

This guide will help you set up a development environment for contributing to Wolfgang.Extensions.IEnumerable.

## Prerequisites

### Required Software

1. **.NET SDK 8.0 or later**
   - Download from [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)
   - Verify installation: `dotnet --version`

2. **Git**
   - Download from [https://git-scm.com/downloads](https://git-scm.com/downloads)
   - Verify installation: `git --version`

### Recommended Tools

- **Visual Studio 2022** (Community, Professional, or Enterprise)
  - With .NET desktop development workload
  - C# and .NET development tools

- **Visual Studio Code**
  - With C# extension
  - C# Dev Kit extension (optional)

- **JetBrains Rider** (alternative IDE)

## Getting the Source Code

### Clone the Repository

```bash
git clone https://github.com/Chris-Wolfgang/IEnumerable-Extensions.git
cd IEnumerable-Extensions
```

### Fork the Repository (for contributors)

1. Fork the repository on GitHub
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/IEnumerable-Extensions.git
   cd IEnumerable-Extensions
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/Chris-Wolfgang/IEnumerable-Extensions.git
   ```

## Building the Project

### Restore Dependencies

```bash
dotnet restore
```

### Build the Solution

```bash
dotnet build --configuration Release
```

Or for debug builds:

```bash
dotnet build --configuration Debug
```

### Build Specific Frameworks

To build for a specific target framework:

```bash
dotnet build --framework net8.0
dotnet build --framework netstandard2.0
dotnet build --framework net462
```

## Running Tests

### Run All Tests

```bash
dotnet test
```

### Run Tests with Coverage

```bash
dotnet test --collect:"XPlat Code Coverage"
```

### Run Tests for Specific Framework

```bash
dotnet test --framework net8.0
```

### Generate Coverage Report

The project uses ReportGenerator for code coverage reports:

```bash
# Install ReportGenerator (if not already installed)
dotnet tool install -g dotnet-reportgenerator-globaltool

# Run tests with coverage
dotnet test --collect:"XPlat Code Coverage" --results-directory ./TestResults

# Generate HTML report
reportgenerator -reports:"TestResults/**/coverage.cobertura.xml" \
                -targetdir:"CoverageReport" \
                -reporttypes:"Html;TextSummary"

# View the report
# Open CoverageReport/index.html in your browser
```

## Project Structure

```
IEnumerable-Extensions/
├── src/
│   └── Wolfgang.Extensions.IEnumerable/
│       ├── IEnumerableExtensions.cs          # Main extension methods
│       └── Wolfgang.Extensions.IEnumerable.csproj
├── tests/
│   └── Wolfgang.Extensions.IEnumerable.Tests.Unit/
│       └── Wolfgang.Extensions.IEnumerable.Tests.Unit.csproj
├── benchmarks/
│   └── Wolfgang.Extensions.IEnumerable.Benchmarks/
│       └── Wolfgang.Extensions.IEnumerable.Benchmarks.csproj
├── docs/                                      # Documentation files
├── docfx_project/                             # DocFX documentation site
├── IEnumerable-Extensions.slnx                # Solution file
└── README.md
```

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes

- Add or modify code in `src/Wolfgang.Extensions.IEnumerable/`
- Follow the existing code style (see `.editorconfig`)
- Add XML documentation comments for public methods
- Include code examples in documentation

### 3. Add Tests

- Add unit tests in `tests/Wolfgang.Extensions.IEnumerable.Tests.Unit/`
- Ensure tests cover edge cases and error conditions
- Aim for high code coverage (80%+ required)

### 4. Run Quality Checks

```bash
# Build the project
dotnet build

# Run tests
dotnet test

# Check code coverage
dotnet test --collect:"XPlat Code Coverage"
```

### 5. Commit Changes

```bash
git add .
git commit -m "Brief description of changes"
```

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `test:` for test additions/changes
- `refactor:` for code refactoring

### 6. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Running Benchmarks

The project includes BenchmarkDotNet performance tests:

```bash
cd benchmarks/Wolfgang.Extensions.IEnumerable.Benchmarks
dotnet run -c Release
```

## Code Style Guidelines

The project uses `.editorconfig` to enforce code style. Key guidelines:

- **File-scoped namespaces**: Use file-scoped namespace declarations
- **Explicit typing**: Use explicit types rather than `var` where it improves clarity
- **Null safety**: Enable nullable reference types
- **Documentation**: Add XML documentation for all public APIs
- **Error handling**: Validate arguments and throw appropriate exceptions

### Example

```csharp
namespace Wolfgang.Extensions.IEnumerable;

/// <summary>
/// Extension methods for IEnumerable{T}.
/// </summary>
public static class IEnumerableExtensions
{
    /// <summary>
    /// Description of what the method does.
    /// </summary>
    /// <typeparam name="T">The type of elements.</typeparam>
    /// <param name="source">The source enumerable.</param>
    /// <returns>Description of return value.</returns>
    /// <exception cref="ArgumentNullException">source is null.</exception>
    public static void YourMethod<T>(this IEnumerable<T> source)
    {
        if (source == null)
            throw new ArgumentNullException(nameof(source));
            
        // Implementation
    }
}
```

## Continuous Integration

The project uses GitHub Actions for CI/CD:

- **PR Workflow**: `.github/workflows/pr.yaml`
  - Runs on pull requests to `main`
  - Builds all target frameworks
  - Runs all tests
  - Generates code coverage reports
  - Runs security scanning with DevSkim

### Local CI Validation

Run the same checks locally before pushing:

```bash
# Restore and build
dotnet restore
dotnet build --no-restore --configuration Release

# Run tests with coverage
dotnet test --no-build --configuration Release --collect:"XPlat Code Coverage"

# Security scan (requires DevSkim)
dotnet tool install --global Microsoft.CST.DevSkim.CLI
devskim analyze --source-code . -f text
```

## Troubleshooting

### Build Errors

**Issue**: `The type or namespace name could not be found`
- Solution: Run `dotnet restore` to restore NuGet packages

**Issue**: Target framework not installed
- Solution: Install the .NET SDK for the required framework version

### Test Failures

**Issue**: Tests fail only on specific frameworks
- Solution: Check framework-specific code paths and conditional compilation

**Issue**: Coverage below threshold
- Solution: Add more test cases to cover edge cases and error paths

### IDE Issues

**Issue**: IntelliSense not working
- Solution: Reload the project or restart the IDE after `dotnet restore`

## Additional Resources

- [.NET Documentation](https://docs.microsoft.com/dotnet/)
- [C# Coding Conventions](https://docs.microsoft.com/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- [Contributing Guidelines](../CONTRIBUTING.md)
- [Code of Conduct](../CODE_OF_CONDUCT.md)

## Getting Help

- **Issues**: Report problems on [GitHub Issues](https://github.com/Chris-Wolfgang/IEnumerable-Extensions/issues)
- **Discussions**: Ask questions in [GitHub Discussions](https://github.com/Chris-Wolfgang/IEnumerable-Extensions/discussions)
- **Pull Requests**: Review the contributing guidelines before submitting

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.
