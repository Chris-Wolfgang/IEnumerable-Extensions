type: internal

Suppress the InspectCode S2245 (pseudo-random generator) finding on the per-thread `Random` that `Shuffle` uses on net462 and netstandard2.0; shuffling is not a security context and the seed comes from the OS cryptographic generator. No behavior change.
