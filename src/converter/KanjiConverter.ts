import { KanjiResponseModel, ReadingResponseModel } from "../repository/KanjiRepository";
import { Kanji } from "../domain/kanji/Kanji";
import RomajiGenerator from "../utility/RomajiGenerator";
import { KanjiReading } from "../domain/kanji/KanjiReading";
import { ReadingType } from "../domain/kanji/ReadingType";
import { KyoikuGrade } from "../domain/kanji/KyoikuGrade";
import { KanjiExample } from "../data/DataTypes";
import { Example } from "../domain/kanji/Example";

class KanjiConverter {

    private readonly romajiGenerator = new RomajiGenerator();

    public convert(response: KanjiResponseModel[]): Kanji[] {
        return response.map((result: KanjiResponseModel) => {
            const on = result.readings
                .filter(it => it.type === "on")
                .map(reading => this.convertReading(reading, ReadingType.ON));

            const kun = result.readings
                .filter(it => it.type === "kun")
                .map(reading => this.convertReading(reading, ReadingType.KUN));

            const readings = on.concat(kun);

            const grade = KyoikuGrade.fromInteger(result.grade);
            const tags = result.tags ?? [];
            const source = result.source ?? "";
            const examples = result.examples.map((it: KanjiExample) => new Example(it.value, it.kana, it.english));

            return new Kanji(result.character, readings, result.meanings, grade, source, examples, tags);
        });
    }

    private convertReading(reading: ReadingResponseModel, type: ReadingType) {
        return new KanjiReading(this.romajiGenerator.generate(reading.value), reading.value, type);
    }
}

export default KanjiConverter;
