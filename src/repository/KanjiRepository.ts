import { KanjiReading } from "../types/kanji/KanjiReading";
import { ReadingType } from "../types/kanji/ReadingType";
import { Example } from "../types/kanji/Example";
import { KanjiData, KanjiExample } from "../data/DataTypes";
import Repository from "./Repository";
import KanjiSettings from "../types/session/settings/data/KanjiSettings";
import Arrays from "../utility/Arrays";
import { Kanji } from "../types/kanji/Kanji";
import { KyoikuGrade } from "../types/kanji/KyoikuGrade";
import RomajiGenerator from "../utility/RomajiGenerator";
import { joyo, kyoiku } from "../data/Kanji";

//TODO: Integrate Kanji Filters & create new ones for grades etc.
export class KanjiRepository implements Repository<Kanji> {
    public async read(settings: KanjiSettings): Promise<Kanji[]> {
        if (!settings) return [];

        if (settings.joyo) {
            if (settings.quantity) {
                const data = Arrays.getRandomElements(joyo(), settings.quantity);
                return this.convert(data);
            }
            return this.convert(joyo());
        }

        if (settings.quantity && settings.grades && settings.grades.length > 0) {
            let kanji: Kanji[] = [];

            let kyoikuKanji = this.convert(kyoiku());
            let availableKanji = kyoikuKanji.filter(data => settings.grades?.includes(data.grade));

            for (let i = 0; i < settings.quantity; i++) {
                const [randomKanji, remainingKanji] = Arrays.getRandomObject(availableKanji);
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
            let kyoikuKanji = this.convert(kyoiku());
            return kyoikuKanji.filter(entry => settings.grades?.map(it => it.value).includes(entry.grade.value));
        }

        return this.convert(joyo());
    }

    public getByValue(value: string): Kanji | undefined {
        const match = joyo().find((entry: KanjiData) => entry.name === value);
        return match ? this.convert([match])[0] : undefined;
    }

    private convert = (data: KanjiData[]): Kanji[] => {
        const romaji = new RomajiGenerator();
        return data.map((result: KanjiData) => {
            const on = result.on.map(reading => new KanjiReading(romaji.generate(reading), reading, ReadingType.ON));
            const kun = result.kun.map(reading => new KanjiReading(romaji.generate(reading), reading, ReadingType.KUN));
            const examples = result.examples.map((it: KanjiExample) => new Example(it.value, it.kana, it.english));
            const grade = KyoikuGrade.fromInteger(result.grade);
            const tags = result.tags ?? [];
            return new Kanji(result.name, on.concat(kun), result.meanings, grade, result.source, examples, tags);
        });
    }
}
