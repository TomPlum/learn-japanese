import Repository from "./Repository";
import CommonData from "../types/learn/CommonData";
import { LearnNumbersSettings } from "../types/learn/LearningSessionSettings";
import { NumbersData } from "../data/DataTypes";
import numbers from "../data/Numbers";
import JapaneseWord from "../types/learn/JapaneseWord";

export default class NumbersRepository implements Repository<CommonData> {
    read(settings: LearnNumbersSettings): CommonData[] {
        if (settings.numbers) {
            return this.convert(numbers(), "Number");
        }
        return [];
    }

    private convert = (data: NumbersData[], title: string) => {
        return data.map(it => {
            const kanji = it.kanji ?? "";
            const words = it.kana.map((value: string, i: number) => {
                return new JapaneseWord(value, it.romaji[i]);
            });
            return new CommonData(it.name, words, kanji, title);
        });
    }

}