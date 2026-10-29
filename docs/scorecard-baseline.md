# OpenSSF Scorecard baseline

The repository is scored weekly and on every push to `main` by `.github/workflows/scorecard.yaml`; the result is
published to [scorecard.dev](https://scorecard.dev/viewer/?uri=github.com/Chris-Wolfgang/IEnumerable-Extensions)
and shown by the badge in the README.

## Baseline

Measured 2026-10-19, commit `1f84442`, Scorecard v5.5.0: **overall score 7**.

| Check | Score | Why, and what is done about it |
|---|---:|---|
| Binary-Artifacts, CI-Tests, Dangerous-Workflow, Dependency-Update-Tool, License, Maintained, Packaging, SAST, Security-Policy, Token-Permissions, Vulnerabilities | 10 | Nothing to do. |
| Pinned-Dependencies | 7 | The remaining unpinned items are NuGet `restore` commands. Exact package versions are pinned in the project files and nuget.org versions are immutable, so a lock file would add a hash but not safety; `scorecard.yaml` filters those findings out of Code Scanning (it does not change the published score). |
| Branch-Protection | 4 | Reported as "not maximal" on the default branch; improving it is a repository settings change, not a code change. Tracked in #279, which carries the `blocked` label. |
| Code-Review | 0 | Single-maintainer repository: 0 of 29 changesets had a second approver. Requiring one would force an administrator bypass on every merge. Filtered from Code Scanning in `scorecard.yaml`. |
| CII-Best-Practices | 0 | Needs an external registration at bestpractices.dev; CI cannot earn it. Filtered from Code Scanning. |
| Contributors | 0 | Measures contributing organizations, which a personal project cannot influence. |
| Fuzzing | 0 | Reported as "project is not fuzzed" even though the suite has property-based tests (they were on `main` at the measured commit). Tracked in #277. |
| Signed-Releases | 0 | Releases are not signed; package signing needs a code-signing certificate (#245). The release workflow now records a SLSA provenance attestation, but no release has been cut since that step was added. |

## Floor

The floor is **7**. It only moves up: when a re-measurement is higher, raise it to the new score; never lower it
to make a drop pass.

### A change that lowers the score

Scorecard scores the default branch, not a pull request, so a drop can only be predicted before merge. A pull request
that is expected to take the published score below the floor (for example by unpinning an action, widening a
workflow's `permissions:`, or removing a security workflow) must:

1. add a changelog fragment under [`changelog/unreleased/`](../changelog/unreleased/README.md), `type: internal`,
   naming the Scorecard check that drops, the expected score, and why the drop is accepted. The fragment puts the
   drop in front of the reviewer in the diff and in the release notes after merge;
2. say the same in the pull request description.

### What catches an unexpected drop

The `floor` job in `.github/workflows/scorecard.yaml` runs after every Scorecard analysis (weekly, on each push to
`main`, and on branch-protection changes). It reads the floor from the "The floor is" line above, waits for
scorecard.dev to publish the result for the commit just analysed, and fails the run when the published score is below
the floor, or when no result for that commit appears. A red Scorecard run on `main` therefore means either a drop that
needs the changelog note above, or a regression to fix. Keep the "The floor is **N**" wording: the job parses it.

Re-measure after a release and update the baseline table, since the score depends on the day's repository state (for
example the share of recent changesets that were reviewed).
