import {KanaColumn} from "../types/KanaColumn";
import {KanaData} from "./DataTypes";

const hiragana: KanaData[] = [
    //Vowels (Big)
    {
        name: "a",
        code: "\u3042",
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "i",
        code: "\u3044",
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "u",
        code: "\u3046",
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "e",
        code: "\u3048",
        column: KanaColumn.VOWEL,
        diacritical: false
    },
    {
        name: "o",
        code: "\u304A",
        column: KanaColumn.VOWEL,
        diacritical: false
    },

    //K Column (Big)
    {
        name: "ka",
        code: "\u304B",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "ki",
        code: "\u304D",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "ku",
        code: "\u304F",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "ke",
        code: "\u3051",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "ko",
        code: "\u3053",
        column: KanaColumn.K,
        diacritical: false
    },

    //K Diacriticals (Dakuten)
    {
        name: "ga",
        code: "\u304C",
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "gi",
        code: "\u304E",
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "gu",
        code: "\u3050",
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "ge",
        code: "\u3052",
        column: KanaColumn.K,
        diacritical: true
    },
    {
        name: "go",
        code: "\u3054",
        column: KanaColumn.K,
        diacritical: true
    },

    //K Diagraphs
    {
        name: "kya",
        code: "\u304D\u3083",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "kyu",
        code: "\u304D\u3085",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "kyo",
        code: "\u304D\u3087",
        column: KanaColumn.K,
        diacritical: false
    },

    //K Diacritical Diagraphs
    {
        name: "gya",
        code: "\u304E\u3083",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "gyu",
        code: "\u304E\u3085",
        column: KanaColumn.K,
        diacritical: false
    },
    {
        name: "gyo",
        code: "\u304E\u3087",
        column: KanaColumn.K,
        diacritical: false
    },

    //S Column (Big)
    {
        name: "sa",
        code: "\u3055",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "shi",
        code: "\u3057",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "su",
        code: "\u3059",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "se",
        code: "\u305B",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "so",
        code: "\u305D",
        column: KanaColumn.S,
        diacritical: false
    },

    //S Diacriticals (Dakuten)
    {
        name: "za",
        code: "\u3056",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "ji",
        code: "\u3058",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "zu",
        code: "\u305A",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "ze",
        code: "\u305C",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "zo",
        code: "\u305E",
        column: KanaColumn.S,
        diacritical: true
    },

    //S Diagraphs

    {
        name: "sha",
        code: "\u3057\u3083",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "shu",
        code: "\u3057\u3085",
        column: KanaColumn.S,
        diacritical: false
    },
    {
        name: "sho",
        code: "\u3057\u3087",
        column: KanaColumn.S,
        diacritical: false
    },

    //S Diacritical Diagraphs
    {
        name: "ja",
        code: "\u3058\u3083",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "ju",
        code: "\u3058\u3085",
        column: KanaColumn.S,
        diacritical: true
    },
    {
        name: "jo",
        code: "\u3058\u3087",
        column: KanaColumn.S,
        diacritical: true
    },

    //T Column (Big)
    {
        name: "ta",
        code: "\u305F",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "chi",
        code: "\u3061",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "tsu",
        code: "\u3064",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "te",
        code: "\u3066",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "to",
        code: "\u3068",
        column: KanaColumn.T,
        diacritical: false
    },

    //T Diacriticals (Dakuten)
    {
        name: "da",
        code: "\u3060",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "di",
        code: "\u3062",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "du",
        code: "\u3065",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "de",
        code: "\u3067",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "do",
        code: "\u3069",
        column: KanaColumn.T,
        diacritical: true
    },

    //T Diagraphs
    {
        name: "cha",
        code: "\u3061\u3083",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "chu",
        code: "\u3061\u3085",
        column: KanaColumn.T,
        diacritical: false
    },
    {
        name: "cho",
        code: "\u3061\u3087",
        column: KanaColumn.T,
        diacritical: false
    },

    //T Diacritical Diagraphs
    {
        name: "dya",
        code: "\u3062\u3083",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "dyu",
        code: "\u3062\u3085",
        column: KanaColumn.T,
        diacritical: true
    },
    {
        name: "dyo",
        code: "\u3062\u3087",
        column: KanaColumn.T,
        diacritical: true
    },

    //N Column (Big)
    {
        name: "na",
        code: "\u306A",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "ni",
        code: "\u306B",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "nu",
        code: "\u306C",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "ne",
        code: "\u306D",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "no",
        code: "\u306E",
        column: KanaColumn.N,
        diacritical: false
    },

    //N Diagraphs
    {
        name: "nya",
        code: "\u306B\u3083",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "nyu",
        code: "\u306B\u3085",
        column: KanaColumn.N,
        diacritical: false
    },
    {
        name: "nyo",
        code: "\u306B\u3087",
        column: KanaColumn.N,
        diacritical: false
    },


    //H Column (Big)
    {
        name: "ha",
        code: "\u306F",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "hi",
        code: "\u3072",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "hu",
        code: "\u3075",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "he",
        code: "\u3078",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "ho",
        code: "\u307B",
        column: KanaColumn.H,
        diacritical: false
    },

    //H Diacriticals (Dakuten)
    {
        name: "ba",
        code: "\u3070",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "bi",
        code: "\u3073",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "bu",
        code: "\u3076",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "be",
        code: "\u3079",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "bo",
        code: "\u307C",
        column: KanaColumn.H,
        diacritical: true
    },

    //H Diacriticals (Handakuten)
    {
        name: "pa",
        code: "\u3071",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "pi",
        code: "\u3074",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "pu",
        code: "\u3077",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "pe",
        code: "\u307A",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "po",
        code: "\u307D",
        column: KanaColumn.H,
        diacritical: true
    },

    //H Diagraphs
    {
        name: "hya",
        code: "\u3072\u3083",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "hyu",
        code: "\u3072\u3085",
        column: KanaColumn.H,
        diacritical: false
    },
    {
        name: "hyo",
        code: "\u3072\u3087",
        column: KanaColumn.H,
        diacritical: false
    },

    //H Diacritical Diagraphs (Dakuten)
    {
        name: "bya",
        code: "\u3073\u3083",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "byu",
        code: "\u3073\u3085",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "byo",
        code: "\u3073\u3087",
        column: KanaColumn.H,
        diacritical: true
    },

    //H Diacritical Diagraphs (Handakuten)
    {
        name: "pya",
        code: "\u3074\u3083",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "pyu",
        code: "\u3074\u3085",
        column: KanaColumn.H,
        diacritical: true
    },
    {
        name: "pyo",
        code: "\u3074\u3087",
        column: KanaColumn.H,
        diacritical: true
    },

    //M Column (Big)
    {
        name: "ma",
        code: "\u307E",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "mi",
        code: "\u307F",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "mu",
        code: "\u3080",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "me",
        code: "\u3081",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "mo",
        code: "\u3082",
        column: KanaColumn.M,
        diacritical: false
    },

    //M Diagraphs
    {
        name: "mya",
        code: "\u307F\u3083",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "myu",
        code: "\u307F\u3085",
        column: KanaColumn.M,
        diacritical: false
    },
    {
        name: "myo",
        code: "\u307F\u3087",
        column: KanaColumn.M,
        diacritical: false
    },

    //Y Column (Big)
    {
        name: "ya",
        code: "\u3084",
        column: KanaColumn.Y,
        diacritical: false
    },
    {
        name: "yu",
        code: "\u3086",
        column: KanaColumn.Y,
        diacritical: false
    },
    {
        name: "yo",
        code: "\u3088",
        column: KanaColumn.Y,
        diacritical: false
    },

    //R Column (Big)
    {
        name: "ra",
        code: "\u3089",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ri",
        code: "\u308A",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ru",
        code: "\u308B",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "re",
        code: "\u308C",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ro",
        code: "\u308D",
        column: KanaColumn.R,
        diacritical: false
    },

    //R Diagraphs
    {
        name: "rya",
        code: "\u308A\u3083",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ryu",
        code: "\u308A\u3085",
        column: KanaColumn.R,
        diacritical: false
    },
    {
        name: "ryo",
        code: "\u308A\u3087",
        column: KanaColumn.R,
        diacritical: false
    },

    //W Column (Big)
    {
        name: "wa",
        code: "\u308F",
        column: KanaColumn.W,
        diacritical: false
    },
    {
        name: "wo",
        code: "\u3092",
        column: KanaColumn.W,
        diacritical: false
    },

    //N
    {
        name: "n",
        code: "\u3093",
        column: KanaColumn.OTHER,
        diacritical: false
    }
];

export default hiragana;