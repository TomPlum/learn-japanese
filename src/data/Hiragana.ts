import { KanaColumn } from "types/kana/KanaColumn"
import { KanaData } from "./DataTypes"

function hiragana(): KanaData[] {
  return [
    //Vowels (Big)
    {
      name: "あ",
      code: "\u3042",
      romaji: ["a"],
      column: KanaColumn.VOWEL,
      diacritical: false
    },
    {
      name: "い",
      code: "\u3044",
      romaji: ["i"],
      column: KanaColumn.VOWEL,
      diacritical: false
    },
    {
      name: "う",
      code: "\u3046",
      romaji: ["u"],
      column: KanaColumn.VOWEL,
      diacritical: false
    },
    {
      name: "え",
      code: "\u3048",
      romaji: ["e"],
      column: KanaColumn.VOWEL,
      diacritical: false
    },
    {
      name: "お",
      code: "\u304A",
      romaji: ["o"],
      column: KanaColumn.VOWEL,
      diacritical: false
    },

    //K Column (Big)
    {
      name: "か",
      code: "\u304B",
      romaji: ["ka"],
      column: KanaColumn.K,
      diacritical: false
    },
    {
      name: "き",
      code: "\u304D",
      romaji: ["ki"],
      column: KanaColumn.K,
      diacritical: false
    },
    {
      name: "く",
      code: "\u304F",
      romaji: ["ku"],
      column: KanaColumn.K,
      diacritical: false
    },
    {
      name: "け",
      code: "\u3051",
      romaji: ["ke"],
      column: KanaColumn.K,
      diacritical: false
    },
    {
      name: "こ",
      code: "\u3053",
      romaji: ["ko"],
      column: KanaColumn.K,
      diacritical: false
    },

    //K Diacriticals (Dakuten)
    {
      name: "が",
      code: "\u304C",
      romaji: ["ga"],
      column: KanaColumn.K,
      diacritical: true
    },
    {
      name: "ぎ",
      code: "\u304E",
      romaji: ["gi"],
      column: KanaColumn.K,
      diacritical: true
    },
    {
      name: "ぐ",
      code: "\u3050",
      romaji: ["gu"],
      column: KanaColumn.K,
      diacritical: true
    },
    {
      name: "げ",
      code: "\u3052",
      romaji: ["ge"],
      column: KanaColumn.K,
      diacritical: true
    },
    {
      name: "ご",
      code: "\u3054",
      romaji: ["go"],
      column: KanaColumn.K,
      diacritical: true
    },

    //K Diagraphs
    {
      name: "きゃ",
      code: "\u304D\u3083",
      romaji: ["kya"],
      column: KanaColumn.K,
      diacritical: false
    },
    {
      name: "きゅ",
      code: "\u304D\u3085",
      romaji: ["kyu"],
      column: KanaColumn.K,
      diacritical: false
    },
    {
      name: "きょ",
      code: "\u304D\u3087",
      romaji: ["kyo"],
      column: KanaColumn.K,
      diacritical: false
    },

    //K Diacritical Diagraphs
    {
      name: "ぎゃ",
      code: "\u304E\u3083",
      romaji: ["gya"],
      column: KanaColumn.K,
      diacritical: true
    },
    {
      name: "ぎゅ",
      code: "\u304E\u3085",
      romaji: ["gyu"],
      column: KanaColumn.K,
      diacritical: true
    },
    {
      name: "ぎょ",
      code: "\u304E\u3087",
      romaji: ["gyo"],
      column: KanaColumn.K,
      diacritical: true
    },

    //S Column (Big)
    {
      name: "さ",
      code: "\u3055",
      romaji: ["sa"],
      column: KanaColumn.S,
      diacritical: false
    },
    {
      name: "し",
      code: "\u3057",
      romaji: ["shi"],
      column: KanaColumn.S,
      diacritical: false
    },
    {
      name: "す",
      code: "\u3059",
      romaji: ["su"],
      column: KanaColumn.S,
      diacritical: false
    },
    {
      name: "せ",
      code: "\u305B",
      romaji: ["se"],
      column: KanaColumn.S,
      diacritical: false
    },
    {
      name: "そ",
      code: "\u305D",
      romaji: ["so"],
      column: KanaColumn.S,
      diacritical: false
    },

    //S Diacriticals (Dakuten)
    {
      name: "ざ",
      code: "\u3056",
      romaji: ["za"],
      column: KanaColumn.S,
      diacritical: true
    },
    {
      name: "じ",
      code: "\u3058",
      romaji: ["ji", "zi"],
      column: KanaColumn.S,
      diacritical: true
    },
    {
      name: "ず",
      code: "\u305A",
      romaji: ["zu"],
      column: KanaColumn.S,
      diacritical: true
    },
    {
      name: "ぜ",
      code: "\u305C",
      romaji: ["ze"],
      column: KanaColumn.S,
      diacritical: true
    },
    {
      name: "ぞ",
      code: "\u305E",
      romaji: ["zo"],
      column: KanaColumn.S,
      diacritical: true
    },

    //S Diagraphs
    {
      name: "しゃ",
      code: "\u3057\u3083",
      romaji: ["sha"],
      column: KanaColumn.S,
      diacritical: false
    },
    {
      name: "しゅ",
      code: "\u3057\u3085",
      romaji: ["shu"],
      column: KanaColumn.S,
      diacritical: false
    },
    {
      name: "しょ",
      code: "\u3057\u3087",
      romaji: ["sho"],
      column: KanaColumn.S,
      diacritical: false
    },

    //S Diacritical Diagraphs
    {
      name: "じゃ",
      code: "\u3058\u3083",
      romaji: ["ja", "zya"],
      column: KanaColumn.S,
      diacritical: true
    },
    {
      name: "じゅ",
      code: "\u3058\u3085",
      romaji: ["ju", "zyu"],
      column: KanaColumn.S,
      diacritical: true
    },
    {
      name: "じょ",
      code: "\u3058\u3087",
      romaji: ["jo", "zyo"],
      column: KanaColumn.S,
      diacritical: true
    },

    //T Column (Big)
    {
      name: "た",
      code: "\u305F",
      romaji: ["ta"],
      column: KanaColumn.T,
      diacritical: false
    },
    {
      name: "ち",
      code: "\u3061",
      romaji: ["chi", "ti"],
      column: KanaColumn.T,
      diacritical: false
    },
    {
      name: "つ",
      code: "\u3064",
      romaji: ["tsu"],
      column: KanaColumn.T,
      diacritical: false
    },
    {
      name: "て",
      code: "\u3066",
      romaji: ["te"],
      column: KanaColumn.T,
      diacritical: false
    },
    {
      name: "と",
      code: "\u3068",
      romaji: ["to"],
      column: KanaColumn.T,
      diacritical: false
    },

    //T Diacriticals (Dakuten)
    {
      name: "だ",
      code: "\u3060",
      romaji: ["da"],
      column: KanaColumn.T,
      diacritical: true
    },
    {
      name: "ぢ",
      code: "\u3062",
      romaji: ["di", "ji"],
      column: KanaColumn.T,
      diacritical: true
    },
    {
      name: "づ",
      code: "\u3065",
      romaji: ["du", "zu"],
      column: KanaColumn.T,
      diacritical: true
    },
    {
      name: "で",
      code: "\u3067",
      romaji: ["de"],
      column: KanaColumn.T,
      diacritical: true
    },
    {
      name: "ど",
      code: "\u3069",
      romaji: ["do"],
      column: KanaColumn.T,
      diacritical: true
    },

    //T Diagraphs
    {
      name: "ちゃ",
      code: "\u3061\u3083",
      romaji: ["cha"],
      column: KanaColumn.T,
      diacritical: false
    },
    {
      name: "ちゅ",
      code: "\u3061\u3085",
      romaji: ["chu"],
      column: KanaColumn.T,
      diacritical: false
    },
    {
      name: "ちょ",
      code: "\u3061\u3087",
      romaji: ["cho"],
      column: KanaColumn.T,
      diacritical: false
    },

    //T Diacritical Diagraphs
    {
      name: "ぢゃ",
      code: "\u3062\u3083",
      romaji: ["dya", "ja"],
      column: KanaColumn.T,
      diacritical: true
    },
    {
      name: "ぢゅ",
      code: "\u3062\u3085",
      romaji: ["dyu", "ju"],
      column: KanaColumn.T,
      diacritical: true
    },
    {
      name: "ぢょ",
      code: "\u3062\u3087",
      romaji: ["dyo", "jo"],
      column: KanaColumn.T,
      diacritical: true
    },

    //N Column (Big)
    {
      name: "な",
      code: "\u306A",
      romaji: ["na"],
      column: KanaColumn.N,
      diacritical: false
    },
    {
      name: "に",
      code: "\u306B",
      romaji: ["ni"],
      column: KanaColumn.N,
      diacritical: false
    },
    {
      name: "ぬ",
      code: "\u306C",
      romaji: ["nu"],
      column: KanaColumn.N,
      diacritical: false
    },
    {
      name: "ね",
      code: "\u306D",
      romaji: ["ne"],
      column: KanaColumn.N,
      diacritical: false
    },
    {
      name: "の",
      code: "\u306E",
      romaji: ["no"],
      column: KanaColumn.N,
      diacritical: false
    },

    //N Diagraphs
    {
      name: "にゃ",
      code: "\u306B\u3083",
      romaji: ["nya"],
      column: KanaColumn.N,
      diacritical: false
    },
    {
      name: "にゅ",
      code: "\u306B\u3085",
      romaji: ["nyu"],
      column: KanaColumn.N,
      diacritical: false
    },
    {
      name: "にょ",
      code: "\u306B\u3087",
      romaji: ["nyo"],
      column: KanaColumn.N,
      diacritical: false
    },

    //H Column (Big)
    {
      name: "は",
      code: "\u306F",
      romaji: ["ha"],
      column: KanaColumn.H,
      diacritical: false
    },
    {
      name: "ひ",
      code: "\u3072",
      romaji: ["hi"],
      column: KanaColumn.H,
      diacritical: false
    },
    {
      name: "ふ",
      code: "\u3075",
      romaji: ["hu", "fu"],
      column: KanaColumn.H,
      diacritical: false
    },
    {
      name: "へ",
      code: "\u3078",
      romaji: ["he", "e"],
      column: KanaColumn.H,
      diacritical: false
    },
    {
      name: "ほ",
      code: "\u307B",
      romaji: ["ho"],
      column: KanaColumn.H,
      diacritical: false
    },

    //H Diacriticals (Dakuten)
    {
      name: "ば",
      code: "\u3070",
      romaji: ["ba"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "び",
      code: "\u3073",
      romaji: ["bi"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "ぶ",
      code: "\u3076",
      romaji: ["bu"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "べ",
      code: "\u3079",
      romaji: ["be"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "ぼ",
      code: "\u307C",
      romaji: ["bo"],
      column: KanaColumn.H,
      diacritical: true
    },

    //H Diacriticals (Handakuten)
    {
      name: "ぱ",
      code: "\u3071",
      romaji: ["pa"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "ぴ",
      code: "\u3074",
      romaji: ["pi"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "ぷ",
      code: "\u3077",
      romaji: ["pu"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "ぺ",
      code: "\u307A",
      romaji: ["pe"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "ぽ",
      code: "\u307D",
      romaji: ["po"],
      column: KanaColumn.H,
      diacritical: true
    },

    //H Diagraphs
    {
      name: "ひゃ",
      code: "\u3072\u3083",
      romaji: ["hya"],
      column: KanaColumn.H,
      diacritical: false
    },
    {
      name: "ひゅ",
      code: "\u3072\u3085",
      romaji: ["hyu"],
      column: KanaColumn.H,
      diacritical: false
    },
    {
      name: "ひょ",
      code: "\u3072\u3087",
      romaji: ["hyo"],
      column: KanaColumn.H,
      diacritical: false
    },

    //H Diacritical Diagraphs (Dakuten)
    {
      name: "びゃ",
      code: "\u3073\u3083",
      romaji: ["bya"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "びゅ",
      code: "\u3073\u3085",
      romaji: ["byu"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "びょ",
      code: "\u3073\u3087",
      romaji: ["byo"],
      column: KanaColumn.H,
      diacritical: true
    },

    //H Diacritical Diagraphs (Handakuten)
    {
      name: "ぴゃ",
      code: "\u3074\u3083",
      romaji: ["pya"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "ぴゅ",
      code: "\u3074\u3085",
      romaji: ["pyu"],
      column: KanaColumn.H,
      diacritical: true
    },
    {
      name: "ぴょ",
      code: "\u3074\u3087",
      romaji: ["pyo"],
      column: KanaColumn.H,
      diacritical: true
    },

    //M Column (Big)
    {
      name: "ま",
      code: "\u307E",
      romaji: ["ma"],
      column: KanaColumn.M,
      diacritical: false
    },
    {
      name: "み",
      code: "\u307F",
      romaji: ["mi"],
      column: KanaColumn.M,
      diacritical: false
    },
    {
      name: "む",
      code: "\u3080",
      romaji: ["mu"],
      column: KanaColumn.M,
      diacritical: false
    },
    {
      name: "め",
      code: "\u3081",
      romaji: ["me"],
      column: KanaColumn.M,
      diacritical: false
    },
    {
      name: "も",
      code: "\u3082",
      romaji: ["mo"],
      column: KanaColumn.M,
      diacritical: false
    },

    //M Diagraphs
    {
      name: "みゃ",
      code: "\u307F\u3083",
      romaji: ["mya"],
      column: KanaColumn.M,
      diacritical: false
    },
    {
      name: "みゅ",
      code: "\u307F\u3085",
      romaji: ["myu"],
      column: KanaColumn.M,
      diacritical: false
    },
    {
      name: "みょ",
      code: "\u307F\u3087",
      romaji: ["myo"],
      column: KanaColumn.M,
      diacritical: false
    },

    //Y Column (Big)
    {
      name: "や",
      code: "\u3084",
      romaji: ["ya"],
      column: KanaColumn.Y,
      diacritical: false
    },
    {
      name: "ゆ",
      code: "\u3086",
      romaji: ["yu"],
      column: KanaColumn.Y,
      diacritical: false
    },
    {
      name: "よ",
      code: "\u3088",
      romaji: ["yo"],
      column: KanaColumn.Y,
      diacritical: false
    },

    //R Column (Big)
    {
      name: "ら",
      code: "\u3089",
      romaji: ["ra"],
      column: KanaColumn.R,
      diacritical: false
    },
    {
      name: "り",
      code: "\u308A",
      romaji: ["ri"],
      column: KanaColumn.R,
      diacritical: false
    },
    {
      name: "る",
      code: "\u308B",
      romaji: ["ru"],
      column: KanaColumn.R,
      diacritical: false
    },
    {
      name: "れ",
      code: "\u308C",
      romaji: ["re"],
      column: KanaColumn.R,
      diacritical: false
    },
    {
      name: "ろ",
      code: "\u308D",
      romaji: ["ro"],
      column: KanaColumn.R,
      diacritical: false
    },

    //R Diagraphs
    {
      name: "りゃ",
      code: "\u308A\u3083",
      romaji: ["rya"],
      column: KanaColumn.R,
      diacritical: false
    },
    {
      name: "りゅ",
      code: "\u308A\u3085",
      romaji: ["ryu"],
      column: KanaColumn.R,
      diacritical: false
    },
    {
      name: "りょ",
      code: "\u308A\u3087",
      romaji: ["ryo"],
      column: KanaColumn.R,
      diacritical: false
    },

    //W Column (Big)
    {
      name: "わ",
      code: "\u308F",
      romaji: ["wa"],
      column: KanaColumn.W,
      diacritical: false
    },
    {
      name: "を",
      code: "\u3092",
      romaji: ["wo"],
      column: KanaColumn.W,
      diacritical: false
    },

    //N
    {
      name: "ん",
      code: "\u3093",
      romaji: ["n"],
      column: KanaColumn.OTHER,
      diacritical: false
    }
  ]
}

export default hiragana
