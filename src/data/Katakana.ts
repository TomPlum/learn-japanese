import {KanaColumn} from "../types/KanaColumn";

const katakana = [
    //Vowels (Big)
    {
        name: "a",
        code: "\u30A2",
        column: KanaColumn.VOWEL
    },
    {
        name: "i",
        code: "\u30A4",
        column: KanaColumn.VOWEL
    },
    {
        name: "u",
        code: "\u30A6",
        column: KanaColumn.VOWEL
    },
    {
        name: "e",
        code: "\u30A8",
        column: KanaColumn.VOWEL
    },
    {
        name: "o",
        code: "\u30AA",
        column: KanaColumn.VOWEL
    },

    //K Column (Big)
    {
        name: "ka",
        code: "\u30AB",
        column: KanaColumn.K
    },
    {
        name: "ki",
        code: "\u30AD",
        column: KanaColumn.K
    },
    {
        name: "ku",
        code: "\u30AF",
        column: KanaColumn.K
    },
    {
        name: "ke",
        code: "\u30B1",
        column: KanaColumn.K
    },
    {
        name: "ko",
        code: "\u30B3",
        column: KanaColumn.K
    },

    //K Diacriticals (Dakuten)
    {
        name: "ga",
        code: "\u30AC",
        column: KanaColumn.K
    },
    {
        name: "gi",
        code: "\u30AE",
        column: KanaColumn.K
    },
    {
        name: "gu",
        code: "\u30B0",
        column: KanaColumn.K
    },
    {
        name: "ge",
        code: "\u30B2",
        column: KanaColumn.K
    },
    {
        name: "go",
        code: "\u30B4",
        column: KanaColumn.K
    },

    //S Column (Big)
    {
        name: "sa",
        code: "\u30B5",
        column: KanaColumn.S
    },
    {
        name: "shi",
        code: "\u30B7",
        column: KanaColumn.S
    },
    {
        name: "su",
        code: "\u30B9",
        column: KanaColumn.S
    },
    {
        name: "se",
        code: "\u30BB",
        column: KanaColumn.S
    },
    {
        name: "so",
        code: "\u30BD",
        column: KanaColumn.S
    },

    //S Diacriticals (Dakuten)
    {
        name: "za",
        code: "\u30B6",
        column: KanaColumn.S
    },
    {
        name: "ji",
        code: "\u30B8",
        column: KanaColumn.S
    },
    {
        name: "zu",
        code: "\u30BA",
        column: KanaColumn.S
    },
    {
        name: "ze",
        code: "\u30BC",
        column: KanaColumn.S
    },
    {
        name: "zo",
        code: "\u30BE",
        column: KanaColumn.S
    },

    //T Column (Big)
    {
        name: "ta",
        code: "\u30BF",
        column: KanaColumn.T
    },
    {
        name: "chi",
        code: "\u30C1",
        column: KanaColumn.T
    },
    {
        name: "tsu",
        code: "\u30C4",
        column: KanaColumn.T
    },
    {
        name: "te",
        code: "\u30C6",
        column: KanaColumn.T
    },
    {
        name: "to",
        code: "\u30C8",
        column: KanaColumn.T
    },

    //T Diacriticals (Dakuten)
    {
        name: "da",
        code: "\u30C0",
        column: KanaColumn.T
    },
    {
        name: "di",
        code: "\u30C2",
        column: KanaColumn.T
    },
    {
        name: "du",
        code: "\u30C5",
        column: KanaColumn.T
    },
    {
        name: "de",
        code: "\u30C7",
        column: KanaColumn.T
    },
    {
        name: "do",
        code: "\u30C9",
        column: KanaColumn.T
    },

    //N Column (Big)
    {
        name: "na",
        code: "\u30CA",
        column: KanaColumn.N
    },
    {
        name: "ni",
        code: "\u30CB",
        column: KanaColumn.N
    },
    {
        name: "nu",
        code: "\u30CC",
        column: KanaColumn.N
    },
    {
        name: "ne",
        code: "\u30CD",
        column: KanaColumn.N
    },
    {
        name: "no",
        code: "\u30CE",
        column: KanaColumn.N
    },

    //H Column (Big)
    {
        name: "ha",
        code: "\u30CF",
        column: KanaColumn.H
    },
    {
        name: "hi",
        code: "\u30D2",
        column: KanaColumn.H
    },
    {
        name: "hu",
        code: "\u30D5",
        column: KanaColumn.H
    },
    {
        name: "he",
        code: "\u30D8",
        column: KanaColumn.H
    },
    {
        name: "ho",
        code: "\u30DB",
        column: KanaColumn.H
    },

    //H Diacriticals (Dakuten)
    {
        name: "ba",
        code: "\u30D0",
        column: KanaColumn.H
    },
    {
        name: "bi",
        code: "\u30D3",
        column: KanaColumn.H
    },
    {
        name: "bu",
        code: "\u30D6",
        column: KanaColumn.H
    },
    {
        name: "be",
        code: "\u30D9",
        column: KanaColumn.H
    },
    {
        name: "bo",
        code: "\u30DC",
        column: KanaColumn.H
    },

    //H Diacriticals (Handakuten)
    {
        name: "pa",
        code: "\u30D1",
        column: KanaColumn.H
    },
    {
        name: "pi",
        code: "\u30D4",
        column: KanaColumn.H
    },
    {
        name: "pu",
        code: "\u30D7",
        column: KanaColumn.H
    },
    {
        name: "pe",
        code: "\u30DA",
        column: KanaColumn.H
    },
    {
        name: "po",
        code: "\u30DD",
        column: KanaColumn.H
    },

    //M Column (Big)
    {
        name: "ma",
        code: "\u30DE",
        column: KanaColumn.M
    },
    {
        name: "mi",
        code: "\u30DF",
        column: KanaColumn.M
    },
    {
        name: "mu",
        code: "\u30E0",
        column: KanaColumn.M
    },
    {
        name: "me",
        code: "\u30E1",
        column: KanaColumn.M
    },
    {
        name: "mo",
        code: "\u30E2",
        column: KanaColumn.M
    },

    //Y Column (Big)
    {
        name: "ya",
        code: "\u30E4",
        column: KanaColumn.Y
    },
    {
        name: "yu",
        code: "\u30E6",
        column: KanaColumn.Y
    },
    {
        name: "yo",
        code: "\u30E8",
        column: KanaColumn.Y
    },

    //R Column (Big)
    {
        name: "ra",
        code: "\u30E9",
        column: KanaColumn.R
    },
    {
        name: "ri",
        code: "\u30EA",
        column: KanaColumn.R
    },
    {
        name: "ru",
        code: "\u30EB",
        column: KanaColumn.R
    },
    {
        name: "re",
        code: "\u30EC",
        column: KanaColumn.R
    },
    {
        name: "ro",
        code: "\u30ED",
        column: KanaColumn.R
    },

    //W Column (Big)
    {
        name: "wa",
        code: "\u30EF",
        column: KanaColumn.W
    },
    {
        name: "wo",
        code: "\u30F2",
        column: KanaColumn.W
    },

    //N
    {
        name: "n",
        code: "\u30F3",
        column: KanaColumn.OTHER
    }
];

export default katakana;