import { DayData } from "./DataTypes";

export function days(): DayData[] {
    return [
        {
            name: "Monday",
            kanji: "月曜日",
        },
        {
            name: "Tuesday",
            kanji: "火曜日",
        },
        {
            name: "Wednesday",
            kanji: "水曜日",
        },
        {
            name: "Thursday",
            kanji: "木曜日",
        },
        {
            name: "Friday",
            kanji: "金曜日",
        },
        {
            name: "Saturday",
            kanji: "土曜日",
        },
        {
            name: "Sunday",
            kanji: "日曜日",
        },
    ];
}