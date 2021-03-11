import {KanaColumn} from "../types/KanaColumn";
import { KanaData } from "./DataTypes";

function katakana(): KanaData[] {
    return [
        //Vowels (Big)
        {
            name: "ア",
            code: "\u30A2",
            romanji: ["a"],
            column: KanaColumn.VOWEL,
            diacritical: false
        },
        {
            name: "イ",
            code: "\u30A4",
            romanji: ["i"],
            column: KanaColumn.VOWEL,
            diacritical: false
        },
        {
            name: "ウ",
            code: "\u30A6",
            romanji: ["u"],
            column: KanaColumn.VOWEL,
            diacritical: false
        },
        {
            name: "エ",
            code: "\u30A8",
            romanji: ["e"],
            column: KanaColumn.VOWEL,
            diacritical: false
        },
        {
            name: "オ",
            code: "\u30AA",
            romanji: ["o"],
            column: KanaColumn.VOWEL,
            diacritical: false
        },

        //K Column (Big)
        {
            name: "カ",
            code: "\u30AB",
            romanji: ["ka"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "キ",
            code: "\u30AD",
            romanji: ["ki"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "ク",
            code: "\u30AF",
            romanji: ["ku"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "ケ",
            code: "\u30B1",
            romanji: ["ke"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "コ",
            code: "\u30B3",
            romanji: ["ko"],
            column: KanaColumn.K,
            diacritical: false
        },

        //K Diacriticals (Dakuten)
        {
            name: "ガ",
            code: "\u30AC",
            romanji: ["ga"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "ギ",
            code: "\u30AE",
            romanji: ["gi"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "グ",
            code: "\u30B0",
            romanji: ["gu"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "ゲ",
            code: "\u30B2",
            romanji: ["ge"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "ゴ",
            code: "\u30B4",
            romanji: ["go"],
            column: KanaColumn.K,
            diacritical: true
        },

        //K Diagraphs
        {
            name: "キャ",
            code: "\u30AD\u30E3",
            romanji: ["kya"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "キュ",
            code: "\u30AD\u30E5",
            romanji: ["kyu"],
            column: KanaColumn.K,
            diacritical: false
        },
        {
            name: "キョ",
            code: "\u30AD\u30E7",
            romanji: ["kyo"],
            column: KanaColumn.K,
            diacritical: false
        },

        //K Diacritical Diagraphs
        {
            name: "ギャ",
            code: "\u30AE\u30E3",
            romanji: ["gya"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "ギュ",
            code: "\u30AE\u30E5",
            romanji: ["gyu"],
            column: KanaColumn.K,
            diacritical: true
        },
        {
            name: "ギョ",
            code: "\u30AE\u30E7",
            romanji: ["gyo"],
            column: KanaColumn.K,
            diacritical: true
        },

        //S Column (Big)
        {
            name: "サ",
            code: "\u30B5",
            romanji: ["sa"],
            column: KanaColumn.S,
            diacritical: false
        },
        {
            name: "シ",
            code: "\u30B7",
            romanji: ["shi"],
            column: KanaColumn.S,
            diacritical: false
        },
        {
            name: "ス",
            code: "\u30B9",
            romanji: ["su"],
            column: KanaColumn.S,
            diacritical: false
        },
        {
            name: "セ",
            code: "\u30BB",
            romanji: ["se"],
            column: KanaColumn.S,
            diacritical: false
        },
        {
            name: "ソ",
            code: "\u30BD",
            romanji: ["so"],
            column: KanaColumn.S,
            diacritical: false
        },

        //S Diacriticals (Dakuten)
        {
            name: "ザ",
            code: "\u30B6",
            romanji: ["za"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "シ",
            code: "\u30B8",
            romanji: ["zi" ,"ji"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "ズ",
            code: "\u30BA",
            romanji: ["zu"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "ゼ",
            code: "\u30BC",
            romanji: ["ze"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "ゾ",
            code: "\u30BE",
            romanji: ["zo"],
            column: KanaColumn.S,
            diacritical: true
        },

        //S Diagraphs

        {
            name: "シャ",
            code: "\u30B7\u30E3",
            romanji: ["sha"],
            column: KanaColumn.S,
            diacritical: false
        },
        {
            name: "シュ",
            code: "\u30B7\u30E5",
            romanji: ["shu"],
            column: KanaColumn.S,
            diacritical: false

        },
        {
            name: "ショ",
            code: "\u30B7\u30E7",
            romanji: ["sho"],
            column: KanaColumn.S,
            diacritical: false
        },

        //S Diacritical Diagraphs
        {
            name: "ジャ",
            code: "\u30B8\u30E3",
            romanji: ["zya", "ja"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "ジュ",
            code: "\u30B8\u30E5",
            romanji: ["zyu", "ju"],
            column: KanaColumn.S,
            diacritical: true
        },
        {
            name: "ジョ",
            code: "\u30B8\u30E7",
            romanji: ["zyo", "jo"],
            column: KanaColumn.S,
            diacritical: true
        },

        //T Column (Big)
        {
            name: "タ",
            code: "\u30BF",
            romanji: ["ta"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "チ",
            code: "\u30C1",
            romanji: ["ti", "chi"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "ツ",
            code: "\u30C4",
            romanji: ["tsu"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "テ",
            code: "\u30C6",
            romanji: ["te"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "ト",
            code: "\u30C8",
            romanji: ["to"],
            column: KanaColumn.T,
            diacritical: false
        },

        //T Diacriticals (Dakuten)
        {
            name: "ダ",
            code: "\u30C0",
            romanji: ["da"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "ヂ",
            code: "\u30C2",
            romanji: ["di", "ji"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "ヅ",
            code: "\u30C5",
            romanji: ["du", "zu"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "デ",
            code: "\u30C7",
            romanji: ["de"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "ド",
            code: "\u30C9",
            romanji: ["do"],
            column: KanaColumn.T,
            diacritical: true
        },

        //T Diagraphs
        {
            name: "チャ",
            code: "\u30C1\u30E3",
            romanji: ["cha"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "チュ",
            code: "\u30C1\u30E5",
            romanji: ["chu"],
            column: KanaColumn.T,
            diacritical: false
        },
        {
            name: "チョ",
            code: "\u30C1\u30E7",
            romanji: ["cho"],
            column: KanaColumn.T,
            diacritical: false
        },

        //T Diacritical Diagraphs
        {
            name: "ヂャ",
            code: "\u30C2\u30E3",
            romanji: ["dya", "ja"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "ヂュ",
            code: "\u30C2\u30E5",
            romanji: ["dyu", "ju"],
            column: KanaColumn.T,
            diacritical: true
        },
        {
            name: "ヂョ",
            code: "\u30C2\u30E7",
            romanji: ["dyo", "jo"],
            column: KanaColumn.T,
            diacritical: true
        },

        //N Column (Big)
        {
            name: "ナ",
            code: "\u30CA",
            romanji: ["na"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ニ",
            code: "\u30CB",
            romanji: ["ni"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ヌ",
            code: "\u30CC",
            romanji: ["nu"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ネ",
            code: "\u30CD",
            romanji: ["ne"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ノ",
            code: "\u30CE",
            romanji: ["no"],
            column: KanaColumn.N,
            diacritical: false
        },

        //N Diagraphs
        {
            name: "ニャ",
            code: "\u30CB\u30E3",
            romanji: ["nya"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ニュ",
            code: "\u30CB\u30E5",
            romanji: ["nyu"],
            column: KanaColumn.N,
            diacritical: false
        },
        {
            name: "ニョ",
            code: "\u30CB\u30E7",
            romanji: ["nyo"],
            column: KanaColumn.N,
            diacritical: false
        },

        //H Column (Big)
        {
            name: "ハ",
            code: "\u30CF",
            romanji: ["ha"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "ヒ",
            code: "\u30D2",
            romanji: ["hi"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "フ",
            code: "\u30D5",
            romanji: ["hu", "fu"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "ヘ",
            code: "\u30D8",
            romanji: ["he", "e"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "ホ",
            code: "\u30DB",
            romanji: ["ho"],
            column: KanaColumn.H,
            diacritical: false
        },

        //H Diacriticals (Dakuten)
        {
            name: "バ",
            code: "\u30D0",
            romanji: ["ba"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ビ",
            code: "\u30D3",
            romanji: ["bi"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ブ",
            code: "\u30D6",
            romanji: ["bu"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ベ",
            code: "\u30D9",
            romanji: ["be"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ボ",
            code: "\u30DC",
            romanji: ["bo"],
            column: KanaColumn.H,
            diacritical: true
        },

        //H Diacriticals (Handakuten)
        {
            name: "パ",
            code: "\u30D1",
            romanji: ["pa"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ピ",
            code: "\u30D4",
            romanji: ["pi"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "プ",
            code: "\u30D7",
            romanji: ["pu"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ペ",
            code: "\u30DA",
            romanji: ["pe"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ポ",
            code: "\u30DD",
            romanji: ["po"],
            column: KanaColumn.H,
            diacritical: true
        },

        //H Diagraphs
        {
            name: "ヒャ",
            code: "\u30D2\u30E3",
            romanji: ["hya"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "ヒュ",
            code: "\u30D2\u30E5",
            romanji: ["hyu"],
            column: KanaColumn.H,
            diacritical: false
        },
        {
            name: "ヒョ",
            code: "\u30D2\u30E7",
            romanji: ["hyo"],
            column: KanaColumn.H,
            diacritical: false
        },

        //H Diacritical Diagraphs (Dakuten)
        {
            name: "ビャ",
            code: "\u30D3\u30E3",
            romanji: ["bya"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ビュ",
            code: "\u30D3\u30E5",
            romanji: ["byu"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ビョ",
            code: "\u30D3\u30E7",
            romanji: ["byo"],
            column: KanaColumn.H,
            diacritical: true
        },

        //H Diacritical Diagraphs (Handakuten)
        {
            name: "ピャ",
            code: "\u30D4\u30E3",
            romanji: ["pya"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ピュ",
            code: "\u30D4\u30E5",
            romanji: ["pyu"],
            column: KanaColumn.H,
            diacritical: true
        },
        {
            name: "ピョ",
            code: "\u30D4\u30E7",
            romanji: ["pyo"],
            column: KanaColumn.H,
            diacritical: true
        },

        //M Column (Big)
        {
            name: "マ",
            code: "\u30DE",
            romanji: ["ma"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "ミ",
            code: "\u30DF",
            romanji: ["mi"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "ム",
            code: "\u30E0",
            romanji: ["mu"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "メ",
            code: "\u30E1",
            romanji: ["me"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "モ",
            code: "\u30E2",
            romanji: ["mo"],
            column: KanaColumn.M,
            diacritical: false
        },

        //M Diagraphs
        {
            name: "ミャ",
            code: "\u30DF\u30E3",
            romanji: ["mya"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "ミュ",
            code: "\u30DF\u30E5",
            romanji: ["myu"],
            column: KanaColumn.M,
            diacritical: false
        },
        {
            name: "ミョ",
            code: "\u30DF\u30E7",
            romanji: ["myo"],
            column: KanaColumn.M,
            diacritical: false
        },

        //Y Column (Big)
        {
            name: "ヤ",
            code: "\u30E4",
            romanji: ["ya"],
            column: KanaColumn.Y,
            diacritical: false
        },
        {
            name: "ユ",
            code: "\u30E6",
            romanji: ["yu"],
            column: KanaColumn.Y,
            diacritical: false
        },
        {
            name: "ヨ",
            code: "\u30E8",
            romanji: ["yo"],
            column: KanaColumn.Y,
            diacritical: false
        },

        //R Column (Big)
        {
            name: "ラ",
            code: "\u30E9",
            romanji: ["ra"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "リ",
            code: "\u30EA",
            romanji: ["ri"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "ル",
            code: "\u30EB",
            romanji: ["ru"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "レ",
            code: "\u30EC",
            romanji: ["re"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "ロ",
            code: "\u30ED",
            romanji: ["ro"],
            column: KanaColumn.R,
            diacritical: false
        },

        //R Diagraphs
        {
            name: "リャ",
            code: "\u30EA\u30E3",
            romanji: ["rya"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "リュ",
            code: "\u30EA\u30E5",
            romanji: ["ryu"],
            column: KanaColumn.R,
            diacritical: false
        },
        {
            name: "リョ",
            code: "\u30EA\u30E7",
            romanji: ["ryo"],
            column: KanaColumn.R,
            diacritical: false
        },

        //W Column (Big)
        {
            name: "ワ",
            code: "\u30EF",
            romanji: ["wa"],
            column: KanaColumn.W,
            diacritical: false
        },
        {
            name: "ヲ",
            code: "\u30F2",
            romanji: ["wo"],
            column: KanaColumn.W,
            diacritical: false
        },

        //N
        {
            name: "ン",
            code: "\u30F3",
            romanji: ["n"],
            column: KanaColumn.OTHER,
            diacritical: false
        }
    ];
}

export default katakana;