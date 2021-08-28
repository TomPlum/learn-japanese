import Definition from "../../../domain/sentence/Definition";
import KanaFilter from "../../../filters/learnable/KanaFilter";
import { Learnable } from "../../../domain/learn/Learnable";
import each from "jest-each";

const data = [
    new Definition(["not much"], undefined, "あまり", "Adverb"),
    new Definition(["not at all"], "全然", "ぜんぜん", "Adverb"),
    new Definition(["usually"], undefined, "たいてい", "Adverb"),
    new Definition(["about"], undefined, "ぐらい", "Adverb")
];

describe("Kana Filter", () => {
    it("Should return all matching kanji if the passed kana matches several entries", () => {
        const filter = new KanaFilter("い");
        const response = filter.apply(data);
        expect(response.map((def: Learnable) => def.getMeanings()[0])).toStrictEqual(["usually", "about"]);
    });

    it("Should return the matching entry if its kana matches the passed kana exactly", () => {
        const filter = new KanaFilter("あまり");
        const response = filter.apply(data);
        expect(response.map((def: Learnable) => def.getMeanings()[0])).toStrictEqual(["not much"]);
    });

    it("Should return the matching entry if its kana includes the passed kana", () => {
        const filter = new KanaFilter("ぜん");
        const response = filter.apply(data);
        expect(response.map((def: Learnable) => def.getMeanings()[0])).toStrictEqual(["not at all"]);
    });

    it("Should return an empty array if the passed kana doesn't match any of the entries", () => {
        const filter = new KanaFilter("なせ");
        const response = filter.apply(data);
        expect(response).toStrictEqual([]);
    });

    each([null, undefined, ""]).it("Should return an empty array if the passed kana is %s", (kana: string) => {
        const filter = new KanaFilter(kana);
        const response = filter.apply(data);
        expect(response).toStrictEqual([]);
    });
});
