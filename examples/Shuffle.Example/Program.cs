using Wolfgang.Extensions.IEnumerable;

// Shuffle creates a new IEnumerable<T> with elements in random order.
// It uses the Fisher-Yates shuffle algorithm and is thread-safe.

Console.WriteLine("=== Shuffle Example ===");
Console.WriteLine();

// Basic shuffle
var cards = new[] { "Ace", "King", "Queen", "Jack", "10", "9", "8", "7" };

Console.WriteLine("Original order: " + string.Join(", ", cards));
Console.WriteLine("Shuffled:       " + string.Join(", ", cards.Shuffle()));
Console.WriteLine("Shuffled again:  " + string.Join(", ", cards.Shuffle()));
Console.WriteLine();

// Original collection is unchanged
Console.WriteLine("Original still:  " + string.Join(", ", cards));
Console.WriteLine();

// Practical example: randomize quiz questions
var questions = new[]
{
    "What is the capital of France?",
    "What year did the moon landing occur?",
    "What is the speed of light?",
    "Who wrote Hamlet?",
    "What is the chemical symbol for gold?",
};

Console.WriteLine("Quiz questions in random order:");
var questionNumber = 1;
questions.Shuffle().ForEach(q => Console.WriteLine($"  {questionNumber++}. {q}"));
Console.WriteLine();

// Chain with LINQ
var topThree = Enumerable.Range(1, 20)
    .Shuffle()
    .Take(3);

Console.WriteLine("3 random numbers from 1-20: " + string.Join(", ", topThree));
