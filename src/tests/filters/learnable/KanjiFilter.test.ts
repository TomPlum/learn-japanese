import CommonData from "../../../domain/learn/CommonData";
import KanjiFilter from "../../../filters/learnable/KanjiFilter";
import { Learnable } from "../../../domain/learn/Learnable";
import each from "jest-each";

const data = [
    new CommonData("sometimes", ["ときどき"], "時々", "Adverb", "sometimes"),
    new CommonData("together", ["いっしょに"], "一緒に", "Adverb", "together"),
    new CommonData("Really?", ["ほんとうですか"], "本当ですか", "Expression", "Really?"),
];

describe("Kanji Filter", () => {
    it("Should return all entries whose kanji variant contain the given string", () => {
        const filter = new KanjiFilter("時");
        const response = filter.apply(data);
        expect(response.map((r: Learnable) => r.getMeanings()[0])).toStrictEqual(["sometimes"]);
    });

    it("Should return all entries whose kanji variant match the given string exactly", () => {
        const filter = new KanjiFilter("本当ですか");
        const response = filter.apply(data);
        expect(response.map((r: Learnable) => r.getMeanings()[0])).toStrictEqual(["Really?"]);
    });

    each(
        [null, undefined, "", "人"]
    ).it("Should return an empty array if the given string is %s", (kanji: string) => {
        const filter = new KanjiFilter(kanji);
        const response = filter.apply(data);
        expect(response).toStrictEqual([]);
    });
});
