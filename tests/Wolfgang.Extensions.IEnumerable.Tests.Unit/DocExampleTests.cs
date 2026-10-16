#if NET10_0
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Xunit;

namespace Wolfgang.Extensions.IEnumerable.Tests.Unit;

/// <summary>
/// Compiles every <c>&lt;example&gt;&lt;code&gt;</c> block in the library's XML docs so an
/// example cannot outlive the API it demonstrates. A snippet is wrapped in a method body
/// with the library's usings and one free identifier, <c>source</c>, supplied as an
/// <c>IEnumerable&lt;int&gt;</c>; a snippet must not declare its own <c>source</c>.
/// </summary>
public class DocExampleTests
{


    [Fact]
    public async Task XmlDoc_examples_compile()
    {
        var examples = await ReadExamplesAsync();

        var failures = examples
            .SelectMany(example => Compile(example).Select(error => $"{error}{Environment.NewLine}{example}"))
            .ToArray();

        Assert.True
        (
            failures.Length == 0,
            string.Join(Environment.NewLine + Environment.NewLine, failures)
        );
    }



    [Fact]
    public async Task XmlDoc_examples_are_found_in_every_documented_extension_method()
    {
        var examples = await ReadExamplesAsync();

        Assert.True(examples.Length >= 8, $"Expected at least 8 examples, found {examples.Length}.");
    }



    [Fact]
    public void Compile_when_snippet_does_not_compile_reports_an_error()
    {
        var errors = Compile("var x = ;");

        Assert.NotEmpty(errors);
    }



    [Fact]
    public void Compile_when_snippet_calls_a_missing_method_reports_an_error()
    {
        var errors = Compile("source.NoSuchExtension();");

        Assert.NotEmpty(errors);
    }



    private static async Task<string[]> ReadExamplesAsync()
    {
        var root = new DirectoryInfo(AppContext.BaseDirectory);
        while (!File.Exists(Path.Combine(root.FullName, "IEnumerable-Extensions.slnx")))
        {
            root = root.Parent!;
        }

        var path = Path.Combine(root.FullName, "src", "Wolfgang.Extensions.IEnumerable", "IEnumerableExtensions.cs");
        var lines = await File.ReadAllLinesAsync(path);

        // Rebuild each run of "///" lines as an XML fragment, then pull out the <code> blocks.
        var comments = new List<List<string>>();
        var previousWasComment = false;
        foreach (var line in lines)
        {
            var trimmed = line.TrimStart();
            var isComment = trimmed.StartsWith("///", StringComparison.Ordinal);
            if (isComment && !previousWasComment)
            {
                comments.Add(new List<string>());
            }

            if (isComment)
            {
                comments[^1].Add(trimmed.Substring(3));
            }

            previousWasComment = isComment;
        }

        return comments
            .SelectMany(comment => XElement.Parse("<doc>" + string.Join("\n", comment) + "</doc>").Descendants("example"))
            .SelectMany(example => example.Descendants("code"))
            .Select(code => code.Value)
            .ToArray();
    }



    private static string[] Compile(string snippet)
    {
        var code = "using System;\nusing System.Collections.Generic;\n"
            + "using Wolfgang.Extensions.IEnumerable;\n"
            + "static class Harness { static void Run(IEnumerable<int> source) {\n"
            + snippet
            + "\n} }";

        var references = ((string)AppContext.GetData("TRUSTED_PLATFORM_ASSEMBLIES")!)
            .Split(Path.PathSeparator)
            .Select(path => MetadataReference.CreateFromFile(path))
            .ToArray();

        var compilation = CSharpCompilation.Create
        (
            "DocExample",
            new[] { CSharpSyntaxTree.ParseText(code) },
            references,
            new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary, nullableContextOptions: NullableContextOptions.Enable)
        );

        return compilation
            .GetDiagnostics()
            .Where(diagnostic => diagnostic.Severity == DiagnosticSeverity.Error)
            .Select(diagnostic => diagnostic.ToString())
            .ToArray();
    }
}
#endif
