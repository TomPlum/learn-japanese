import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";
import DiacriticalFilter from "../../../filters/kana/DiacriticalFilter";

describe("Diacritical Filter", () => {
    const data = [
        new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
        new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true)
    ];

    it("Should filter out all diacriticals by default", () => {
        const response = new DiacriticalFilter().apply(data);
        expect(response).toStrictEqual([
            new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false)
        ]);
    });

    it("Should retail only diacriticals when the include boolean is passed as true", () => {
        const response = new DiacriticalFilter(true).apply(data);
        expect(response).toStrictEqual([
            new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true)
        ]);
    });
});