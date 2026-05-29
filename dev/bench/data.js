window.BENCHMARK_DATA = {
  "lastUpdate": 1780086560958,
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
      }
    ]
  }
}