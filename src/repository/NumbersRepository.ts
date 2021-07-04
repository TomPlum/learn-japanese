import Repository from "./Repository";
import CommonData from "../types/learn/CommonData";
import { CounterData, NumbersData } from "../data/DataTypes";
import numbers, { counters } from "../data/Numbers";
import { NumbersSettings } from "../types/session/DataSettings";

export default class NumbersRepository implements Repository<CommonData> {
    read(settings: NumbersSettings): CommonData[] {
        if (settings.numbers) {
            return numbers().map((number: NumbersData) => {
                const kanji = this.convertKanji(number);
                return new CommonData(number.name, number.kana, kanji, "Number", number.name);
            });
        }

        if (settings.counters) {
            return counters().map((counter: CounterData) => {
                const kanji = this.convertKanji(counter);
                const title = "Counter - " + counter.group;
                return new CommonData(counter.name, counter.kana, kanji, title, counter.name, counter.example);
            });
        }

        return [];
    }

    private convertKanji = (data: NumbersData): string => data.kanji ?? "";
}