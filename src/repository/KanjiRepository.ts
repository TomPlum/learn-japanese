import { Kanji } from "../types/kanji/Kanji";
import { Reading } from "../types/kanji/Reading";
import { ReadingType } from "../types/kanji/ReadingType";
import { Example } from "../types/kanji/Example";
import { KanjiData, KanjiReading } from "../data/DataTypes";
import { KyoikuGrade } from "../types/kanji/KyoikuGrade";
import { joyo, kyoiku } from "../data/Kanji";

export interface KanjiSettings {
    grades: KyoikuGrade[];
    quantity?: number;
    joyo?: boolean;
}

export class KanjiRepository {


    public read(settings?: KanjiSettings): Kanji[] {
        if (!settings) return [];

        if (settings.joyo) {
            if (settings.quantity) {
                return this.convert(joyo()).splice(0, settings.quantity);
            }
            return this.convert(joyo());
        }

        if (settings.quantity) {
            const data = kyoiku().splice(0, settings.quantity);
            return this.convert(data);
        }

        if (settings.grades.length > 0) {
            const data = kyoiku().filter(entry => settings.grades.map(it => it.value).includes(entry.grade.value));
            return this.convert(data);
        }

        return this.convert(joyo());
    }

    private convert = (data: KanjiData[]): Kanji[] => {
        return data.map((result: KanjiData) => {
            const on = result.on.map((data: KanjiReading) => new Reading(data.romanji, data.kana, ReadingType.ON));
            const kun = result.kun.map((data: KanjiReading) => new Reading(data.romanji, data.kana, ReadingType.KUN));
            const examples = result.examples.map(example => {
                return new Example(example.value, example.kana, example.english);
            });
            return new Kanji(result.code, on.concat(kun), result.meanings, result.grade, result.source, examples);
        });
    }
}