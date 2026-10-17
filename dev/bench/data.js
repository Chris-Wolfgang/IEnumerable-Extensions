window.BENCHMARK_DATA = {
  "lastUpdate": 1792262370194,
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
          "id": "2d0d5eea34f1c8497ae89881d5a5f2332a8e6079",
          "message": "Merge pull request #233 from Chris-Wolfgang/dependabot/github_actions/github-actions-b93e283e24\n\nchore(deps): bump the github-actions group with 2 updates",
          "timestamp": "2026-07-24T15:22:30-04:00",
          "tree_id": "95bbb596f73cdc1278b1ba867cfc4fb70892b602",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/2d0d5eea34f1c8497ae89881d5a5f2332a8e6079"
        },
        "date": 1784921651102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.84860615928968,
            "unit": "ns",
            "range": "± 0.1379007900015909"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 510.87561321258545,
            "unit": "ns",
            "range": "± 1.2917370416126248"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 277.3557120958964,
            "unit": "ns",
            "range": "± 4.557137655938265"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3271.9948692321777,
            "unit": "ns",
            "range": "± 1.3085523277470588"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 49181.28747558594,
            "unit": "ns",
            "range": "± 796.5110531103633"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 22541.254521687824,
            "unit": "ns",
            "range": "± 250.48587079707286"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 316972.7477213542,
            "unit": "ns",
            "range": "± 71.84487649721106"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4403900.403645833,
            "unit": "ns",
            "range": "± 6041.646587059731"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1616640.7623697917,
            "unit": "ns",
            "range": "± 2467.9050477960423"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 69.37972939014435,
            "unit": "ns",
            "range": "± 0.07271015562250333"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 126.03787795702617,
            "unit": "ns",
            "range": "± 0.0966530044058991"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 308.98230091730755,
            "unit": "ns",
            "range": "± 1.4120427008252474"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 165.9878298441569,
            "unit": "ns",
            "range": "± 1.0834301395075816"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 124.61320161819458,
            "unit": "ns",
            "range": "± 0.6892499896068236"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 114.51640681425731,
            "unit": "ns",
            "range": "± 1.2156160758437107"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6246.3212331136065,
            "unit": "ns",
            "range": "± 0.6667855185412451"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10721.94211324056,
            "unit": "ns",
            "range": "± 212.1241882968901"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 19723.095926920574,
            "unit": "ns",
            "range": "± 2280.002276905231"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 13998.661290486654,
            "unit": "ns",
            "range": "± 35.959640272347784"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 11140.851028442383,
            "unit": "ns",
            "range": "± 305.03903006885344"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 8970.186940511068,
            "unit": "ns",
            "range": "± 58.59437175850862"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 626606.517578125,
            "unit": "ns",
            "range": "± 899.8525390307057"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 977812.3463541666,
            "unit": "ns",
            "range": "± 5060.501196034031"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1413981.9375,
            "unit": "ns",
            "range": "± 26236.41754493997"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1437101.3128255208,
            "unit": "ns",
            "range": "± 68841.70107819035"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 974104.8229166666,
            "unit": "ns",
            "range": "± 3183.9586829311447"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1405616.5384114583,
            "unit": "ns",
            "range": "± 2433.9054121559475"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.7704757129152617,
            "unit": "ns",
            "range": "± 0.0027096379029615263"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.368909887969494,
            "unit": "ns",
            "range": "± 0.0019879087901981036"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.2684794267018638,
            "unit": "ns",
            "range": "± 0.007158622291197265"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.260697295268377,
            "unit": "ns",
            "range": "± 0.009165899688380262"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.7887242287397385,
            "unit": "ns",
            "range": "± 0.014415745133216772"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.279498895009359,
            "unit": "ns",
            "range": "± 0.03522560430829756"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.2586648960908255,
            "unit": "ns",
            "range": "± 0.028451891039901585"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 16.59448359409968,
            "unit": "ns",
            "range": "± 0.014637256679869527"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.952162712812424,
            "unit": "ns",
            "range": "± 0.011105952536052177"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.860308825969696,
            "unit": "ns",
            "range": "± 0.04798316204081544"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 15.858543634414673,
            "unit": "ns",
            "range": "± 0.046587230121641315"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.582557866970697,
            "unit": "ns",
            "range": "± 0.03583176558673998"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.071724951267242,
            "unit": "ns",
            "range": "± 0.027883699283747235"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.156774898370108,
            "unit": "ns",
            "range": "± 0.023991440428513255"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.279768645763397,
            "unit": "ns",
            "range": "± 0.08256987122512324"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.126520407696565,
            "unit": "ns",
            "range": "± 0.0041786378024762615"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.3183818223575751,
            "unit": "ns",
            "range": "± 0.0013937876809623857"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.5547233174244562,
            "unit": "ns",
            "range": "± 0.02611761434037474"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.2576526825626693,
            "unit": "ns",
            "range": "± 0.004962373133906068"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.258061816294988,
            "unit": "ns",
            "range": "± 0.002413996595349362"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.894617011149725,
            "unit": "ns",
            "range": "± 0.06129162081038682"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.155913164218267,
            "unit": "ns",
            "range": "± 0.060439677602369714"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 211.17202806472778,
            "unit": "ns",
            "range": "± 0.6565526464181589"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 206.29225905736288,
            "unit": "ns",
            "range": "± 0.35128567550300743"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 177.76431639989218,
            "unit": "ns",
            "range": "± 1.2988785620794463"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 175.79864263534546,
            "unit": "ns",
            "range": "± 0.13289860759738806"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 18043.504364013672,
            "unit": "ns",
            "range": "± 86.99937003109022"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17555.96448771159,
            "unit": "ns",
            "range": "± 146.51618349037733"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15646.544301350912,
            "unit": "ns",
            "range": "± 11.626517225201468"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15661.885569254557,
            "unit": "ns",
            "range": "± 23.093873618216993"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1698555.5227864583,
            "unit": "ns",
            "range": "± 7345.749189863139"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1705818.4212239583,
            "unit": "ns",
            "range": "± 809.6208015024025"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1563076.3795572917,
            "unit": "ns",
            "range": "± 561.082384361478"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1566204.978515625,
            "unit": "ns",
            "range": "± 4558.870550697521"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 974.7225697835287,
            "unit": "ns",
            "range": "± 6.996997749995487"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 917.1749505996704,
            "unit": "ns",
            "range": "± 5.122037461322739"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 977.9340769449869,
            "unit": "ns",
            "range": "± 7.4460177523945195"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1428.5916703542073,
            "unit": "ns",
            "range": "± 12.384867979571757"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 754.4767996470133,
            "unit": "ns",
            "range": "± 5.110101608154423"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 9257.776227315268,
            "unit": "ns",
            "range": "± 30.48275861654605"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 8628.316889444986,
            "unit": "ns",
            "range": "± 4.95252887201979"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 9783.154388427734,
            "unit": "ns",
            "range": "± 40.51291251123759"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 12211.999201456705,
            "unit": "ns",
            "range": "± 104.97346217899948"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 6837.389973958333,
            "unit": "ns",
            "range": "± 18.204171980280023"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 87553.36637369792,
            "unit": "ns",
            "range": "± 221.74531203466313"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 89131.15726725261,
            "unit": "ns",
            "range": "± 368.9246077903309"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 89537.62556966145,
            "unit": "ns",
            "range": "± 86.10066421876574"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 116864.25830078125,
            "unit": "ns",
            "range": "± 629.9008838864339"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 69211.77620442708,
            "unit": "ns",
            "range": "± 369.9406198720776"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.9352641465763251,
            "unit": "ns",
            "range": "± 0.000646440373236393"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 30.324659754832584,
            "unit": "ns",
            "range": "± 0.2790382290519344"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 30.521677017211914,
            "unit": "ns",
            "range": "± 0.4759369545047335"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 30.514104932546616,
            "unit": "ns",
            "range": "± 0.14087879194148573"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 345.85118293762207,
            "unit": "ns",
            "range": "± 0.007515213796666923"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4104.009702046712,
            "unit": "ns",
            "range": "± 9.71105029241488"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 629.3371588389078,
            "unit": "ns",
            "range": "± 0.2867188653675184"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4739.464174906413,
            "unit": "ns",
            "range": "± 8.941112134350801"
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
          "id": "278490c342f3e7a00612e75560d8886fa45f375f",
          "message": "Merge pull request #242 from Chris-Wolfgang/dependabot/github_actions/github-actions-c60b243b03\n\nchore(deps): bump actions/setup-dotnet from 5.4.0 to 6.0.0 in the github-actions group",
          "timestamp": "2026-08-12T11:13:28-04:00",
          "tree_id": "caf9052fabace779be00fc093c0572492b9e816e",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/278490c342f3e7a00612e75560d8886fa45f375f"
        },
        "date": 1786548319774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.741139352321625,
            "unit": "ns",
            "range": "± 0.04937561054969612"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 512.5006875991821,
            "unit": "ns",
            "range": "± 6.106521382977375"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 270.7943188349406,
            "unit": "ns",
            "range": "± 1.0633011908259973"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3313.2397333780923,
            "unit": "ns",
            "range": "± 60.285243254762264"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 48154.965983072914,
            "unit": "ns",
            "range": "± 950.9755208780088"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 29464.87192281087,
            "unit": "ns",
            "range": "± 1588.9317142239415"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 318481.53857421875,
            "unit": "ns",
            "range": "± 791.581722119802"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4700985.864583333,
            "unit": "ns",
            "range": "± 6166.033044105173"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1621095.140625,
            "unit": "ns",
            "range": "± 6610.98234161381"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 69.1589121023814,
            "unit": "ns",
            "range": "± 0.1258472716293831"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 123.41987188657124,
            "unit": "ns",
            "range": "± 0.44736695567301965"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 285.7260109583537,
            "unit": "ns",
            "range": "± 3.990102514822326"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 267.2929132779439,
            "unit": "ns",
            "range": "± 11.407611503013438"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 121.85488382975261,
            "unit": "ns",
            "range": "± 0.2838822065852665"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 110.90240705013275,
            "unit": "ns",
            "range": "± 2.6673603620240107"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6243.980628967285,
            "unit": "ns",
            "range": "± 1.6864504920550223"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10201.522911071777,
            "unit": "ns",
            "range": "± 120.75674175740166"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 22331.197519938152,
            "unit": "ns",
            "range": "± 784.9379865015312"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14159.645665486654,
            "unit": "ns",
            "range": "± 168.62295833924216"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 13252.127904256186,
            "unit": "ns",
            "range": "± 1395.6538516532992"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 8661.16586303711,
            "unit": "ns",
            "range": "± 100.7863517481277"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 627294.8766276041,
            "unit": "ns",
            "range": "± 363.5629927538022"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 1020098.0572916666,
            "unit": "ns",
            "range": "± 53886.99105562843"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1393949.529296875,
            "unit": "ns",
            "range": "± 21403.457688567752"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1398026.7630208333,
            "unit": "ns",
            "range": "± 6544.105348998279"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 974317.0390625,
            "unit": "ns",
            "range": "± 2005.2688143543912"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1454409.671875,
            "unit": "ns",
            "range": "± 12315.90132700939"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.799084573984146,
            "unit": "ns",
            "range": "± 0.04182299125075707"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.2756537199020386,
            "unit": "ns",
            "range": "± 0.0008738224737961562"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.280676782131195,
            "unit": "ns",
            "range": "± 0.010845998551058935"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.25393924365441,
            "unit": "ns",
            "range": "± 0.0039084752773743845"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.833327559133371,
            "unit": "ns",
            "range": "± 0.06594683397436016"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.2571134815613427,
            "unit": "ns",
            "range": "± 0.004856101915154737"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.2865460763374963,
            "unit": "ns",
            "range": "± 0.022234886461901582"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 16.006194005409878,
            "unit": "ns",
            "range": "± 0.022643838257920424"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.906584024429321,
            "unit": "ns",
            "range": "± 0.05411377871791105"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.818709601958593,
            "unit": "ns",
            "range": "± 0.05321741538637181"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.932495137055716,
            "unit": "ns",
            "range": "± 0.0282992064500101"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.679048011700312,
            "unit": "ns",
            "range": "± 0.09711476900684811"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 14.991727848847708,
            "unit": "ns",
            "range": "± 0.005189643838811549"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.094926208257675,
            "unit": "ns",
            "range": "± 0.027201274013886088"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.413353264331818,
            "unit": "ns",
            "range": "± 0.1016302732519733"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.1326561893026034,
            "unit": "ns",
            "range": "± 0.020083960019858113"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.3655606061220169,
            "unit": "ns",
            "range": "± 0.0109666123945112"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.5063944036761919,
            "unit": "ns",
            "range": "± 0.0202373130255527"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.264653248091539,
            "unit": "ns",
            "range": "± 0.00256216847049355"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.2608726024627686,
            "unit": "ns",
            "range": "± 0.0006201100674083091"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.859809647003809,
            "unit": "ns",
            "range": "± 0.04491784134812832"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.154636224110922,
            "unit": "ns",
            "range": "± 0.0568565590048934"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 213.23757227261862,
            "unit": "ns",
            "range": "± 0.3370232364876293"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 208.61960005760193,
            "unit": "ns",
            "range": "± 3.247968164536925"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 177.83543157577515,
            "unit": "ns",
            "range": "± 1.6270373416377906"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 177.24894507726034,
            "unit": "ns",
            "range": "± 0.7433223150642625"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 17971.407877604168,
            "unit": "ns",
            "range": "± 71.2792328351355"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17642.079823811848,
            "unit": "ns",
            "range": "± 125.64481257920667"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15663.0373433431,
            "unit": "ns",
            "range": "± 23.484597636001062"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15655.534845987955,
            "unit": "ns",
            "range": "± 40.15885788479143"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1703547.314453125,
            "unit": "ns",
            "range": "± 16253.35471885424"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1721432.9791666667,
            "unit": "ns",
            "range": "± 20963.06841186357"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1566200.0377604167,
            "unit": "ns",
            "range": "± 1731.3009771443258"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1570512.623046875,
            "unit": "ns",
            "range": "± 5545.165364702995"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 982.5435104370117,
            "unit": "ns",
            "range": "± 5.362968123350621"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 928.829400062561,
            "unit": "ns",
            "range": "± 0.5664303596483811"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 973.7891368865967,
            "unit": "ns",
            "range": "± 10.048994431253774"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1418.536699930827,
            "unit": "ns",
            "range": "± 1.974462349677521"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 746.7384996414185,
            "unit": "ns",
            "range": "± 4.665481994475239"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 12339.455917358398,
            "unit": "ns",
            "range": "± 134.8595007046568"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 8654.762766520182,
            "unit": "ns",
            "range": "± 11.376632823132635"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 9170.071197509766,
            "unit": "ns",
            "range": "± 2.152322164356319"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 14599.777862548828,
            "unit": "ns",
            "range": "± 173.155466750829"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 6918.967697143555,
            "unit": "ns",
            "range": "± 5.64993206706222"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 88706.00508626302,
            "unit": "ns",
            "range": "± 44.85972675634897"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 90239.51281738281,
            "unit": "ns",
            "range": "± 803.9884449069663"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 90664.32377115886,
            "unit": "ns",
            "range": "± 1150.7123443216603"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 118229.22713216145,
            "unit": "ns",
            "range": "± 1002.1284057446152"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 67190.00508626302,
            "unit": "ns",
            "range": "± 165.82407615462708"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.9632534620662531,
            "unit": "ns",
            "range": "± 0.03996897417444394"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 31.624938706556957,
            "unit": "ns",
            "range": "± 0.2505514972430574"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 34.644014497598015,
            "unit": "ns",
            "range": "± 0.15589512497290897"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 30.862809131542843,
            "unit": "ns",
            "range": "± 0.4175864471293736"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 346.25939591725665,
            "unit": "ns",
            "range": "± 0.13898442077192832"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4111.713081359863,
            "unit": "ns",
            "range": "± 13.614108405117456"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 629.6306835810343,
            "unit": "ns",
            "range": "± 0.16087300277935668"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4742.280423482259,
            "unit": "ns",
            "range": "± 7.102600976263289"
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
          "id": "2608f28c8a2362c2d623a3f49706b568fcf50b0b",
          "message": "ci: pin every workflow action to a commit SHA with an exact # vX.Y.Z comment (#271)\n\nRan repo-template's scripts/pin-actions.ps1 -PinTags: tag references become\nSHA pins and major-only comments (# v7) become the exact tag on the pinned\ncommit (# v7.0.1), so zizmor's ref-version-mismatch stops firing when the\nmajor tag moves on. Only the ref/comment text changed. Dependabot keeps the\nprecision it finds, so this stays converted.\n\n4 already exact, 43 line(s) rewritten, 42 tag reference(s), 0 pinned SHA(s) with no tag\n\nRefs Chris-Wolfgang/repo-template#447\n\nCo-authored-by: Chris Wolfgang <cwolfgan@ptd.net>\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-16T22:19:06-04:00",
          "tree_id": "1a1165657771f7c96b26bdaa154a23247812bb87",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/2608f28c8a2362c2d623a3f49706b568fcf50b0b"
        },
        "date": 1789612248366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.606037030617394,
            "unit": "ns",
            "range": "± 0.5509389315994176"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 515.0754295984904,
            "unit": "ns",
            "range": "± 15.039364610760071"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 258.6197136243184,
            "unit": "ns",
            "range": "± 2.2814453753557307"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3226.350834528605,
            "unit": "ns",
            "range": "± 8.877971599161963"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 49705.67295328776,
            "unit": "ns",
            "range": "± 211.31116387198776"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 25692.93456522624,
            "unit": "ns",
            "range": "± 2148.3748176635545"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 315234.33317057294,
            "unit": "ns",
            "range": "± 1078.9562846676183"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4395807.755208333,
            "unit": "ns",
            "range": "± 12100.264699871906"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1613162.6412760417,
            "unit": "ns",
            "range": "± 6101.182687243054"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 70.02420218785603,
            "unit": "ns",
            "range": "± 1.4912825044128584"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 123.34296401341756,
            "unit": "ns",
            "range": "± 0.8097503084768505"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 217.6485814253489,
            "unit": "ns",
            "range": "± 7.22467324018238"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 162.27643402417502,
            "unit": "ns",
            "range": "± 2.4984629014960236"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 121.05601851145427,
            "unit": "ns",
            "range": "± 0.17502130317484363"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 104.01334778467815,
            "unit": "ns",
            "range": "± 0.7742243368344925"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6205.330174763997,
            "unit": "ns",
            "range": "± 21.43426257764223"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10617.60947672526,
            "unit": "ns",
            "range": "± 187.6818522369135"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 20618.19428507487,
            "unit": "ns",
            "range": "± 624.3848878269808"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14000.350448608398,
            "unit": "ns",
            "range": "± 46.18360076217361"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 10037.42697652181,
            "unit": "ns",
            "range": "± 88.96815121238026"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 8344.999379475912,
            "unit": "ns",
            "range": "± 4.832216703169393"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 625989.8779296875,
            "unit": "ns",
            "range": "± 2928.788387804246"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 993282.71875,
            "unit": "ns",
            "range": "± 3253.722186870898"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1373065.833984375,
            "unit": "ns",
            "range": "± 2058.657018252334"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1374504.29296875,
            "unit": "ns",
            "range": "± 10826.792925680656"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 963150.2994791666,
            "unit": "ns",
            "range": "± 10829.139636733426"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1387917.0052083333,
            "unit": "ns",
            "range": "± 2481.0400741776616"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.771420086423556,
            "unit": "ns",
            "range": "± 0.003036096737815904"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.2658257633447647,
            "unit": "ns",
            "range": "± 0.007974326374380964"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.255755585928758,
            "unit": "ns",
            "range": "± 0.007160765408457039"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.170888436337312,
            "unit": "ns",
            "range": "± 0.009066990845543946"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.794929506878058,
            "unit": "ns",
            "range": "± 0.007702408261002811"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.250091753900051,
            "unit": "ns",
            "range": "± 0.05071645584901645"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.2638584300875664,
            "unit": "ns",
            "range": "± 0.006721570346792"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.465431898832321,
            "unit": "ns",
            "range": "± 0.12372617722548779"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.678312987089157,
            "unit": "ns",
            "range": "± 0.27285678458398865"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.492597331603369,
            "unit": "ns",
            "range": "± 0.2646129920349957"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.516308436791101,
            "unit": "ns",
            "range": "± 0.2636530605763178"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.697205434242884,
            "unit": "ns",
            "range": "± 0.0618679152674545"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.065033783515295,
            "unit": "ns",
            "range": "± 0.1288240329312481"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 14.981636822223663,
            "unit": "ns",
            "range": "± 0.05130852778631214"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.804548472166061,
            "unit": "ns",
            "range": "± 0.08894196761030415"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.12717912097771963,
            "unit": "ns",
            "range": "± 0.01844359421380052"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.3635810948908329,
            "unit": "ns",
            "range": "± 0.004255971934515137"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.48895496129989624,
            "unit": "ns",
            "range": "± 0.006402919942956703"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.268291614949703,
            "unit": "ns",
            "range": "± 0.012486545849937816"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.272046354909738,
            "unit": "ns",
            "range": "± 0.019615338462895256"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.722317735354105,
            "unit": "ns",
            "range": "± 0.24110170302645587"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.03133507569631,
            "unit": "ns",
            "range": "± 0.10746169477235515"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 205.63627743721008,
            "unit": "ns",
            "range": "± 0.6682033861053501"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 200.89309978485107,
            "unit": "ns",
            "range": "± 0.8227043360966224"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 175.39240765571594,
            "unit": "ns",
            "range": "± 0.661096877875447"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 176.1828429698944,
            "unit": "ns",
            "range": "± 0.9760460744209786"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 17807.570602416992,
            "unit": "ns",
            "range": "± 94.40907342709959"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17654.391510009766,
            "unit": "ns",
            "range": "± 105.50616493894795"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15686.68032836914,
            "unit": "ns",
            "range": "± 60.52906927373884"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15646.098597208658,
            "unit": "ns",
            "range": "± 8.86168004949631"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1690986.8528645833,
            "unit": "ns",
            "range": "± 3801.968490735569"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1707441.3958333333,
            "unit": "ns",
            "range": "± 4302.966932941562"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1586611.78125,
            "unit": "ns",
            "range": "± 26611.617540250823"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1564530.3736979167,
            "unit": "ns",
            "range": "± 650.2959605596834"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 958.1596883138021,
            "unit": "ns",
            "range": "± 9.184776121771904"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 998.8913351694742,
            "unit": "ns",
            "range": "± 3.402851493458111"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 960.8002030054728,
            "unit": "ns",
            "range": "± 6.253826442218695"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1389.9739462534587,
            "unit": "ns",
            "range": "± 2.167359350564281"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 729.8796650568644,
            "unit": "ns",
            "range": "± 1.073755334774106"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 10477.918050130209,
            "unit": "ns",
            "range": "± 65.48647491989438"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 8596.556325276693,
            "unit": "ns",
            "range": "± 27.823301515170588"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 8997.450403849283,
            "unit": "ns",
            "range": "± 32.7262835351055"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 11854.271423339844,
            "unit": "ns",
            "range": "± 18.489874769176303"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 6793.929428100586,
            "unit": "ns",
            "range": "± 43.576472347903"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 88858.07747395833,
            "unit": "ns",
            "range": "± 343.79046712904903"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 88119.71500651042,
            "unit": "ns",
            "range": "± 310.1451535800286"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 88385.33569335938,
            "unit": "ns",
            "range": "± 265.23263345354496"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 114240.04321289062,
            "unit": "ns",
            "range": "± 326.97575558309535"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 68299.37530517578,
            "unit": "ns",
            "range": "± 69.92715181407921"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.9317069736619791,
            "unit": "ns",
            "range": "± 0.00046562534328158"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 30.58383713165919,
            "unit": "ns",
            "range": "± 0.7891214231360871"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 33.80082447330157,
            "unit": "ns",
            "range": "± 0.13341849844930362"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 30.18093031644821,
            "unit": "ns",
            "range": "± 0.08321927022490444"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 346.0485463142395,
            "unit": "ns",
            "range": "± 0.04264773521610846"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4109.2353515625,
            "unit": "ns",
            "range": "± 12.801317142295435"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 630.7682949701945,
            "unit": "ns",
            "range": "± 2.181954010150665"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4732.164405822754,
            "unit": "ns",
            "range": "± 20.155738306508727"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ea746808c57175cd88e08335f16a5e11fea6d24",
          "message": "build(deps): bump benchmark-action/github-action-benchmark (#451)\n\nBumps the github-actions group with 1 update: [benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark).\n\n\nUpdates `benchmark-action/github-action-benchmark` from 1.22.1 to 1.22.2\n- [Release notes](https://github.com/benchmark-action/github-action-benchmark/releases)\n- [Changelog](https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/benchmark-action/github-action-benchmark/compare/52576c92bccf6ac60c8223ec7eb2565637cae9ba...4322e5726e6334590d251fc4f92bec0efafc45dc)\n\n---\nupdated-dependencies:\n- dependency-name: benchmark-action/github-action-benchmark\n  dependency-version: 1.22.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-20T22:11:26-04:00",
          "tree_id": "8abad0e993be987f3ef29c87c966155b509dc87f",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/3ea746808c57175cd88e08335f16a5e11fea6d24"
        },
        "date": 1789957836545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.60883602499962,
            "unit": "ns",
            "range": "± 0.4766946693649781"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 515.771699587504,
            "unit": "ns",
            "range": "± 1.593832932205521"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 277.29799222946167,
            "unit": "ns",
            "range": "± 1.6496818198166225"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3271.5092976888022,
            "unit": "ns",
            "range": "± 1.4209720046578342"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 48971.36302693685,
            "unit": "ns",
            "range": "± 1295.738027158341"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 26249.993886311848,
            "unit": "ns",
            "range": "± 1740.5420015875638"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 320013.6380208333,
            "unit": "ns",
            "range": "± 1590.0707427555496"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4698801.572916667,
            "unit": "ns",
            "range": "± 12828.712975582688"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1619572.2395833333,
            "unit": "ns",
            "range": "± 2257.0924578261543"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 69.11886455615361,
            "unit": "ns",
            "range": "± 0.11272966768372218"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 125.63276171684265,
            "unit": "ns",
            "range": "± 0.7647288371002032"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 290.72473335266113,
            "unit": "ns",
            "range": "± 7.790480412928954"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 169.54091684023538,
            "unit": "ns",
            "range": "± 0.8854295379067577"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 123.7463759581248,
            "unit": "ns",
            "range": "± 0.25715389928755167"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 111.67644939819972,
            "unit": "ns",
            "range": "± 1.7096838351719488"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6250.300238291423,
            "unit": "ns",
            "range": "± 5.938403101483872"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10728.773846944174,
            "unit": "ns",
            "range": "± 205.96174918565495"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 25456.076868693035,
            "unit": "ns",
            "range": "± 1131.2404103648853"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14149.302607218424,
            "unit": "ns",
            "range": "± 171.45412033544903"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 13406.182917277018,
            "unit": "ns",
            "range": "± 2429.3283661367936"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 8759.049774169922,
            "unit": "ns",
            "range": "± 30.005178406487737"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 627132.1761067709,
            "unit": "ns",
            "range": "± 258.7596016476827"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 973281.0989583334,
            "unit": "ns",
            "range": "± 4979.763617248827"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1379827.6178385417,
            "unit": "ns",
            "range": "± 876.1257350216637"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1393330.0227864583,
            "unit": "ns",
            "range": "± 5420.73957873259"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 972463.8359375,
            "unit": "ns",
            "range": "± 2825.374429359171"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1402386.6041666667,
            "unit": "ns",
            "range": "± 7126.219880502703"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.789923290411631,
            "unit": "ns",
            "range": "± 0.02500169994234024"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.271019528309504,
            "unit": "ns",
            "range": "± 0.017681314914503223"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.2530555178721747,
            "unit": "ns",
            "range": "± 0.004638326241459442"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.2852136368552842,
            "unit": "ns",
            "range": "± 0.03316950770074199"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.7804495096206665,
            "unit": "ns",
            "range": "± 0.007161538574762608"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.264891617000103,
            "unit": "ns",
            "range": "± 0.009306781207882394"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.3200819939374924,
            "unit": "ns",
            "range": "± 0.07208802514785781"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.70214992761612,
            "unit": "ns",
            "range": "± 0.04737588082508519"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.87213072180748,
            "unit": "ns",
            "range": "± 0.07297070473610064"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 15.049018333355585,
            "unit": "ns",
            "range": "± 0.36715168756042293"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.87414558728536,
            "unit": "ns",
            "range": "± 0.059856728969940334"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.875565578540167,
            "unit": "ns",
            "range": "± 0.11586344636391185"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.095339924097061,
            "unit": "ns",
            "range": "± 0.015494326082107525"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.306601921717325,
            "unit": "ns",
            "range": "± 0.13572356711631217"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.290660381317139,
            "unit": "ns",
            "range": "± 0.02623672967624966"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.12984457487861314,
            "unit": "ns",
            "range": "± 0.00603492253335013"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.34766721601287526,
            "unit": "ns",
            "range": "± 0.0006830091826162182"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.48264703651269275,
            "unit": "ns",
            "range": "± 0.008927780423321853"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.2576716815431914,
            "unit": "ns",
            "range": "± 0.004780807589648779"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.267754890024662,
            "unit": "ns",
            "range": "± 0.0012130379590685443"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.964389423529306,
            "unit": "ns",
            "range": "± 0.14140612078822773"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.273658404747644,
            "unit": "ns",
            "range": "± 0.3905227600207531"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 210.06989804903665,
            "unit": "ns",
            "range": "± 1.051864868051846"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 205.7636013031006,
            "unit": "ns",
            "range": "± 0.34960427165315205"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 175.91951870918274,
            "unit": "ns",
            "range": "± 0.3368009340674734"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 176.8345562616984,
            "unit": "ns",
            "range": "± 0.6586655924811405"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 17993.80602010091,
            "unit": "ns",
            "range": "± 21.35461405149026"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17762.078369140625,
            "unit": "ns",
            "range": "± 22.629287597180532"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15649.048940022787,
            "unit": "ns",
            "range": "± 15.89992710272247"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15661.168823242188,
            "unit": "ns",
            "range": "± 28.30843593315694"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1691484.7330729167,
            "unit": "ns",
            "range": "± 3252.388501401941"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1709119.6432291667,
            "unit": "ns",
            "range": "± 529.2639853579217"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1586109.3880208333,
            "unit": "ns",
            "range": "± 31185.133337773517"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1566442.8938802083,
            "unit": "ns",
            "range": "± 3667.243075713479"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 975.3478266398112,
            "unit": "ns",
            "range": "± 2.0917742379721704"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 944.2927719751993,
            "unit": "ns",
            "range": "± 9.515567200858762"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 984.4745496114095,
            "unit": "ns",
            "range": "± 1.7298663495229338"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1437.6276407241821,
            "unit": "ns",
            "range": "± 5.965022990037886"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 750.7674779891968,
            "unit": "ns",
            "range": "± 0.9768804770335768"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 10751.080240885416,
            "unit": "ns",
            "range": "± 56.63137327235302"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 8770.403457641602,
            "unit": "ns",
            "range": "± 47.133857746799386"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 8908.466384887695,
            "unit": "ns",
            "range": "± 145.2146308924278"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 14148.555704752604,
            "unit": "ns",
            "range": "± 95.15113154636319"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 6838.765810648601,
            "unit": "ns",
            "range": "± 10.133998964140645"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 88681.70837402344,
            "unit": "ns",
            "range": "± 227.95668647489418"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 88631.8612467448,
            "unit": "ns",
            "range": "± 396.7008296360887"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 88084.67751057942,
            "unit": "ns",
            "range": "± 104.71111075716581"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 119278.34720865886,
            "unit": "ns",
            "range": "± 950.8070544269633"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 73040.77164713542,
            "unit": "ns",
            "range": "± 489.7410081908921"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.9546439461410046,
            "unit": "ns",
            "range": "± 0.035402156072098935"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 31.2427814801534,
            "unit": "ns",
            "range": "± 0.545907104862844"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 31.018742005030315,
            "unit": "ns",
            "range": "± 0.14223622139273348"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 30.86517893274625,
            "unit": "ns",
            "range": "± 0.18499836942234993"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 346.88198788960773,
            "unit": "ns",
            "range": "± 1.4451596594187412"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4114.144251505534,
            "unit": "ns",
            "range": "± 10.209068888945882"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 629.3430280685425,
            "unit": "ns",
            "range": "± 0.27740660438207293"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4749.90849049886,
            "unit": "ns",
            "range": "± 14.011664085009144"
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
          "id": "ab124799c9661f79ebe1d7768c3f6b28a08ad413",
          "message": "fix(code-scanning): drop redundant null-forgiving operator (S8969) (#469)\n\n* fix(code-scanning): drop redundant null-forgiving operator on ThreadLocal<Random>.Value (S8969)\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* chore(changelog): add internal fragment for the S8969 fix\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-12T14:05:58-04:00",
          "tree_id": "e5ffe4d576113c5b0b3c81caed3b9062621dc0b0",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/ab124799c9661f79ebe1d7768c3f6b28a08ad413"
        },
        "date": 1791829089024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.838682601849236,
            "unit": "ns",
            "range": "± 0.2419729770354105"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 514.6544491449991,
            "unit": "ns",
            "range": "± 2.138953683666379"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 275.0912124315898,
            "unit": "ns",
            "range": "± 0.8790499508322661"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3272.7326291402183,
            "unit": "ns",
            "range": "± 1.9180068649036783"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 50169.46758015951,
            "unit": "ns",
            "range": "± 217.87635640671294"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 22558.633229573566,
            "unit": "ns",
            "range": "± 603.669266951776"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 316186.14274088544,
            "unit": "ns",
            "range": "± 59.76552667414404"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4583095.4921875,
            "unit": "ns",
            "range": "± 300652.6909743437"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1618520.958984375,
            "unit": "ns",
            "range": "± 873.375267099744"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 69.31179304917653,
            "unit": "ns",
            "range": "± 0.059408545146673375"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 122.82757584253947,
            "unit": "ns",
            "range": "± 2.2476027430703507"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 311.9134963353475,
            "unit": "ns",
            "range": "± 1.8334745927435498"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 170.31333581606546,
            "unit": "ns",
            "range": "± 1.4542793476591331"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 125.59675693511963,
            "unit": "ns",
            "range": "± 0.6025176912360264"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 119.95579838752747,
            "unit": "ns",
            "range": "± 3.8816289622225297"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6251.838259379069,
            "unit": "ns",
            "range": "± 6.1525300037310044"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10581.367319742838,
            "unit": "ns",
            "range": "± 208.0821405111441"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 20988.585408528645,
            "unit": "ns",
            "range": "± 2575.962661883358"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14006.900283813477,
            "unit": "ns",
            "range": "± 45.59568397871514"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 11246.753173828125,
            "unit": "ns",
            "range": "± 286.6533135222221"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 8947.474848429361,
            "unit": "ns",
            "range": "± 105.82955942789609"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 626833.3896484375,
            "unit": "ns",
            "range": "± 250.95956818109352"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 975860.5729166666,
            "unit": "ns",
            "range": "± 4318.161332787349"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1401185.21484375,
            "unit": "ns",
            "range": "± 17176.774994678803"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1397699.4322916667,
            "unit": "ns",
            "range": "± 4227.4726921080855"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 1093399.5403645833,
            "unit": "ns",
            "range": "± 147836.7237200748"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1443161.1263020833,
            "unit": "ns",
            "range": "± 9615.597825130875"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.787138909101486,
            "unit": "ns",
            "range": "± 0.007155952024146553"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.2726523776849112,
            "unit": "ns",
            "range": "± 0.016724454767137846"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.2575392772754035,
            "unit": "ns",
            "range": "± 0.002882280826909452"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.247677132487297,
            "unit": "ns",
            "range": "± 0.0019532991082217765"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.836783654987812,
            "unit": "ns",
            "range": "± 0.06485946804178648"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.2495457231998444,
            "unit": "ns",
            "range": "± 0.0050560304534176094"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.2526015043258667,
            "unit": "ns",
            "range": "± 0.0009136730944241917"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.61683839559555,
            "unit": "ns",
            "range": "± 0.12976434237084508"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 15.160985877116522,
            "unit": "ns",
            "range": "± 0.23310275689034848"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.898114522298178,
            "unit": "ns",
            "range": "± 0.1189556504435334"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.823181360960007,
            "unit": "ns",
            "range": "± 0.05756865542163009"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.577021996180216,
            "unit": "ns",
            "range": "± 0.04387945657672871"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.200689574082693,
            "unit": "ns",
            "range": "± 0.06461045807285179"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.184759259223938,
            "unit": "ns",
            "range": "± 0.10271244825496163"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.428987433513006,
            "unit": "ns",
            "range": "± 0.17243791721775142"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.12823912128806114,
            "unit": "ns",
            "range": "± 0.011316119990696101"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.35040029386679333,
            "unit": "ns",
            "range": "± 0.0033161251164992626"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.565709263086319,
            "unit": "ns",
            "range": "± 0.0010924020094621248"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.271692397693793,
            "unit": "ns",
            "range": "± 0.03429405670679391"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.263891185323397,
            "unit": "ns",
            "range": "± 0.00763581094122069"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.921974688768387,
            "unit": "ns",
            "range": "± 0.022425542833436275"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.180477728446325,
            "unit": "ns",
            "range": "± 0.0676593104514725"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 212.4921421209971,
            "unit": "ns",
            "range": "± 0.21230485809137414"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 208.53533323605856,
            "unit": "ns",
            "range": "± 0.3896139772247541"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 178.3674178123474,
            "unit": "ns",
            "range": "± 0.706546059089853"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 177.27163934707642,
            "unit": "ns",
            "range": "± 0.6625977788792035"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 17966.605911254883,
            "unit": "ns",
            "range": "± 156.19322753184323"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17905.352345784504,
            "unit": "ns",
            "range": "± 47.04206402961687"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15674.496699015299,
            "unit": "ns",
            "range": "± 37.135127134327725"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15660.80621846517,
            "unit": "ns",
            "range": "± 8.039241916454992"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1693662.3990885417,
            "unit": "ns",
            "range": "± 3819.4542500284056"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1711911.1106770833,
            "unit": "ns",
            "range": "± 824.3174659123783"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1570402.6455078125,
            "unit": "ns",
            "range": "± 4193.982450031476"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1601548.5810546875,
            "unit": "ns",
            "range": "± 26076.674502860296"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 1022.3166751861572,
            "unit": "ns",
            "range": "± 11.581098315639348"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 1001.7197430928549,
            "unit": "ns",
            "range": "± 6.858506731679075"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 942.9329347610474,
            "unit": "ns",
            "range": "± 1.187913904664612"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1476.6758130391438,
            "unit": "ns",
            "range": "± 2.3773941408655745"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 803.4155213038126,
            "unit": "ns",
            "range": "± 2.576226219331723"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 9228.621627807617,
            "unit": "ns",
            "range": "± 28.138240694488726"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 9315.560979207357,
            "unit": "ns",
            "range": "± 35.411878501576"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 8889.428670247396,
            "unit": "ns",
            "range": "± 24.215037784611752"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 12346.382151285807,
            "unit": "ns",
            "range": "± 8.712723773772185"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 7036.222994486491,
            "unit": "ns",
            "range": "± 10.187272402173363"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 89304.72387695312,
            "unit": "ns",
            "range": "± 149.413548166973"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 90271.5506998698,
            "unit": "ns",
            "range": "± 131.57823080289944"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 89913.6376953125,
            "unit": "ns",
            "range": "± 273.6819193175068"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 121203.21976725261,
            "unit": "ns",
            "range": "± 285.84852857241276"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 71509.76025390625,
            "unit": "ns",
            "range": "± 1062.909510728816"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.9343697167932987,
            "unit": "ns",
            "range": "± 0.0012001360919178528"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 32.445091873407364,
            "unit": "ns",
            "range": "± 0.03943933216370898"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 33.22728252410889,
            "unit": "ns",
            "range": "± 0.9679654152815304"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 33.33687788248062,
            "unit": "ns",
            "range": "± 0.3085314531594617"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 345.6690451304118,
            "unit": "ns",
            "range": "± 0.16827282333650484"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4116.709955851237,
            "unit": "ns",
            "range": "± 12.904533282714365"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 629.3304138183594,
            "unit": "ns",
            "range": "± 0.1700403099064462"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4762.279492696126,
            "unit": "ns",
            "range": "± 42.38763400235957"
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
          "id": "06c6678b21d94aeb38a6387c325e35447429c8ff",
          "message": "fix(code-scanning): benchmarks - declare _emptyList nullable for the manual null-check baseline (#471)\n\nThe ManualNullCheck_EmptyList benchmark deliberately measures the\n'x == null || !x.Any()' pattern; declaring the field nullable matches\nthat intent and removes ConditionIsAlwaysTrueOrFalseAccordingToNullableAPIContract.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-12T15:23:22-04:00",
          "tree_id": "a40ed5cafa69a868dcbc0e4292f584fc5e075b30",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/06c6678b21d94aeb38a6387c325e35447429c8ff"
        },
        "date": 1791833710902,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.79773831367493,
            "unit": "ns",
            "range": "± 0.2488209202972196"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 514.3170277277628,
            "unit": "ns",
            "range": "± 1.5947745640981978"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 271.50226243336994,
            "unit": "ns",
            "range": "± 0.6063039939760727"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3304.9600397745767,
            "unit": "ns",
            "range": "± 37.82862080582121"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 49576.68878173828,
            "unit": "ns",
            "range": "± 291.8587022631224"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 25545.16323852539,
            "unit": "ns",
            "range": "± 3102.526148924937"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 323584.89892578125,
            "unit": "ns",
            "range": "± 8202.90118071308"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4794455.432291667,
            "unit": "ns",
            "range": "± 129695.46935960729"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1617566.701171875,
            "unit": "ns",
            "range": "± 711.027796433999"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 69.13372558355331,
            "unit": "ns",
            "range": "± 0.061414690859880945"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 125.16798742612202,
            "unit": "ns",
            "range": "± 0.24172265140601384"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 297.24983104070026,
            "unit": "ns",
            "range": "± 1.7979508823619597"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 162.62298361460367,
            "unit": "ns",
            "range": "± 0.9773623167170918"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 123.38669053713481,
            "unit": "ns",
            "range": "± 0.3591146821930165"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 115.44481364885966,
            "unit": "ns",
            "range": "± 3.2578729649488114"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6247.090555826823,
            "unit": "ns",
            "range": "± 1.6557612033188567"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10373.275680541992,
            "unit": "ns",
            "range": "± 40.268139820949905"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 22597.054087320965,
            "unit": "ns",
            "range": "± 1364.875628302373"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14009.085591634115,
            "unit": "ns",
            "range": "± 31.026857458514314"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 12165.401657104492,
            "unit": "ns",
            "range": "± 702.5126254313719"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 8825.912063598633,
            "unit": "ns",
            "range": "± 96.92636185908754"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 629853.169921875,
            "unit": "ns",
            "range": "± 4395.639603433443"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 978575.7317708334,
            "unit": "ns",
            "range": "± 4096.717466976673"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1345306.3235677083,
            "unit": "ns",
            "range": "± 1126.2094507254321"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1392500.0377604167,
            "unit": "ns",
            "range": "± 955.6166202161957"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 976166.28515625,
            "unit": "ns",
            "range": "± 5129.015011157618"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1418170.4420572917,
            "unit": "ns",
            "range": "± 474.48676118916376"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.7917764435211816,
            "unit": "ns",
            "range": "± 0.03289342050477122"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.2594229206442833,
            "unit": "ns",
            "range": "± 0.0017055867250735908"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.266266629099846,
            "unit": "ns",
            "range": "± 0.0020139799682912327"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.419646496574084,
            "unit": "ns",
            "range": "± 0.006366240685347332"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.8208318104346595,
            "unit": "ns",
            "range": "± 0.018890016422311643"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.288527193168799,
            "unit": "ns",
            "range": "± 0.07510001004649243"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.2705824176470437,
            "unit": "ns",
            "range": "± 0.008068336082218743"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 16.16692520181338,
            "unit": "ns",
            "range": "± 1.0694971604584853"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.976964672406515,
            "unit": "ns",
            "range": "± 0.04082549025703755"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.835576295852661,
            "unit": "ns",
            "range": "± 0.03496327405797693"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.760464996099472,
            "unit": "ns",
            "range": "± 0.025113369854689073"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.657178034385046,
            "unit": "ns",
            "range": "± 0.011286044753123056"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 14.753415634234747,
            "unit": "ns",
            "range": "± 0.19041249066582705"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.262255728244781,
            "unit": "ns",
            "range": "± 0.022325566519886788"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.324997673432032,
            "unit": "ns",
            "range": "± 0.14074971188214877"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.11878508081038792,
            "unit": "ns",
            "range": "± 0.005373708573201011"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.34837690244118374,
            "unit": "ns",
            "range": "± 0.0027185104361424836"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.48845605179667473,
            "unit": "ns",
            "range": "± 0.00807203327023461"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.2735171616077423,
            "unit": "ns",
            "range": "± 0.01186586119647007"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.287673438588778,
            "unit": "ns",
            "range": "± 0.06064634952458524"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.864809403816858,
            "unit": "ns",
            "range": "± 0.0804863961841324"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.14115078250567,
            "unit": "ns",
            "range": "± 0.061130956100275295"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 211.32251071929932,
            "unit": "ns",
            "range": "± 0.18490529047390683"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 205.87121097246805,
            "unit": "ns",
            "range": "± 0.6486641931134872"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 175.82672007878622,
            "unit": "ns",
            "range": "± 0.7148237887803544"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 175.58547949790955,
            "unit": "ns",
            "range": "± 0.45076085992825893"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 18018.93500773112,
            "unit": "ns",
            "range": "± 168.36319847084633"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17674.27734883626,
            "unit": "ns",
            "range": "± 202.5018017048242"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15651.297220865885,
            "unit": "ns",
            "range": "± 13.583451355978477"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15661.88905843099,
            "unit": "ns",
            "range": "± 35.101884059023384"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1697212.2415364583,
            "unit": "ns",
            "range": "± 4371.736207074061"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1712619.7350260417,
            "unit": "ns",
            "range": "± 529.880050391537"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1579421.5403645833,
            "unit": "ns",
            "range": "± 20741.08072362748"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1567554.3509114583,
            "unit": "ns",
            "range": "± 3024.9504148151004"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 983.4769770304362,
            "unit": "ns",
            "range": "± 2.007347222551594"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 935.4620208740234,
            "unit": "ns",
            "range": "± 1.5209949311324964"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 934.7604223887125,
            "unit": "ns",
            "range": "± 3.763531477604187"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1442.2594385147095,
            "unit": "ns",
            "range": "± 7.79577248015763"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 764.5112288792928,
            "unit": "ns",
            "range": "± 2.8355286857267075"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 9258.686899820963,
            "unit": "ns",
            "range": "± 40.91005832287852"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 8737.077321370443,
            "unit": "ns",
            "range": "± 3.012101143803487"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 9109.413528442383,
            "unit": "ns",
            "range": "± 24.697211461787454"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 12317.04581197103,
            "unit": "ns",
            "range": "± 37.326115087260206"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 6967.548113505046,
            "unit": "ns",
            "range": "± 32.67777150349031"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 89671.60396321614,
            "unit": "ns",
            "range": "± 65.0025377929355"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 89240.92940266927,
            "unit": "ns",
            "range": "± 304.63078084351247"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 90716.85677083333,
            "unit": "ns",
            "range": "± 972.4276567038623"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 116923.41467285156,
            "unit": "ns",
            "range": "± 239.6112632158095"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 69876.35872395833,
            "unit": "ns",
            "range": "± 478.9224169426538"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.9346702930827936,
            "unit": "ns",
            "range": "± 0.0009806386164272496"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 31.925787091255188,
            "unit": "ns",
            "range": "± 0.9920353636919068"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 32.37839859724045,
            "unit": "ns",
            "range": "± 0.6111142313117742"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 31.038058251142502,
            "unit": "ns",
            "range": "± 0.28211355282922607"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 349.2718663215637,
            "unit": "ns",
            "range": "± 1.5641970911956569"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4127.873692830403,
            "unit": "ns",
            "range": "± 16.217222380261667"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 645.7670504252116,
            "unit": "ns",
            "range": "± 26.01919796521449"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4741.150650024414,
            "unit": "ns",
            "range": "± 12.356745110863748"
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
          "id": "77ab444809026d293249f746426be09b543e303d",
          "message": "fix(code-scanning): tests - discard pure-method results used to force enumeration (#472)\n\n* fix(code-scanning): tests - discard pure-method results used only to force enumeration\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* chore: explicit usings on every TFM (no implicit/global usings in multi-TFM projects) (#478)\n\nTurn off ImplicitUsings in the multi-targeted library (net8.0/net10.0 slices)\nand test project, drop the <Using Include=\"Xunit\" /> global using, and add\nthe explicit using directives each test file needs. InspectCode analyses one\nmodern TFM slice, so with implicit usings on it flagged usings that\nnet462/netstandard2.0 genuinely need as redundant.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>\n\n* chore: explicit usings on every TFM (no implicit/global usings in multi-TFM projects) (#478)\n\nTurn off ImplicitUsings in the multi-targeted library (net8.0/net10.0 slices)\nand test project, drop the <Using Include=\"Xunit\" /> global using, and add\nthe explicit using directives each test file needs. InspectCode analyses one\nmodern TFM slice, so with implicit usings on it flagged usings that\nnet462/netstandard2.0 genuinely need as redundant.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-12T15:50:11-04:00",
          "tree_id": "cdb0b860ed00013c31bc98fb2575ecf9aa8cf1eb",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/77ab444809026d293249f746426be09b543e303d"
        },
        "date": 1791835752261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.83338545759519,
            "unit": "ns",
            "range": "± 0.07306669828214947"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 514.6467221577963,
            "unit": "ns",
            "range": "± 1.080272825103832"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 280.47678057352704,
            "unit": "ns",
            "range": "± 1.0890460206570638"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3278.2456188201904,
            "unit": "ns",
            "range": "± 7.192180998284606"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 50350.95192464193,
            "unit": "ns",
            "range": "± 622.0356613537606"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 23910.556716918945,
            "unit": "ns",
            "range": "± 418.3778548705835"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 317264.7115885417,
            "unit": "ns",
            "range": "± 931.0611164950991"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4467150.041666667,
            "unit": "ns",
            "range": "± 102086.10612718569"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1629619.3841145833,
            "unit": "ns",
            "range": "± 2763.4221469646927"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 69.15826133886974,
            "unit": "ns",
            "range": "± 0.11568332515776021"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 126.97054553031921,
            "unit": "ns",
            "range": "± 0.40796289820472076"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 297.08390585581463,
            "unit": "ns",
            "range": "± 7.835623346048795"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 170.2643948396047,
            "unit": "ns",
            "range": "± 0.23596066353800488"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 123.41108115514119,
            "unit": "ns",
            "range": "± 0.9992503315970972"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 115.14076242844264,
            "unit": "ns",
            "range": "± 0.39766559371679777"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6273.3640696207685,
            "unit": "ns",
            "range": "± 41.14413217645376"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10872.98301188151,
            "unit": "ns",
            "range": "± 214.71890704140247"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 24337.991638183594,
            "unit": "ns",
            "range": "± 943.6036909791529"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14005.277318318686,
            "unit": "ns",
            "range": "± 48.421189058999964"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 10041.51667022705,
            "unit": "ns",
            "range": "± 41.86203064893228"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 9317.527643839518,
            "unit": "ns",
            "range": "± 81.88897414582557"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 628262.0628255209,
            "unit": "ns",
            "range": "± 645.8054329463833"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 979725.5572916666,
            "unit": "ns",
            "range": "± 1895.7238808191298"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1328587.4641927083,
            "unit": "ns",
            "range": "± 15478.39158523746"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1402066.2584635417,
            "unit": "ns",
            "range": "± 10181.401254344593"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 974174.921875,
            "unit": "ns",
            "range": "± 1116.8334631609293"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1447745.5091145833,
            "unit": "ns",
            "range": "± 3308.1674406455054"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 4.001517221331596,
            "unit": "ns",
            "range": "± 0.06166298642304839"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.263453188041846,
            "unit": "ns",
            "range": "± 0.0025680237180040807"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.259942757586638,
            "unit": "ns",
            "range": "± 0.0035240374570847427"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.2457512890299163,
            "unit": "ns",
            "range": "± 0.004050305301240076"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.789178284506003,
            "unit": "ns",
            "range": "± 0.003789193148666572"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.2665828466415405,
            "unit": "ns",
            "range": "± 0.03223242446662377"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.2604367112119994,
            "unit": "ns",
            "range": "± 0.0005555328818480745"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.534278531869253,
            "unit": "ns",
            "range": "± 0.029452230931565376"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 14.897797087828318,
            "unit": "ns",
            "range": "± 0.10058741271000939"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 16.192300240198772,
            "unit": "ns",
            "range": "± 0.08259290132861229"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.885039945443472,
            "unit": "ns",
            "range": "± 0.05514916717160051"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.682947685321173,
            "unit": "ns",
            "range": "± 0.12444683932283657"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.17210907737414,
            "unit": "ns",
            "range": "± 0.12308104566444383"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.082337141036987,
            "unit": "ns",
            "range": "± 0.04698378578082741"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.371278663476309,
            "unit": "ns",
            "range": "± 0.07215199725442759"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.12032808487613995,
            "unit": "ns",
            "range": "± 0.007815836753679119"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.39056554933389026,
            "unit": "ns",
            "range": "± 0.036632508070930235"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.4818968375523885,
            "unit": "ns",
            "range": "± 0.005016758565989685"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.367506727576256,
            "unit": "ns",
            "range": "± 0.011781912716147579"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.267030790448189,
            "unit": "ns",
            "range": "± 0.02774374665788241"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.86175478498141,
            "unit": "ns",
            "range": "± 0.11160975757388569"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.384404957294464,
            "unit": "ns",
            "range": "± 0.3952877742421601"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 211.33363795280457,
            "unit": "ns",
            "range": "± 0.3380950053219817"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 208.5440046787262,
            "unit": "ns",
            "range": "± 0.05137919080727451"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 176.65024693806967,
            "unit": "ns",
            "range": "± 0.681184808697702"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 177.68602069218954,
            "unit": "ns",
            "range": "± 3.3104528556764405"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 18101.973551432293,
            "unit": "ns",
            "range": "± 55.33009228576347"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17769.074696858723,
            "unit": "ns",
            "range": "± 97.08489461624356"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15659.713587443033,
            "unit": "ns",
            "range": "± 30.623478273225082"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15654.691009521484,
            "unit": "ns",
            "range": "± 17.109871385615477"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1695652.6393229167,
            "unit": "ns",
            "range": "± 1009.7909185139317"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1721579.8678385417,
            "unit": "ns",
            "range": "± 3540.9263020076314"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1610453.2721354167,
            "unit": "ns",
            "range": "± 7362.762534642944"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1565696.0592447917,
            "unit": "ns",
            "range": "± 644.9863150758957"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 985.1539052327474,
            "unit": "ns",
            "range": "± 3.062162985993217"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 943.8107414245605,
            "unit": "ns",
            "range": "± 3.224414188668674"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 997.8804486592611,
            "unit": "ns",
            "range": "± 3.131425537628503"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1471.2528610229492,
            "unit": "ns",
            "range": "± 44.97113573551579"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 745.9845476150513,
            "unit": "ns",
            "range": "± 0.38866213938879574"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 9265.905471801758,
            "unit": "ns",
            "range": "± 12.91135497296455"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 8715.478480021158,
            "unit": "ns",
            "range": "± 24.32943212429981"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 9217.23801167806,
            "unit": "ns",
            "range": "± 91.17446979666768"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 12299.573064168295,
            "unit": "ns",
            "range": "± 195.36944454056547"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 6957.803057352702,
            "unit": "ns",
            "range": "± 6.371229153203483"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 89437.62870279948,
            "unit": "ns",
            "range": "± 153.0092124876053"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 90245.08711751302,
            "unit": "ns",
            "range": "± 21.204464582074912"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 90323.56522623698,
            "unit": "ns",
            "range": "± 104.18175736115974"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 120481.98124186198,
            "unit": "ns",
            "range": "± 113.68754329605424"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 69780.66680908203,
            "unit": "ns",
            "range": "± 307.80614979879095"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.9373363641401132,
            "unit": "ns",
            "range": "± 0.0033788592194314857"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 32.203640043735504,
            "unit": "ns",
            "range": "± 0.058085065311369526"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 31.719205180803936,
            "unit": "ns",
            "range": "± 0.20565468607751486"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 31.82258329788844,
            "unit": "ns",
            "range": "± 0.21387302785374415"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 348.114555199941,
            "unit": "ns",
            "range": "± 3.4940891230334397"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4117.504961649577,
            "unit": "ns",
            "range": "± 11.855242076898179"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 630.0244299570719,
            "unit": "ns",
            "range": "± 1.0422478087455906"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4748.216809590657,
            "unit": "ns",
            "range": "± 16.81270394562684"
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
          "id": "d6b43d14f98ee3d16c89c42171a6b0508f931561",
          "message": "fix(code-scanning): benchmarks - [Params] Size auto-property accessor never used (#501)\n\n* fix(code-scanning): DoTests - use a call counter so the lambda parameter is not precondition-only (#437)\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n\n* fix(code-scanning): ToEnumerableTests - drain via a helper instead of enumerating the local twice (#431, #432)\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n\n* fix(code-scanning): benchmarks - declare [Params] Size as a public field (#283, #284, #285, #286)\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Sonnet 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T13:51:29-04:00",
          "tree_id": "38ffc90d2879799b9bf414f99307466b49e84cd4",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/d6b43d14f98ee3d16c89c42171a6b0508f931561"
        },
        "date": 1792173885181,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 35.78787271181742,
            "unit": "ns",
            "range": "± 0.2223271987789124"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 433.45742654800415,
            "unit": "ns",
            "range": "± 3.0629533176659773"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 229.80608797073364,
            "unit": "ns",
            "range": "± 0.2419336551735428"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 4318.980201721191,
            "unit": "ns",
            "range": "± 4.175332840386561"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 40318.97956339518,
            "unit": "ns",
            "range": "± 184.71990997313264"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 20416.984649658203,
            "unit": "ns",
            "range": "± 128.55037950426788"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 432679.56787109375,
            "unit": "ns",
            "range": "± 37.58593247611235"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 3805731.2096354165,
            "unit": "ns",
            "range": "± 15299.327177497431"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 2013775.1399739583,
            "unit": "ns",
            "range": "± 2893.163400497833"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 63.516007701555885,
            "unit": "ns",
            "range": "± 0.22289905854393813"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 180.7028433481852,
            "unit": "ns",
            "range": "± 0.7596964750319094"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 223.521249294281,
            "unit": "ns",
            "range": "± 0.6746831233290715"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 201.16303078333536,
            "unit": "ns",
            "range": "± 1.597540646323923"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 189.44486872355142,
            "unit": "ns",
            "range": "± 3.9474028820300844"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 131.71034169197083,
            "unit": "ns",
            "range": "± 0.35530288325651366"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6543.172487894694,
            "unit": "ns",
            "range": "± 7.893820290650657"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 23800.906321207684,
            "unit": "ns",
            "range": "± 32.72688403274323"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 20772.635884602863,
            "unit": "ns",
            "range": "± 118.56414457307385"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 24050.409098307293,
            "unit": "ns",
            "range": "± 37.82855944048857"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 23789.223571777344,
            "unit": "ns",
            "range": "± 50.936244693791615"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 11417.109995524088,
            "unit": "ns",
            "range": "± 43.76354523777375"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 655906.8193359375,
            "unit": "ns",
            "range": "± 804.4649993989245"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 2403146.1419270835,
            "unit": "ns",
            "range": "± 2072.9789550468718"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 2235930.826171875,
            "unit": "ns",
            "range": "± 11036.131280758373"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 2397897.34765625,
            "unit": "ns",
            "range": "± 1517.8364369475262"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 2399724.8619791665,
            "unit": "ns",
            "range": "± 1205.7723137640762"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1742705.3815104167,
            "unit": "ns",
            "range": "± 49913.19791129208"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 2.6029160395264626,
            "unit": "ns",
            "range": "± 0.0038961300518856727"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.2760283077756562,
            "unit": "ns",
            "range": "± 0.0018586475726381116"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 1.9536290069421132,
            "unit": "ns",
            "range": "± 0.005591250289683175"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.2771549051006637,
            "unit": "ns",
            "range": "± 0.002237759442274214"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 2.608514549831549,
            "unit": "ns",
            "range": "± 0.005635322355782768"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.276856524248918,
            "unit": "ns",
            "range": "± 0.0016186532947572265"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.2779988422989845,
            "unit": "ns",
            "range": "± 0.0018509250193716497"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 12.539237250884375,
            "unit": "ns",
            "range": "± 0.07834718980617333"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 12.038198828697205,
            "unit": "ns",
            "range": "± 0.01613292422696819"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 13.911987195412317,
            "unit": "ns",
            "range": "± 0.30280537112495953"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 11.199976563453674,
            "unit": "ns",
            "range": "± 0.0374100252099691"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 12.419696564475695,
            "unit": "ns",
            "range": "± 0.029485274847283624"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 10.937895317872366,
            "unit": "ns",
            "range": "± 0.04529196341195732"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 12.701416611671448,
            "unit": "ns",
            "range": "± 0.0056515775495624716"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 11.123350883523623,
            "unit": "ns",
            "range": "± 0.06114412624680478"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.32317298650741577,
            "unit": "ns",
            "range": "± 0.00004324022728918098"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.6322911555568377,
            "unit": "ns",
            "range": "± 0.0029514581989994247"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.32479042559862137,
            "unit": "ns",
            "range": "± 0.002421141542243197"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 3.4173157860835395,
            "unit": "ns",
            "range": "± 0.0016717105828633217"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 1.955077514052391,
            "unit": "ns",
            "range": "± 0.005115996313924811"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 12.882377882798513,
            "unit": "ns",
            "range": "± 0.04573557651068906"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 12.696639090776443,
            "unit": "ns",
            "range": "± 0.004121437080021672"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 169.08228858311972,
            "unit": "ns",
            "range": "± 4.216010777992861"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 167.04867251714072,
            "unit": "ns",
            "range": "± 0.2859460841465212"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 146.79693047205606,
            "unit": "ns",
            "range": "± 1.769183929068431"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 149.4336725870768,
            "unit": "ns",
            "range": "± 1.2436313221202717"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 13173.37917582194,
            "unit": "ns",
            "range": "± 230.03477671696723"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 13293.367487589518,
            "unit": "ns",
            "range": "± 150.6398067320281"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 12461.137176513672,
            "unit": "ns",
            "range": "± 106.65988357427253"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 12023.459192911783,
            "unit": "ns",
            "range": "± 98.06988499256717"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1392987.6608072917,
            "unit": "ns",
            "range": "± 1115.7319164589956"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1377140.95703125,
            "unit": "ns",
            "range": "± 71.59431274139617"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1363058.025390625,
            "unit": "ns",
            "range": "± 7503.989700403852"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1357828.2955729167,
            "unit": "ns",
            "range": "± 14657.036442009914"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 692.4289344151815,
            "unit": "ns",
            "range": "± 0.2504056364826082"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 689.7934694290161,
            "unit": "ns",
            "range": "± 5.138816034499819"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 707.5410842895508,
            "unit": "ns",
            "range": "± 6.83494601780565"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1107.2277533213298,
            "unit": "ns",
            "range": "± 5.527436747030762"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 534.4370193481445,
            "unit": "ns",
            "range": "± 0.9558341910747733"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 5952.838048299153,
            "unit": "ns",
            "range": "± 41.79910982780524"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 6494.728884379069,
            "unit": "ns",
            "range": "± 15.418385023756294"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 6204.765749613444,
            "unit": "ns",
            "range": "± 5.987176614824479"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 8824.03547668457,
            "unit": "ns",
            "range": "± 18.868012463602195"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 4860.447914123535,
            "unit": "ns",
            "range": "± 3.220270322163805"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 58137.78843180338,
            "unit": "ns",
            "range": "± 509.3179636815273"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 58091.24324544271,
            "unit": "ns",
            "range": "± 506.0302273928829"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 58451.23360188802,
            "unit": "ns",
            "range": "± 173.72714480467624"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 82833.63828531902,
            "unit": "ns",
            "range": "± 176.99134811863792"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 48214.621561686195,
            "unit": "ns",
            "range": "± 118.50475201863607"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 1.3122613181670506,
            "unit": "ns",
            "range": "± 0.017226403902745723"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 32.50158460934957,
            "unit": "ns",
            "range": "± 0.06200921021480148"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 32.53256022930145,
            "unit": "ns",
            "range": "± 0.18571663753536058"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 32.36988711357117,
            "unit": "ns",
            "range": "± 0.02943341700656504"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 415.23547347386676,
            "unit": "ns",
            "range": "± 0.5088278570891218"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 3645.796891530355,
            "unit": "ns",
            "range": "± 7.481182100969219"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 663.1094312667847,
            "unit": "ns",
            "range": "± 6.524660453027313"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 3665.4396336873374,
            "unit": "ns",
            "range": "± 16.27980006630204"
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
          "id": "a033e65fd79e779feeb9cf50d19f563ff1d3b2a2",
          "message": "ci: enable package validation against the last published version (#189, #239) (#506)\n\nCo-authored-by: Claude Sonnet 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T17:14:03-04:00",
          "tree_id": "5ba50cd9e7f3cbd2d2e93aea3ae4750973b9ffbc",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/a033e65fd79e779feeb9cf50d19f563ff1d3b2a2"
        },
        "date": 1792185956266,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.70184169212977,
            "unit": "ns",
            "range": "± 0.022612041052945172"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 509.7657992045085,
            "unit": "ns",
            "range": "± 2.8117246482897422"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 265.46237421035767,
            "unit": "ns",
            "range": "± 1.9232773967384145"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3336.5145416259766,
            "unit": "ns",
            "range": "± 35.50973729980754"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 44052.32316080729,
            "unit": "ns",
            "range": "± 95.11912132360064"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 23624.092163085938,
            "unit": "ns",
            "range": "± 262.0773061857021"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 317796.18017578125,
            "unit": "ns",
            "range": "± 759.9033468215868"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4423716.567708333,
            "unit": "ns",
            "range": "± 14637.280610884764"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1618588.5553385417,
            "unit": "ns",
            "range": "± 2955.0189369958957"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 69.37408540646236,
            "unit": "ns",
            "range": "± 0.0673598447107297"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 127.08964546521504,
            "unit": "ns",
            "range": "± 1.0384935066410712"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 282.41989580790204,
            "unit": "ns",
            "range": "± 0.8602577659285092"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 165.30512960751852,
            "unit": "ns",
            "range": "± 1.20579708886034"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 120.48802367846172,
            "unit": "ns",
            "range": "± 0.3149747569757464"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 107.01005331675212,
            "unit": "ns",
            "range": "± 0.2843119689355074"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6242.25404103597,
            "unit": "ns",
            "range": "± 2.021170137713294"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 14001.547892252604,
            "unit": "ns",
            "range": "± 3451.3253284033863"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 20723.042017618816,
            "unit": "ns",
            "range": "± 1442.2328364422729"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 13993.297930399576,
            "unit": "ns",
            "range": "± 19.74871186147957"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 10608.90609741211,
            "unit": "ns",
            "range": "± 450.1895841225615"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 8450.296356201172,
            "unit": "ns",
            "range": "± 38.41730722635443"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 627442.8893229166,
            "unit": "ns",
            "range": "± 1065.7073211027268"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 976226.2109375,
            "unit": "ns",
            "range": "± 5054.136371187181"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1397206.4016927083,
            "unit": "ns",
            "range": "± 15622.472361082666"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1395805.130859375,
            "unit": "ns",
            "range": "± 6797.588155707532"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 971187.8359375,
            "unit": "ns",
            "range": "± 1358.8871296767704"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1400650.4713541667,
            "unit": "ns",
            "range": "± 6196.558087668618"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.784737008313338,
            "unit": "ns",
            "range": "± 0.005272834196516653"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.260554497440656,
            "unit": "ns",
            "range": "± 0.008642512982153105"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.2665787314375243,
            "unit": "ns",
            "range": "± 0.007298280859308247"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.272726965447267,
            "unit": "ns",
            "range": "± 0.02406802866236722"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.7837911819418273,
            "unit": "ns",
            "range": "± 0.0005907427375746313"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.258749194443226,
            "unit": "ns",
            "range": "± 0.008075540572151964"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.2498525008559227,
            "unit": "ns",
            "range": "± 0.0016423794770012718"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.553509463866552,
            "unit": "ns",
            "range": "± 0.033234223271349096"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 15.898900638024012,
            "unit": "ns",
            "range": "± 0.009318600270420986"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.89496103922526,
            "unit": "ns",
            "range": "± 0.1272456636815468"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.877208401759466,
            "unit": "ns",
            "range": "± 0.14288433077169618"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.552285969257355,
            "unit": "ns",
            "range": "± 0.006726258299532693"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.061301946640015,
            "unit": "ns",
            "range": "± 0.12755381469919225"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.330435504515966,
            "unit": "ns",
            "range": "± 0.3158776857437611"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.95076741774877,
            "unit": "ns",
            "range": "± 0.08746126562270115"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.10851740340391795,
            "unit": "ns",
            "range": "± 0.004451548686747077"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.3619728162884712,
            "unit": "ns",
            "range": "± 0.010691950482949332"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.5295187098284563,
            "unit": "ns",
            "range": "± 0.0149573795245056"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.3014638423919678,
            "unit": "ns",
            "range": "± 0.0017611282489254508"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.257205531001091,
            "unit": "ns",
            "range": "± 0.00044301401727825406"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 16.376418213049572,
            "unit": "ns",
            "range": "± 0.05040689895193144"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.24960712591807,
            "unit": "ns",
            "range": "± 0.07541257333879041"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 206.10561847686768,
            "unit": "ns",
            "range": "± 0.4925145550069476"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 205.49942286809286,
            "unit": "ns",
            "range": "± 0.9379614256201911"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 175.49029771486917,
            "unit": "ns",
            "range": "± 1.0239407115329224"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 175.92387755711874,
            "unit": "ns",
            "range": "± 0.6158148483497673"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 17964.554280598957,
            "unit": "ns",
            "range": "± 83.48028451356241"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 18029.831888834637,
            "unit": "ns",
            "range": "± 67.48081054764023"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15677.995686848959,
            "unit": "ns",
            "range": "± 75.07632311301049"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15674.327565511068,
            "unit": "ns",
            "range": "± 28.6792159805894"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1692037.0032552083,
            "unit": "ns",
            "range": "± 2654.4692173007256"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1697765.2493489583,
            "unit": "ns",
            "range": "± 1268.5183900731297"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1570661.4986979167,
            "unit": "ns",
            "range": "± 10535.918858517347"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1569404.12109375,
            "unit": "ns",
            "range": "± 10629.54673869807"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 956.6344579060873,
            "unit": "ns",
            "range": "± 5.10110823048545"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 915.8537273406982,
            "unit": "ns",
            "range": "± 1.5308900631169657"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 961.7663281758627,
            "unit": "ns",
            "range": "± 3.400088365819521"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1428.5118649800618,
            "unit": "ns",
            "range": "± 1.9089818342776925"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 709.4112504323324,
            "unit": "ns",
            "range": "± 2.8880744489192147"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 9091.19618733724,
            "unit": "ns",
            "range": "± 13.707974175331657"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 9118.419555664062,
            "unit": "ns",
            "range": "± 26.860666168734614"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 9034.92960103353,
            "unit": "ns",
            "range": "± 9.101114338351088"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 11924.215082804361,
            "unit": "ns",
            "range": "± 8.704148974315904"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 7120.298917134603,
            "unit": "ns",
            "range": "± 17.30463091488436"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 88850.41910807292,
            "unit": "ns",
            "range": "± 159.9560988392038"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 87030.80432128906,
            "unit": "ns",
            "range": "± 81.34624788940457"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 87539.03068033855,
            "unit": "ns",
            "range": "± 192.51396594263954"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 117172.3260904948,
            "unit": "ns",
            "range": "± 1217.3291282439886"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 66105.93039957683,
            "unit": "ns",
            "range": "± 92.54871440020544"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.9339989833533764,
            "unit": "ns",
            "range": "± 0.0012008342760747538"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 30.401991218328476,
            "unit": "ns",
            "range": "± 0.05341414960079253"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 30.58778590957324,
            "unit": "ns",
            "range": "± 0.23080410534950588"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 30.424638281265896,
            "unit": "ns",
            "range": "± 0.09611856755372282"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 348.6164944966634,
            "unit": "ns",
            "range": "± 2.2294879993703867"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4105.9445063273115,
            "unit": "ns",
            "range": "± 9.995759984744057"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 630.2396742502848,
            "unit": "ns",
            "range": "± 1.135678476958046"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4745.320159912109,
            "unit": "ns",
            "range": "± 16.702260327850983"
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
          "id": "ae62a678291261a7002d14cbcac04c25d169ff8a",
          "message": "feat: mark the library IsTrimmable and IsAotCompatible (#268) (#516)\n\nCo-authored-by: Claude Sonnet 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-17T10:42:42-04:00",
          "tree_id": "3bbe043dc4a6738d7792aca74de1b9d2be16671e",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/ae62a678291261a7002d14cbcac04c25d169ff8a"
        },
        "date": 1792248933873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 24.89102953672409,
            "unit": "ns",
            "range": "± 0.27201996761473757"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 325.9504408836365,
            "unit": "ns",
            "range": "± 3.4924460194214473"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 110.79982948303223,
            "unit": "ns",
            "range": "± 1.9859990316412919"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 2460.1025517781577,
            "unit": "ns",
            "range": "± 18.061984102289475"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 25943.64018758138,
            "unit": "ns",
            "range": "± 355.077297660644"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 8690.08804321289,
            "unit": "ns",
            "range": "± 21.55040057542124"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 247918.96264648438,
            "unit": "ns",
            "range": "± 936.2760755504752"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 2648643.7213541665,
            "unit": "ns",
            "range": "± 42007.837824364826"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 887110.5190429688,
            "unit": "ns",
            "range": "± 8502.881633494066"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 33.18867980440458,
            "unit": "ns",
            "range": "± 0.10869740965003265"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 65.92459932963054,
            "unit": "ns",
            "range": "± 0.6736035199408181"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 96.62340660889943,
            "unit": "ns",
            "range": "± 1.7882946836782103"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 105.38675940036774,
            "unit": "ns",
            "range": "± 5.651779960363349"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 80.65986414750417,
            "unit": "ns",
            "range": "± 17.09979277792708"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 69.13680462042491,
            "unit": "ns",
            "range": "± 1.9224353460421473"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3127.846220652262,
            "unit": "ns",
            "range": "± 63.226062150154505"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 5666.3200276692705,
            "unit": "ns",
            "range": "± 108.94320812196621"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 7709.9467366536455,
            "unit": "ns",
            "range": "± 87.03314199513292"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 7650.187967936198,
            "unit": "ns",
            "range": "± 24.629314651675102"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 5573.636856079102,
            "unit": "ns",
            "range": "± 50.817198249878146"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 4033.0967852274575,
            "unit": "ns",
            "range": "± 30.23041442608456"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 303346.4069010417,
            "unit": "ns",
            "range": "± 5417.5621660283805"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 544284.6236979166,
            "unit": "ns",
            "range": "± 6747.115017520577"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 757364.2939453125,
            "unit": "ns",
            "range": "± 3102.402158859385"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 724867.6943359375,
            "unit": "ns",
            "range": "± 5656.738259158867"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 540955.8203125,
            "unit": "ns",
            "range": "± 2237.491255602239"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 843437.0836588541,
            "unit": "ns",
            "range": "± 2360.1409075724705"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 1.984738112737735,
            "unit": "ns",
            "range": "± 0.06254966310455072"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 1.2324630270401637,
            "unit": "ns",
            "range": "± 0.015904173838187114"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 1.203899510204792,
            "unit": "ns",
            "range": "± 0.03464109674861005"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 1.1992758822937806,
            "unit": "ns",
            "range": "± 0.03640170316636146"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 1.950609705100457,
            "unit": "ns",
            "range": "± 0.004564941607606612"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 1.2640222683548927,
            "unit": "ns",
            "range": "± 0.02675805258511336"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 1.2245069419344266,
            "unit": "ns",
            "range": "± 0.006221448870106029"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 9.026944135626158,
            "unit": "ns",
            "range": "± 0.17798766334963362"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 7.8491590569416685,
            "unit": "ns",
            "range": "± 0.06945888710256524"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 8.275335018833479,
            "unit": "ns",
            "range": "± 0.2505441094937993"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 7.940787638227145,
            "unit": "ns",
            "range": "± 0.08569303802784833"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 8.632404193282127,
            "unit": "ns",
            "range": "± 0.061382379165366936"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 7.973734627167384,
            "unit": "ns",
            "range": "± 0.028375541441527794"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 8.164497718214989,
            "unit": "ns",
            "range": "± 0.22119862108618082"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 8.008569180965424,
            "unit": "ns",
            "range": "± 0.13132641360330405"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.005327240253488223,
            "unit": "ns",
            "range": "± 0.0061229076680317535"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.6299589617798725,
            "unit": "ns",
            "range": "± 0.008460794056912427"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.0024932113786538443,
            "unit": "ns",
            "range": "± 0.0043183687818373045"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 1.2123031343022983,
            "unit": "ns",
            "range": "± 0.03937536572451644"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 1.210843140880267,
            "unit": "ns",
            "range": "± 0.03359193672778136"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 8.072035272916159,
            "unit": "ns",
            "range": "± 0.030693696925822883"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 8.065994252761206,
            "unit": "ns",
            "range": "± 0.022045678989146337"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 123.31924041112264,
            "unit": "ns",
            "range": "± 1.634506318737395"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 121.00732167561848,
            "unit": "ns",
            "range": "± 1.1482244907104124"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 101.20712796847026,
            "unit": "ns",
            "range": "± 0.9291445112024875"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 106.81233783562978,
            "unit": "ns",
            "range": "± 3.9604896291649347"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 9633.573974609375,
            "unit": "ns",
            "range": "± 52.14232510413811"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 9471.83341217041,
            "unit": "ns",
            "range": "± 34.312398432652856"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 8254.209635416666,
            "unit": "ns",
            "range": "± 112.68249810565419"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 8376.599817911783,
            "unit": "ns",
            "range": "± 58.17001491934777"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 944266.3071289062,
            "unit": "ns",
            "range": "± 4336.939601379225"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 950845.3977864584,
            "unit": "ns",
            "range": "± 18297.75108892762"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 790233.9733072916,
            "unit": "ns",
            "range": "± 1221.173787705559"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 802801.7132161459,
            "unit": "ns",
            "range": "± 5657.497238657665"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 475.68306763966876,
            "unit": "ns",
            "range": "± 1.9412579094800957"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 471.165292263031,
            "unit": "ns",
            "range": "± 14.943239275753767"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 468.6120773951213,
            "unit": "ns",
            "range": "± 3.3694705635640374"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 746.3284025192261,
            "unit": "ns",
            "range": "± 11.264131880223161"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 360.0191161632538,
            "unit": "ns",
            "range": "± 9.051191795385883"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 4540.179870605469,
            "unit": "ns",
            "range": "± 4.758757928976721"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 4482.870147705078,
            "unit": "ns",
            "range": "± 8.6433690826537"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 4411.453758239746,
            "unit": "ns",
            "range": "± 34.31358162914895"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 6194.086621602376,
            "unit": "ns",
            "range": "± 30.917632673154493"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 3483.4716453552246,
            "unit": "ns",
            "range": "± 17.13999478343798"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 43494.25758870443,
            "unit": "ns",
            "range": "± 241.86175327198146"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 44199.96512858073,
            "unit": "ns",
            "range": "± 382.7579160045914"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 42944.27362060547,
            "unit": "ns",
            "range": "± 184.72900279651162"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 59788.522593180336,
            "unit": "ns",
            "range": "± 1318.0266522343782"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 32724.88966878255,
            "unit": "ns",
            "range": "± 315.2664371801406"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.530099892988801,
            "unit": "ns",
            "range": "± 0.027642296985394683"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 19.997374922037125,
            "unit": "ns",
            "range": "± 0.41320713031911177"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 19.6974954555432,
            "unit": "ns",
            "range": "± 0.6779724376471051"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 19.067791263262432,
            "unit": "ns",
            "range": "± 0.09803575603141344"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 243.81396754582724,
            "unit": "ns",
            "range": "± 1.3090070006237087"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 2335.3683573404946,
            "unit": "ns",
            "range": "± 34.68074133052886"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 305.57750781377155,
            "unit": "ns",
            "range": "± 5.260749857521547"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 2438.52174504598,
            "unit": "ns",
            "range": "± 6.572840564815012"
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
          "id": "c03353f582477421c3ea13f74dcdfc4515f4967c",
          "message": "fix(code-scanning): clear the InspectCode findings my earlier fixes moved instead of removing (#525)\n\n* fix(code-scanning): clear the InspectCode findings that #500/#501/#517 moved instead of removing (#519-#524, #290)\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n\n* fix(code-scanning): move benchmarks/.editorconfig to its own protected-only PR\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Sonnet 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-17T13:52:46-04:00",
          "tree_id": "befcd2981aff3b346ea246b6eaf07376c80cd7d7",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/c03353f582477421c3ea13f74dcdfc4515f4967c"
        },
        "date": 1792260309358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 22.77856762210528,
            "unit": "ns",
            "range": "± 0.16261020621452169"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 302.0092185338338,
            "unit": "ns",
            "range": "± 17.82963825457715"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 115.97377490997314,
            "unit": "ns",
            "range": "± 0.9285529134339728"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 2399.4631144205728,
            "unit": "ns",
            "range": "± 27.648728540009184"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 25111.526590983074,
            "unit": "ns",
            "range": "± 48.66160771071284"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 8127.495473225911,
            "unit": "ns",
            "range": "± 32.65407694877209"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 236101.52115885416,
            "unit": "ns",
            "range": "± 5863.831139514759"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 2417980.6184895835,
            "unit": "ns",
            "range": "± 11096.185934190986"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 846413.0992838541,
            "unit": "ns",
            "range": "± 2175.6971689149136"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 31.79144048690796,
            "unit": "ns",
            "range": "± 0.07052239237632126"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 60.15169767538706,
            "unit": "ns",
            "range": "± 0.2536229794001866"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 87.4220678806305,
            "unit": "ns",
            "range": "± 0.5893708394523062"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 96.42785902818044,
            "unit": "ns",
            "range": "± 0.3680523876534756"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 65.58099627494812,
            "unit": "ns",
            "range": "± 4.569390519589528"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 58.66126279036204,
            "unit": "ns",
            "range": "± 0.9389915056521532"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 2927.645090738932,
            "unit": "ns",
            "range": "± 4.452650217747403"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 5235.9111887613935,
            "unit": "ns",
            "range": "± 30.307621729097352"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 7360.571093241374,
            "unit": "ns",
            "range": "± 44.89977229442792"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 7068.68430074056,
            "unit": "ns",
            "range": "± 24.212853348048004"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 5233.739270528157,
            "unit": "ns",
            "range": "± 76.04142362129566"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 3758.398270924886,
            "unit": "ns",
            "range": "± 34.97322001374284"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 287782.0934244792,
            "unit": "ns",
            "range": "± 2610.573392399742"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 519239.4166666667,
            "unit": "ns",
            "range": "± 1545.2909502323355"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 733556.138671875,
            "unit": "ns",
            "range": "± 1836.329520817794"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 698656.4370117188,
            "unit": "ns",
            "range": "± 3449.544287978961"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 512759.9375,
            "unit": "ns",
            "range": "± 4854.736282562625"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 811162.3697916666,
            "unit": "ns",
            "range": "± 29603.09522711661"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 1.87716660151879,
            "unit": "ns",
            "range": "± 0.025974467922166195"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 1.165848379333814,
            "unit": "ns",
            "range": "± 0.004835714648321589"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 1.163679691652457,
            "unit": "ns",
            "range": "± 0.02711967170189289"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 1.1703212497135003,
            "unit": "ns",
            "range": "± 0.00391818802131785"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 1.97704341635108,
            "unit": "ns",
            "range": "± 0.06182560516447252"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 1.1678413872917492,
            "unit": "ns",
            "range": "± 0.025076752674819607"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 1.1603958594302337,
            "unit": "ns",
            "range": "± 0.02230712124358003"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 8.243814597527185,
            "unit": "ns",
            "range": "± 0.052155505225151964"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 7.626998508969943,
            "unit": "ns",
            "range": "± 0.07994239826948216"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 7.874353314439456,
            "unit": "ns",
            "range": "± 0.08934861125589727"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 7.712767745057742,
            "unit": "ns",
            "range": "± 0.3173952809214296"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 8.640848288933435,
            "unit": "ns",
            "range": "± 0.19501591242032995"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 7.906574964523315,
            "unit": "ns",
            "range": "± 0.06405769206465348"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 8.047125721971193,
            "unit": "ns",
            "range": "± 0.07289383409999939"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 8.040856957435608,
            "unit": "ns",
            "range": "± 0.3347274114951277"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0,
            "unit": "ns",
            "range": "± 0"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.26196909447511035,
            "unit": "ns",
            "range": "± 0.021406943370382393"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.01739169533054034,
            "unit": "ns",
            "range": "± 0.0034106319406096894"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 1.2197109113136928,
            "unit": "ns",
            "range": "± 0.023344885593211243"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 1.2258940301835537,
            "unit": "ns",
            "range": "± 0.0925029814513756"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 7.886966317892075,
            "unit": "ns",
            "range": "± 0.021907152357436486"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 7.928662871321042,
            "unit": "ns",
            "range": "± 0.033340683007266086"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 119.57130034764607,
            "unit": "ns",
            "range": "± 2.5586563478789"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 121.21136931578319,
            "unit": "ns",
            "range": "± 2.7833087043303277"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 96.45491639773051,
            "unit": "ns",
            "range": "± 0.6780931184790534"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 103.82956417401631,
            "unit": "ns",
            "range": "± 2.022193526979756"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 9118.124603271484,
            "unit": "ns",
            "range": "± 46.27390897698251"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 11760.009923299154,
            "unit": "ns",
            "range": "± 56.219809441266776"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 7850.3460744222,
            "unit": "ns",
            "range": "± 13.247847283976458"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 7845.036590576172,
            "unit": "ns",
            "range": "± 31.07747723551686"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 909177.3251953125,
            "unit": "ns",
            "range": "± 1221.8509887455127"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1096186.462890625,
            "unit": "ns",
            "range": "± 17929.02357643701"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 777519.74609375,
            "unit": "ns",
            "range": "± 30227.601798203596"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 747624.1126302084,
            "unit": "ns",
            "range": "± 840.6663548006749"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 440.32350460688275,
            "unit": "ns",
            "range": "± 6.238568500593837"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 437.0682053565979,
            "unit": "ns",
            "range": "± 6.682509257041267"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 443.03860425949097,
            "unit": "ns",
            "range": "± 6.778666704718097"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 673.288735071818,
            "unit": "ns",
            "range": "± 4.486144743659695"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 319.13427750269574,
            "unit": "ns",
            "range": "± 3.1493691352383766"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 3999.7469940185547,
            "unit": "ns",
            "range": "± 13.730317661943733"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 3927.1351064046225,
            "unit": "ns",
            "range": "± 7.933439833794257"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 3952.1630249023438,
            "unit": "ns",
            "range": "± 3.832725702544857"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 5575.604909261067,
            "unit": "ns",
            "range": "± 49.079188294581144"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 3036.3626238505044,
            "unit": "ns",
            "range": "± 7.1936965181843995"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 39639.39054361979,
            "unit": "ns",
            "range": "± 535.3975876181352"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 39557.7187906901,
            "unit": "ns",
            "range": "± 60.76322757285732"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 39383.75762939453,
            "unit": "ns",
            "range": "± 411.41798010777717"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 53162.19734700521,
            "unit": "ns",
            "range": "± 812.5207834474173"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 29771.800038655598,
            "unit": "ns",
            "range": "± 51.313856287040764"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.48890754642585915,
            "unit": "ns",
            "range": "± 0.025268970307057083"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 17.63639889160792,
            "unit": "ns",
            "range": "± 0.15596048118272382"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 18.397270182768505,
            "unit": "ns",
            "range": "± 0.12444239571887614"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 18.425530642271042,
            "unit": "ns",
            "range": "± 0.3027982346393883"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 240.5571707089742,
            "unit": "ns",
            "range": "± 2.9753444677220995"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 2322.058981577555,
            "unit": "ns",
            "range": "± 87.90456700377348"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 304.73306290308636,
            "unit": "ns",
            "range": "± 1.0854312915523876"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 2443.538990020752,
            "unit": "ns",
            "range": "± 49.680735350152474"
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
          "id": "a73d3992d987f86b099f5b9a7b8752a3838f6fc3",
          "message": "ci: silence UnusedAutoPropertyAccessor.Global for BenchmarkDotNet [Params] in benchmarks/ - protected-only PR (#526)\n\nCo-authored-by: Claude Sonnet 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-17T14:27:41-04:00",
          "tree_id": "b2e2b2ff15abc3d89a9e705c9423ad07c48fa35f",
          "url": "https://github.com/Chris-Wolfgang/IEnumerable-Extensions/commit/a73d3992d987f86b099f5b9a7b8752a3838f6fc3"
        },
        "date": 1792262367834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 39.58342237273852,
            "unit": "ns",
            "range": "± 0.048453726401330555"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 100)",
            "value": 510.40731207529706,
            "unit": "ns",
            "range": "± 1.3676252273457379"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 100)",
            "value": 269.10610755284625,
            "unit": "ns",
            "range": "± 1.7707825358036926"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 3287.0310262044272,
            "unit": "ns",
            "range": "± 13.050625962699588"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 10000)",
            "value": 49492.08701578776,
            "unit": "ns",
            "range": "± 733.3859125224785"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 10000)",
            "value": 22741.68803914388,
            "unit": "ns",
            "range": "± 548.5685433451292"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 317614.99723307294,
            "unit": "ns",
            "range": "± 1887.012892436727"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Do_Iterator(Size: 1000000)",
            "value": 4415605.0703125,
            "unit": "ns",
            "range": "± 562.4102262888516"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.DoBenchmarks.Linq_Select_SideEffect(Size: 1000000)",
            "value": 1626482.7278645833,
            "unit": "ns",
            "range": "± 10565.455948410267"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 100)",
            "value": 68.97123102347057,
            "unit": "ns",
            "range": "± 0.12071465027307485"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 100)",
            "value": 126.42096130053203,
            "unit": "ns",
            "range": "± 1.499576838643523"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 100)",
            "value": 273.21714131037396,
            "unit": "ns",
            "range": "± 7.64075522582526"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 100)",
            "value": 169.63881587982178,
            "unit": "ns",
            "range": "± 1.104782936877848"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 100)",
            "value": 122.9182604153951,
            "unit": "ns",
            "range": "± 0.13271874165708356"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 100)",
            "value": 108.93727101882298,
            "unit": "ns",
            "range": "± 1.0746739754923855"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 10000)",
            "value": 6286.301551818848,
            "unit": "ns",
            "range": "± 20.36293905094348"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 10000)",
            "value": 10494.079584757486,
            "unit": "ns",
            "range": "± 123.78214940512532"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 10000)",
            "value": 18265.36083984375,
            "unit": "ns",
            "range": "± 2332.9227740222195"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 10000)",
            "value": 14010.470362345377,
            "unit": "ns",
            "range": "± 24.676312754038996"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 10000)",
            "value": 9922.719334920248,
            "unit": "ns",
            "range": "± 238.88019390227055"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 10000)",
            "value": 8513.717880249023,
            "unit": "ns",
            "range": "± 79.56193404074855"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Foreach_RawLoop(Size: 1000000)",
            "value": 627601.3154296875,
            "unit": "ns",
            "range": "± 1588.5935600556047"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnListAsEnumerable(Size: 1000000)",
            "value": 995282.0546875,
            "unit": "ns",
            "range": "± 37129.2692832298"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnArrayAsEnumerable(Size: 1000000)",
            "value": 1404203.2291666667,
            "unit": "ns",
            "range": "± 13382.321151632375"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Extension_OnYieldEnumerable(Size: 1000000)",
            "value": 1396466.7688802083,
            "unit": "ns",
            "range": "± 4181.871759951595"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Bcl_ListForEach(Size: 1000000)",
            "value": 977420.8385416666,
            "unit": "ns",
            "range": "± 2463.097805388472"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ForEachBenchmarks.Linq_ToList_Then_Foreach(Size: 1000000)",
            "value": 1395377.0498046875,
            "unit": "ns",
            "range": "± 9758.302607209924"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyList",
            "value": 3.7930150106549263,
            "unit": "ns",
            "range": "± 0.015527003006680942"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyList",
            "value": 2.2593870436151824,
            "unit": "ns",
            "range": "± 0.004157181209004438"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.262827143073082,
            "unit": "ns",
            "range": "± 0.010859704725527736"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyList",
            "value": 2.247882323960463,
            "unit": "ns",
            "range": "± 0.0011696974752569398"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedList",
            "value": 3.7884355187416077,
            "unit": "ns",
            "range": "± 0.002369672160473793"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedList",
            "value": 2.246442119280497,
            "unit": "ns",
            "range": "± 0.004205946424283061"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedList",
            "value": 2.279297910630703,
            "unit": "ns",
            "range": "± 0.02028184348124279"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_EmptyYield",
            "value": 15.528904408216476,
            "unit": "ns",
            "range": "± 0.0526021509362529"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_EmptyYield",
            "value": 15.059614509344101,
            "unit": "ns",
            "range": "± 0.6290287456597262"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.88037089506785,
            "unit": "ns",
            "range": "± 0.00947278178818327"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_EmptyYield",
            "value": 14.879378447930018,
            "unit": "ns",
            "range": "± 0.18836670259321892"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.Linq_NotAny_PopulatedYield",
            "value": 15.579957356055578,
            "unit": "ns",
            "range": "± 0.09358433159646064"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsEmpty_PopulatedYield",
            "value": 15.096682538588842,
            "unit": "ns",
            "range": "± 0.08112817178700742"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.057182004054388,
            "unit": "ns",
            "range": "± 0.006707940213764273"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsEmptyBenchmarks.None_PopulatedYield",
            "value": 15.345867902040482,
            "unit": "ns",
            "range": "± 0.08502250853668479"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_Null",
            "value": 0.12359638760487239,
            "unit": "ns",
            "range": "± 0.020198995864887298"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_Null",
            "value": 0.36172710731625557,
            "unit": "ns",
            "range": "± 0.007486689760702411"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.ManualNullCheck_EmptyList",
            "value": 0.5296350084245205,
            "unit": "ns",
            "range": "± 0.008615776561958789"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyList",
            "value": 2.2552341694633165,
            "unit": "ns",
            "range": "± 0.003057347536216636"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedList",
            "value": 2.262333701054255,
            "unit": "ns",
            "range": "± 0.0057821053480638296"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_EmptyYield",
            "value": 14.923055042823156,
            "unit": "ns",
            "range": "± 0.033789106303266946"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.IsNullOrEmptyBenchmarks.IsNullOrEmpty_PopulatedYield",
            "value": 15.173184186220169,
            "unit": "ns",
            "range": "± 0.08338745277669238"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 100)",
            "value": 207.9342348575592,
            "unit": "ns",
            "range": "± 0.5371432299045018"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 100)",
            "value": 204.86021574338278,
            "unit": "ns",
            "range": "± 1.9245252774310868"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 100)",
            "value": 175.92508578300476,
            "unit": "ns",
            "range": "± 0.48863315152855175"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 100)",
            "value": 176.5177161693573,
            "unit": "ns",
            "range": "± 0.7493407662727644"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 10000)",
            "value": 17985.78871154785,
            "unit": "ns",
            "range": "± 48.522597145281175"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 10000)",
            "value": 17851.762349446613,
            "unit": "ns",
            "range": "± 85.77727374903415"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 10000)",
            "value": 15658.823486328125,
            "unit": "ns",
            "range": "± 45.14209537148329"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 10000)",
            "value": 15660.841318766275,
            "unit": "ns",
            "range": "± 13.251531892810654"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_LateMatch(Size: 1000000)",
            "value": 1692436.6360677083,
            "unit": "ns",
            "range": "± 4102.451708985308"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_LateMatch(Size: 1000000)",
            "value": 1712873.4850260417,
            "unit": "ns",
            "range": "± 1115.4750782570652"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.Linq_NotAny_NoMatch(Size: 1000000)",
            "value": 1597764.482421875,
            "unit": "ns",
            "range": "± 30190.364889340246"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.NonePredicateBenchmarks.None_NoMatch(Size: 1000000)",
            "value": 1566158.439453125,
            "unit": "ns",
            "range": "± 1223.0612844300983"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 100)",
            "value": 1015.9693501790365,
            "unit": "ns",
            "range": "± 5.436378343105256"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 100)",
            "value": 963.8032779693604,
            "unit": "ns",
            "range": "± 3.020420807208219"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 100)",
            "value": 932.3939237594604,
            "unit": "ns",
            "range": "± 23.02674732935095"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 100)",
            "value": 1441.2713483174641,
            "unit": "ns",
            "range": "± 2.989271005416908"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 100)",
            "value": 741.8328158060709,
            "unit": "ns",
            "range": "± 2.8726145767102524"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 1000)",
            "value": 10441.112660725912,
            "unit": "ns",
            "range": "± 21.057263808298366"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 1000)",
            "value": 10434.646967569986,
            "unit": "ns",
            "range": "± 42.02123518715851"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 1000)",
            "value": 9115.288879394531,
            "unit": "ns",
            "range": "± 50.26305881026173"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 1000)",
            "value": 14377.981994628906,
            "unit": "ns",
            "range": "± 212.1133204698411"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 1000)",
            "value": 6850.547073364258,
            "unit": "ns",
            "range": "± 14.901307694008361"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Array(Size: 10000)",
            "value": 88197.91560872395,
            "unit": "ns",
            "range": "± 64.9879293563896"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_List(Size: 10000)",
            "value": 88701.71691894531,
            "unit": "ns",
            "range": "± 62.90752377655934"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_ICollectionNotList(Size: 10000)",
            "value": 88400.70623779297,
            "unit": "ns",
            "range": "± 289.8301275213061"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Shuffle_Yield(Size: 10000)",
            "value": 117551.14965820312,
            "unit": "ns",
            "range": "± 597.8965095552438"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ShuffleBenchmarks.Reference_ToArrayThenShuffle(Size: 10000)",
            "value": 69385.41060384114,
            "unit": "ns",
            "range": "± 198.185244461142"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.Identity_Array",
            "value": 0.9334568344056606,
            "unit": "ns",
            "range": "± 0.0004524728881053989"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Array",
            "value": 31.153008590141933,
            "unit": "ns",
            "range": "± 0.19338075809988856"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_List",
            "value": 30.87808198730151,
            "unit": "ns",
            "range": "± 0.11675521689226889"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableBenchmarks.ToEnumerable_Yield",
            "value": 30.882133225599926,
            "unit": "ns",
            "range": "± 0.20597063469659546"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_Baseline",
            "value": 345.9896960258484,
            "unit": "ns",
            "range": "± 0.24409945955318246"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_Array_ViaToEnumerable",
            "value": 4110.28624979655,
            "unit": "ns",
            "range": "± 13.414139912377221"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_Baseline",
            "value": 629.6537507375082,
            "unit": "ns",
            "range": "± 0.1148580650348408"
          },
          {
            "name": "Wolfgang.Extensions.IEnumerable.Benchmarks.ToEnumerableEnumerationBenchmarks.Enumerate_List_ViaToEnumerable",
            "value": 4739.62008412679,
            "unit": "ns",
            "range": "± 8.598388480695824"
          }
        ]
      }
    ]
  }
}