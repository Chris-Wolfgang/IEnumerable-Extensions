using Wolfgang.Extensions.IEnumerable;

// Do executes a side-effect action on each element and yields items unchanged.
// Unlike ForEach, Do is a passthrough — items flow through the pipeline.

Console.WriteLine("=== Do Example ===");
Console.WriteLine();

// Logging items as they flow through a pipeline
var numbers = Enumerable.Range(1, 10);

Console.WriteLine("Pipeline with Do for logging:");
var evenNumbers = numbers
    .Do(n => Console.WriteLine($"  Before filter: {n}"))
    .Where(n => n % 2 == 0)
    .Do(n => Console.WriteLine($"  After filter:  {n}"))
    .ToList();

Console.WriteLine($"Result: {string.Join(", ", evenNumbers)}");
Console.WriteLine();

// Counting items mid-pipeline without consuming the sequence
var count = 0;
var products = new[] { "Widget", "Gadget", "Doohickey", "Thingamajig" };

var upperProducts = products
    .Do(_ => count++)
    .Select(p => p.ToUpperInvariant())
    .ToList();

Console.WriteLine($"Processed {count} products: {string.Join(", ", upperProducts)}");
Console.WriteLine();

// Chaining multiple Do calls for step-by-step debugging
var result = Enumerable.Range(1, 5)
    .Do(n => Console.WriteLine($"  Step 1 - Raw:       {n}"))
    .Select(n => n * 3)
    .Do(n => Console.WriteLine($"  Step 2 - Tripled:   {n}"))
    .Where(n => n > 6)
    .Do(n => Console.WriteLine($"  Step 3 - Filtered:  {n}"))
    .ToList();

Console.WriteLine($"Final result: {string.Join(", ", result)}");
