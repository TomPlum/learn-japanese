import { KanjiData } from "./DataTypes";

const kanji: KanjiData[] = [
    {
        name: "人",
        code: "\u4eba",
        on: [{ kana: "じん", romanji: "jin" }],
        kun: [{ kana: "ひと", romanji: "hito" }],
        source: "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
        meanings: ["person"],
        grade: 1,
        examples: [
            { value: "外国人", kana: ["がいこくじん"], english: ["foreigner"] },
            { value: "個人", kana: ["こじん"], english: ["individual", "private person", "personal", "private"] },
            { value: "三人", kana: ["さんにん", "みたり"], english: ["three people"] },
            { value: "人間", kana: ["にんげん"], english: ["human being", "man", "person"] },
            { value: "人気", kana: ["にんき"], english: ["popular", "popular feeling", "business conditions"] },

        ]
    },
    {
        name: "一",
        code: "\u4e00",
        on: [{ kana: "いち", romanji: "ichi" }],
        kun: [{ kana: "ひと", romanji: "hito" }],
        source: "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
        meanings: ["one"],
        grade: 1,
        examples: [
            { value: "一つ", kana: ["ひとつ"], english: ["one"] },
            { value: "一月", kana: ["いちがつ"], english: ["January"] },
            { value: "一般", kana: ["いっぱん"], english: ["general", "liberal", "universal", "ordinary"] },
            { value: "一番", kana: ["いちばん"], english: ["best", "first", "number one", "game", "round", "bout"] },
            { value: "一部", kana: ["いちぶ"], english: ["one part", "one portion", "one section", "some"] },
        ]
    },
    {
        name: "二",
        code: "\u4e8c",
        on: [{ kana: "に", romanji: "ni" }],
        kun: [{ kana: "ふた", romanji: "futa" }],
        source: "https://en.wiktionary.org/wiki/%E4%BA%8C#Kanji",
        meanings: ["two"],
        grade: 1,
        examples: [
            { value: "二", kana: ["に", "ふた", "ふ", "ふう"], english: ["two"] },
            { value: "二つ", kana: ["ふたつ"], english: ["two things"] },
            { value: "十二", kana: ["じゅうに"], english: ["twelve"] },
            { value: "十二月", kana: ["じゅうにがつ"], english: ["December"] },
            { value: "二月", kana: ["にがつ"], english: ["February"] },
        ]
    },
    {
        name: "日",
        code: "\u65e5",
        on: [{ kana: "にち", romanji: "nichi" }],
        kun: [{ kana: "ひ", romanji: "hi" }],
        source: "https://en.wiktionary.org/wiki/%E6%97%A5#Kanji",
        meanings: ["day", "sun"],
        grade: 1,
        examples: [
            { value: "日", kana: ["ひ"], english: ["day", "days", "sun", "sunshine", "sunlight"] },
            { value: "同日", kana: ["どうじつ"], english: ["the same day"] },
            { value: "日米", kana: ["にちべい"], english: ["Japan"] },
            { value: "日本人", kana: ["にほんじん", "にっぽんじん"], english: ["Japanese person", "Japanese people"] },
            { value: "毎日", kana: ["まいにち"], english: ["every day"] },
        ]
    },
    {
        name: "中",
        code: "\u4e2d",
        on: [{ kana: "ちゅう", romanji: "chū" }],
        kun: [{ kana: "なか", romanji: "naka" }],
        source: "https://en.wiktionary.org/wiki/%E4%B8%AD#Kanji",
        meanings: ["inside", "middle"],
        grade: 1,
        examples: [
            { value: "中央", kana: ["ちゅうおう"], english: ["centre", "central"] },
            { value: "中国", kana: ["ちゅうごく"], english: ["China"] },
            { value: "中心", kana: ["ちゅうしん"], english: ["center", "centre", "middle", "heart", "core", "focus"] },
            { value: "中でも", kana: ["なかでも", "にっぽんじん"], english: ["among (other things)", "inter alia"] },
            { value: "中間", kana: ["ちゅうかん"], english: ["middle", "midway", "interim"] },
        ]
    },
    {
        name: "大",
        code: "\u5927",
        on: [{ kana: "だ", romanji: "da" }],
        kun: [{ kana: "おお", romanji: "ō" }],
        source: "https://en.wiktionary.org/wiki/%E5%A4%A7#Kanji",
        meanings: ["large"],
        grade: 1,
        examples: [
            { value: "大きな", kana: ["おおきな"], english: ["big", "large", "great"] },
            { value: "拡大", kana: ["かくだい"], english: ["magnification", "enlargement", "expansion"] },
            { value: "最大", kana: ["さいだい"], english: ["greatest", "largest", "maximum"] },
            { value: "大いに", kana: ["おおいに", "にっぽんじん"], english: ["very", "much", "greatly", "a lot of"] },
            { value: "大会", kana: ["たいかい"], english: ["convention", "tournament", "mass meeting", "rally"] },
        ]
    },
    {
        name: "本",
        code: "\u672c",
        on: [{ kana: "ほん", romanji: "hon" }],
        kun: [{ kana: "もと", romanji: "moto" }],
        source: "https://en.wiktionary.org/wiki/%E6%9C%AC#Kanji",
        meanings: ["book"],
        grade: 1,
        examples: [
            { value: "基本", kana: ["きほん"], english: ["foundation", "basis", "standard"] },
            { value: "日本人", kana: ["にほんじん", "にっぽんじん"], english: ["Japanese person", "Japanese people"] },
            { value: "本社", kana: ["ほんしゃ", "ほんじゃ"], english: ["head office", "main office", "headquarters"] },
            { value: "本部", kana: ["ほんぶ"], english: ["headquarters"] },
            { value: "本の", kana: ["ほんの"], english: ["mere", "only, just"] },
        ]
    },
    {
        name: "年",
        code: "\u5e74",
        on: [{ kana: "ねん", romanji: "nen" }],
        kun: [{ kana: "とし", romanji: "toshi" }],
        source: "https://en.wiktionary.org/wiki/%E5%B9%B4#Kanji",
        meanings: ["year"],
        grade: 1,
        examples: [
            { value: "年", kana: ["とし"], english: ["year", "age"] },
            { value: "昨年", kana: ["さくねん"], english: ["last year"] },
            { value: "前年", kana: ["ぜんねん"], english: ["the preceding year", "the previous year"] },
            { value: "年間", kana: ["ねんかん"], english: ["year (period of)"] },
            { value: "来年", kana: ["らいねん"], english: ["next year"] },
        ]
    },
    {
        name: "十",
        code: "\u5341",
        on: [{ kana: "じゅう", romanji: "jū" }],
        kun: [{ kana: "と", romanji: "tō" }],
        source: "https://en.wiktionary.org/wiki/%E5%8D%81#Kanji",
        meanings: ["ten"],
        grade: 1,
        examples: [
            { value: "十", kana: ["じゅう", "と", "とお"], english: ["ten"] },
            { value: "十一", kana: ["じゅういち", "ジュウイチ"], english: ["eleven"] },
            { value: "十一月", kana: ["じゅういちがつ"], english: ["November"] },
            { value: "十九", kana: ["じゅうきゅう"], english: ["nineteen"] },
            { value: "十月", kana: ["じゅうがつ"], english: ["October"] },
        ]
    },
    {
        name: "出",
        code: "\u51fa",
        on: [{ kana: "しゅち", romanji: "shuchi" }],
        kun: [{ kana: "で", romanji: "de" }],
        source: "https://en.wiktionary.org/wiki/%E5%87%BA#Kanji",
        meanings: ["exit", "leave"],
        grade: 1,
        examples: [
            { value: "出す", kana: ["だす"], english: ["to take out", "to get out", "to put out"] },
            { value: "出身", kana: ["しゅっしん"], english: ["person’s origin (town, city, country, etc.)"] },
            { value: "輸出", kana: ["ゆしゅつ", "しゅしゅつ"], english: ["export"] },
            { value: "出場", kana: ["しゅつじょう"], english: ["(stage) appearance", "participation"] },
            { value: "進出", kana: ["しんしゅつ"], english: ["advance", "step forward"] },
        ]
    },
    {
        name: "三",
        code: "\u4E09",
        on: [{ kana: "さん", romanji: "san" }],
        kun: [{ kana: "み", romanji: "mi" }],
        source: "https://en.wiktionary.org/wiki/%E4%B8%89#Kanji",
        meanings: ["three"],
        grade: 1,
        examples: [
            { value: "三", kana: ["さん", "み"], english: ["three"] },
            { value: "三つ", kana: ["みっつ"], english: ["three things"] },
            { value: "三月", kana: ["さんがつ"], english: ["March"] },
            { value: "三人", kana: ["さんにん", "みたり"], english: ["three people"] },
            { value: "十三", kana: ["じゅうさん"], english: ["thirteen"] },
        ]
    },
    {
        name: "見",
        code: "\u898B",
        on: [{ kana: "けん", romanji: "ken" }],
        kun: [{ kana: "みる", romanji: "miru" }],
        source: "https://en.wiktionary.org/wiki/%E8%A6%8B#Kanji",
        meanings: ["see"],
        grade: 1,
        examples: [
            { value: "意見", kana: ["いけん"], english: ["opinion", "view"] },
            { value: "会見", kana: ["かいけん"], english: ["interview", "audience"] },
            { value: "見直し", kana: ["みなおし"], english: ["review", "reconsideration", "revision"] },
            { value: "見方", kana: ["みかた"], english: ["viewpoint"] },
            { value: "見通し", kana: ["みとおし"], english: ["perspective", "unobstructed view", "outlook"] },
        ]
    },
    {
        name: "月",
        code: "\u6708",
        on: [{ kana: "がつ", romanji: "gatsu" }],
        kun: [{ kana: "つき", romanji: "tsuki" }],
        source: "https://en.wiktionary.org/wiki/%E6%9C%88#Kanji",
        meanings: ["month,", "moon"],
        grade: 1,
        examples: [
            { value: "一月", kana: ["いちがつ"], english: ["January"] },
            { value: "九月", kana: ["くがつ"], english: ["September"] },
            { value: "五月", kana: ["ごがつ"], english: ["May"] },
            { value: "今月", kana: ["こんげつ"], english: ["this month"] },
            { value: "三月", kana: ["さんがつ"], english: ["March"] },
        ]
    },
    {
        name: "生",
        code: "\u751F",
        on: [{ kana: "しょう", romanji: "sho" }],
        kun: [{ kana: "いきる", romanji: "ikiru" }],
        source: "https://en.wiktionary.org/wiki/%E7%94%9F#Kanji",
        meanings: ["life,", "genuine", "birth"],
        grade: 1,
        examples: [
            { value: "生きる", kana: ["いきる"], english: ["to live", "to exist"] },
            { value: "学生", kana: ["がくせい"], english: ["student"] },
            { value: "生活", kana: ["せいかつ"], english: ["living", "life"] },
            { value: "生産", kana: ["せいさん"], english: ["production", "manufacture"] },
            { value: "厚生省", kana: ["こうせいしょう"], english: ["Ministry of Health, Labour and Welfare"] },
        ]
    },
    {
        name: "五",
        code: "\u4E94",
        on: [{ kana: "ご", romanji: "go" }],
        kun: [{ kana: "いつ", romanji: "itsu" }],
        source: "https://en.wiktionary.org/wiki/%E4%BA%94#Kanji",
        meanings: ["five"],
        grade: 1,
        examples: [
            { value: "五", kana: ["ご", "いつ", "い"], english: ["five"] },
            { value: "五月", kana: ["ごがつ"], english: ["May"] },
            { value: "十五", kana: ["じゅうご"], english: ["fifteen"] },
            { value: "五輪", kana: ["ごりん"], english: ["the Olympics"] },
            { value: "五十", kana: ["ごじゅう", "いそ", "い"], english: ["fifty"] },
        ]
    },
    {
        name: "上",
        code: "\u4E0A",
        on: [{ kana: "じょう", romanji: "jo" }],
        kun: [{ kana: "うえ", romanji: "ue" }],
        source: "https://en.wiktionary.org/wiki/%E4%B8%8A#Kanji",
        meanings: ["above", "up"],
        grade: 1,
        examples: [
            { value: "上がったり", kana: ["あがったり"], english: ["doomed", "in a bad state", "poor"] },
            { value: "史上", kana: ["しじょう"], english: ["historical"] },
            { value: "事実上", kana: ["じじつじょう"], english: ["(as a) matter of fact", "actually", "in reality"] },
            { value: "上げ", kana: ["あげ"], english: ["rise in price", "making a tuck"] },
            { value: "上昇", kana: ["じょうしょう"], english: ["rising", "ascending", "climbing"] },
        ]
    },
    {
        name: "四",
        code: "\u56DB",
        on: [{ kana: "し", romanji: "shi" }],
        kun: [{ kana: "よん", romanji: "yon" }],
        source: "https://en.wiktionary.org/wiki/%E5%9B%9B#Kanji",
        meanings: ["four"],
        grade: 1,
        examples: [
            { value: "四", kana: ["よん", "し", "よ"], english: ["four"] },
            { value: "四つ", kana: ["よっつ"], english: ["four things"] },
            { value: "四月", kana: ["しがつ"], english: ["April"] },
            { value: "十四", kana: ["じゅうし", "じゅうよん"], english: ["fourteen"] },
            { value: "四十", kana: ["よんじゅう", "しじゅう", "よそ"], english: ["forty"] },
        ]
    },
    {
        name: "金",
        code: "\u91D1",
        on: [{ kana: "こん", romanji: "kon" }],
        kun: [{ kana: "かね", romanji: "kane" }],
        source: "https://en.wiktionary.org/wiki/%E9%87%91#Kanji",
        meanings: ["gold, money"],
        grade: 1,
        examples: [
            { value: "お金", kana: ["おかね"], english: ["money"] },
            { value: "金融", kana: ["きんゆう"], english: ["financing", "credit transacting"] },
            { value: "金利", kana: ["きんり"], english: ["interest rates"] },
            { value: "献金", kana: ["けんきん"], english: ["donation", "contribution", "offering"] },
            { value: "資金", kana: ["しきん"], english: ["funds", "capital"] },
        ]
    },
    {
        name: "九",
        code: "\u4E5D",
        on: [{ kana: "きゅう", romanji: "kyū" }],
        kun: [{ kana: " ここの", romanji: "kokono" }],
        source: "https://en.wiktionary.org/wiki/%E4%B9%9D#Kanji",
        meanings: ["nine"],
        grade: 1,
        examples: [
            { value: "九", kana: ["きゅう", "く", "ここの", "この", "ここ"], english: ["nine"] },
            { value: "九月", kana: ["くがつ"], english: ["September"] },
            { value: "十九", kana: ["じゅうきゅう"], english: ["nineteen"] },
            { value: "九州", kana: ["きゅうしゅう"], english: ["Kyushu"] },
            { value: "九十", kana: ["きゅうじゅう", "くじゅう"], english: ["ninety"] },
        ]
    },
    {
        name: "入",
        code: "\u5165",
        on: [{ kana: "にゅう", romanji: "nyū" }],
        kun: [{ kana: "いる", romanji: "iru" }],
        source: "https://en.wiktionary.org/wiki/%E5%85%A5#Kanji",
        meanings: ["enter", "insert"],
        grade: 1,
        examples: [
            { value: "入り", kana: ["いり"], english: ["entering", "containing"] },
            { value: "輸入", kana: ["ゆにゅう", "しゅにゅう"], english: ["important", "import", "introduction"] },
            { value: "購入", kana: ["こうにゅう"], english: ["purchase", "busy"] },
            { value: "収入", kana: ["しゅうにゅう"], english: ["income", "receipts", "revenue"] },
            { value: "導入", kana: ["どうにゅう"], english: ["introduction", "bringing in", "leading in"] },
        ]
    },
];

export default kanji;