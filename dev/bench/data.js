window.BENCHMARK_DATA = {
  "lastUpdate": 1782582515457,
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
          "id": "3f1c34a1bbc8084a6b929fcb6519fe8c69c080fc",
          "message": "Merge pull request #179 from Chris-Wolfgang/bench/shuffle-source-breakdown-and-foreach-linq\n\nbench: restructure ShuffleBenchmarks by source type + ForEach LINQ baseline",
          "timestamp": "2026-06-02T22:32:15-04:00",
          "tree_id": "9f70c7339302684639f7232dc873efe2ad3bd0ba",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/3f1c34a1bbc8084a6b929fcb6519fe8c69c080fc"
        },
        "date": 1780454632028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.640454103549324,
            "unit": "ns",
            "range": "± 0.11648236691044841"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 513.3946030934652,
            "unit": "ns",
            "range": "± 1.5226196585999112"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 271.0945426623027,
            "unit": "ns",
            "range": "± 13.454779350664348"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3279.8937950134277,
            "unit": "ns",
            "range": "± 4.574203569148024"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 49567.2566019694,
            "unit": "ns",
            "range": "± 347.49297479945403"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 22517.733744303387,
            "unit": "ns",
            "range": "± 509.1945827571877"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 317827.6979166667,
            "unit": "ns",
            "range": "± 207.98573380461704"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4393762.395833333,
            "unit": "ns",
            "range": "± 1785.2024439683364"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1616396.42578125,
            "unit": "ns",
            "range": "± 309.2758826894069"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 70.04402387142181,
            "unit": "ns",
            "range": "± 1.2083287830902087"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 124.33296362559001,
            "unit": "ns",
            "range": "± 0.6558826820753267"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 286.238099416097,
            "unit": "ns",
            "range": "± 13.497384916575372"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 165.4513599872589,
            "unit": "ns",
            "range": "± 1.294832048305176"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 125.03735597928365,
            "unit": "ns",
            "range": "± 1.6966523361054933"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 111.80525757869084,
            "unit": "ns",
            "range": "± 2.0152338206233744"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6250.792973836263,
            "unit": "ns",
            "range": "± 19.041404631155174"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 11306.802663167318,
            "unit": "ns",
            "range": "± 977.9595412291242"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 21457.597239176434,
            "unit": "ns",
            "range": "± 3635.222004415114"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14029.117772420248,
            "unit": "ns",
            "range": "± 33.837532496828985"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 13955.712071736654,
            "unit": "ns",
            "range": "± 694.1608690947651"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 8381.51579284668,
            "unit": "ns",
            "range": "± 45.61896811278806"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 627560.58984375,
            "unit": "ns",
            "range": "± 451.7656622094261"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 1026003.4739583334,
            "unit": "ns",
            "range": "± 50257.34719969185"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1324603.7835286458,
            "unit": "ns",
            "range": "± 16748.47095062299"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1390015.0416666667,
            "unit": "ns",
            "range": "± 1220.2686278324177"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 976396.265625,
            "unit": "ns",
            "range": "± 4490.156319814177"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1414490.9847005208,
            "unit": "ns",
            "range": "± 4131.0387774541805"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 4.823031224310398,
            "unit": "ns",
            "range": "± 0.00034575513252223234"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.2835372239351273,
            "unit": "ns",
            "range": "± 0.028703982177901523"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.318935272594293,
            "unit": "ns",
            "range": "± 0.07562622065984605"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.300610808034738,
            "unit": "ns",
            "range": "± 0.065591310136883"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.7829702297846475,
            "unit": "ns",
            "range": "± 0.0017283625094063162"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.2451586400469146,
            "unit": "ns",
            "range": "± 0.0009623831682398064"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.2897034188111625,
            "unit": "ns",
            "range": "± 0.05961248823246351"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.766342769066492,
            "unit": "ns",
            "range": "± 0.2062462900933685"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.965940525134405,
            "unit": "ns",
            "range": "± 0.021164770145821805"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.901453614234924,
            "unit": "ns",
            "range": "± 0.07093226923752312"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.748723844687143,
            "unit": "ns",
            "range": "± 0.0033593225341520096"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.71039092540741,
            "unit": "ns",
            "range": "± 0.03610640408244638"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.269667357206345,
            "unit": "ns",
            "range": "± 0.1638728306753268"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.197305530309677,
            "unit": "ns",
            "range": "± 0.004810797096640775"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.284362922112146,
            "unit": "ns",
            "range": "± 0.10758222025481184"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.11469370499253273,
            "unit": "ns",
            "range": "± 0.003265178449214353"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.43031121666232747,
            "unit": "ns",
            "range": "± 0.0018389657715251941"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.5273613817989826,
            "unit": "ns",
            "range": "± 0.010997562610216305"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.259928541878859,
            "unit": "ns",
            "range": "± 0.003974315619201414"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.2715280055999756,
            "unit": "ns",
            "range": "± 0.025595750354863504"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.867180069287619,
            "unit": "ns",
            "range": "± 0.03366332318970986"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.120753029982248,
            "unit": "ns",
            "range": "± 0.13826147110383108"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 207.59609039624533,
            "unit": "ns",
            "range": "± 0.3170078366003666"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 204.17024978001913,
            "unit": "ns",
            "range": "± 0.3237854038743263"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 175.56320055325827,
            "unit": "ns",
            "range": "± 0.3939061017430697"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 176.10593183835348,
            "unit": "ns",
            "range": "± 0.6085263404338447"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 18257.08083597819,
            "unit": "ns",
            "range": "± 190.08878126909846"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17868.652231852215,
            "unit": "ns",
            "range": "± 290.31994817331866"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15706.66293334961,
            "unit": "ns",
            "range": "± 44.966185996399254"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15647.817927042643,
            "unit": "ns",
            "range": "± 17.560852752111952"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1698681.38671875,
            "unit": "ns",
            "range": "± 2925.9896278073657"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1726452.4342447917,
            "unit": "ns",
            "range": "± 17326.405814641566"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1565155.2799479167,
            "unit": "ns",
            "range": "± 459.1389950555267"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1568073.724609375,
            "unit": "ns",
            "range": "± 3065.77477451366"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 970.2201118469238,
            "unit": "ns",
            "range": "± 1.154257897475751"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 934.4135913848877,
            "unit": "ns",
            "range": "± 8.085335990963271"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 982.8502922058105,
            "unit": "ns",
            "range": "± 0.4307026762707511"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1421.051646232605,
            "unit": "ns",
            "range": "± 11.368273529393647"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 754.5416911443075,
            "unit": "ns",
            "range": "± 2.0269330196854636"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 9011.263804117838,
            "unit": "ns",
            "range": "± 13.246721093263078"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 8527.958923339844,
            "unit": "ns",
            "range": "± 24.741779517499324"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 9069.02969868978,
            "unit": "ns",
            "range": "± 48.972356779750946"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 12312.666798909506,
            "unit": "ns",
            "range": "± 123.93072244690183"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 6919.908091227214,
            "unit": "ns",
            "range": "± 58.43527882404065"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 90175.53316243489,
            "unit": "ns",
            "range": "± 444.820756655327"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 88620.65641276042,
            "unit": "ns",
            "range": "± 113.47956318683441"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 90983.9033203125,
            "unit": "ns",
            "range": "± 1478.6957789967273"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 115668.60144042969,
            "unit": "ns",
            "range": "± 253.34768823726708"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 76024.34163411458,
            "unit": "ns",
            "range": "± 539.35905660671"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 1.2476423271000385,
            "unit": "ns",
            "range": "± 0.001383375979752034"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 62.67486588160197,
            "unit": "ns",
            "range": "± 0.1666507075732273"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 30.44896360238393,
            "unit": "ns",
            "range": "± 0.059503607462918565"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 30.153233776489895,
            "unit": "ns",
            "range": "± 0.20587286884079933"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 345.9677233695984,
            "unit": "ns",
            "range": "± 0.08501208001092216"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4419.3334223429365,
            "unit": "ns",
            "range": "± 10.124948691344194"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 629.3695036570231,
            "unit": "ns",
            "range": "± 0.17475247769230007"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4791.589599609375,
            "unit": "ns",
            "range": "± 102.43505778458157"
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
          "id": "6b4914642477c7159b2631def74084f78721e9a6",
          "message": "Merge pull request #215 from Chris-Wolfgang/dependabot/github_actions/github-actions-39b8605068\n\nbuild(deps): bump the github-actions group with 2 updates",
          "timestamp": "2026-06-27T13:36:53-04:00",
          "tree_id": "b1f0a4121d4444eb115829127744b68360726b95",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/6b4914642477c7159b2631def74084f78721e9a6"
        },
        "date": 1782582513334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.50218911965688,
            "unit": "ns",
            "range": "± 0.08239210737520077"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 509.9982023239136,
            "unit": "ns",
            "range": "± 1.89041344424521"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 274.1157259941101,
            "unit": "ns",
            "range": "± 2.2966421567744164"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3272.6583201090493,
            "unit": "ns",
            "range": "± 6.677363833304191"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 50078.056396484375,
            "unit": "ns",
            "range": "± 228.7852700155149"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 22518.620107014973,
            "unit": "ns",
            "range": "± 525.9845238468032"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 317739.0383300781,
            "unit": "ns",
            "range": "± 505.2803852614879"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4712943.611979167,
            "unit": "ns",
            "range": "± 7023.326199594046"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1649585.8489583333,
            "unit": "ns",
            "range": "± 11201.572566082927"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 69.7396264274915,
            "unit": "ns",
            "range": "± 0.8885721355635972"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 123.82959580421448,
            "unit": "ns",
            "range": "± 0.14687566534581303"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 260.25653616587323,
            "unit": "ns",
            "range": "± 8.59969262972757"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 161.4649985631307,
            "unit": "ns",
            "range": "± 1.2686720516173566"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 122.96413365999858,
            "unit": "ns",
            "range": "± 0.2107800022380104"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 110.3576476375262,
            "unit": "ns",
            "range": "± 1.4061951138322915"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6256.291488647461,
            "unit": "ns",
            "range": "± 10.079073678645138"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10229.800989786783,
            "unit": "ns",
            "range": "± 59.046045172092576"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 24049.84557088216,
            "unit": "ns",
            "range": "± 2515.0740174732923"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14036.691462198893,
            "unit": "ns",
            "range": "± 47.97853972398853"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 10600.327285766602,
            "unit": "ns",
            "range": "± 735.1465897398579"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 8552.905303955078,
            "unit": "ns",
            "range": "± 24.362401892659495"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 628310.6744791666,
            "unit": "ns",
            "range": "± 714.6909757490976"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 977298.0065104166,
            "unit": "ns",
            "range": "± 1198.5034979264055"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1383059.57421875,
            "unit": "ns",
            "range": "± 7976.283794596797"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1389582.33203125,
            "unit": "ns",
            "range": "± 1182.8269733997763"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 975223.96875,
            "unit": "ns",
            "range": "± 4974.84027595261"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1426502.8424479167,
            "unit": "ns",
            "range": "± 1888.3136921218324"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.8134224514166513,
            "unit": "ns",
            "range": "± 0.05951202058197294"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.265273573497931,
            "unit": "ns",
            "range": "± 0.008962382351914244"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.493113880356153,
            "unit": "ns",
            "range": "± 0.0034342220470252906"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.49152414749066,
            "unit": "ns",
            "range": "± 0.023490659702062766"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.785449095070362,
            "unit": "ns",
            "range": "± 0.0037821779541214588"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.2479975695411363,
            "unit": "ns",
            "range": "± 0.00239083085203884"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.286945052444935,
            "unit": "ns",
            "range": "± 0.02099609440318243"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.530985216299692,
            "unit": "ns",
            "range": "± 0.016959393311266648"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.949153353770575,
            "unit": "ns",
            "range": "± 0.019193081452117264"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.834073682626089,
            "unit": "ns",
            "range": "± 0.05383517781075099"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.917065173387527,
            "unit": "ns",
            "range": "± 0.06451499450807764"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.687672307093939,
            "unit": "ns",
            "range": "± 0.056358100066511554"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 14.995798846085867,
            "unit": "ns",
            "range": "± 0.004680679678021389"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.143831074237823,
            "unit": "ns",
            "range": "± 0.07453339303166487"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.211907257636389,
            "unit": "ns",
            "range": "± 0.0958116754932409"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.11910751337806384,
            "unit": "ns",
            "range": "± 0.004480605677133496"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.3719949821631114,
            "unit": "ns",
            "range": "± 0.025151386834945503"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.5294746980071068,
            "unit": "ns",
            "range": "± 0.018412243075345357"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.270713746547699,
            "unit": "ns",
            "range": "± 0.006326430334582533"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.429362967610359,
            "unit": "ns",
            "range": "± 0.00903246420449654"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.86002347866694,
            "unit": "ns",
            "range": "± 0.06374869061017031"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.105866601069769,
            "unit": "ns",
            "range": "± 0.009462158403683587"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 201.6269544760386,
            "unit": "ns",
            "range": "± 0.3681084403110711"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 205.07117327054343,
            "unit": "ns",
            "range": "± 0.20334458150051135"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 176.00358851750693,
            "unit": "ns",
            "range": "± 0.6288125556792016"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 176.95490757624307,
            "unit": "ns",
            "range": "± 0.648622079073114"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 18030.972259521484,
            "unit": "ns",
            "range": "± 182.80539267279627"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17663.628641764324,
            "unit": "ns",
            "range": "± 60.417177550239266"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15650.51178487142,
            "unit": "ns",
            "range": "± 30.726868069721654"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15658.664255777994,
            "unit": "ns",
            "range": "± 26.077941257362998"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1698633.7552083333,
            "unit": "ns",
            "range": "± 1688.2966621695516"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1711284.994140625,
            "unit": "ns",
            "range": "± 145.53677412070107"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1565930.40234375,
            "unit": "ns",
            "range": "± 486.64509000936044"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1565835.77734375,
            "unit": "ns",
            "range": "± 1641.008344675544"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 974.825277964274,
            "unit": "ns",
            "range": "± 2.9875354885691023"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 925.0755742390951,
            "unit": "ns",
            "range": "± 2.2119604023566666"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 973.0799051920573,
            "unit": "ns",
            "range": "± 2.107548270342552"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1409.9933268229167,
            "unit": "ns",
            "range": "± 2.556570020840882"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 745.0896313985189,
            "unit": "ns",
            "range": "± 1.2273891772004777"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 9236.739967346191,
            "unit": "ns",
            "range": "± 23.859318641794992"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 8581.974751790365,
            "unit": "ns",
            "range": "± 19.268071811177062"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 9051.247934977213,
            "unit": "ns",
            "range": "± 6.86167482338363"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 12120.43123881022,
            "unit": "ns",
            "range": "± 5.96364842712797"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 6868.106928507487,
            "unit": "ns",
            "range": "± 22.219320511082017"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 89054.69242350261,
            "unit": "ns",
            "range": "± 149.8934082086967"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 88569.40787760417,
            "unit": "ns",
            "range": "± 64.58338856634475"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 89508.51017252605,
            "unit": "ns",
            "range": "± 155.91051660750512"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 117683.58581542969,
            "unit": "ns",
            "range": "± 647.805209676554"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 69180.04107666016,
            "unit": "ns",
            "range": "± 84.39781616772852"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.933653981735309,
            "unit": "ns",
            "range": "± 0.0009463437891101948"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 31.909775882959366,
            "unit": "ns",
            "range": "± 0.04618000827285533"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 33.50928842027982,
            "unit": "ns",
            "range": "± 0.1853189571834091"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 30.647839069366455,
            "unit": "ns",
            "range": "± 0.10525260025152151"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 346.5412877400716,
            "unit": "ns",
            "range": "± 0.6249100868460801"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4110.019938151042,
            "unit": "ns",
            "range": "± 12.843589599564536"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 629.4949436187744,
            "unit": "ns",
            "range": "± 0.6555370000836198"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4744.5612233479815,
            "unit": "ns",
            "range": "± 10.02163683832315"
          }
        ]
      }
    ]
  }
}