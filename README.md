# Wolfgang.Extensions.IEnumerable

A collection of extension methods for `IEnumerable<T>` in .NET.

[![NuGet](https://img.shields.io/nuget/v/Wolfgang.Extensions.IEnumerable.svg?logo=nuget&label=NuGet)](https://www.nuget.org/packages/Wolfgang.Extensions.IEnumerable)
[![NuGet downloads](https://img.shields.io/nuget/dt/Wolfgang.Extensions.IEnumerable.svg?logo=nuget&label=downloads)](https://www.nuget.org/packages/Wolfgang.Extensions.IEnumerable)
[![PR build](https://img.shields.io/github/actions/workflow/status/Chris-Wolfgang/IEnumerable-Extensions/pr.yaml?branch=main&label=PR%20build&logo=github)](https://github.com/Chris-Wolfgang/IEnumerable-Extensions/actions/workflows/pr.yaml)
[![Release](https://img.shields.io/github/actions/workflow/status/Chris-Wolfgang/IEnumerable-Extensions/release.yaml?label=release&logo=github)](https://github.com/Chris-Wolfgang/IEnumerable-Extensions/actions/workflows/release.yaml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![.NET](https://img.shields.io/badge/.NET-Multi--Targeted-purple.svg)](https://dotnet.microsoft.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/Chris-Wolfgang/IEnumerable-Extensions)

---

## 📦 Installation

```bash
dotnet add package Wolfgang.Extensions.IEnumerable
```

**NuGet Package:** [Wolfgang.Extensions.IEnumerable](https://www.nuget.org/packages/Wolfgang.Extensions.IEnumerable)

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📚 Documentation

- **GitHub Repository:** [https://github.com/Chris-Wolfgang/IEnumerable-Extensions](https://github.com/Chris-Wolfgang/IEnumerable-Extensions)
- **API Documentation:** https://Chris-Wolfgang.github.io/IEnumerable-Extensions/
- **CHANGELOG:** [CHANGELOG.md](CHANGELOG.md)
- **Contributing Guide:** [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 🚀 Quick Start

```csharp
using System.Collections.Generic;
using System.Linq;
using Wolfgang.Extensions.IEnumerable;

var items = new[] { 1, 2, 3, 4, 5 };

items.ForEach(Console.WriteLine);                 // prints 1..5 (eager)

var doubled = items
    .Do(x => Console.WriteLine($"seen: {x}"))     // lazy passthrough side-effect
    .Select(x => x * 2)
    .ToList();

items.IsEmpty();                                  // false
((int[]?)null).IsNullOrEmpty();                   // true (only IsNullOrEmpty accepts null)
items.None(x => x > 10);                          // true
items.None();                                     // false (has items)

var shuffled = items.Shuffle().ToList();          // random order (Fisher-Yates)
```

None of these methods mutate the source sequence — `ForEach` and `Do` invoke
your `Action<T>` for its side effects but never modify the upstream items
themselves. Only `IsNullOrEmpty` accepts a null source (returns `true`); every
other method throws `ArgumentNullException` when `source` is null. Methods
that take an `action` / `predicate` also throw on a null callback.

---

## ✨ Features

### Methods
| Method | Description |
|--------|-------------|
| `ForEach(Action<T>)` | Eagerly invokes an action for each item. Throws `ArgumentNullException` if `source` or `action` is null. |
| `Do(Action<T>)` | Lazy variant of `ForEach` — yields each item after invoking the action. |
| `IsEmpty()` | Returns `true` when the sequence contains no elements. |
| `IsNullOrEmpty()` | Returns `true` when the sequence is `null` OR contains no elements. |
| `None()` | Inverse of `Any()` — `true` when the sequence has no elements. |
| `None(Func<T, bool> predicate)` | `true` when no element matches the predicate. |
| `Shuffle()` | Returns a new sequence in random order (Fisher-Yates + thread-safe RNG). |

### Examples

```csharp
using System.Collections.Generic;
using System.Linq;
using Wolfgang.Extensions.IEnumerable;

// ForEach vs Do
new[] { 1, 2, 3 }.ForEach(Console.WriteLine);       // 1 2 3 (eager, void)
var pipeline = new[] { 1, 2, 3 }
    .Do(x => Console.WriteLine($"tap: {x}"))        // lazy passthrough
    .Where(x => x > 1);                             // logs only when enumerated

// Emptiness
new int[0].IsEmpty();                                // true
((IEnumerable<int>?)null).IsNullOrEmpty();           // true (null-tolerant)
// ((IEnumerable<int>?)null).IsEmpty();              // throws ArgumentNullException

// None
new[] { 1, 2, 3 }.None();                            // false
new[] { 1, 2, 3 }.None(x => x < 0);                  // true

// Shuffle
var deck = Enumerable.Range(1, 52).Shuffle().ToList();
```

---

## 🎯 Target Frameworks

| Framework | Versions |
|-----------|----------|
| .NET Framework | .NET 4.6.2 |
| .NET Standard | .NET Standard 2.0 |
| .NET | .NET 8.0, .NET 10.0 |

---

## 🛠️ Building from Source

### Prerequisites
- [.NET 10.0 SDK](https://dotnet.microsoft.com/download)
- Optional: [PowerShell Core](https://github.com/PowerShell/PowerShell) for formatting scripts

### Build Steps

```bash
git clone https://github.com/Chris-Wolfgang/IEnumerable-Extensions.git
cd IEnumerable-Extensions
dotnet restore
dotnet build --configuration Release
dotnet test --configuration Release
```

---

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for code quality standards, build and test instructions, and pull request guidelines.
