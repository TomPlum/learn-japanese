import { Kanji } from "../types/kanji/Kanji";
import { Reading } from "../types/kanji/Reading";
import { ReadingType } from "../types/kanji/ReadingType";
import { Example } from "../types/kanji/Example";
import { KanjiData, KanjiExample, KanjiReading } from "../data/DataTypes";
import { joyo, kyoiku } from "../data/Kanji";
import Repository from "./Repository";
import { RandomNumberGenerator } from "../utility/RandomNumberGenerator";
import KanjiSettings from "../types/session/settings/data/KanjiSettings";

//TODO: Integrate Kanji Filters & create new ones for grades etc.
export class KanjiRepository implements Repository<Kanji> {
    public read(settings: KanjiSettings): Kanji[] {
        if (!settings) return [];

        if (settings.joyo) {
            if (settings.quantity) {
                return this.convert(joyo()).splice(0, settings.quantity);
            }
            return this.convert(joyo());
        }

        if (settings.quantity && settings.grades && settings.grades.length > 0) {
            let kanji: Kanji[] = [];

            let availableKanji = this.convert(kyoiku().filter(data => settings.grades?.includes(data.grade)));

            for (let i = 0; i < settings.quantity; i++) {
                const [randomKanji, remainingKanji] = RandomNumberGenerator.getRandomObject(availableKanji);
                availableKanji = remainingKanji;
                kanji.push(randomKanji);
            }

            return kanji;
        }

        if (settings.quantity) {
            const data = kyoiku().splice(0, settings.quantity);
            return this.convert(data);
        }

        if (settings.grades && settings.grades.length > 0) {
            const data = kyoiku().filter(entry => settings.grades?.map(it => it.value).includes(entry.grade.value));
            return this.convert(data);
        }

        return this.convert(joyo());
    }

    public getByValue(value: string): Kanji | undefined {
        const match = joyo().find((entry: KanjiData) => entry.name === value);
        return match ? this.convert([match])[0] : undefined;
    }

    private convert = (data: KanjiData[]): Kanji[] => {
        return data.map((result: KanjiData) => {
            const on = result.on.map((data: KanjiReading) => new Reading(data.romaji, data.kana, ReadingType.ON));
            const kun = result.kun.map((data: KanjiReading) => new Reading(data.romaji, data.kana, ReadingType.KUN));
            const examples = result.examples.map((it: KanjiExample) => new Example(it.value, it.kana, it.english));
            const tags = result.tags ?? [];
            return new Kanji(result.code, on.concat(kun), result.meanings, result.grade, result.source, examples, tags);
        });
    }
}