import { KanjiData } from "./DataTypes";

const kanji: KanjiData[] = [
    {
        name: "人",
        code: "\u4eba",
        on: [{ kana: "じん", romanji: "jin" }],
        kun: [{ kana: "ひと", romanji: "hito" }],
        source: "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
        meanings: ["person"],
        grade: 1
    },
    {
        name: "一",
        code: "\u4e00",
        on: [{ kana: "いち", romanji: "ichi" }],
        kun: [{ kana: "ひと", romanji: "hito" }],
        source: "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
        meanings: ["one"],
        grade: 1
    },
    {
        name: "二",
        code: "\u4e8c",
        on: [{ kana: "に", romanji: "ni" }],
        kun: [{ kana: "ふた", romanji: "futa" }],
        source: "https://en.wiktionary.org/wiki/%E4%BA%8C#Kanji",
        meanings: ["two"],
        grade: 1
    },
    {
        name: "日",
        code: "\u65e5",
        on: [{ kana: "にち", romanji: "nichi" }],
        kun: [{ kana: "ひ", romanji: "hi" }],
        source: "https://en.wiktionary.org/wiki/%E6%97%A5#Kanji",
        meanings: ["day", "sun"],
        grade: 1
    },
    {
        name: "中",
        code: "\u4e2d",
        on: [{ kana: "ちゅう", romanji: "chū" }],
        kun: [{ kana: "なか", romanji: "naka" }],
        source: "https://en.wiktionary.org/wiki/%E4%B8%AD#Kanji",
        meanings: ["inside", "middle"],
        grade: 1
    },
    {
        name: "大",
        code: "\u5927",
        on: [{ kana: "だ", romanji: "da" }],
        kun: [{ kana: "おお", romanji: "ō" }],
        source: "https://en.wiktionary.org/wiki/%E5%A4%A7#Kanji",
        meanings: ["large"],
        grade: 1
    },
    {
        name: "本",
        code: "\u672c",
        on: [{ kana: "ほん", romanji: "hon" }],
        kun: [{ kana: "もと", romanji: "moto" }],
        source: "https://en.wiktionary.org/wiki/%E6%9C%AC#Kanji",
        meanings: ["book"],
        grade: 1
    },
    {
        name: "年",
        code: "\u5e74",
        on: [{ kana: "ねん", romanji: "nen" }],
        kun: [{ kana: "とし", romanji: "toshi" }],
        source: "https://en.wiktionary.org/wiki/%E5%B9%B4#Kanji",
        meanings: ["year"],
        grade: 1
    },
    {
        name: "十",
        code: "\u5341",
        on: [{ kana: "じゅう", romanji: "jū" }],
        kun: [{ kana: "と", romanji: "tō" }],
        source: "https://en.wiktionary.org/wiki/%E5%8D%81#Kanji",
        meanings: ["ten"],
        grade: 1
    },
    {
        name: "出",
        code: "\u51fa",
        on: [{ kana: "しゅち", romanji: "shuchi" }],
        kun: [{ kana: "で", romanji: "de" }],
        source: "https://en.wiktionary.org/wiki/%E5%87%BA#Kanji",
        meanings: ["exit", "leave"],
        grade: 1
    }
];

export default kanji;