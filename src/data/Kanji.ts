import {KanjiData} from "./DataTypes";

const kanji: KanjiData[] = [
    {
        name: "人",
        code: "\u4eba",
        on: [{kana: "じん", romanji: "jin"}],
        kun: [{kana: "ひと", romanji: "hito"}],
        source: "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
        meanings: ["person"],
        grade: 1,
        examples: [
            {value: "外国人", kana: ["がいこくじん"], english: ["foreigner"]},
            {value: "個人", kana: ["こじん"], english: ["individual", "private person", "personal", "private"]},
            {value: "三人", kana: ["さんにん", "みたり"], english: ["three people"]},
            {value: "人間", kana: ["にんげん"], english: ["human being", "man", "person"]},
            {value: "人気", kana: ["にんき"], english: ["popular", "popular feeling", "business conditions"]},

        ]
    },
    {
        name: "一",
        code: "\u4e00",
        on: [{kana: "いち", romanji: "ichi"}],
        kun: [{kana: "ひと", romanji: "hito"}],
        source: "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
        meanings: ["one"],
        grade: 1,
        examples: [
            {value: "一つ", kana: ["ひとつ"], english: ["one"]},
            {value: "一月", kana: ["いちがつ"], english: ["January"]},
            {value: "一般", kana: ["いっぱん"], english: ["general", "liberal", "universal", "ordinary"]},
            {value: "一番", kana: ["いちばん"], english: ["best", "first", "number one", "game", "round", "bout"]},
            {value: "一部", kana: ["いちぶ"], english: ["one part", "one portion", "one section", "some"]},
        ]
    },
    {
        name: "二",
        code: "\u4e8c",
        on: [{kana: "に", romanji: "ni"}],
        kun: [{kana: "ふた", romanji: "futa"}],
        source: "https://en.wiktionary.org/wiki/%E4%BA%8C#Kanji",
        meanings: ["two"],
        grade: 1,
        examples: [
            {value: "二", kana: ["に", "ふた", "ふ", "ふう"], english: ["two"]},
            {value: "二つ", kana: ["ふたつ"], english: ["two"]},
            {value: "十二", kana: ["じゅうに"], english: ["12", "twelve"]},
            {value: "十二月", kana: ["じゅうにがつ"], english: ["December"]},
            {value: "二月", kana: ["にがつ"], english: ["February"]},
        ]
    },
    {
        name: "日",
        code: "\u65e5",
        on: [{kana: "にち", romanji: "nichi"}],
        kun: [{kana: "ひ", romanji: "hi"}],
        source: "https://en.wiktionary.org/wiki/%E6%97%A5#Kanji",
        meanings: ["day", "sun"],
        grade: 1,
        examples: [
            {value: "日", kana: ["ひ"], english: ["day", "days; sun", "sunshine", "sunlight"]},
            {value: "同日", kana: ["どうじつ"], english: ["the same day"]},
            {value: "日米", kana: ["にちべい"], english: ["Japan?America"]},
            {value: "日本人", kana: ["にほんじん", "にっぽんじん"], english: ["Japanese person", "Japanese people"]},
            {value: "毎日", kana: ["まいにち"], english: ["every day"]},
        ]
    },
    {
        name: "中",
        code: "\u4e2d",
        on: [{kana: "ちゅう", romanji: "chū"}],
        kun: [{kana: "なか", romanji: "naka"}],
        source: "https://en.wiktionary.org/wiki/%E4%B8%AD#Kanji",
        meanings: ["inside", "middle"],
        grade: 1,
        examples: [
            {value: "中央", kana: ["ちゅうおう"], english: ["centre", "central", "center", "middle"]},
            {value: "中国", kana: ["ちゅうごく"], english: ["China; South?west most region of Honshu"]},
            {value: "中心", kana: ["ちゅうしん"], english: ["center", "centre", "middle", "heart", "core", "focus"]},
            {value: "中でも", kana: ["なかでも", "にっぽんじん"], english: ["among (other things)", "inter alia"]},
            {value: "中間", kana: ["ちゅうかん"], english: ["middle", "midway", "interim"]},
        ]
    },
    {
        name: "大",
        code: "\u5927",
        on: [{kana: "だ", romanji: "da"}],
        kun: [{kana: "おお", romanji: "ō"}],
        source: "https://en.wiktionary.org/wiki/%E5%A4%A7#Kanji",
        meanings: ["large"],
        grade: 1,
        examples: [
            {value: "大きな", kana: ["おおきな"], english: ["big", "large", "great"]},
            {value: "拡大", kana: ["かくだい"], english: ["magnification", "enlargement", "expansion"]},
            {value: "最大", kana: ["さいだい"], english: ["greatest", "largest", "maximum"]},
            {value: "大いに", kana: ["おおいに", "にっぽんじん"], english: ["very", "much", "greatly", "a lot of"]},
            {value: "大会", kana: ["たいかい"], english: ["convention", "tournament", "mass meeting", "rally"]},
        ]
    },
    {
        name: "本",
        code: "\u672c",
        on: [{kana: "ほん", romanji: "hon"}],
        kun: [{kana: "もと", romanji: "moto"}],
        source: "https://en.wiktionary.org/wiki/%E6%9C%AC#Kanji",
        meanings: ["book"],
        grade: 1,
        examples: [
            {value: "基本", kana: ["きほん"], english: ["foundation", "basis", "standard"]},
            {value: "日本人", kana: ["にほんじん", "にっぽんじん"], english: ["Japanese person", "Japanese people"]},
            {value: "本社", kana: ["ほんしゃ", "ほんじゃ"], english: ["head office", "main office", "headquarters"]},
            {value: "本部", kana: ["ほんぶ"], english: ["headquarters"]},
            {value: "本の", kana: ["ほんの"], english: ["mere", "only, just"]},
        ]
    },
    {
        name: "年",
        code: "\u5e74",
        on: [{kana: "ねん", romanji: "nen"}],
        kun: [{kana: "とし", romanji: "toshi"}],
        source: "https://en.wiktionary.org/wiki/%E5%B9%B4#Kanji",
        meanings: ["year"],
        grade: 1,
        examples: [
            {value: "年", kana: ["とし"], english: ["year; age"]},
            {value: "昨年", kana: ["さくねん"], english: ["last year"]},
            {value: "前年", kana: ["ぜんねん"], english: ["the preceding year", "the previous year"]},
            {value: "年間", kana: ["ねんかん"], english: ["year (period of)"]},
            {value: "来年", kana: ["らいねん"], english: ["next year"]},
        ]
    },
    {
        name: "十",
        code: "\u5341",
        on: [{kana: "じゅう", romanji: "jū"}],
        kun: [{kana: "と", romanji: "tō"}],
        source: "https://en.wiktionary.org/wiki/%E5%8D%81#Kanji",
        meanings: ["ten"],
        grade: 1,
        examples: [
            {value: "十", kana: ["じゅう", "と", "とお"], english: ["10", "ten"]},
            {value: "十一", kana: ["じゅういち", "ジュウイチ"], english: ["11", "eleven"]},
            {value: "十一月", kana: ["じゅういちがつ"], english: ["November"]},
            {value: "十九", kana: ["じゅうきゅう"], english: ["19", "nineteen"]},
            {value: "十月", kana: ["じゅうがつ"], english: ["October"]},
        ]
    },
    {
        name: "出",
        code: "\u51fa",
        on: [{kana: "しゅち", romanji: "shuchi"}],
        kun: [{kana: "で", romanji: "de"}],
        source: "https://en.wiktionary.org/wiki/%E5%87%BA#Kanji",
        meanings: ["exit", "leave"],
        grade: 1,
        examples: [
            {value: "出す", kana: ["だす"], english: ["to take out", "to get out; to put out"]},
            {value: "出身", kana: ["しゅっしん"], english: ["person’s origin (town, city, country, etc.)"]},
            {value: "輸出", kana: ["ゆしゅつ", "しゅしゅつ"], english: ["export; efferent (medical)"]},
            {value: "出場", kana: ["しゅつじょう"], english: ["(stage)", "appearance", "participation"]},
            {value: "進出", kana: ["しんしゅつ"], english: ["advance", "step forward"]},
        ]
    }
];

export default kanji;