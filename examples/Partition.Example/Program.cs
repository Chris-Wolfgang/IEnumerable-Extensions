using Wolfgang.Extensions.IEnumerable;

// Partition distributes a sequence round-robin across a fixed number of groups:
// item 1 goes to group 0, item 2 to group 1, ..., item N+1 back to group 0.
// Unlike Chunk (fixed-size groups), the number of groups is fixed and their sizes differ by at most one.

Console.WriteLine("=== Partition Example ===");
Console.WriteLine();

var numbers = Enumerable.Range(1, 10);
var groups = numbers.Partition(3);

for (var i = 0; i < groups.Count; i++)
{
    Console.WriteLine($"Group {i}: {string.Join(", ", groups[i])}");
}

Console.WriteLine();

// Practical example: spread work items evenly over a fixed number of workers
var workItems = Enumerable.Range(1, 12).Select(n => $"job-{n:00}");
var workers = workItems.Partition(4);

Parallel.ForEach
(
    workers,
    (batch, _, worker) =>
    {
        foreach (var job in batch)
        {
            Console.WriteLine($"Worker {worker} processed {job}");
        }
    }
);
