import { Kanji } from "../types/kanji/Kanji";
import kanji from "../data/Kanji";
import { Reading } from "../types/kanji/Reading";
import { ReadingType } from "../types/kanji/ReadingType";

export interface KanjiSettings {
    grades: number[];
}

export class KanjiRepository {
    public read(settings: KanjiSettings): Kanji[] {
        return kanji
            .filter(entry => settings.grades.includes(entry.grade))
            .map(result => {
                const on = result.on.map(data => new Reading(data.romanji, data.kana, ReadingType.ON))
                const kun = result.kun.map(data => new Reading(data.romanji, data.kana, ReadingType.KUN))
                return new Kanji(result.code, on.concat(kun), result.meanings, result.grade, result.source);
            });
    }
}