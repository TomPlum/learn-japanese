import {KanaColumn} from "../types/KanaColumn";
import { KanaData } from "./DataTypes";

const katakana: KanaData[] = [
    //Vowels (Big)
    {
        name: "a",
        code: "\u30A2",
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "i",
        code: "\u30A4",
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "u",
        code: "\u30A6",
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "e",
        code: "\u30A8",
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "o",
        code: "\u30AA",
        column: KanaColumn.VOWEL,
        diacritical: false
    },

    //K Column (Big)
    {
        name: "ka",
        code: "\u30AB",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "ki",
        code: "\u30AD",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "ku",
        code: "\u30AF",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "ke",
        code: "\u30B1",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "ko",
        code: "\u30B3",
        column: KanaColumn.K,
        diacritical: false
    },

    //K Diacriticals (Dakuten)
    {
        name: "ga",
        code: "\u30AC",
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "gi",
        code: "\u30AE",
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "gu",
        code: "\u30B0",
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "ge",
        code: "\u30B2",
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "go",
        code: "\u30B4",
        column: KanaColumn.K,
        diacritical: true
    },

    //K Diagraphs
    {
        name: "kya",
        code: "\u30AD\u30E3",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "kyu",
        code: "\u30AD\u30E5",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "kyo",
        code: "\u30AD\u30E7",
        column: KanaColumn.K,
        diacritical: false
    },

    //K Diacritical Diagraphs
    {
        name: "gya",
        code: "\u30AE\u30E3",
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "gyu",
        code: "\u30AE\u30E5",
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "gyo",
        code: "\u30AE\u30E7",
        column: KanaColumn.K,
        diacritical: true
    },

    //S Column (Big)
    {
        name: "sa",
        code: "\u30B5",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "shi",
        code: "\u30B7",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "su",
        code: "\u30B9",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "se",
        code: "\u30BB",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "so",
        code: "\u30BD",
        column: KanaColumn.S,
        diacritical: false
    },

    //S Diacriticals (Dakuten)
    {
        name: "za",
        code: "\u30B6",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "ji",
        code: "\u30B8",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "zu",
        code: "\u30BA",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "ze",
        code: "\u30BC",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "zo",
        code: "\u30BE",
        column: KanaColumn.S,
        diacritical: true
    },

    //S Diagraphs

    {
        name: "sha",
        code: "\u30B7\u30E3",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "shu",
        code: "\u30B7\u30E5",
        column: KanaColumn.S,
        diacritical: false

    },
    {
        name: "sho",
        code: "\u30B7\u30E7",
        column: KanaColumn.S,
        diacritical: false
    },

    //S Diacritical Diagraphs
    {
        name: "ja",
        code: "\u30B8\u30E3",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "ju",
        code: "\u30B8\u30E5",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "jo",
        code: "\u30B8\u30E7",
        column: KanaColumn.S,
        diacritical: true
    },

    //T Column (Big)
    {
        name: "ta",
        code: "\u30BF",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "chi",
        code: "\u30C1",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "tsu",
        code: "\u30C4",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "te",
        code: "\u30C6",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "to",
        code: "\u30C8",
        column: KanaColumn.T,
        diacritical: false
    },

    //T Diacriticals (Dakuten)
    {
        name: "da",
        code: "\u30C0",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "di",
        code: "\u30C2",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "du",
        code: "\u30C5",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "de",
        code: "\u30C7",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "do",
        code: "\u30C9",
        column: KanaColumn.T,
        diacritical: true
    },

    //T Diagraphs
    {
        name: "cha",
        code: "\u30C1\u30E3",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "chu",
        code: "\u30C1\u30E5",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "cho",
        code: "\u30C1\u30E7",
        column: KanaColumn.T,
        diacritical: false
    },

    //T Diacritical Diagraphs
    {
        name: "dya",
        code: "\u30C2\u30E3",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "dyu",
        code: "\u30C2\u30E5",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "dyo",
        code: "\u30C2\u30E7",
        column: KanaColumn.T,
        diacritical: true
    },

    //N Column (Big)
    {
        name: "na",
        code: "\u30CA",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "ni",
        code: "\u30CB",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "nu",
        code: "\u30CC",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "ne",
        code: "\u30CD",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "no",
        code: "\u30CE",
        column: KanaColumn.N,
        diacritical: false
    },

    //N Diagraphs
    {
        name: "nya",
        code: "\u30CB\u30E3",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "nyu",
        code: "\u30CB\u30E5",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "nyo",
        code: "\u30CB\u30E7",
        column: KanaColumn.N,
        diacritical: false
    },

    //H Column (Big)
    {
        name: "ha",
        code: "\u30CF",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "hi",
        code: "\u30D2",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "hu",
        code: "\u30D5",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "he",
        code: "\u30D8",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "ho",
        code: "\u30DB",
        column: KanaColumn.H,
        diacritical: false
    },

    //H Diacriticals (Dakuten)
    {
        name: "ba",
        code: "\u30D0",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "bi",
        code: "\u30D3",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "bu",
        code: "\u30D6",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "be",
        code: "\u30D9",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "bo",
        code: "\u30DC",
        column: KanaColumn.H,
        diacritical: true
    },

    //H Diacriticals (Handakuten)
    {
        name: "pa",
        code: "\u30D1",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "pi",
        code: "\u30D4",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "pu",
        code: "\u30D7",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "pe",
        code: "\u30DA",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "po",
        code: "\u30DD",
        column: KanaColumn.H,
        diacritical: true
    },

    //H Diagraphs
    {
        name: "hya",
        code: "\u30D2\u30E3",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "hyu",
        code: "\u30D2\u30E5",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "hyo",
        code: "\u30D2\u30E7",
        column: KanaColumn.H,
        diacritical: false
    },

    //H Diacritical Diagraphs (Dakuten)
    {
        name: "bya",
        code: "\u30D3\u30E3",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "byu",
        code: "\u30D3\u30E5",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "byo",
        code: "\u30D3\u30E7",
        column: KanaColumn.H,
        diacritical: true
    },

    //H Diacritical Diagraphs (Handakuten)
    {
        name: "pya",
        code: "\u30D4\u30E3",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "pyu",
        code: "\u30D4\u30E5",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "pyo",
        code: "\u30D4\u30E7",
        column: KanaColumn.H,
        diacritical: true
    },

    //M Column (Big)
    {
        name: "ma",
        code: "\u30DE",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "mi",
        code: "\u30DF",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "mu",
        code: "\u30E0",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "me",
        code: "\u30E1",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "mo",
        code: "\u30E2",
        column: KanaColumn.M,
        diacritical: false
    },

    //M Diagraphs
    {
        name: "mya",
        code: "\u30DF\u30E3",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "myu",
        code: "\u30DF\u30E5",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "myo",
        code: "\u30DF\u30E7",
        column: KanaColumn.M,
        diacritical: false
    },

    //Y Column (Big)
    {
        name: "ya",
        code: "\u30E4",
        column: KanaColumn.Y,
        diacritical: false
    },
    {
        name: "yu",
        code: "\u30E6",
        column: KanaColumn.Y,
        diacritical: false
    },
    {
        name: "yo",
        code: "\u30E8",
        column: KanaColumn.Y,
        diacritical: false
    },

    //R Column (Big)
    {
        name: "ra",
        code: "\u30E9",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ri",
        code: "\u30EA",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ru",
        code: "\u30EB",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "re",
        code: "\u30EC",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ro",
        code: "\u30ED",
        column: KanaColumn.R,
        diacritical: false
    },

    //R Diagraphs
    {
        name: "rya",
        code: "\u30EA\u30E3",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ryu",
        code: "\u30EA\u30E5",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ryo",
        code: "\u30EA\u30E7",
        column: KanaColumn.R,
        diacritical: false
    },

    //W Column (Big)
    {
        name: "wa",
        code: "\u30EF",
        column: KanaColumn.W,
        diacritical: false
    },
    {
        name: "wo",
        code: "\u30F2",
        column: KanaColumn.W,
        diacritical: false
    },

    //N
    {
        name: "n",
        code: "\u30F3",
        column: KanaColumn.OTHER,
        diacritical: false
    }
];

export default katakana;