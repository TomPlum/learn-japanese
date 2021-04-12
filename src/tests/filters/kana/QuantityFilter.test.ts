import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";
import QuantityFilter from "../../../filters/kana/QuantityFilter";

describe("Quantity Filter", () => {
    const data = [
        new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
        new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false),
        new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
        new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true)
    ];

    it("Should return the first n kana", () => {
        const response = new QuantityFilter(2).apply(data);
        expect(response).toStrictEqual([
            new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
            new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false),
        ]);
    });
});