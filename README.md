# Wolfgang.Extensions.IEnumerable

A collection of extension methods for types that implement `IEnumerable<T>`.

## Methods

- `ForEach<T>`: Executes the specified action on each item in the enumerable.
- `IsEmpty<T>`: Gets a value indicating whether a sequence contains no elements.
- `IsNullOrEmpty<T>`: Gets a value indicating whether a sequence is null or contains no elements.
- `None<T>()`: Determines whether a sequence contains no elements.
- `None<T>(Func<T, bool>)`: Determines whether no element of a sequence satisfies a condition.
- `Shuffle<T>`: Creates a new `IEnumerable<T>` containing the elements from source in a random order.

