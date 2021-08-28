import { Kanji } from "../../../domain/kanji/Kanji";
import { KanjiReading } from "../../../domain/kanji/KanjiReading";
import { ReadingType } from "../../../domain/kanji/ReadingType";
import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade";
import TagFilter from "../../../filters/learnable/TagFilter";
import { Learnable } from "../../../domain/learn/Learnable";

const data = [
    new Kanji("一", [new KanjiReading("ichi", "いち", ReadingType.ON)], ["one"], KyoikuGrade.ONE, "", [], ["number"]),
    new Kanji("魚", [new KanjiReading("sakana", "さかな", ReadingType.KUN)], ["fish"], KyoikuGrade.TWO, "", [], ["animal"]),
    new Kanji("鳥", [new KanjiReading("tori", "とり", ReadingType.ON)], ["bird"], KyoikuGrade.TWO, "", [], ["animal"]),
    new Kanji("人", [new KanjiReading("hito", "ひと", ReadingType.KUN)], ["person"], KyoikuGrade.ONE, "", [], [])
];

describe("Tag Filter", () => {
    it("Should return only the kanji that have the given tag", () => {
        const filter = new TagFilter(["animal"]);
        const response = filter.apply(data);
        expect(response.map((kanji: Learnable) => kanji.getKanjiVariation())).toStrictEqual(["魚", "鳥"]);
    });

    it("Should return all matching kanji if multiple matching tags are passed", () => {
        const filter = new TagFilter(["animal", "number"]);
        const response = filter.apply(data);
        expect(response.map((kanji: Learnable) => kanji.getKanjiVariation())).toStrictEqual(["一", "魚", "鳥"]);
    });

    it("Should return the whole dataset if the passed tag doesn't match any", () => {
       const filter = new TagFilter(["weather"]);
       const response = filter.apply(data);
       expect(response).toHaveLength(0);
    });

    it("Should return the whole dataset if an empty tags array is passed to the filter", () => {
        const filter = new TagFilter([]);
        const response = filter.apply(data);
        expect(response).toHaveLength(0);
    });
});
