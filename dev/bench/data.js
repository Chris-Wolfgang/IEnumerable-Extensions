window.BENCHMARK_DATA = {
  "lastUpdate": 1780453380039,
  "repoUrl": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions",
  "entries": {
    "BenchmarkDotNet": [
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed4d9e81358e2cb2041dfe2096dc69bf5e82a311",
          "message": "Merge pull request #135 from Chris-Wolfgang/canonical-protected\n\nCanonical-protected: C1 drift + nullable + S1 + D6 + D8 + A1 + CI3 + T1 + T3",
          "timestamp": "2026-05-29T14:59:42-04:00",
          "tree_id": "1e58ed448c7978b5ae87f94ec6398c13cc12ab45",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/ed4d9e81358e2cb2041dfe2096dc69bf5e82a311"
        },
        "date": 1780081640129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.56619062026342,
            "unit": "ns",
            "range": "± 0.05234635075672916"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 513.9803911844889,
            "unit": "ns",
            "range": "± 7.685680024270903"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 275.53897015253705,
            "unit": "ns",
            "range": "± 1.521643661890446"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3281.562887827555,
            "unit": "ns",
            "range": "± 17.21705575504936"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 50026.478535970055,
            "unit": "ns",
            "range": "± 261.49722753722307"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 22825.080800374348,
            "unit": "ns",
            "range": "± 310.33729986547127"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 315835.3277994792,
            "unit": "ns",
            "range": "± 782.4688036151399"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4697713.278645833,
            "unit": "ns",
            "range": "± 1592.6525300969915"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1633982.8639322917,
            "unit": "ns",
            "range": "± 22148.00720682533"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 69.64921740690868,
            "unit": "ns",
            "range": "± 0.07820024493508386"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 125.26565353075664,
            "unit": "ns",
            "range": "± 0.2533984602670645"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 297.3223255475362,
            "unit": "ns",
            "range": "± 4.0780934716340935"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 164.69353103637695,
            "unit": "ns",
            "range": "± 0.46033370135005147"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 124.46395548184712,
            "unit": "ns",
            "range": "± 1.4005755001693558"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6253.378562927246,
            "unit": "ns",
            "range": "± 18.28823138457238"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10702.961522420248,
            "unit": "ns",
            "range": "± 223.36302204463942"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 27820.516896565754,
            "unit": "ns",
            "range": "± 590.3465071768521"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14005.2429300944,
            "unit": "ns",
            "range": "± 29.23153176806543"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 11824.73935953776,
            "unit": "ns",
            "range": "± 2317.9970494367667"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 626352.3779296875,
            "unit": "ns",
            "range": "± 666.9135394063768"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 1021521.3385416666,
            "unit": "ns",
            "range": "± 51032.153163790295"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1414999.8190104167,
            "unit": "ns",
            "range": "± 5426.076670664014"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1401664.3938802083,
            "unit": "ns",
            "range": "± 10386.948644804239"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 971503.5520833334,
            "unit": "ns",
            "range": "± 728.4108244548146"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.7720228855808577,
            "unit": "ns",
            "range": "± 0.003128830303424583"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.255056694149971,
            "unit": "ns",
            "range": "± 0.004128434696296662"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.253178983926773,
            "unit": "ns",
            "range": "± 0.005800791516981369"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.220878300567468,
            "unit": "ns",
            "range": "± 0.00605274613174773"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.7936709225177765,
            "unit": "ns",
            "range": "± 0.003780394640849467"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.2700843388835588,
            "unit": "ns",
            "range": "± 0.042096516575217666"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.2525304406881332,
            "unit": "ns",
            "range": "± 0.0014967545427477264"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.689258595307669,
            "unit": "ns",
            "range": "± 0.007408154473817984"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.875876436630884,
            "unit": "ns",
            "range": "± 0.02095187008170466"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.935952524344126,
            "unit": "ns",
            "range": "± 0.08950100039034252"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.887979686260223,
            "unit": "ns",
            "range": "± 0.03189580286437709"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.619007458289465,
            "unit": "ns",
            "range": "± 0.09249776672119688"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.097346832354864,
            "unit": "ns",
            "range": "± 0.012402241266258865"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.142632027467092,
            "unit": "ns",
            "range": "± 0.002397942415387805"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.303430795669556,
            "unit": "ns",
            "range": "± 0.09520775195753292"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 202.46062874794006,
            "unit": "ns",
            "range": "± 1.2393525467895612"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 203.7647863229116,
            "unit": "ns",
            "range": "± 0.9696578864227092"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 175.69710024197897,
            "unit": "ns",
            "range": "± 0.5863936328597684"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 176.15497573216757,
            "unit": "ns",
            "range": "± 0.5896928593186418"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 17873.920979817707,
            "unit": "ns",
            "range": "± 68.44164355621217"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17767.012786865234,
            "unit": "ns",
            "range": "± 63.604234632002026"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15649.975067138672,
            "unit": "ns",
            "range": "± 21.518630426397785"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15645.447998046875,
            "unit": "ns",
            "range": "± 12.096300815485838"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1694833.037109375,
            "unit": "ns",
            "range": "± 2047.8127693631318"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1707715.7493489583,
            "unit": "ns",
            "range": "± 1058.1340839630716"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1566472.9303385417,
            "unit": "ns",
            "range": "± 1469.4941644105995"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1569778.09765625,
            "unit": "ns",
            "range": "± 6426.736480215211"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Small",
            "value": 966.7960879007975,
            "unit": "ns",
            "range": "± 4.293441659124235"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Small",
            "value": 967.6888618469238,
            "unit": "ns",
            "range": "± 6.110073656631636"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Medium",
            "value": 9300.636037190756,
            "unit": "ns",
            "range": "± 42.478028178954524"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Medium",
            "value": 9132.35764058431,
            "unit": "ns",
            "range": "± 23.49404817422507"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Large",
            "value": 90413.58052571614,
            "unit": "ns",
            "range": "± 142.36278272771688"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Large",
            "value": 88922.64803059895,
            "unit": "ns",
            "range": "± 64.37339077418842"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edc28a06de7503418dd3a88b16535b6dafd53dc7",
          "message": "Merge pull request #153 from Chris-Wolfgang/vNext\n\nvNext: IEnumerable-Extensions integration → main",
          "timestamp": "2026-05-29T16:20:59-04:00",
          "tree_id": "b0e4e98b1972823108d6f581224af1522555b626",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/edc28a06de7503418dd3a88b16535b6dafd53dc7"
        },
        "date": 1780086560100,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 40.83241815368334,
            "unit": "ns",
            "range": "± 0.056078715109778784"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 510.78583908081055,
            "unit": "ns",
            "range": "± 3.237117372954655"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 273.91948016484577,
            "unit": "ns",
            "range": "± 1.2615976439276413"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3403.110051472982,
            "unit": "ns",
            "range": "± 6.5210855430680335"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 50321.80261230469,
            "unit": "ns",
            "range": "± 229.70704424166135"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 25372.691263834637,
            "unit": "ns",
            "range": "± 2433.253061367481"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 326212.98258463544,
            "unit": "ns",
            "range": "± 889.4149645468708"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4427530.833333333,
            "unit": "ns",
            "range": "± 28779.102768305722"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1617872.7428385417,
            "unit": "ns",
            "range": "± 4407.534382730846"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 68.92905606826146,
            "unit": "ns",
            "range": "± 0.23462081027160045"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 123.74187103907268,
            "unit": "ns",
            "range": "± 0.7790097324291242"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 240.96355636914572,
            "unit": "ns",
            "range": "± 7.6276681021557176"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 162.10259048144022,
            "unit": "ns",
            "range": "± 0.7361223696552444"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 121.30093336105347,
            "unit": "ns",
            "range": "± 0.48067600326965665"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6254.736249287923,
            "unit": "ns",
            "range": "± 15.90614604942393"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10661.445332845053,
            "unit": "ns",
            "range": "± 437.618819095732"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 22685.92139180501,
            "unit": "ns",
            "range": "± 3489.592799814148"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14007.093119303385,
            "unit": "ns",
            "range": "± 28.815184056159733"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 10478.768895467123,
            "unit": "ns",
            "range": "± 291.36535814066593"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 626157.5081380209,
            "unit": "ns",
            "range": "± 191.99830104238458"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 976232.625,
            "unit": "ns",
            "range": "± 3916.1914472998246"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1402921.798828125,
            "unit": "ns",
            "range": "± 16381.759400656365"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1398163.3587239583,
            "unit": "ns",
            "range": "± 6310.387930735609"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 1007113.7604166666,
            "unit": "ns",
            "range": "± 55531.272515331"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.7677904441952705,
            "unit": "ns",
            "range": "± 0.0030112304953779927"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.2423305536309877,
            "unit": "ns",
            "range": "± 0.0030487960040632904"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.2528064077099166,
            "unit": "ns",
            "range": "± 0.0007934406294046064"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.252422926326593,
            "unit": "ns",
            "range": "± 0.012228832965599968"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.9222286666433015,
            "unit": "ns",
            "range": "± 0.009571681797481324"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.2373410214980445,
            "unit": "ns",
            "range": "± 0.0025870637747903214"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.247020257016023,
            "unit": "ns",
            "range": "± 0.0012248153376181838"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.662157277266184,
            "unit": "ns",
            "range": "± 0.03322709863334217"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.989094833532969,
            "unit": "ns",
            "range": "± 0.06099951329568545"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 15.336053013801575,
            "unit": "ns",
            "range": "± 0.11181339828721232"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.903568287690481,
            "unit": "ns",
            "range": "± 0.03985819189765365"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.611657698949179,
            "unit": "ns",
            "range": "± 0.037273066101566305"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.081626822551092,
            "unit": "ns",
            "range": "± 0.00478881304573139"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 14.55859229962031,
            "unit": "ns",
            "range": "± 0.04485089361869965"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 17.708526333173115,
            "unit": "ns",
            "range": "± 0.10913208206670388"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 204.30421129862467,
            "unit": "ns",
            "range": "± 0.644716941604681"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 204.10826047261557,
            "unit": "ns",
            "range": "± 0.621354636869547"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 176.07748675346375,
            "unit": "ns",
            "range": "± 0.8313487209301349"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 176.13420836130777,
            "unit": "ns",
            "range": "± 0.41854259616445"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 17934.50747680664,
            "unit": "ns",
            "range": "± 138.88377973935204"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17807.889409383137,
            "unit": "ns",
            "range": "± 78.56200378988571"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15667.51276143392,
            "unit": "ns",
            "range": "± 34.0460625129689"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15657.508646647135,
            "unit": "ns",
            "range": "± 22.33612023880277"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1691052.416015625,
            "unit": "ns",
            "range": "± 2446.3015757780945"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1714692.7395833333,
            "unit": "ns",
            "range": "± 1013.306970500798"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1564999.2903645833,
            "unit": "ns",
            "range": "± 258.9047142988545"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1567440.83203125,
            "unit": "ns",
            "range": "± 2208.9488142161085"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Small",
            "value": 949.8406712214152,
            "unit": "ns",
            "range": "± 1.8288513890951625"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Small",
            "value": 955.1785141626993,
            "unit": "ns",
            "range": "± 3.6085143981546"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Medium",
            "value": 9174.309936523438,
            "unit": "ns",
            "range": "± 12.323410267966143"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Medium",
            "value": 9180.95448811849,
            "unit": "ns",
            "range": "± 24.204437392436326"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Large",
            "value": 90031.40881347656,
            "unit": "ns",
            "range": "± 415.75283786793426"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Large",
            "value": 91082.08203125,
            "unit": "ns",
            "range": "± 214.09519913485312"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78a11abad6a83636d2ac0cc8039459ad9d2754f6",
          "message": "Merge pull request #158 from Chris-Wolfgang/vNext\n\nv1.3.0: add public ToEnumerable<T>() extension",
          "timestamp": "2026-05-30T09:23:29-04:00",
          "tree_id": "e585117ca39044c45eb71dd61b060fb49d6ac8d0",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/78a11abad6a83636d2ac0cc8039459ad9d2754f6"
        },
        "date": 1780147911017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 28.6101699868838,
            "unit": "ns",
            "range": "± 0.2970215391548364"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 441.66711219151813,
            "unit": "ns",
            "range": "± 0.8510695558538666"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 162.633172194163,
            "unit": "ns",
            "range": "± 0.27300580736153335"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 2839.5285275777183,
            "unit": "ns",
            "range": "± 9.105972948637724"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 38542.15107218424,
            "unit": "ns",
            "range": "± 127.8772202571418"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 13183.146876017252,
            "unit": "ns",
            "range": "± 12.103741141370344"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 278990.50862630206,
            "unit": "ns",
            "range": "± 1168.0357787470423"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 3842257.7447916665,
            "unit": "ns",
            "range": "± 6952.921950138621"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1312027.291015625,
            "unit": "ns",
            "range": "± 2378.769177347598"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 55.01223239302635,
            "unit": "ns",
            "range": "± 0.04527078331707138"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 88.44920053084691,
            "unit": "ns",
            "range": "± 1.5976586100953194"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 136.2497185866038,
            "unit": "ns",
            "range": "± 0.3887849370223606"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 128.59394534428915,
            "unit": "ns",
            "range": "± 0.20001518507249527"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 87.57350595792134,
            "unit": "ns",
            "range": "± 0.3656102088960458"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 5479.216448465983,
            "unit": "ns",
            "range": "± 7.157898741312551"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 7441.70674387614,
            "unit": "ns",
            "range": "± 28.60703351556963"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 11412.38215382894,
            "unit": "ns",
            "range": "± 31.144864962575955"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 11161.216161092123,
            "unit": "ns",
            "range": "± 61.905184132582356"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 7450.991806030273,
            "unit": "ns",
            "range": "± 14.705157496886674"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 547543.7887369791,
            "unit": "ns",
            "range": "± 220.13185910512615"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 741963.984375,
            "unit": "ns",
            "range": "± 2875.678473961912"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1123001.5540364583,
            "unit": "ns",
            "range": "± 388.7674575287598"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1107070.2688802083,
            "unit": "ns",
            "range": "± 346.21029503924944"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 744991.59375,
            "unit": "ns",
            "range": "± 2824.2819417312357"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 2.9386540601650872,
            "unit": "ns",
            "range": "± 0.00216532494610783"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 1.913373497625192,
            "unit": "ns",
            "range": "± 0.002666449882731915"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 1.8107132812341054,
            "unit": "ns",
            "range": "± 0.002267368393087316"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 1.9144593365490437,
            "unit": "ns",
            "range": "± 0.004230043620873674"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 2.9818672661979995,
            "unit": "ns",
            "range": "± 0.014413538536409991"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 1.9115584467848141,
            "unit": "ns",
            "range": "± 0.0008129182239046512"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.306480551759402,
            "unit": "ns",
            "range": "± 0.019983678363334204"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 13.242365310589472,
            "unit": "ns",
            "range": "± 0.03260972099340765"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 12.612424716353416,
            "unit": "ns",
            "range": "± 0.03383720434476165"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 12.68348197142283,
            "unit": "ns",
            "range": "± 0.03335943676060056"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 12.60637124379476,
            "unit": "ns",
            "range": "± 0.004197539614453663"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 13.487808843453726,
            "unit": "ns",
            "range": "± 0.0015576540049305207"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 12.959394231438637,
            "unit": "ns",
            "range": "± 0.00731939033048126"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 12.951019634803137,
            "unit": "ns",
            "range": "± 0.007682492300427526"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 12.937850733598074,
            "unit": "ns",
            "range": "± 0.011208919825867603"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 157.4015154838562,
            "unit": "ns",
            "range": "± 3.5029120039382264"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 157.10585029919943,
            "unit": "ns",
            "range": "± 0.30210965066228157"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 130.4124142328898,
            "unit": "ns",
            "range": "± 0.35391231794116745"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 129.02123761177063,
            "unit": "ns",
            "range": "± 0.4235260942437465"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 14069.014994303385,
            "unit": "ns",
            "range": "± 28.84976887273217"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 14145.485219319662,
            "unit": "ns",
            "range": "± 40.60546768911854"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 11961.055135091146,
            "unit": "ns",
            "range": "± 30.511084510556504"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 12079.116104125977,
            "unit": "ns",
            "range": "± 9.230723849561999"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1403290.0960286458,
            "unit": "ns",
            "range": "± 2264.604468149938"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1402978.8216145833,
            "unit": "ns",
            "range": "± 1683.7392262118594"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1207532.794921875,
            "unit": "ns",
            "range": "± 4363.66015920697"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1193143.8782552083,
            "unit": "ns",
            "range": "± 1632.71975668472"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Small",
            "value": 779.3893295923868,
            "unit": "ns",
            "range": "± 2.2987278359996686"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Small",
            "value": 788.644611676534,
            "unit": "ns",
            "range": "± 1.335250031086033"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Medium",
            "value": 7379.098937988281,
            "unit": "ns",
            "range": "± 18.565234054943797"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Medium",
            "value": 7426.887936909993,
            "unit": "ns",
            "range": "± 13.119127734902092"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Large",
            "value": 67822.193359375,
            "unit": "ns",
            "range": "± 71.86898515007883"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Large",
            "value": 69414.50638834636,
            "unit": "ns",
            "range": "± 100.10276574359632"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36615f7f63b9d90de11bd8e30ab11753099dc136",
          "message": "Merge pull request #178 from Chris-Wolfgang/fix/bench-toenumerable-consume\n\nfix(bench): materialize ToEnumerableBenchmarks results (unbreaks benchmarks.yaml)",
          "timestamp": "2026-06-02T22:12:33-04:00",
          "tree_id": "56a90fce15680a59d09ba0b730bfdc160ebd677d",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/36615f7f63b9d90de11bd8e30ab11753099dc136"
        },
        "date": 1780453379045,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.66862487792969,
            "unit": "ns",
            "range": "± 0.10074107210164666"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 512.1495714187622,
            "unit": "ns",
            "range": "± 1.3585890928859563"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 275.55821736653644,
            "unit": "ns",
            "range": "± 0.5490630195464818"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3290.040128072103,
            "unit": "ns",
            "range": "± 19.160265936906246"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 49671.01477050781,
            "unit": "ns",
            "range": "± 134.0778670194437"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 22841.725341796875,
            "unit": "ns",
            "range": "± 254.28453647293134"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 319518.77815755206,
            "unit": "ns",
            "range": "± 2123.281248018364"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4698799.080729167,
            "unit": "ns",
            "range": "± 6587.512789483391"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1615712.2610677083,
            "unit": "ns",
            "range": "± 446.4873395978126"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 69.29771773020427,
            "unit": "ns",
            "range": "± 0.1587570662479542"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 129.7474635442098,
            "unit": "ns",
            "range": "± 0.4202132091940584"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 306.42553520202637,
            "unit": "ns",
            "range": "± 4.418897383438666"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 162.3595670859019,
            "unit": "ns",
            "range": "± 0.9612898165027203"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 124.27826118469238,
            "unit": "ns",
            "range": "± 0.9494200235580627"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6282.370363871257,
            "unit": "ns",
            "range": "± 24.84842387373676"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10245.888509114584,
            "unit": "ns",
            "range": "± 215.853849352084"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 21924.40627034505,
            "unit": "ns",
            "range": "± 4693.70562407311"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14000.744150797525,
            "unit": "ns",
            "range": "± 37.79289192895553"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 12939.868036905924,
            "unit": "ns",
            "range": "± 2233.260901188377"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 626141.009765625,
            "unit": "ns",
            "range": "± 754.8802835065122"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 973070.1536458334,
            "unit": "ns",
            "range": "± 2340.111401980165"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1375861.4401041667,
            "unit": "ns",
            "range": "± 410.61303317410784"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1394284.3040364583,
            "unit": "ns",
            "range": "± 2248.043927437466"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 978844.3489583334,
            "unit": "ns",
            "range": "± 3657.785505771726"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.8198102712631226,
            "unit": "ns",
            "range": "± 0.07178663979418819"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.2994098340471587,
            "unit": "ns",
            "range": "± 0.01529428192275298"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.266143813729286,
            "unit": "ns",
            "range": "± 0.002772588337259297"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.3008218680818877,
            "unit": "ns",
            "range": "± 0.001884692199748123"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.7750826627016068,
            "unit": "ns",
            "range": "± 0.004021364156900624"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.2691984673341117,
            "unit": "ns",
            "range": "± 0.023858503810056726"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.3431551357110343,
            "unit": "ns",
            "range": "± 0.0016362546672966103"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.483622451623281,
            "unit": "ns",
            "range": "± 0.08807524875795665"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.867861578861872,
            "unit": "ns",
            "range": "± 0.047347162424041016"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.866885532935461,
            "unit": "ns",
            "range": "± 0.013465084322031229"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 15.003195514281591,
            "unit": "ns",
            "range": "± 0.011409006811556885"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.613958458105722,
            "unit": "ns",
            "range": "± 0.07729803319370086"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.136765321095785,
            "unit": "ns",
            "range": "± 0.03162912666398142"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.23489354054133,
            "unit": "ns",
            "range": "± 0.044850232145578026"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.272899270057678,
            "unit": "ns",
            "range": "± 0.04731672379862271"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.121633547047774,
            "unit": "ns",
            "range": "± 0.009207202498705585"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.3494157853225867,
            "unit": "ns",
            "range": "± 0.0010709646360558805"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.49859900027513504,
            "unit": "ns",
            "range": "± 0.026529193064585472"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.261442599197229,
            "unit": "ns",
            "range": "± 0.0025413214197967733"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.3220628847678504,
            "unit": "ns",
            "range": "± 0.004235744833626319"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 15.857316255569458,
            "unit": "ns",
            "range": "± 0.03827105656469848"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.144523561000824,
            "unit": "ns",
            "range": "± 0.02798096601455152"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 212.68806544939676,
            "unit": "ns",
            "range": "± 0.20846001798105832"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 208.7224300702413,
            "unit": "ns",
            "range": "± 0.6407040638637743"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 176.08224749565125,
            "unit": "ns",
            "range": "± 0.5658903583632369"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 176.51916869481406,
            "unit": "ns",
            "range": "± 0.5259373499528308"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 17960.42707316081,
            "unit": "ns",
            "range": "± 109.93264594433093"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17737.0576171875,
            "unit": "ns",
            "range": "± 64.53228898140705"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15682.781707763672,
            "unit": "ns",
            "range": "± 42.79359445619367"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15643.039469401041,
            "unit": "ns",
            "range": "± 22.691608782874486"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1697673.2389322917,
            "unit": "ns",
            "range": "± 8547.956516269142"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1711425.595703125,
            "unit": "ns",
            "range": "± 2352.695895010566"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1563120.3597005208,
            "unit": "ns",
            "range": "± 444.4445587199912"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1568165.9947916667,
            "unit": "ns",
            "range": "± 10239.629062068581"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Small",
            "value": 930.6111707687378,
            "unit": "ns",
            "range": "± 0.1593813534699823"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Small",
            "value": 975.511671702067,
            "unit": "ns",
            "range": "± 2.792646419767137"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Medium",
            "value": 8651.59017944336,
            "unit": "ns",
            "range": "± 55.40468493258782"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Medium",
            "value": 9096.982116699219,
            "unit": "ns",
            "range": "± 74.06849528681093"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.CurrentImplementation_Large",
            "value": 90003.93764241536,
            "unit": "ns",
            "range": "± 197.63472628064878"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.FisherYates_Large",
            "value": 90550.14510091145,
            "unit": "ns",
            "range": "± 661.1971075672051"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 1.2460665665566921,
            "unit": "ns",
            "range": "± 0.0008338337828029237"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 32.33020541071892,
            "unit": "ns",
            "range": "± 0.06531984960548608"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 30.92903260389964,
            "unit": "ns",
            "range": "± 0.3072344350627989"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 30.950245916843414,
            "unit": "ns",
            "range": "± 0.22628305056219888"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 351.0078206062317,
            "unit": "ns",
            "range": "± 2.4694537811523274"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4110.473650614421,
            "unit": "ns",
            "range": "± 9.904377215101146"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 629.0709740320841,
            "unit": "ns",
            "range": "± 0.2066584032222924"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4743.533429463704,
            "unit": "ns",
            "range": "± 11.89718928898794"
          }
        ]
      }
    ]
  }
}