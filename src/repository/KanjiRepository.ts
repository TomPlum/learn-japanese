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
        // If requested joyo, then give them all joyo (or quantity if specified).
        if (settings.joyo) {
            return joyo().then(joyo => {
                if (!settings) return [];

                if (settings.quantity) {
                    const data = Arrays.getRandomElements(joyo, settings.quantity);
                    return this.convert(data);
                }
                return this.convert(joyo);
            });
        }

        // If not requested joyo and there are grades, give kyoiku
        if (settings.grades && settings.grades.length > 0) {
            return kyoiku().then(kyoiku => {
                // If specified quantity, give random quantity from those grades
                if (settings.quantity) {
                    let kanji: Kanji[] = [];

                    let kyoikuKanji = this.convert(kyoiku);
                    let availableKanji = kyoikuKanji.filter(data => settings.grades?.includes(data.grade));

                    for (let i = 0; i < settings.quantity; i++) {
                        const [randomKanji, remainingKanji] = Arrays.getRandomObject(availableKanji);
                        availableKanji = remainingKanji;
                        kanji.push(randomKanji);
                    }

                    return kanji;
                } else {
                    // Else, all from those grades
                    return this.convert(kyoiku).filter(entry => settings.grades?.map(it => it.value).includes(entry.grade.value));
                }
            });
        }

        // If not specified joyo or kyoiku, but quantity, then give quantity from ALL kanji.
        if (settings.quantity) {
            return kyoiku().then(kanji => this.convert(kanji.splice(0, settings.quantity)));
        }

        //If we've specific nothing, then give the whole lot.
        return joyo().then(kanji => this.convert(kanji));
    }

    public async getByValue(value: string): Promise<Kanji | undefined> {
        return joyo().then(data => {
            const match = data.find((entry: KanjiData) => entry.name === value);
            return match ? this.convert([match])[0] : undefined;
        });
    }

    public convert = (data: KanjiData[]): Kanji[] => {
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
