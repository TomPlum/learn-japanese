import { CounterData, NumbersData } from "./DataTypes";
import { CounterGroup } from "../types/numbers/CounterGroup";

export default function numbers(): NumbersData[] {
    return [
        {
            name: "0",
            kanji: "零",
            kana: ["れい", "ゼロ", "マル"],
            romaji: ["rei", "zero", "maru"]
        },
        {
            name: "1",
            kanji: "一",
            kana: ["いち"],
            romaji: ["ichi"]
        },
        {
            name: "2",
            kanji: "二",
            kana: ["に"],
            romaji: ["ni"]
        },
        {
            name: "3",
            kanji: "三",
            kana: ["さん"],
            romaji: ["san"]
        },
        {
            name: "4",
            kanji: "四",
            kana: ["し", "よん"],
            romaji: ["shi", "yon"]
        },
        {
            name: "5",
            kanji: "五",
            kana: ["ご"],
            romaji: ["go"]
        },
        {
            name: "6",
            kanji: "六",
            kana: ["ろく"],
            romaji: ["roku"]
        },
        {
            name: "7",
            kanji: "七",
            kana: ["しち", "なな"],
            romaji: ["shichi", "nana"]
        },
        {
            name: "8",
            kanji: "八",
            kana: ["はち"],
            romaji: ["hachi"]
        },
        {
            name: "9",
            kanji: "九",
            kana: ["く", "きゅう"],
            romaji: ["ku", "kyuu"]
        },
        {
            name: "10",
            kanji: "十",
            kana: ["じゅう"],
            romaji: ["juu"]
        },
        {
            name: "100",
            kanji: "百",
            kana: ["びゃく"],
            romaji: ["hyaku"]
        },
        {
            name: "1000",
            kanji: "千",
            kana: ["せん"],
            romaji: ["sen"]
        },
        {
            name: "10,000",
            kanji: "万",
            kana: ["まん"],
            romaji: ["man"]
        },
        {
            name: "100 Million",
            kanji: "億",
            kana: ["おく"],
            romaji: ["oku"]
        },
        {
            name: "1 Billion",
            kanji: "兆",
            kana: ["ちょう"],
            romaji: ["chō"]
        },
    ];
}

//https://www.tofugu.com/japanese/japanese-counters-list/
export function counters(): CounterData[] {
    return [
        {
            name: "Everything",
            kana: ["つ"],
            romaji: ["tsu"],
            group: CounterGroup.ABSOLUTELY_MUST_KNOW,
            example: { kana: "ミカンが３つあります", english: "There are three oranges." }
        },
        {
            name: "Most Things",
            kanji: "個",
            kana: ["こ"],
            romaji: ["ko"],
            group: CounterGroup.ABSOLUTELY_MUST_KNOW,
            example: { kana: "りんごが７個あります", english: "There are seven apples." }
        },
        {
            name: "Cylindrical",
            kanji: "本",
            kana: ["ほん"],
            romaji: ["hon"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "ペンを１本貸してくれませんか？", english: "Could you lend me one of your pens?" }
        },
        {
            name: "Flat",
            kanji: "枚",
            kana: ["まい"],
            romaji: ["mai"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "100枚の折り紙が必要です", english: "I need 100 pieces of origami paper." }
        },
        {
            name: "Animals (M)",
            kanji: "匹",
            kana: ["ひき"],
            romaji: ["hiki"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "犬を１匹と猫を２匹飼っています", english: "We have one dog and two cats." }
        },
        {
            name: "Animals (L)",
            kanji: "頭",
            kana: ["とう"],
            romaji: ["tou"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "この動物園には、象が２頭います", english: "In this zoo, there are two elephants." }
        },
        {
            name: "Birds",
            kanji: "羽",
            kana: ["わ"],
            romaji: ["wa"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "庭には２羽ニワトリがいます", english: "In the yard, there are two chickens." }
        },
        {
            name: "Machines / Vehicles",
            kanji: "台",
            kana: ["だい"],
            romaji: ["dai"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "ベンはベンツを９台もっています", english: "Ben owns nine Mercedes Benz cars." }
        },
        {
            name: "Minutes",
            kanji: "分",
            kana: ["ふん"],
            romaji: ["pun"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "今ちょうど4時44分になったところです", english: "It's just turned 4:44 right now." }
        },
        {
            name: "Days",
            kanji: "日",
            kana: ["か", "にち"],
            romaji: ["ka", "nichi"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "来月の３日って何してる？", english: "What are you up to on the third day of next month?" }
        },
        {
            name: "Years",
            kanji: "年",
            kana: ["ねん"],
            romaji: ["nen"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "今、大学一年生です", english: "I'm in the first year of university now." }
        },
        {
            name: "Number of Times",
            kanji: "回",
            kana: ["かい"],
            romaji: ["kai"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "日本には何回行ったことがありますか？", english: "How many times have you been to Japan?" }
        },
        {
            name: "People",
            kanji: "人",
            kana: ["り", "にん"],
            romaji: ["ri", "nin"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "１人は怖いから嫌だよ！", english: "I don't want to be alone because I'll be scared." }
        },
        {
            name: "Months",
            kanji: "月",
            kana: ["つき", "がつ"],
            romaji: ["tsuki", "gatsu"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "あと１月でお正月だね", english: "It will be the New Year in one month." }
        },
        {
            name: "O'Clock",
            kanji: "時",
            kana: ["じ"],
            romaji: ["ji"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "今何時ですか？", english: "What time is it?" }
        },
        {
            name: "Hours",
            kanji: "時間",
            kana: ["じかん"],
            romaji: ["jikan"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "二時間後に会いましょう", english: "Let's meet up in two hours." }
        },
        {
            name: "Building Floors",
            kanji: "階",
            kana: ["かい"],
            romaji: ["kai"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "私の部屋は１２階にあります", english: "My room is on the twelfth floor." }
        },
        {
            name: "Age",
            kanji: "歳",
            kana: ["さい"],
            romaji: ["sai"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "コウイチのお婆ちゃんって今何歳？", english: "How old is Koichi's grandma now?" }
        },
    ];
}