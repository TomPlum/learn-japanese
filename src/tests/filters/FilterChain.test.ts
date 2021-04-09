import FilterChain from "../../filters/FilterChain";
import { Kana } from "../../types/kana/Kana";
import KanaType from "../../types/kana/KanaType";
import { KanaColumn } from "../../types/kana/KanaColumn";
import DiagraphFilter from "../../filters/kana/DiagraphFilter";
import KanaTypeFilter from "../../filters/kana/KanaTypeFilter";

describe("Filter Chain", () => {
    const chain = new FilterChain<Kana>();

    const data = [
        new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
        new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false),
        new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
        new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true)
    ];

    it("Should not mutate the data set if no filters are added to the chain", () => {
        const response = chain.execute(data);
        expect(response).toStrictEqual(data);
    });

    it("Should apply the single given filter to the data", () => {
        chain.addFilter(new DiagraphFilter());
        const response = chain.execute(data);
        expect(response).toStrictEqual([
            new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
            new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)
        ]);
    });

    it("Should apply multiple filters to the data", () => {
        chain.addFilter(new DiagraphFilter());
        chain.addFilter(new KanaTypeFilter(KanaType.HIRAGANA));
        const response = chain.execute(data);
        expect(response).toStrictEqual([
            new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)
        ]);
    });
});