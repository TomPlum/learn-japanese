import Repository from "./Repository";
import CommonData from "../types/learn/CommonData";
import { LearnNumbersSettings } from "../types/learn/LearningSessionSettings";
import { CounterData, NumbersData } from "../data/DataTypes";
import numbers, { counters } from "../data/Numbers";

export default class NumbersRepository implements Repository<CommonData> {
    read(settings: LearnNumbersSettings): CommonData[] {
        if (settings.numbers) {
            return numbers().map((number: NumbersData) => {
                const kanji = this.convertKanji(number);
                return new CommonData(number.name, number.kana, kanji, "Number");
            });
        }

        if (settings.counters) {
            return counters().map((counter: CounterData) => {
                const kanji = this.convertKanji(counter);
                const title = "Counter - " + counter.group;
                return new CommonData(counter.name, counter.kana, kanji, title, undefined, counter.example);
            });
        }

        return [];
    }

    private convertKanji = (data: NumbersData): string => data.kanji ?? "";
}