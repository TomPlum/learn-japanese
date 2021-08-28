import {KanaColumn} from "../domain/kana/KanaColumn";
import { KanaData } from "./DataTypes";

function katakana(): KanaData[] {
    return [
        //Vowels (Big)
        {
            name: "ア",
            code: "\u30A2",
            romaji: ["a"],
            column: KanaColumn.VOWEL,
            diacritical: false
        },
        {
            name: "イ",
            code: "\u30A4",
            romaji: ["i"],
            column: KanaColumn.VOWEL,
            diacritical: false
        },
        {
            name: "ウ",
            code: "\u30A6",
            romaji: ["u"],
            column: KanaColumn.VOWEL,
            diacritical: false
        },
        {
            name: "エ",
            code: "\u30A8",
            romaji: ["e"],
            column: KanaColumn.VOWEL,
            diacritical: false
        },
        {
            name: "オ",
            code: "\u30AA",
            romaji: ["o"],
            column: KanaColumn.VOWEL,
            diacritical: false
        },

        //K Column (Big)
        {
            name: "カ",
            code: "\u30AB",
            romaji: ["ka"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "キ",
            code: "\u30AD",
            romaji: ["ki"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "ク",
            code: "\u30AF",
            romaji: ["ku"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "ケ",
            code: "\u30B1",
            romaji: ["ke"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "コ",
            code: "\u30B3",
            romaji: ["ko"],
            column: KanaColumn.K,
            diacritical: false
        },

        //K Diacriticals (Dakuten)
        {
            name: "ガ",
            code: "\u30AC",
            romaji: ["ga"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "ギ",
            code: "\u30AE",
            romaji: ["gi"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "グ",
            code: "\u30B0",
            romaji: ["gu"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "ゲ",
            code: "\u30B2",
            romaji: ["ge"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "ゴ",
            code: "\u30B4",
            romaji: ["go"],
            column: KanaColumn.K,
            diacritical: true
        },

        //K Diagraphs
        {
            name: "キャ",
            code: "\u30AD\u30E3",
            romaji: ["kya"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "キュ",
            code: "\u30AD\u30E5",
            romaji: ["kyu"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "キョ",
            code: "\u30AD\u30E7",
            romaji: ["kyo"],
            column: KanaColumn.K,
            diacritical: false
        },

        //K Diacritical Diagraphs
        {
            name: "ギャ",
            code: "\u30AE\u30E3",
            romaji: ["gya"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "ギュ",
            code: "\u30AE\u30E5",
            romaji: ["gyu"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "ギョ",
            code: "\u30AE\u30E7",
            romaji: ["gyo"],
            column: KanaColumn.K,
            diacritical: true
        },

        //S Column (Big)
        {
            name: "サ",
            code: "\u30B5",
            romaji: ["sa"],
            column: KanaColumn.S,
            diacritical: false
        },
        {
            name: "シ",
            code: "\u30B7",
            romaji: ["shi"],
            column: KanaColumn.S,
            diacritical: false
        },
        {
            name: "ス",
            code: "\u30B9",
            romaji: ["su"],
            column: KanaColumn.S,
            diacritical: false
        },
        {
            name: "セ",
            code: "\u30BB",
            romaji: ["se"],
            column: KanaColumn.S,
            diacritical: false
        },
        {
            name: "ソ",
            code: "\u30BD",
            romaji: ["so"],
            column: KanaColumn.S,
            diacritical: false
        },

        //S Diacriticals (Dakuten)
        {
            name: "ザ",
            code: "\u30B6",
            romaji: ["za"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "シ",
            code: "\u30B8",
            romaji: ["zi" ,"ji"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "ズ",
            code: "\u30BA",
            romaji: ["zu"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "ゼ",
            code: "\u30BC",
            romaji: ["ze"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "ゾ",
            code: "\u30BE",
            romaji: ["zo"],
            column: KanaColumn.S,
            diacritical: true
        },

        //S Diagraphs

        {
            name: "シャ",
            code: "\u30B7\u30E3",
            romaji: ["sha"],
            column: KanaColumn.S,
            diacritical: false
        },
        {
            name: "シュ",
            code: "\u30B7\u30E5",
            romaji: ["shu"],
            column: KanaColumn.S,
            diacritical: false

        },
        {
            name: "ショ",
            code: "\u30B7\u30E7",
            romaji: ["sho"],
            column: KanaColumn.S,
            diacritical: false
        },

        //S Diacritical Diagraphs
        {
            name: "ジャ",
            code: "\u30B8\u30E3",
            romaji: ["ja", "zya"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "ジュ",
            code: "\u30B8\u30E5",
            romaji: ["ju", "zyu"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "ジョ",
            code: "\u30B8\u30E7",
            romaji: ["jo", "zyo"],
            column: KanaColumn.S,
            diacritical: true
        },

        //T Column (Big)
        {
            name: "タ",
            code: "\u30BF",
            romaji: ["ta"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "チ",
            code: "\u30C1",
            romaji: ["chi", "ti"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "ツ",
            code: "\u30C4",
            romaji: ["tsu"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "テ",
            code: "\u30C6",
            romaji: ["te"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "ト",
            code: "\u30C8",
            romaji: ["to"],
            column: KanaColumn.T,
            diacritical: false
        },

        //T Diacriticals (Dakuten)
        {
            name: "ダ",
            code: "\u30C0",
            romaji: ["da"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "ヂ",
            code: "\u30C2",
            romaji: ["di", "ji"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "ヅ",
            code: "\u30C5",
            romaji: ["du", "zu"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "デ",
            code: "\u30C7",
            romaji: ["de"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "ド",
            code: "\u30C9",
            romaji: ["do"],
            column: KanaColumn.T,
            diacritical: true
        },

        //T Diagraphs
        {
            name: "チャ",
            code: "\u30C1\u30E3",
            romaji: ["cha"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "チュ",
            code: "\u30C1\u30E5",
            romaji: ["chu"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "チョ",
            code: "\u30C1\u30E7",
            romaji: ["cho"],
            column: KanaColumn.T,
            diacritical: false
        },

        //T Diacritical Diagraphs
        {
            name: "ヂャ",
            code: "\u30C2\u30E3",
            romaji: ["dya", "ja"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "ヂュ",
            code: "\u30C2\u30E5",
            romaji: ["dyu", "ju"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "ヂョ",
            code: "\u30C2\u30E7",
            romaji: ["dyo", "jo"],
            column: KanaColumn.T,
            diacritical: true
        },

        //N Column (Big)
        {
            name: "ナ",
            code: "\u30CA",
            romaji: ["na"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ニ",
            code: "\u30CB",
            romaji: ["ni"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ヌ",
            code: "\u30CC",
            romaji: ["nu"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ネ",
            code: "\u30CD",
            romaji: ["ne"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ノ",
            code: "\u30CE",
            romaji: ["no"],
            column: KanaColumn.N,
            diacritical: false
        },

        //N Diagraphs
        {
            name: "ニャ",
            code: "\u30CB\u30E3",
            romaji: ["nya"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ニュ",
            code: "\u30CB\u30E5",
            romaji: ["nyu"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ニョ",
            code: "\u30CB\u30E7",
            romaji: ["nyo"],
            column: KanaColumn.N,
            diacritical: false
        },

        //H Column (Big)
        {
            name: "ハ",
            code: "\u30CF",
            romaji: ["ha"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "ヒ",
            code: "\u30D2",
            romaji: ["hi"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "フ",
            code: "\u30D5",
            romaji: ["hu", "fu"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "ヘ",
            code: "\u30D8",
            romaji: ["he", "e"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "ホ",
            code: "\u30DB",
            romaji: ["ho"],
            column: KanaColumn.H,
            diacritical: false
        },

        //H Diacriticals (Dakuten)
        {
            name: "バ",
            code: "\u30D0",
            romaji: ["ba"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ビ",
            code: "\u30D3",
            romaji: ["bi"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ブ",
            code: "\u30D6",
            romaji: ["bu"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ベ",
            code: "\u30D9",
            romaji: ["be"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ボ",
            code: "\u30DC",
            romaji: ["bo"],
            column: KanaColumn.H,
            diacritical: true
        },

        //H Diacriticals (Handakuten)
        {
            name: "パ",
            code: "\u30D1",
            romaji: ["pa"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ピ",
            code: "\u30D4",
            romaji: ["pi"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "プ",
            code: "\u30D7",
            romaji: ["pu"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ペ",
            code: "\u30DA",
            romaji: ["pe"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ポ",
            code: "\u30DD",
            romaji: ["po"],
            column: KanaColumn.H,
            diacritical: true
        },

        //H Diagraphs
        {
            name: "ヒャ",
            code: "\u30D2\u30E3",
            romaji: ["hya"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "ヒュ",
            code: "\u30D2\u30E5",
            romaji: ["hyu"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "ヒョ",
            code: "\u30D2\u30E7",
            romaji: ["hyo"],
            column: KanaColumn.H,
            diacritical: false
        },

        //H Diacritical Diagraphs (Dakuten)
        {
            name: "ビャ",
            code: "\u30D3\u30E3",
            romaji: ["bya"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ビュ",
            code: "\u30D3\u30E5",
            romaji: ["byu"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ビョ",
            code: "\u30D3\u30E7",
            romaji: ["byo"],
            column: KanaColumn.H,
            diacritical: true
        },

        //H Diacritical Diagraphs (Handakuten)
        {
            name: "ピャ",
            code: "\u30D4\u30E3",
            romaji: ["pya"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ピュ",
            code: "\u30D4\u30E5",
            romaji: ["pyu"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ピョ",
            code: "\u30D4\u30E7",
            romaji: ["pyo"],
            column: KanaColumn.H,
            diacritical: true
        },

        //M Column (Big)
        {
            name: "マ",
            code: "\u30DE",
            romaji: ["ma"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "ミ",
            code: "\u30DF",
            romaji: ["mi"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "ム",
            code: "\u30E0",
            romaji: ["mu"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "メ",
            code: "\u30E1",
            romaji: ["me"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "モ",
            code: "\u30E2",
            romaji: ["mo"],
            column: KanaColumn.M,
            diacritical: false
        },

        //M Diagraphs
        {
            name: "ミャ",
            code: "\u30DF\u30E3",
            romaji: ["mya"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "ミュ",
            code: "\u30DF\u30E5",
            romaji: ["myu"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "ミョ",
            code: "\u30DF\u30E7",
            romaji: ["myo"],
            column: KanaColumn.M,
            diacritical: false
        },

        //Y Column (Big)
        {
            name: "ヤ",
            code: "\u30E4",
            romaji: ["ya"],
            column: KanaColumn.Y,
            diacritical: false
        },
        {
            name: "ユ",
            code: "\u30E6",
            romaji: ["yu"],
            column: KanaColumn.Y,
            diacritical: false
        },
        {
            name: "ヨ",
            code: "\u30E8",
            romaji: ["yo"],
            column: KanaColumn.Y,
            diacritical: false
        },

        //R Column (Big)
        {
            name: "ラ",
            code: "\u30E9",
            romaji: ["ra"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "リ",
            code: "\u30EA",
            romaji: ["ri"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "ル",
            code: "\u30EB",
            romaji: ["ru"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "レ",
            code: "\u30EC",
            romaji: ["re"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "ロ",
            code: "\u30ED",
            romaji: ["ro"],
            column: KanaColumn.R,
            diacritical: false
        },

        //R Diagraphs
        {
            name: "リャ",
            code: "\u30EA\u30E3",
            romaji: ["rya"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "リュ",
            code: "\u30EA\u30E5",
            romaji: ["ryu"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "リョ",
            code: "\u30EA\u30E7",
            romaji: ["ryo"],
            column: KanaColumn.R,
            diacritical: false
        },

        //W Column (Big)
        {
            name: "ワ",
            code: "\u30EF",
            romaji: ["wa"],
            column: KanaColumn.W,
            diacritical: false
        },
        {
            name: "ヲ",
            code: "\u30F2",
            romaji: ["wo"],
            column: KanaColumn.W,
            diacritical: false
        },

        //N
        {
            name: "ン",
            code: "\u30F3",
            romaji: ["n"],
            column: KanaColumn.OTHER,
            diacritical: false
        }
    ];
}

export default katakana;
