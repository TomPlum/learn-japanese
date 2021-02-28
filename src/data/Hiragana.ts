import {KanaColumn} from "../types/KanaColumn";
import {KanaData} from "./DataTypes";

const hiragana: KanaData[] = [
    //Vowels (Big)
    {
        name: "あ",
        code: "\u3042",
        romanji: ["a"],
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "い",
        code: "\u3044",
        romanji: ["i"],
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "う",
        code: "\u3046",
        romanji: ["u"],
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "え",
        code: "\u3048",
        romanji: ["e"],
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "お",
        code: "\u304A",
        romanji: ["o"],
        column: KanaColumn.VOWEL,
        diacritical: false
    },

    //K Column (Big)
    {
        name: "か",
        code: "\u304B",
        romanji: ["ka"],
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "き",
        code: "\u304D",
        romanji: ["ki"],
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "く",
        code: "\u304F",
        romanji: ["ku"],
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "け",
        code: "\u3051",
        romanji: ["ke"],
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "こ",
        code: "\u3053",
        romanji: ["ko"],
        column: KanaColumn.K,
        diacritical: false
    },

    //K Diacriticals (Dakuten)
    {
        name: "が",
        code: "\u304C",
        romanji: ["ga"],
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "ぎ",
        code: "\u304E",
        romanji: ["gi"],
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "ぐ",
        code: "\u3050",
        romanji: ["gu"],
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "げ",
        code: "\u3052",
        romanji: ["ge"],
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "ご",
        code: "\u3054",
        romanji: ["go"],
        column: KanaColumn.K,
        diacritical: true
    },

    //K Diagraphs
    {
        name: "きゃ",
        code: "\u304D\u3083",
        romanji: ["kya"],
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "きゅ",
        code: "\u304D\u3085",
        romanji: ["kyu"],
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "きょ",
        code: "\u304D\u3087",
        romanji: ["kyo"],
        column: KanaColumn.K,
        diacritical: false
    },

    //K Diacritical Diagraphs
    {
        name: "ぎゃ",
        code: "\u304E\u3083",
        romanji: ["gya"],
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "ぎゅ",
        code: "\u304E\u3085",
        romanji: ["gyu"],
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "ぎょ",
        code: "\u304E\u3087",
        romanji: ["gyo"],
        column: KanaColumn.K,
        diacritical: false
    },

    //S Column (Big)
    {
        name: "さ",
        code: "\u3055",
        romanji: ["sa"],
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "し",
        code: "\u3057",
        romanji: ["shi"],
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "す",
        code: "\u3059",
        romanji: ["su"],
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "せ",
        code: "\u305B",
        romanji: ["se"],
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "そ",
        code: "\u305D",
        romanji: ["so"],
        column: KanaColumn.S,
        diacritical: false
    },

    //S Diacriticals (Dakuten)
    {
        name: "ざ",
        code: "\u3056",
        romanji: ["za"],
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "じ",
        code: "\u3058",
        romanji: ["zi", "ji"],
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "ず",
        code: "\u305A",
        romanji: ["zu"],
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "ぜ",
        code: "\u305C",
        romanji: ["ze"],
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "ぞ",
        code: "\u305E",
        romanji: ["zo"],
        column: KanaColumn.S,
        diacritical: true
    },

    //S Diagraphs
    {
        name: "しゃ",
        code: "\u3057\u3083",
        romanji: ["sha"],
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "しゅ",
        code: "\u3057\u3085",
        romanji: ["shu"],
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "しょ",
        code: "\u3057\u3087",
        romanji: ["sho"],
        column: KanaColumn.S,
        diacritical: false
    },

    //S Diacritical Diagraphs
    {
        name: "じゃ",
        code: "\u3058\u3083",
        romanji: ["zya", "ja"],
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "じゅ",
        code: "\u3058\u3085",
        romanji: ["zyu", "ju"],
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "じょ",
        code: "\u3058\u3087",
        romanji: ["zyo", "jo"],
        column: KanaColumn.S,
        diacritical: true
    },

    //T Column (Big)
    {
        name: "た",
        code: "\u305F",
        romanji: ["ta"],
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "ち",
        code: "\u3061",
        romanji: ["ti", "chi"],
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "つ",
        code: "\u3064",
        romanji: ["tsu"],
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "て",
        code: "\u3066",
        romanji: ["te"],
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "と",
        code: "\u3068",
        romanji: ["to"],
        column: KanaColumn.T,
        diacritical: false
    },

    //T Diacriticals (Dakuten)
    {
        name: "だ",
        code: "\u3060",
        romanji: ["da"],
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "ぢ",
        code: "\u3062",
        romanji: ["di", "ji"],
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "づ",
        code: "\u3065",
        romanji: ["du", "zu"],
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "で",
        code: "\u3067",
        romanji: ["de"],
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "ど",
        code: "\u3069",
        romanji: ["do"],
        column: KanaColumn.T,
        diacritical: true
    },

    //T Diagraphs
    {
        name: "ちゃ",
        code: "\u3061\u3083",
        romanji: ["cha"],
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "ちゅ",
        code: "\u3061\u3085",
        romanji: ["chu"],
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "ちょ",
        code: "\u3061\u3087",
        romanji: ["chu"],
        column: KanaColumn.T,
        diacritical: false
    },

    //T Diacritical Diagraphs
    {
        name: "ぢゃ",
        code: "\u3062\u3083",
        romanji: ["dya", "ja"],
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "ぢゅ",
        code: "\u3062\u3085",
        romanji: ["dyu", "ju"],
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "ぢょ",
        code: "\u3062\u3087",
        romanji: ["dyo", "jo"],
        column: KanaColumn.T,
        diacritical: true
    },

    //N Column (Big)
    {
        name: "な",
        code: "\u306A",
        romanji: ["na"],
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "に",
        code: "\u306B",
        romanji: ["ni"],
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "ぬ",
        code: "\u306C",
        romanji: ["nu"],
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "ね",
        code: "\u306D",
        romanji: ["ne"],
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "の",
        code: "\u306E",
        romanji: ["no"],
        column: KanaColumn.N,
        diacritical: false
    },

    //N Diagraphs
    {
        name: "にゃ",
        code: "\u306B\u3083",
        romanji: ["nya"],
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "にゅ",
        code: "\u306B\u3085",
        romanji: ["nyu"],
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "にょ",
        code: "\u306B\u3087",
        romanji: ["nyo"],
        column: KanaColumn.N,
        diacritical: false
    },


    //H Column (Big)
    {
        name: "は",
        code: "\u306F",
        romanji: ["ha"],
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "ひ",
        code: "\u3072",
        romanji: ["hi"],
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "ふ",
        code: "\u3075",
        romanji: ["hu", "fu"],
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "へ",
        code: "\u3078",
        romanji: ["he", "e"],
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "ほ",
        code: "\u307B",
        romanji: ["ho"],
        column: KanaColumn.H,
        diacritical: false
    },

    //H Diacriticals (Dakuten)
    {
        name: "ば",
        code: "\u3070",
        romanji: ["ba"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "び",
        code: "\u3073",
        romanji: ["bi"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "ぶ",
        code: "\u3076",
        romanji: ["bu"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "べ",
        code: "\u3079",
        romanji: ["be"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "ぼ",
        code: "\u307C",
        romanji: ["bo"],
        column: KanaColumn.H,
        diacritical: true
    },

    //H Diacriticals (Handakuten)
    {
        name: "ぱ",
        code: "\u3071",
        romanji: ["pa"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "ぴ",
        code: "\u3074",
        romanji: ["pi"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "ぷ",
        code: "\u3077",
        romanji: ["pu"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "ぺ",
        code: "\u307A",
        romanji: ["pe"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "ぽ",
        code: "\u307D",
        romanji: ["po"],
        column: KanaColumn.H,
        diacritical: true
    },

    //H Diagraphs
    {
        name: "ひゃ",
        code: "\u3072\u3083",
        romanji: ["hya"],
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "ひゅ",
        code: "\u3072\u3085",
        romanji: ["hyu"],
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "ひょ",
        code: "\u3072\u3087",
        romanji: ["hyo"],
        column: KanaColumn.H,
        diacritical: false
    },

    //H Diacritical Diagraphs (Dakuten)
    {
        name: "びゃ",
        code: "\u3073\u3083",
        romanji: ["bya"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "びゅ",
        code: "\u3073\u3085",
        romanji: ["びゅ"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "びょ",
        code: "\u3073\u3087",
        romanji: ["byo"],
        column: KanaColumn.H,
        diacritical: true
    },

    //H Diacritical Diagraphs (Handakuten)
    {
        name: "ぴゃ",
        code: "\u3074\u3083",
        romanji: ["pya"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "ぴゅ",
        code: "\u3074\u3085",
        romanji: ["pyu"],
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "ぴょ",
        code: "\u3074\u3087",
        romanji: ["pyo"],
        column: KanaColumn.H,
        diacritical: true
    },

    //M Column (Big)
    {
        name: "ま",
        code: "\u307E",
        romanji: ["ma"],
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "み",
        code: "\u307F",
        romanji: ["mi"],
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "む",
        code: "\u3080",
        romanji: ["mu"],
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "め",
        code: "\u3081",
        romanji: ["me"],
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "も",
        code: "\u3082",
        romanji: ["mo"],
        column: KanaColumn.M,
        diacritical: false
    },

    //M Diagraphs
    {
        name: "みゃ",
        code: "\u307F\u3083",
        romanji: ["mya"],
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "みゅ",
        code: "\u307F\u3085",
        romanji: ["myu"],
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "みょ",
        code: "\u307F\u3087",
        romanji: ["myo"],
        column: KanaColumn.M,
        diacritical: false
    },

    //Y Column (Big)
    {
        name: "や",
        code: "\u3084",
        romanji: ["ya"],
        column: KanaColumn.Y,
        diacritical: false
    },
    {
        name: "ゆ",
        code: "\u3086",
        romanji: ["yu"],
        column: KanaColumn.Y,
        diacritical: false
    },
    {
        name: "よ",
        code: "\u3088",
        romanji: ["yo"],
        column: KanaColumn.Y,
        diacritical: false
    },

    //R Column (Big)
    {
        name: "ら",
        code: "\u3089",
        romanji: ["ra"],
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "り",
        code: "\u308A",
        romanji: ["ri"],
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "る",
        code: "\u308B",
        romanji: ["ru"],
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "れ",
        code: "\u308C",
        romanji: ["re"],
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ろ",
        code: "\u308D",
        romanji: ["ro"],
        column: KanaColumn.R,
        diacritical: false
    },

    //R Diagraphs
    {
        name: "りゃ",
        code: "\u308A\u3083",
        romanji: ["rya"],
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "りゅ",
        code: "\u308A\u3085",
        romanji: ["ryu"],
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "りょ",
        code: "\u308A\u3087",
        romanji: ["ryo"],
        column: KanaColumn.R,
        diacritical: false
    },

    //W Column (Big)
    {
        name: "わ",
        code: "\u308F",
        romanji: ["wa"],
        column: KanaColumn.W,
        diacritical: false
    },
    {
        name: "を",
        code: "\u3092",
        romanji: ["wo"],
        column: KanaColumn.W,
        diacritical: false
    },

    //N
    {
        name: "ん",
        code: "\u3093",
        romanji: ["n"],
        column: KanaColumn.OTHER,
        diacritical: false
    }
];

export default hiragana;