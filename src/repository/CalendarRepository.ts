import { LearnCalendarSettings } from "../types/learn/LearnSettings";
import CalendarData from "../types/calendar/CalendarData";
import { days, months } from "../data/Calendar";
import { DayData } from "../data/DataTypes";
import Day from "../types/calendar/Day";
import Month from "../types/calendar/Month";

export default class CalendarRepository {
    public read(config: LearnCalendarSettings): CalendarData[] {
        let data = [];

        if (config.months) {
            data.push(...this.convertMonths(months()));
        }

        if (config.days) {
            data.push(...this.convertDays(days()));
        }

        return data;
    }

    private convertDays(data: DayData[]): Day[] {
        return data.map(datum => new Day(datum.name, datum.kanji, datum.romaji, datum.kana, datum.meaning));
    }

    private convertMonths(data: DayData[]): Month[] {
        return data.map(datum => new Month(datum.name, datum.kanji, datum.romaji, datum.kana, datum.meaning));
    }
}