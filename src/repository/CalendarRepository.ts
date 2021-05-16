import { LearnCalendarSettings } from "../types/learn/LearningSessionSettings";
import { Learnable } from "../types/learn/Learnable";
import { days, months, nouns } from "../data/Calendar";
import { DayData } from "../data/DataTypes";
import Day from "../types/calendar/Day";
import Month from "../types/calendar/Month";
import TemporalNoun from "../types/calendar/TemporalNoun";
import Repository from "./Repository";

export default class CalendarRepository implements Repository<Learnable> {
    public read(config: LearnCalendarSettings): Learnable[] {
        let data = [];

        if (config.months) {
            data.push(...this.convertMonths(months()));
        }

        if (config.days) {
            data.push(...this.convertDays(days()));
        }

        if (config.nouns) {
            data.push(...this.convertNouns(nouns()));
        }

        return data;
    }

    private convertDays(data: DayData[]): Day[] {
        return data.map(datum => new Day(datum.name, datum.kanji, datum.romaji, datum.kana, datum.meaning));
    }

    private convertMonths(data: DayData[]): Month[] {
        return data.map(datum => new Month(datum.name, datum.kanji, datum.romaji, datum.kana, datum.meaning));
    }

    private convertNouns(data: DayData[]): TemporalNoun[] {
        return data.map(datum => new TemporalNoun(datum.name, datum.kanji, datum.romaji, datum.kana));
    }
}