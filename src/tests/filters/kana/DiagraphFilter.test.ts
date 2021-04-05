import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";
import DiagraphFilter from "../../../filters/kana/DiagraphFilter";

describe("Diagraph Filter", () => {
    const data = [
        new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
        new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true),
        new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
    ];

    it("Should filter out all diagraphs by default", () => {
        const response = new DiagraphFilter().apply(data);
        expect(response).toStrictEqual([new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)]);
    });

    it("Should keep only the diagraphs when the include parameter is passed as true", () => {
        const response = new DiagraphFilter(true).apply(data);
        expect(response).toStrictEqual([
            new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
            new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true),
        ]);
    });
});