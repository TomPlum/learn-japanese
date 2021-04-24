import Repository from "./Repository";
import CommonData from "../types/learn/CommonData";
import { LearnNumbersSettings } from "../types/learn/LearningSessionSettings";
import { CounterData, NumbersData } from "../data/DataTypes";
import numbers, { counters } from "../data/Numbers";
import JapaneseWord from "../types/learn/JapaneseWord";

export default class NumbersRepository implements Repository<CommonData> {
    read(settings: LearnNumbersSettings): CommonData[] {
        if (settings.numbers) {
            return numbers().map((number: NumbersData) => {
                const kanji = this.convertKanji(number);
                const words = this.convertWords(number);
                return new CommonData(number.name, words, kanji, "Number");
            });
        }

        if (settings.counters) {
            return counters().map((counter: CounterData) => {
                const kanji = this.convertKanji(counter);
                const words = this.convertWords(counter);
                const title = "Counter - " + counter.group;
                return new CommonData(counter.name, words, kanji, title, undefined, counter.example);
            });
        }

        return [];
    }

    private convertWords(data: NumbersData): JapaneseWord[] {
        return data.kana.map((value: string, i: number) => new JapaneseWord(value, data.romaji[i]));
    }

    private convertKanji = (data: NumbersData): string => data.kanji ?? "";
}