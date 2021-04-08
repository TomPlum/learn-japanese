import { LearnCalendarSettings } from "../types/learn/LearnSettings";
import CalendarData from "../types/calendar/CalendarData";
import { days } from "../data/Calendar";
import { DayData } from "../data/DataTypes";
import Day from "../types/calendar/Day";

export default class CalendarRepository {
    public read(config: LearnCalendarSettings): CalendarData[] {
        return this.convert(days());
    }

    private convert(data: DayData[]) {
        return data.map(datum => new Day(datum.name, datum.kanji, datum.romaji, datum.kana, datum.meaning));
    }
}