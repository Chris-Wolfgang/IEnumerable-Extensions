window.BENCHMARK_DATA = {
  "lastUpdate": 1795356634322,
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
          "id": "9697053b086fb2750c22eaca4cbec5b4cd166496",
          "message": "chore(pack): stop requiring licence acceptance for the MIT package (#613)\n\nPackageRequireLicenseAcceptance=True makes Visual Studio show an\naccept-licence prompt on install. MIT does not require acceptance, so the\nprompt is only friction.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-08T02:26:38Z",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/9697053b086fb2750c22eaca4cbec5b4cd166496"
        },
        "date": 1794142343440,
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
          "id": "9033ad7b281d8d419e22cf6caf122b6a64fa8bf6",
          "message": "ci: AOT smoke workflow - publish and run every PublishAot project on linux-x64 (protected-only) (#638)\n\nReplaces #609, which GitHub marked as merged into its base branch during\nthe 2026-11-10 restack. Same workflow file (aot-smoke.yaml, job 'AOT smoke',\ncheck 'AOT smoke (linux-x64)').\n\nCo-authored-by: Claude Fable 5.1 <noreply@anthropic.com>",
          "timestamp": "2026-11-11T01:09:38Z",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/9033ad7b281d8d419e22cf6caf122b6a64fa8bf6"
        },
        "date": 1794360625726,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Mutation score",
            "value": 100,
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
          "id": "f78983917816db97fd481ccccf929ee894210c47",
          "message": "docs: verifier steps for the literal copyright year and provenance (#630) (#655)\n\n* build: use a literal copyright year instead of the build clock (#630)\n\n$([System.DateTime]::UtcNow.Year) puts the build year into\nAssemblyCopyrightAttribute, so rebuilding a tag after 1 January gives a\ndifferent binary. Use the literal \"2025-2026\" (LICENSE starts in 2025),\nmatching repo-template's comment and wording.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* docs: verifier steps for the literal copyright year and provenance (#630)\n\nREPRODUCIBLE-BUILD.md said the build depends on the calendar year;\nafter #654 only v1.4.0 and earlier do, so the -p:Copyright override is\nneeded only for those tags. Add a step 4 that checks the package's\nbuild provenance with gh attestation verify (online or with the\nrelease's provenance.sigstore.json).\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-14T23:00:29Z",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/f78983917816db97fd481ccccf929ee894210c47"
        },
        "date": 1794749612387,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Mutation score (tests/Wolfgang.Extensions.IEnumerable.Tests.Unit)",
            "value": 100,
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
          "id": "db6b7cac5862260f30412990fff47f16e41d70f2",
          "message": "docs: describe the canonical reproducible-build gate and Windows report (#630) (#692)\n\nREPRODUCIBLE-BUILD.md still described the hand-edited workflow (build twice\non each OS from two directories, and a cross-os job that fails). It now\ndescribes the canonical one: the Ubuntu same-commit double pack that gates on\n.dll/.pdb and package entries, and the Windows job that reports the cross-OS\ndiff without failing.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-20T18:52:17Z",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/db6b7cac5862260f30412990fff47f16e41d70f2"
        },
        "date": 1795356629729,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Mutation score (tests/Wolfgang.Extensions.IEnumerable.Tests.Unit)",
            "value": 100,
            "unit": "%"
          }
        ]
      }
    ]
  }
}