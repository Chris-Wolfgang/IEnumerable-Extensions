type: fix

`Shuffle` on .NET Framework and the netstandard2.0 build (.NET Core 3.1, .NET 5-7) no longer risks giving two threads the same order: each thread's generator is now seeded from the operating system's random number generator instead of the clock and the thread id.
