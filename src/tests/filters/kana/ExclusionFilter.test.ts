import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";
import ExclusionFilter from "../../../filters/kana/ExclusionFilter";

describe("Exclusion Filter", () => {
    const data = [
        new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
        new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true),
        new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
    ];

    it("Should exclude only the passed Kana if it is present", () => {
        const kana = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
        const response = new ExclusionFilter(kana).apply(data);
        expect(response).toStrictEqual([
            new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
            new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true)
        ]);
    });

    it("Should not mutate the data if the passed kana is not present", () => {
        const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
        const response = new ExclusionFilter(kana).apply(data);
        expect(response).toStrictEqual(data);
    });
});