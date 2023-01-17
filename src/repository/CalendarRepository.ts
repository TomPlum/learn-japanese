import { Learnable } from "../domain/learn/Learnable";
import { days, months, nouns, phrases } from "../data/Calendar";
import { DayData } from "../data/DataTypes";
import Repository from "./Repository";
import Definition from "../domain/sentence/Definition";
import CalendarSettings from "../domain/session/settings/data/CalendarSettings";

export default class CalendarRepository implements Repository<Learnable> {
    public read(config: CalendarSettings): Promise<Learnable[]> {
        const data = [];

        if (config.months) {
            data.push(...this.convert(months(), "Month of the Year"));
        }

        if (config.days) {
            data.push(...this.convert(days(), "Day of the Week"));
        }

        if (config.nouns) {
            data.push(...this.convert(nouns(), "Temporal Noun / Adverb"));
        }

        if (config.phrases) {
            data.push(...this.convert(phrases(), "Common Phrase"));
        }

        return Promise.all(data);
    }

    private convert(data: DayData[], title: string): Definition[] {
        return data.map(it => new Definition([it.name], it.kanji, it.kana ?? "", title));
    }
}
