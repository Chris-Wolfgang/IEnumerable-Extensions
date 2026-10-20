using Wolfgang.Extensions.IEnumerable;

// On .NET 10 System.Linq also has Shuffle, so Shuffle is called through the static class.
// Calls every public extension method once, over a reference type, a value type and a custom struct,
// and exits non-zero on the first wrong result. Run it from a Native AOT publish.
var failures = new List<string>();

void Check(string name, bool ok)
{
    if (!ok)
    {
        failures.Add(name);
    }
}

static bool Throws(Action a)
{
    try
    {
        a();
        return false;
    }
    catch (ArgumentNullException)
    {
        return true;
    }
}

IEnumerable<int> ints = new[] { 1, 2, 3, 4, 5 };
IEnumerable<string> strings = new[] { "a", "b", "c" };
IEnumerable<Point> points = new[] { new Point(1, 2), new Point(3, 4) };
IEnumerable<int>? nothing = null;

var sum = 0;
ints.ForEach(x => sum += x);
Check("ForEach<int>", sum == 15);

var seen = new List<string>();
strings.ForEach(seen.Add);
Check("ForEach<string>", seen.SequenceEqual(strings));

var pointSum = 0;
points.ForEach(p => pointSum += p.X + p.Y);
Check("ForEach<struct>", pointSum == 10);

var viaDo = 0;
var doResult = ints.Do(x => viaDo += x).ToList();
Check("Do<int>", viaDo == 15 && doResult.Count == 5);

Check("IsEmpty(empty)", Array.Empty<int>().IsEmpty());
Check("IsEmpty(items)", !ints.IsEmpty());
Check("IsEmpty(null) throws", Throws(() => nothing.IsEmpty()));

Check("IsNullOrEmpty(null)", nothing.IsNullOrEmpty());
Check("IsNullOrEmpty(empty)", Array.Empty<string>().IsNullOrEmpty());
Check("IsNullOrEmpty(items)", !strings.IsNullOrEmpty());

Check("None()", Array.Empty<int>().None() && !ints.None());
Check("None(predicate)", ints.None(x => x > 5) && !ints.None(x => x > 4));

var shuffled = IEnumerableExtensions.Shuffle(ints).ToList();
Check("Shuffle<int>", shuffled.Count == 5 && shuffled.OrderBy(x => x).SequenceEqual(ints));
Check("Shuffle<struct>", IEnumerableExtensions.Shuffle(points).Count() == 2);

Check("ToEnumerable<int>", ints.ToEnumerable().SequenceEqual(ints));
Check("ToEnumerable(null) throws", Throws(() => nothing.ToEnumerable()));

if (failures.Count > 0)
{
    Console.Error.WriteLine("FAILED: " + string.Join(", ", failures));
    return 1;
}

Console.WriteLine("AOT smoke OK");
return 0;

internal readonly record struct Point(int X, int Y);
