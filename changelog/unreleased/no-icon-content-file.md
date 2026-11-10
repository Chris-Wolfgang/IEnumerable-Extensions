type: fix

The package no longer ships `icon.ico` as a NuGet content file, so `packages.config` and `contentFiles` consumers no longer get an `icon.ico` copied into their project. The package icon (`icon.png`) is unchanged.
