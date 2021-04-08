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