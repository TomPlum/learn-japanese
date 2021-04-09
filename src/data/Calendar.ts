import { DayData } from "./DataTypes";

export function days(): DayData[] {
    return [
        {
            name: "Monday",
            kanji: "月曜日",
            romaji: "getsuyōbi",
            kana: "げつようび",
            meaning: "Moon day"
        },
        {
            name: "Tuesday",
            kanji: "火曜日",
            romaji: "kayōbi",
            kana: " かようび",
            meaning: "Fire day"
        },
        {
            name: "Wednesday",
            kanji: "水曜日",
            romaji: "suiyōbi",
            kana: "すいようび",
            meaning: "Water day"
        },
        {
            name: "Thursday",
            kanji: "木曜日",
            romaji: "mokuyōbi",
            kana: "もくようび",
            meaning: "Wood day"
        },
        {
            name: "Friday",
            kanji: "金曜日",
            romaji: "kin'yōbi",
            kana: "きんようび",
            meaning: "Gold day"
        },
        {
            name: "Saturday",
            kanji: "土曜日",
            romaji: "doyōbi",
            kana: "どようび",
            meaning: "Earth day"
        },
        {
            name: "Sunday",
            kanji: "日曜日",
            romaji: "nichiyōbi",
            kana: "にちようび",
            meaning: "Sun day"
        }
    ];
}

export function months(): DayData[] {
    return [
        {
            name: "January",
            kanji: "一月",
            romaji: "ichigatsu",
            kana: "いちがつ",
            meaning: "One Month"
        },
        {
            name: "February",
            kanji: "二月",
            romaji: "nigatsu",
            kana: "にがつ",
            meaning: "Two Month"
        },
        {
            name: "March",
            kanji: "三月",
            romaji: "sangatsu",
            kana: "さんがつ",
            meaning: "Three Month"
        },
        {
            name: "April",
            kanji: "四月",
            romaji: "shigatsu",
            kana: "しがつ",
            meaning: "Four Month"
        },
        {
            name: "May",
            kanji: "五月",
            romaji: "gogatsu",
            kana: "ごがつ",
            meaning: "Five Month"
        },
        {
            name: "June",
            kanji: "六月",
            romaji: "rokugatsu",
            kana: "ろくがつ",
            meaning: "Six Month"
        },
        {
            name: "July",
            kanji: "七月",
            romaji: "shichigatsu",
            kana: "しちがつ",
            meaning: "Seven Month"
        },
        {
            name: "August",
            kanji: "八月",
            romaji: "hachigatsu",
            kana: "はちがつ",
            meaning: "Eight Month"
        },
        {
            name: "September",
            kanji: "九月",
            romaji: "kugatsu",
            kana: "くがつ",
            meaning: "Nine Month"
        },
        {
            name: "October",
            kanji: "十月",
            romaji: "jūgatsu",
            kana: "じゅうがつ",
            meaning: "Ten Month"
        },
        {
            name: "November",
            kanji: "十一月",
            romaji: "jūichigatsu",
            kana: "じゅういちがつ",
            meaning: "Eleven Month"
        },
        {
            name: "December",
            kanji: "十二月",
            romaji: "jūnigatsu",
            kana: "じゅうにがつ",
            meaning: "Twelve Month"
        }
    ];
}

export function nouns(): DayData[] {
    return [
        {
            name: "Tomorrow",
            kanji: "明日",
            romaji: "ashita",
            kana: "あした"
        },
        {
            name: "Yesterday",
            kanji: "昨日",
            romaji: "kinō",
            kana: "きのう"
        },
        {
            name: "The day after tomorrow",
            kanji: "明後日",
            romaji: "asatte",
            kana: "あさって"
        },
        {
            name: "The day before yesterday",
            kanji: "一昨日",
            romaji: "ototoi",
            kana: "おととい"
        },
    ];
}

export function phrases(): DayData[] {
    return [
        {
            name: "What day is it today?",
            kana: "今日は何曜日ですか",
            romaji: "Kyou wa nan youbi desu ka",
            meaning: "What day is it today?"
        }
    ];
}