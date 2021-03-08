import { Kanji } from "../types/kanji/Kanji";
import kanji from "../data/Kanji";
import { Reading } from "../types/kanji/Reading";
import { ReadingType } from "../types/kanji/ReadingType";
import { Example } from "../types/kanji/Example";
import { KanjiData, KanjiReading } from "../data/DataTypes";
import { KyoikuGrade } from "../types/kanji/KyoikuGrade";

export interface KanjiSettings {
    grades: KyoikuGrade[];
}

export class KanjiRepository {
    public read(settings: KanjiSettings): Kanji[] {
        return kanji
            .filter(entry => settings.grades.includes(entry.grade))
            .map((result: KanjiData) => {
                const on = result.on.map((data: KanjiReading) => new Reading(data.romanji, data.kana, ReadingType.ON));
                const kun = result.kun.map((data: KanjiReading) => new Reading(data.romanji, data.kana, ReadingType.KUN));
                const examples = result.examples.map(example => {
                    return new Example(example.value, example.kana, example.english);
                });
                return new Kanji(result.code, on.concat(kun), result.meanings, result.grade, result.source, examples);
            });
    }
}