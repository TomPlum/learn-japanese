import {KanaColumn} from "../types/KanaColumn";
import {KanaData} from "./DataTypes";

const hiragana: KanaData[] = [
    //Vowels (Big)
    {
        name: "a",
        code: "\u3042",
        column: KanaColumn.VOWEL
    },
    {
        name: "i",
        code: "\u3044",
        column: KanaColumn.VOWEL
    },
    {
        name: "u",
        code: "\u3046",
        column: KanaColumn.VOWEL
    },
    {
        name: "e",
        code: "\u3048",
        column: KanaColumn.VOWEL
    },
    {
        name: "o",
        code: "\u304A",
        column: KanaColumn.VOWEL
    },

    //K Column (Big)
    {
        name: "ka",
        code: "\u304B",
        column: KanaColumn.K
    },
    {
        name: "ki",
        code: "\u304D",
        column: KanaColumn.K
    },
    {
        name: "ku",
        code: "\u304F",
        column: KanaColumn.K
    },
    {
        name: "ke",
        code: "\u3051",
        column: KanaColumn.K
    },
    {
        name: "ko",
        code: "\u3053",
        column: KanaColumn.K
    },

    //K Diacriticals (Dakuten)
    {
        name: "ga",
        code: "\u304C",
        column: KanaColumn.K
    },
    {
        name: "gi",
        code: "\u304E",
        column: KanaColumn.K
    },
    {
        name: "gu",
        code: "\u3050",
        column: KanaColumn.K
    },
    {
        name: "ge",
        code: "\u3052",
        column: KanaColumn.K
    },
    {
        name: "go",
        code: "\u3054",
        column: KanaColumn.K
    },

    //K Diagraphs
    {
        name: "kya",
        code: "\u304D\u3083",
        column: KanaColumn.K
    },
    {
        name: "kyu",
        code: "\u304D\u3085",
        column: KanaColumn.K
    },
    {
        name: "kyo",
        code: "\u304D\u3087",
        column: KanaColumn.K
    },

    //K Diacritical Diagraphs
    {
        name: "gya",
        code: "\u304E\u3083",
        column: KanaColumn.K
    },
    {
        name: "gyu",
        code: "\u304E\u3085",
        column: KanaColumn.K
    },
    {
        name: "gyo",
        code: "\u304E\u3087",
        column: KanaColumn.K
    },

    //S Column (Big)
    {
        name: "sa",
        code: "\u3055",
        column: KanaColumn.S
    },
    {
        name: "shi",
        code: "\u3057",
        column: KanaColumn.S
    },
    {
        name: "su",
        code: "\u3059",
        column: KanaColumn.S
    },
    {
        name: "se",
        code: "\u305B",
        column: KanaColumn.S
    },
    {
        name: "so",
        code: "\u305D",
        column: KanaColumn.S
    },

    //S Diacriticals (Dakuten)
    {
        name: "za",
        code: "\u3056",
        column: KanaColumn.S
    },
    {
        name: "ji",
        code: "\u3058",
        column: KanaColumn.S
    },
    {
        name: "zu",
        code: "\u305A",
        column: KanaColumn.S
    },
    {
        name: "ze",
        code: "\u305C",
        column: KanaColumn.S
    },
    {
        name: "zo",
        code: "\u305E",
        column: KanaColumn.S
    },

    //S Diagraphs

    {
        name: "sha",
        code: "\u3057\u3083",
        column: KanaColumn.S
    },
    {
        name: "shu",
        code: "\u3057\u3085",
        column: KanaColumn.S
    },
    {
        name: "sho",
        code: "\u3057\u3087",
        column: KanaColumn.S
    },

    //S Diacritical Diagraphs
    {
        name: "ja",
        code: "\u3058\u3083",
        column: KanaColumn.S
    },
    {
        name: "ju",
        code: "\u3058\u3085",
        column: KanaColumn.S
    },
    {
        name: "jo",
        code: "\u3058\u3087",
        column: KanaColumn.S
    },

    //T Column (Big)
    {
        name: "ta",
        code: "\u305F",
        column: KanaColumn.T
    },
    {
        name: "chi",
        code: "\u3061",
        column: KanaColumn.T
    },
    {
        name: "tsu",
        code: "\u3064",
        column: KanaColumn.T
    },
    {
        name: "te",
        code: "\u3066",
        column: KanaColumn.T
    },
    {
        name: "to",
        code: "\u3068",
        column: KanaColumn.T
    },

    //T Diacriticals (Dakuten)
    {
        name: "da",
        code: "\u3060",
        column: KanaColumn.T
    },
    {
        name: "di",
        code: "\u3062",
        column: KanaColumn.T
    },
    {
        name: "du",
        code: "\u3065",
        column: KanaColumn.T
    },
    {
        name: "de",
        code: "\u3067",
        column: KanaColumn.T
    },
    {
        name: "do",
        code: "\u3069",
        column: KanaColumn.T
    },

    //T Diagraphs
    {
        name: "cha",
        code: "\u3061\u3083",
        column: KanaColumn.T
    },
    {
        name: "chu",
        code: "\u3061\u3085",
        column: KanaColumn.T
    },
    {
        name: "cho",
        code: "\u3061\u3087",
        column: KanaColumn.T
    },

    //N Column (Big)
    {
        name: "na",
        code: "\u306A",
        column: KanaColumn.N
    },
    {
        name: "ni",
        code: "\u306B",
        column: KanaColumn.N
    },
    {
        name: "nu",
        code: "\u306C",
        column: KanaColumn.N
    },
    {
        name: "ne",
        code: "\u306D",
        column: KanaColumn.N
    },
    {
        name: "no",
        code: "\u306E",
        column: KanaColumn.N
    },

    //N Diagraphs
    {
        name: "nya",
        code: "\u306B\u3083",
        column: KanaColumn.N
    },
    {
        name: "nyu",
        code: "\u306B\u3085",
        column: KanaColumn.N
    },
    {
        name: "nyo",
        code: "\u306B\u3087",
        column: KanaColumn.N
    },


    //H Column (Big)
    {
        name: "ha",
        code: "\u306F",
        column: KanaColumn.H
    },
    {
        name: "hi",
        code: "\u3072",
        column: KanaColumn.H
    },
    {
        name: "hu",
        code: "\u3075",
        column: KanaColumn.H
    },
    {
        name: "he",
        code: "\u3078",
        column: KanaColumn.H
    },
    {
        name: "ho",
        code: "\u307B",
        column: KanaColumn.H
    },

    //H Diacriticals (Dakuten)
    {
        name: "ba",
        code: "\u3070",
        column: KanaColumn.H
    },
    {
        name: "bi",
        code: "\u3073",
        column: KanaColumn.H
    },
    {
        name: "bu",
        code: "\u3076",
        column: KanaColumn.H
    },
    {
        name: "be",
        code: "\u3079",
        column: KanaColumn.H
    },
    {
        name: "bo",
        code: "\u307C",
        column: KanaColumn.H
    },

    //H Diacriticals (Handakuten)
    {
        name: "pa",
        code: "\u3071",
        column: KanaColumn.H
    },
    {
        name: "pi",
        code: "\u3074",
        column: KanaColumn.H
    },
    {
        name: "pu",
        code: "\u3077",
        column: KanaColumn.H
    },
    {
        name: "pe",
        code: "\u307A",
        column: KanaColumn.H
    },
    {
        name: "po",
        code: "\u307D",
        column: KanaColumn.H
    },

    //H Diagraphs
    {
        name: "hya",
        code: "\u3072\u3083",
        column: KanaColumn.H
    },
    {
        name: "hyu",
        code: "\u3072\u3085",
        column: KanaColumn.H
    },
    {
        name: "hyo",
        code: "\u3072\u3087",
        column: KanaColumn.H
    },

    //H Diacritical Diagraphs (Dakuten)
    {
        name: "bya",
        code: "\u3073\u3083",
        column: KanaColumn.H
    },
    {
        name: "byu",
        code: "\u3073\u3085",
        column: KanaColumn.H
    },
    {
        name: "byo",
        code: "\u3073\u3087",
        column: KanaColumn.H
    },

    //H Diacritical Diagraphs (Handakuten)
    {
        name: "pya",
        code: "\u3074\u3083",
        column: KanaColumn.H
    },
    {
        name: "pyu",
        code: "\u3074\u3085",
        column: KanaColumn.H
    },
    {
        name: "pyo",
        code: "\u3074\u3087",
        column: KanaColumn.H
    },

    //M Column (Big)
    {
        name: "ma",
        code: "\u307E",
        column: KanaColumn.M
    },
    {
        name: "mi",
        code: "\u307F",
        column: KanaColumn.M
    },
    {
        name: "mu",
        code: "\u3080",
        column: KanaColumn.M
    },
    {
        name: "me",
        code: "\u3081",
        column: KanaColumn.M
    },
    {
        name: "mo",
        code: "\u3082",
        column: KanaColumn.M
    },

    //M Diagraphs
    {
        name: "mya",
        code: "\u307F\u3083",
        column: KanaColumn.M
    },
    {
        name: "myu",
        code: "\u307F\u3085",
        column: KanaColumn.M
    },
    {
        name: "myo",
        code: "\u307F\u3087",
        column: KanaColumn.M
    },

    //Y Column (Big)
    {
        name: "ya",
        code: "\u3084",
        column: KanaColumn.Y
    },
    {
        name: "yu",
        code: "\u3086",
        column: KanaColumn.Y
    },
    {
        name: "yo",
        code: "\u3088",
        column: KanaColumn.Y
    },

    //R Column (Big)
    {
        name: "ra",
        code: "\u3089",
        column: KanaColumn.R
    },
    {
        name: "ri",
        code: "\u308A",
        column: KanaColumn.R
    },
    {
        name: "ru",
        code: "\u308B",
        column: KanaColumn.R
    },
    {
        name: "re",
        code: "\u308C",
        column: KanaColumn.R
    },
    {
        name: "ro",
        code: "\u308D",
        column: KanaColumn.R
    },

    //R Diagraphs
    {
        name: "rya",
        code: "\u308A\u3083",
        column: KanaColumn.R
    },
    {
        name: "ryu",
        code: "\u308A\u3085",
        column: KanaColumn.R
    },
    {
        name: "ryo",
        code: "\u308A\u3087",
        column: KanaColumn.R
    },

    //W Column (Big)
    {
        name: "wa",
        code: "\u308F",
        column: KanaColumn.W
    },
    {
        name: "wo",
        code: "\u3092",
        column: KanaColumn.W
    },

    //N
    {
        name: "n",
        code: "\u3093",
        column: KanaColumn.OTHER
    }
];

export default hiragana;