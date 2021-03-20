import { KyoikuGrade } from "../types/kanji/KyoikuGrade";
import { KanjiData } from "./DataTypes";

export function kyoiku(): KanjiData[] {
    return [
        //Grade 1
        {
            name: "人",
            code: "\u4eba",
            on: [{ kana: "じん", romanji: "jin" }],
            kun: [{ kana: "ひと", romanji: "hito" }],
            source: "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
            meanings: ["person"],
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "日", kana: ["ひ"], english: ["day", "days", "sun", "sunshine", "sunlight"] },
                { value: "同日", kana: ["どうじつ"], english: ["the same day"] },
                { value: "日米", kana: ["にちべい"], english: ["Japan"] },
                { value: "日本人", kana: ["にほんじん", "にっぽんじん"], english: ["Japanese person (people)"] },
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            meanings: ["see, opinion"],
            grade: KyoikuGrade.ONE,
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
            meanings: ["month", "moon"],
            grade: KyoikuGrade.ONE,
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
            meanings: ["life", "genuine", "birth"],
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
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
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "入り", kana: ["いり"], english: ["entering", "containing"] },
                { value: "輸入", kana: ["ゆにゅう", "しゅにゅう"], english: ["important", "import", "introduction"] },
                { value: "購入", kana: ["こうにゅう"], english: ["purchase", "busy"] },
                { value: "収入", kana: ["しゅうにゅう"], english: ["income", "receipts", "revenue"] },
                { value: "導入", kana: ["どうにゅう"], english: ["introduction", "bringing in", "leading in"] },
            ]
        },
        {
            name: "学",
            code: "\u5B66",
            on: [{ kana: "がく", romanji: "gaku" }],
            kun: [{ kana: "まなぶ", romanji: "manabu" }],
            source: "https://en.wiktionary.org/wiki/%E5%AD%A6#Kanji",
            meanings: ["study", "learning", "science"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "学校", kana: ["がっこう"], english: ["school"] },
                { value: "学生", kana: ["がくせい"], english: ["student"] },
                { value: "大学", kana: ["だいがく"], english: ["secondary school"] },
                { value: "医学", kana: ["いがく"], english: ["medical science", "medicine"] },
                { value: "科学", kana: ["かがく"], english: ["science"] },
            ]
        },
        {
            name: "円",
            code: "\u5186",
            on: [{ kana: "えん", romanji: "en" }],
            kun: [{ kana: "まる", romanji: "maru" }],
            source: "https://en.wiktionary.org/wiki/%E5%86%86#Kanji",
            meanings: ["circle", "yen", "round"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "円", kana: ["えん", "まる"], english: ["Yen", "money", "circle"] },
                { value: "円高", kana: ["えんだか"], english: ["valued yen"] },
                { value: "円安", kana: ["えんやす"], english: ["cheap yen"] },
                { value: "円相場", kana: ["えんそうば"], english: ["yen exchange rate"] },
                { value: "一円", kana: ["いちえん"], english: ["whole district", "one yen", "throughout"] },
            ]
        },
        {
            name: "子",
            code: "\u5B50",
            on: [{ kana: "し", romanji: "shi" }],
            kun: [{ kana: "こ", romanji: "ko" }],
            source: "https://en.wiktionary.org/wiki/%E5%AD%90#Kanji",
            meanings: ["child", "sign of the rat"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "子", kana: ["こ"], english: ["child"] },
                { value: "子供", kana: ["こども"], english: ["children"] },
                { value: "女子", kana: ["じょし", "おなご"], english: ["women", "girl"] },
                { value: "男子", kana: ["だんし"], english: ["youth", "young man"] },
                { value: "原子力", kana: ["げんしりょく"], english: ["atomic", "energy"] },
            ]
        },
        {
            name: "八",
            code: "\u516B",
            on: [{ kana: "はち", romanji: "hachi" }],
            kun: [{ kana: "や", romanji: "ya" }],
            source: "https://en.wiktionary.org/wiki/%E5%85%AB#Kanji",
            meanings: ["eight"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "八", kana: ["はち", "や"], english: ["eight"] },
                { value: "十八", kana: ["じゅうはち"], english: ["eighteen"] },
                { value: "八月", kana: ["はちがつ"], english: ["August"] },
                { value: "八十", kana: ["はちじゅう", "やそ"], english: ["eighty"] },
                { value: "三十八度線", kana: ["さんじゅうはちどせん"], english: ["eighth parallel"] },
            ]
        },
        {
            name: "六",
            code: "\u516D",
            on: [{ kana: "ろく", romanji: "roku" }],
            kun: [{ kana: "む", romanji: "mu" }],
            source: "https://en.wiktionary.org/wiki/%E5%85%AD#Kanji",
            meanings: ["six"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "六", kana: ["ろく", "む", "むう"], english: ["six"] },
                { value: "六月", kana: ["ろくがつ"], english: ["June"] },
                { value: "六十", kana: ["ろくじゅう", "むそ"], english: ["sixty"] },
                { value: "六十四分音符", kana: ["ろくじゅうしぶおんぷ"], english: ["64th note"] },
                { value: "十六", kana: ["じゅうろく"], english: ["sixteen"] },
            ]
        },
        {
            name: "下",
            code: "\u4E0B",
            on: [{ kana: "げ", romanji: "ge" }],
            kun: [{ kana: "した", romanji: "shita" }],
            source: "https://en.wiktionary.org/wiki/%E4%B8%8B#Kanji",
            meanings: ["below", "down", "descend", "give", "low", "inferior"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "下", kana: ["もと"], english: ["under"] },
                { value: "下げる", kana: ["さげる"], english: ["to hang", "to lower", "to move back", "to wear"] },
                { value: "引き下げ", kana: ["ひきさげ"], english: ["reduction", "cut"] },
                { value: "下り", kana: ["くだり"], english: ["train"] },
                { value: "下院", kana: ["かいん"], english: ["lower", "house", "lower",] },
            ]
        },
        {
            name: "気",
            code: "\u6C17",
            on: [{ kana: "け", romanji: "ke" }],
            kun: [{ kana: "いき", romanji: "iki" }],
            source: "https://en.wiktionary.org/wiki/%E6%B0%97#Kanji",
            meanings: ["spirit", "mind", "air", "atmosphere", "mood"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "気", kana: ["き"], english: ["spirit", "mind", "heart", "nature", "disposition"] },
                { value: "景気", kana: ["けいき"], english: ["condition", "state", "business"] },
                { value: "人気", kana: ["にんき"], english: ["popular", "popular feeling", "business conditions"] },
                { value: "気持ち", kana: ["きもち"], english: ["feeling", "sensation", "mood"] },
                { value: "電気", kana: ["でんき"], english: ["electricity", "light",] },
            ]
        },
        {
            name: "小",
            code: "\u5C0F",
            on: [{ kana: "しょう", romanji: "sho" }],
            kun: [{ kana: "ちいさい", romanji: "chisai" }],
            source: "https://en.wiktionary.org/wiki/%E5%B0%8F#Kanji",
            meanings: ["small", "little"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "小選挙区", kana: ["しょうせんきょく"], english: ["small electoral district"] },
                { value: "小学校", kana: ["しょうがっこう"], english: ["primary school", "elementary school"] },
                { value: "小説", kana: ["しょうせつ"], english: ["novel", "short story"] },
                { value: "小学生", kana: ["しょうがくせい"], english: ["elementary school student"] },
                { value: "中小企業", kana: ["ちゅうしょうきぎょう"], english: ["small to medium enterprises",] },
            ]
        },
        {
            name: "七",
            code: "\u4E03",
            on: [{ kana: " しち", romanji: "shichi" }],
            kun: [{ kana: "なな", romanji: "nana" }],
            source: "https://en.wiktionary.org/wiki/%E4%B8%83#Kanji",
            meanings: ["seven"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "七", kana: ["しち", "なな", "な"], english: ["seven"] },
                { value: "七月", kana: ["しちがつ"], english: ["July"] },
                { value: "十七", kana: ["じゅうしち", "じゅうなな"], english: ["seventeen"] },
                { value: "七十", kana: ["しちじゅう", "ななじゅう", "ななそ"], english: ["seventy"] },
                { value: "四十七士", kana: ["しじゅうしちし"], english: ["The 47 Ronin",] },
            ]
        },
        {
            name: "山",
            code: "\u5C71",
            on: [{ kana: " せん", romanji: "sen" }],
            kun: [{ kana: "やま", romanji: "yama" }],
            source: "https://en.wiktionary.org/wiki/%E5%B1%B1#Kanji",
            meanings: ["mountain"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "山", kana: ["やま"], english: ["mountain", "pile", "heap", "climax", "critical point"] },
                { value: "火山", kana: ["かざん"], english: ["volcano"] },
                { value: "青山", kana: ["せいざん"], english: ["blue or green mountain", "grave", "burial place"] },
                { value: "山形", kana: ["やまがた"], english: ["mountain shaped"] },
                { value: "登山", kana: ["とざん"], english: ["mountain climbing",] },
            ]
        },
        {
            name: "犬",
            code: "\u72AC",
            on: [{ kana: "けん", romanji: "ken" }],
            kun: [{ kana: "いぬ", romanji: "inu" }],
            source: "https://en.wiktionary.org/wiki/%E7%8A%AC#Kanji",
            meanings: ["dog"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "犬", kana: ["いぬ"], english: ["dog"] },
                { value: "盲導犬", kana: ["もうどうけん"], english: ["guide dog for the blind"] },
                { value: "愛犬", kana: ["あいけん"], english: ["pet dog"] },
                { value: "飼い犬", kana: ["かいいぬ"], english: ["pet dog"] },
                { value: "野犬", kana: ["やけん"], english: ["stray dog",] },
            ]
        },
        {
            name: "百",
            code: "\u767E",
            on: [{ kana: "ひゃく", romanji: "hyaku" }],
            kun: [{ kana: "もも", romanji: "momo" }],
            source: "https://en.wiktionary.org/wiki/%E7%99%BE#Kanji",
            meanings: ["hundred"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "百", kana: ["ひゃく", "もも"], english: ["hundred"] },
                { value: "二百", kana: ["にひゃく"], english: ["two hundred"] },
                { value: "三百", kana: ["さんびゃく"], english: ["three hundred"] },
                { value: "百貨店", kana: ["ひゃっかてん"], english: ["cleric desk"] },
                { value: "百万", kana: ["ひゃくまん"], english: ["one million",] },
            ]
        },
        {
            name: "名",
            code: "\u540D",
            on: [{ kana: "みょう", romanji: "myo" }],
            kun: [{ kana: "な", romanji: "na" }],
            source: "https://en.wiktionary.org/wiki/%E5%90%8D#Kanji",
            meanings: ["name"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "名前", kana: ["なまえ"], english: ["name", "full name"] },
                { value: "名誉", kana: ["めいよ"], english: ["honour", "prestige"] },
                { value: "指名", kana: ["しめい"], english: ["nominate", "designate"] },
                { value: "氏名", kana: ["しめい"], english: ["full name", "identity"] },
            ]
        },
        {
            name: "女",
            code: "\u5973",
            on: [{ kana: "にょ", romanji: "nyo" }],
            kun: [{ kana: "おんな", romanji: "onna" }],
            source: "https://en.wiktionary.org/wiki/%E5%A5%B3#Kanji",
            meanings: ["women", "female"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "女", kana: ["おんな"], english: ["women"] },
                { value: "女子", kana: ["じょし", "おなご"], english: ["girl"] },
                { value: "女性", kana: ["じょせい"], english: ["women", "female", "feminine gender"] },
                { value: "男女", kana: ["だんじょ"], english: ["man and women"] },
                { value: "彼女", kana: ["かのじょ"], english: ["she", "girlfriend", "sweetheart",] },
            ]
        },
        {
            name: "先",
            code: "\u5148",
            on: [{ kana: "せん", romanji: "sen" }],
            kun: [{ kana: "さき", romanji: "saki" }],
            source: "https://en.wiktionary.org/wiki/%E5%85%88#Kanji",
            meanings: ["before", "ahead", "previous", "future"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "先に", kana: ["さきに"], english: ["before", "earlier than", "ahead", "beyond"] },
                { value: "先月", kana: ["せんげつ"], english: ["last month"] },
                { value: "先進国", kana: ["せんしんこく"], english: ["advance"] },
                { value: "先生", kana: ["せんせい"], english: ["teacher", "master", "doctor"] },
                { value: "先発", kana: ["せんぱつ"], english: ["forerunner", "advance party", "going on ahead",] },
            ]
        },
        {
            name: "川",
            code: "\u5DDD",
            on: [{ kana: "せん", romanji: "sen" }],
            kun: [{ kana: "かわ", romanji: "kawa" }],
            source: "https://en.wiktionary.org/wiki/%E5%B7%9D#Kanji",
            meanings: ["stream", "river"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "川", kana: ["かわ", "がわ"], english: ["river", "stream"] },
                { value: "小川", kana: ["おがわ"], english: ["streamlet", "brook"] },
                { value: "河川", kana: ["かせん"], english: ["rivers"] },
                { value: "谷川", kana: ["たにがわ"], english: ["mountain stream"] },
                { value: "江戸川", kana: ["えどがわ"], english: ["Edo River",] },
            ]
        },
        {
            name: "水",
            code: "\u6C34",
            on: [{ kana: "すい", romanji: "sui" }],
            kun: [{ kana: "みず", romanji: "mizu" }],
            source: "https://en.wiktionary.org/wiki/%E6%B0%B4#Kanji",
            meanings: ["water"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "水", kana: ["みず"], english: ["water (cold, fresh)"] },
                { value: "水準", kana: ["すいじゅん"], english: ["water level"] },
                { value: "水道", kana: ["すいどう"], english: ["water service", "water supply"] },
                { value: "水面", kana: ["すいめん", "みなも", "みのも"], english: ["water's surface"] },
                { value: "水泳", kana: ["すいえい"], english: ["swimming",] },
            ]
        },
        {
            name: "校",
            code: "\u6821",
            on: [{ kana: "きょう", romanji: "kyo" }],
            kun: [{ kana: "かせ", romanji: "kase" }],
            source: "https://en.wiktionary.org/wiki/%E6%A0%A1#Kanji",
            meanings: ["school", "exam", "printing"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "学校", kana: ["がっこう"], english: ["school"] },
                { value: "高校", kana: ["こうこう"], english: ["senior high school"] },
                { value: "校長", kana: ["こうちょう"], english: ["principal", "headmaster"] },
                { value: "高校生", kana: ["こうこうせい"], english: ["senior high school student"] },
                { value: "小学校", kana: ["しょうがっこう"], english: ["primary school", "elementary school"] },
            ]
        },
        {
            name: "千",
            code: "\u5343",
            on: [{ kana: "せん", romanji: "sen" }],
            kun: [{ kana: "ち", romanji: "chi" }],
            source: "https://en.wiktionary.org/wiki/%E5%8D%83#Kanji",
            meanings: ["thousand"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "三千", kana: ["さんぜん"], english: ["three thousand"] },
                { value: "四千", kana: ["よんせん"], english: ["four thousand"] },
                { value: "千代", kana: ["せんだい"], english: ["thousand years", "very long", "forever"] },
                { value: "千里", kana: ["せんり"], english: ["1000 ri", "a very long distance"] },
            ]
        },
        {
            name: "男",
            code: "\u7537",
            on: [{ kana: "なん", romanji: "nan" }],
            kun: [{ kana: "おとこ", romanji: "otoko" }],
            source: "https://en.wiktionary.org/wiki/%E7%94%B7#Kanji",
            meanings: ["male"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "男子", kana: ["だんし"], english: ["youth", "young man"] },
                { value: "男性", kana: ["だんせい"], english: ["male", "masculine gender"] },
                { value: "長男", kana: ["ちょうなん"], english: ["eldest son"] },
                { value: "男女", kana: ["だんじょ"], english: ["man and woman", "men and women"] },
            ]
        },
        {
            name: "土",
            code: "\u571F",
            on: [{ kana: "と", romanji: "to" }],
            kun: [{ kana: "つち", romanji: "tsuchi" }],
            source: "https://en.wiktionary.org/wiki/%E5%9C%9F#Kanji",
            meanings: ["soil", "earth"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "土地", kana: ["とち"], english: ["plot of land"] },
                { value: "領土", kana: ["りょうど"], english: ["dominion", "territory", "position"] },
                { value: "土曜", kana: ["どよう"], english: ["Saturday"] },
                { value: "国土", kana: ["こくど"], english: ["country", "territory", "domain", "realm"] },
            ]
        },
        {
            name: "木",
            code: "\u6728",
            on: [{ kana: "もく", romanji: "moku" }],
            kun: [{ kana: "き", romanji: "ki" }],
            source: "https://en.wiktionary.org/wiki/%E6%9C%A8#Kanji",
            meanings: ["tree", "wood"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "青木", kana: ["あおき"], english: ["Japanese laurel", "spotted laurel"] },
                { value: "木造", kana: ["もくぞう"], english: ["wooden", "made of wood"] },
                { value: "土木", kana: ["どぼく"], english: ["public works"] },
                { value: "木材", kana: ["もくざい"], english: ["lumber", "timber", "wood"] },
            ]
        },
        {
            name: "白",
            code: "\u767d",
            on: [{ kana: " びゃく", romanji: "byaku" }],
            kun: [{ kana: "しろ", romanji: "shiro" }],
            source: "https://en.wiktionary.org/wiki/%E7%99%BD#Kanji",
            meanings: ["white"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "白書", kana: ["はくしょ"], english: ["white paper"] },
                { value: "白人", kana: ["はくじん"], english: ["white person", "Caucasian"] },
                { value: "空白", kana: ["くうはく"], english: ["blank space", "vacuum", "space", "null"] },
                { value: "白紙", kana: ["はくし"], english: ["blank paper", "white paper"] },
            ]
        },
        {
            name: "火",
            code: "\u706b",
            on: [{ kana: " か", romanji: "ka" }],
            kun: [{ kana: "ひ", romanji: "hi" }],
            source: "https://en.wiktionary.org/wiki/%E7%81%AB#Kanji",
            meanings: ["fire"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "火山", kana: ["かざん"], english: ["volcano"] },
                { value: "火災", kana: ["かさい"], english: ["conflagration", "fire"] },
                { value: "噴火", kana: ["ふんか"], english: ["eruption"] },
                { value: "火砕流", kana: ["かさいりゅう"], english: ["pyroclastic flow"] },
            ]
        },
        {
            name: "左",
            code: "\u5DE6",
            on: [{ kana: "さ", romanji: "sa" }],
            kun: [{ kana: "ひだり", romanji: "hidari" }],
            source: "https://en.wiktionary.org/wiki/%E5%B7%A6#Kanji",
            meanings: ["left"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "向かって左", kana: ["むかってひだり"], english: ["on the left as one faces it"] },
                { value: "左翼", kana: ["さよく"], english: ["left wing (political)"] },
                { value: "左右", kana: ["さゆう"], english: ["left and right", "influence", "control"] },
            ]
        },
        {
            name: "立",
            code: "\u7ACB",
            on: [{ kana: "りつ", romanji: "ritsu" }],
            kun: [{ kana: "たつ", romanji: "tatsu" }],
            source: "https://en.wiktionary.org/wiki/%E7%AB%8B#Kanji",
            meanings: ["stand up"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "立場", kana: ["たちば"], english: ["standpoint", "position", "situation"] },
                { value: "連立", kana: ["れんりつ"], english: ["alliance", "coalition"] },
                { value: "国立", kana: ["こくりつ"], english: ["national"] },
                { value: "成立", kana: ["せいりつ"], english: ["coming into existence", "arrangements"] },
                { value: "対立", kana: ["たいりつ"], english: ["confrontation", "opposition", "antagonism"] },
            ]
        },
        {
            name: "車",
            code: "\u8ECA",
            on: [{ kana: "しゃ", romanji: "sha" }],
            kun: [{ kana: "くるま", romanji: "kuruma" }],
            source: "https://en.wiktionary.org/wiki/%E8%BB%8A#Kanji",
            meanings: ["vehicle", "car"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "自動車", kana: ["じどうしゃ"], english: ["automobile"] },
                { value: "下車", kana: ["げしゃ"], english: ["alighting (from train, bus, etc.)"] },
                { value: "乗用車", kana: ["じょうようしゃ"], english: ["passenger vehicle", "automobile"] },
                { value: "自転車", kana: ["じてんしゃ"], english: ["bicycle"] },
            ]
        },
        {
            name: "天",
            code: "\u5929",
            on: [{ kana: "てん", romanji: "ten" }],
            kun: [{ kana: "あま", romanji: "ama" }],
            source: "https://en.wiktionary.org/wiki/%E5%A4%A9#Kanji",
            meanings: ["heaven", "sky"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "天皇", kana: ["てんのう", "すめらぎ"], english: ["Emperor of Japan"] },
                { value: "天気", kana: ["てんき"], english: ["weather", "the elements", "fair weather"] },
                { value: "天皇陛下", kana: ["てんのうへいか"], english: ["His Majesty the Emperor"] },
                { value: "天井", kana: ["てんじょう"], english: ["ceiling", "ceiling price"] },
            ]
        },
        {
            name: "右",
            code: "\u53F3",
            on: [{ kana: "う", romanji: "u" }],
            kun: [{ kana: "みぎ", romanji: "migi" }],
            source: "https://en.wiktionary.org/wiki/%E5%8F%B3#Kanji",
            meanings: ["right"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "右翼", kana: ["うよく"], english: ["right wing (political)"] },
                { value: "左右", kana: ["さゆう"], english: ["left and right", "influence", "control"] },
                { value: "右手", kana: ["みぎて"], english: ["right hand"] },
            ]
        },
        {
            name: "休",
            code: "\u4F11",
            on: [{ kana: "きゅう", romanji: "kyu" }],
            kun: [{ kana: "やすむ ", romanji: "yasamu" }],
            source: "https://en.wiktionary.org/wiki/%E4%BC%91#Kanji",
            meanings: ["rest"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "休み", kana: ["やすみ"], english: ["rest", "recess", "respite", "vacation", "holiday"] },
                { value: "夏休み", kana: ["なつやすみ"], english: ["summer vacation", "summer holiday"] },
                { value: "休暇", kana: ["きゅうか"], english: ["holiday", "day off", "furlough"] },
                { value: "休日", kana: ["きゅうかきゅうか"], english: ["holiday", "day off"] },
                { value: "休業", kana: ["きゅうぎょう"], english: ["closed (e.g. store)", "business suspended"] },
            ]
        },
        {
            name: "手",
            code: "\u624B",
            on: [{ kana: "しゅ", romanji: "shu" }],
            kun: [{ kana: "て", romanji: "te" }],
            source: "https://en.wiktionary.org/wiki/%E6%89%8B#Kanji",
            meanings: ["hand"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "選手", kana: ["せんしゅ"], english: ["player (in game)", "team member"] },
                { value: "選手権", kana: ["せんしゅけん"], english: ["championship", "title (of champion)"] },
                { value: "相手", kana: ["あいて"], english: ["companion", "partner", "company", "other party"] },
                { value: "大手", kana: ["おおて"], english: ["front castle gate", "both arms open"] },
            ]
        },
        {
            name: "力",
            code: "\u529B",
            on: [{ kana: "りき", romanji: "riki" }],
            kun: [{ kana: "ちから", romanji: "chikara" }],
            source: "https://en.wiktionary.org/wiki/%E5%8A%9B#Kanji",
            meanings: ["power", "strong"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "勢力", kana: ["せいりょく"], english: ["influence", "power", "might", "strength", "potency"] },
                { value: "努力", kana: ["どりょく"], english: ["great effort", "exertion", "endeavour", "endeavor"] },
                { value: "協力", kana: ["きょうりょく"], english: ["cooperation", "collaboration"] },
                { value: "権力", kana: ["けんりょく"], english: ["(political) power", "authority", "influence"] },
                { value: "原子力", kana: ["げんしりょく"], english: ["atomic energy"] },
            ]
        },
        {
            name: "田",
            code: "\u7530",
            on: [{ kana: "でん", romanji: "den" }],
            kun: [{ kana: "た", romanji: "ta" }],
            source: "https://en.wiktionary.org/wiki/%E7%94%B0#Kanji",
            meanings: ["rice field", "rice paddy"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "上田", kana: ["じょうでん"], english: ["high rice field", "very fertile rice field"] },
                { value: "水田", kana: ["すいでん"], english: ["water filled paddy field"] },
                { value: "油田", kana: ["ゆでん"], english: ["oil field"] },
                { value: "田舎", kana: ["いなか"], english: ["rural area", "countryside", "the sticks", "hometown"] },
                { value: "桑田", kana: ["そうでん"], english: ["mulberry plantation"] },
            ]
        },
        {
            name: "文",
            code: "\u6587",
            on: [{ kana: "もん", romanji: "mon" }, { kana: "ぶん", romanji: "bun" }],
            kun: [{ kana: "ふみ", romanji: "fumi" }],
            source: "https://en.wiktionary.org/wiki/%E6%96%87#Kanji",
            meanings: ["text", "sentence", "literature", "style", "art"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "文", kana: ["ふみ"], english: ["letter", "writings"] },
                { value: "文化", kana: ["ぶんか"], english: ["culture", "civilization", "civilisation"] },
                { value: "文学", kana: ["ぶんがく"], english: ["literature"] },
                { value: "文書", kana: ["ぶんしょ", "もんじょ"], english: ["document", "writing", "letter", "paperwork", "note"] },
                { value: "文字", kana: ["もじ", "もんじ"], english: ["letter (of alphabet)", "character (literal)"] },
            ]
        },
        {
            name: "町",
            code: "\u753A",
            on: [{ kana: "ちょう", romanji: "chō" }],
            kun: [{ kana: "まち", romanji: "machi" }],
            source: "https://en.wiktionary.org/wiki/%E7%94%BA#Kanji",
            meanings: ["town", "village", "block", "street"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "町", kana: ["まち, ちょう"], english: ["town", "block", "neighbourhood"] },
                { value: "市町村", kana: ["しちょうそん"], english: ["cities", "towns and villages", "municipalities"] },
                { value: "同町", kana: ["どうちょう"], english: ["the same town", "that town"] },
                { value: "町長", kana: ["ちょうちょう"], english: ["town headman", "town mayor"] },
                { value: "町内", kana: ["ちょうない"], english: ["neighborhood", "neighbourhood", "street", "block"] },
            ]
        },
        {
            name: "雨",
            code: "\u96E8",
            on: [{ kana: "う", romanji: "u" }],
            kun: [{ kana: "あめ", romanji: "ame" }],
            source: "https://en.wiktionary.org/wiki/%E9%9B%A8#Kanji",
            meanings: ["rain"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "雨", kana: ["あめ"], english: ["rain"] },
                { value: "大雨", kana: ["おおあめ"], english: ["heavy rain"] },
                { value: "梅雨", kana: ["ばいう", "つゆ"], english: ["rainy season"] },
                { value: "雨水", kana: ["あまみず", "うすい"], english: ["rain water"] },
                { value: "雨量", kana: ["うりょう"], english: ["rainfall"] },
            ]
        },
        {
            name: "目",
            code: "\u76EE",
            on: [{ kana: "もく", romanji: "moku" }],
            kun: [{ kana: "め", romanji: "me" }],
            source: "https://en.wiktionary.org/wiki/%E7%9B%AE#Kanji",
            meanings: ["eye", "look"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "目的", kana: ["もくてき"], english: ["purpose", "goal", "aim", "objective", "intention"] },
                { value: "目標", kana: ["もくひょう"], english: ["mark", "objective", "target"] },
                { value: "注目", kana: ["ちゅうもく"], english: ["notice", "attention", "observation"] },
                { value: "項目", kana: ["こうもく"], english: ["item, entry"] },
                { value: "名目", kana: ["めいもく", "みょうもく"], english: ["name", "title", "appellation"] },
            ]
        },
        {
            name: "正",
            code: "\u6B63",
            on: [{ kana: "しょう", romanji: "sho" }],
            kun: [{ kana: "ただしい", romanji: "tadashii" }],
            source: "https://en.wiktionary.org/wiki/%E6%AD%A3#Kanji",
            meanings: ["correct", "justice", "righteous"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "正", kana: ["せい"], english: ["true", "regular", "original"] },
                { value: "改正", kana: ["かいせい"], english: ["revision", "amendment", "alteration"] },
                { value: "修正", kana: ["しゅうせい"], english: ["amendment", "correction", "revision", "modification"] },
                { value: "正式", kana: ["せいしき"], english: ["due form", "official", "formality"] },
                { value: "正常", kana: ["せいじょう"], english: ["normalcy", "normality", "normal"] },
            ]
        },
        {
            name: "口",
            code: "\u53E3",
            on: [{ kana: "く", romanji: "ku" }],
            kun: [{ kana: "くち", romanji: "kuchi" }],
            source: "https://en.wiktionary.org/wiki/%E5%8F%A3#Kanji",
            meanings: ["mouth"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "口", kana: ["くち"], english: ["mouth", "opening", "hole", "gap", "orifice"] },
                { value: "人口", kana: ["じんこう"], english: ["population", "common talk"] },
                { value: "窓口", kana: ["まどぐち"], english: ["ticket window", "teller window", "counter"] },
                { value: "口座", kana: ["こうざ"], english: ["account"] },
                { value: "入り口", kana: ["いりぐち", "いりくち", "はいりぐち", "は", "いりくち"], english: ["entrance", "entry", "gate", "approach", "mouth"] },
            ]
        },
        {
            name: "空",
            code: "\u7A7A",
            on: [{ kana: "く", romanji: "ku" }],
            kun: [{ kana: "あく", romanji: "aku" }],
            source: "https://en.wiktionary.org/wiki/%E7%A9%BA#Kanji",
            meanings: ["empty", "sky", "void"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "空", kana: ["から"], english: ["emptiness", "vacuum", "blank"] },
                { value: "空港", kana: ["くうこう"], english: ["airport"] },
                { value: "航空", kana: ["こうくう"], english: ["aviation"] },
                { value: "空気", kana: ["くうき"], english: ["air", "atmosphere"] },
                { value: "航空機", kana: ["こうくうき"], english: ["aircraft", "aeroplane", "airplane"] },
            ]
        },
        {
            name: "足",
            code: "\u8DB3",
            on: [{ kana: "す", romanji: "su" }],
            kun: [{ kana: "あし", romanji: "ashi" }],
            source: "https://en.wiktionary.org/wiki/%E8%B6%B3#Kanji",
            meanings: ["leg", "foot"],
            grade: KyoikuGrade.ONE,
            examples: [
                { value: "足", kana: ["あし"], english: ["foot", "leg", "pace"] },
                { value: "不足", kana: ["ふそく"], english: ["insufficiency", "shortage", "deficiency", "lack"] },
                { value: "発足", kana: ["ほっそく", "はっそく"], english: ["starting", "inauguration", "launch", "founding"] },
                { value: "満足", kana: ["まんぞく"], english: ["satisfaction", "sufficiency"] },
                { value: "足並み", kana: ["あしなみ"], english: ["pace", "step"] },
            ]
        },

        //Grade 2
        {
            name: "鳥",
            code: "\u9CE5",
            on: [{ kana: "ちょう", romanji: "cho" }],
            kun: [{ kana: "とり", romanji: "tori" }],
            source: "https://en.wiktionary.org/wiki/%E9%B3%A5#Kanji",
            meanings: ["bird", "chicken"],
            grade: KyoikuGrade.TWO,
            examples: [
                { value: "鳥", kana: ["とり"], english: ["bird meat", "fowl"] },
                { value: "野鳥", kana: ["やちょう"], english: ["wild bird"] },
                { value: "鳥類", kana: ["ちょうるい"], english: ["birds"] },
                { value: "白鳥", kana: ["はくちょう", "しろとり", "しらとり"], english: ["swan"] },
                { value: "渡り鳥", kana: ["わたりどり"], english: ["migratory bird", "bird of passage",] },
            ]
        },
        {
            name: "前",
            code: "\u524D",
            on: [{ kana: "ぜん", romanji: "zen" }],
            kun: [{ kana: "まえ ", romanji: "mae" }],
            source: "https://en.wiktionary.org/wiki/%E5%89%8D#Kanji",
            meanings: ["before"],
            grade: KyoikuGrade.TWO,
            examples: [
                { value: "午前", kana: ["ごぜん"], english: ["morning", "A.M"] },
                { value: "前年", kana: ["ぜんねん"], english: ["the previous year"] },
                { value: "前回", kana: ["ぜんかい"], english: ["last time"] },
                { value: "前提", kana: ["ぜんてい"], english: ["preamble", "premise", "reason"] },
                { value: "前日", kana: ["ぜんじつ", "まえび"], english: ["previous day"] },
            ]
        },

        //Grade 6 Kanji

        {
            name: "私",
            code: "\u79C1",
            on: [{ kana: "し", romanji: "shi" }],
            kun: [{ kana: "わたくし", romanji: "watashi" }],
            source: "https://en.wiktionary.org/wiki/%E7%A7%81#Kanji",
            meanings: ["me", "I"],
            grade: KyoikuGrade.SIX,
            examples: [
                { value: "私", kana: ["わたし", "わたくし"], english: ["I", "me", "personal matter"] },
                { value: "私立", kana: ["しりつ", "わたくしりつ"], english: ["private (establishment"] },
                { value: "私邸", kana: ["してい"], english: ["private residence"] },
                { value: "私的", kana: ["してき"], english: ["personal", "private", "proprietary"] },
                { value: "私鉄", kana: ["してつ"], english: ["private railway",] },
            ]
        },
        {
            name: "机",
            code: "\u673A",
            on: [{ kana: "き", romanji: "ki" }],
            kun: [{ kana: "つくえ", romanji: "tsukue" }],
            source: "https://en.wiktionary.org/wiki/%E6%9C%BA#Kanji",
            meanings: ["desk", "table"],
            grade: KyoikuGrade.SIX,
            examples: [
                { value: "机", kana: ["つくえ, つき"], english: ["desk"] },
                { value: "机上", kana: ["きじょう"], english: ["on the desk", "theoretical", "academic"] },
                { value: "机上の空論", kana: ["きじょうのくうろん"], english: ["academic gossip", "empty theory"] },
                { value: "事務机", kana: ["じむづくえ"], english: ["cleric desk"] },
                { value: "書き物机", kana: ["かきものづくえ"], english: ["writing desk",] },
            ]
        },
    ];
}

export function joyo(): KanjiData[] {
    return kyoiku().concat([
        {
            name: "猫",
            code: "\u732B",
            on: [{ kana: " みょう", romanji: "myo" }],
            kun: [{ kana: "ねこ", romanji: "neko" }],
            source: "https://en.wiktionary.org/wiki/%E7%8C%AB#Kanji",
            meanings: ["cat"],
            grade: KyoikuGrade.TWO,
            examples: [
                { value: "猫", kana: ["ねこ"], english: ["cat"] },
                { value: "子猫", kana: ["こねこ"], english: ["kitten"] },
                { value: "野良猫", kana: ["のらねこ"], english: ["stray cat"] },
                { value: "黒猫", kana: ["くろねこ"], english: ["black cat"] },
                { value: "飼い猫", kana: ["かいねこ"], english: ["pet cat",] },
            ]
        },
    ])
}