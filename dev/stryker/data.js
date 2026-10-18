window.BENCHMARK_DATA = {
  "lastUpdate": 1792304489310,
  "repoUrl": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions",
  "entries": {
    "Mutation score": [
      {
        "commit": {
          "author": {
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang",
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "052be7790be84aa0c2769f59c97bcf8688e0e519",
          "message": "docs(security): take repo-template's security policy, with the disclosure process and timelines (#467)\n\nScorecard scores this repository 4/10 on Security-Policy: \"security policy file\ndetected: Warn: no linked content found\". The file exists - all twelve affected\nrepositories carry the same 735-byte stub - but Scorecard also grades its\nCONTENT, and the stub has no links, no addresses and no concrete timelines, so\nit reads as a placeholder rather than a policy someone could act on.\n\nrepo-template's version is the one that scores: it names the private advisory\nURL for this repository, links GitHub's own guidance on private reporting, and\nreplaces \"we will acknowledge within 48 hours\" with a table that commits to\nassessment and fix windows by severity - explicitly scoped to what a\nsingle-maintainer project can actually meet. It also documents the disclosure\nprocess end to end (report, triage, private fork, release, publish + CVE) and\nsays reporters are credited.\n\nThe {{GITHUB_REPO_URL}} placeholder is substituted for this repository, so the\nadvisory link is real rather than pointing at the template.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T12:28:03Z",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/052be7790be84aa0c2769f59c97bcf8688e0e519"
        },
        "date": 1790490220010,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Mutation score",
            "value": 79.49,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang",
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "052be7790be84aa0c2769f59c97bcf8688e0e519",
          "message": "docs(security): take repo-template's security policy, with the disclosure process and timelines (#467)\n\nScorecard scores this repository 4/10 on Security-Policy: \"security policy file\ndetected: Warn: no linked content found\". The file exists - all twelve affected\nrepositories carry the same 735-byte stub - but Scorecard also grades its\nCONTENT, and the stub has no links, no addresses and no concrete timelines, so\nit reads as a placeholder rather than a policy someone could act on.\n\nrepo-template's version is the one that scores: it names the private advisory\nURL for this repository, links GitHub's own guidance on private reporting, and\nreplaces \"we will acknowledge within 48 hours\" with a table that commits to\nassessment and fix windows by severity - explicitly scoped to what a\nsingle-maintainer project can actually meet. It also documents the disclosure\nprocess end to end (report, triage, private fork, release, publish + CVE) and\nsays reporters are credited.\n\nThe {{GITHUB_REPO_URL}} placeholder is substituted for this repository, so the\nadvisory link is real rather than pointing at the template.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T12:28:03Z",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/052be7790be84aa0c2769f59c97bcf8688e0e519"
        },
        "date": 1791101305918,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Mutation score",
            "value": 79.49,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f6ac35722b027ff86c5866793559c57edf3f5a1e",
          "message": "Bump nuget-license from 4.0.17 to 4.0.18 (#475)\n\n---\nupdated-dependencies:\n- dependency-name: nuget-license\n  dependency-version: 4.0.18\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-11T02:19:19Z",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/f6ac35722b027ff86c5866793559c57edf3f5a1e"
        },
        "date": 1791699783717,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Mutation score",
            "value": 79.49,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang",
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "be8c1af15912e6cc27ed3841710ef86441c44e04",
          "message": "docs: consumer-side build verification with a measured v1.4.0 worked example (#532)\n\n* test: concurrency stress tests for Shuffle's shared random and shared-source enumeration (#190)\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n\n* test: property-based tests with CsCheck against LINQ on net8+ (#185)\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n\n* docs: consumer-side build verification, with a measured v1.4.0 worked example (#207)\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n\n* test: execute every line of ConcurrencyTests when the tests pass - the failure-only increments broke the 100% test coverage gate\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Sonnet 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-18T01:19:11Z",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/be8c1af15912e6cc27ed3841710ef86441c44e04"
        },
        "date": 1792304486392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Mutation score",
            "value": 79.49,
            "unit": "%"
          }
        ]
      }
    ]
  }
}