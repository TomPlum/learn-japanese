import { Kana } from "../../../domain/kana/Kana";
import KanaType from "../../../domain/kana/KanaType";
import { KanaColumn } from "../../../domain/kana/KanaColumn";
import RegularKanaFilter from "../../../filters/kana/RegularKanaFilter";

describe("Regular Kana Filter", () => {
    const data = [
        new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
        new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true),
        new Kana("ぎ", ["gi"], KanaType.HIRAGANA, KanaColumn.K, true),
        new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
    ];

    it("Should filter out all regular kana (non-diacritical, non-diagraph) by default", () => {
        const filter = new RegularKanaFilter();
        const response = filter.apply(data);
        expect(response.map((kana: Kana) => kana.code)).toStrictEqual(["しゅ", "びゃ", "ぎ"]);
    });

    it("Should keep only regular kana (non-diacritical, non-diagraph) when include is passed as true", () => {
        const filter = new RegularKanaFilter(true);
        const response = filter.apply(data);
        expect(response.map((kana: Kana) => kana.code)).toStrictEqual(["え"]);
    });
});
