import FilterChain from "../../filters/FilterChain"
import { Kana } from "../../domain/kana/Kana"
import KanaType from "../../domain/kana/KanaType"
import { KanaColumn } from "../../domain/kana/KanaColumn"
import DiagraphFilter from "../../filters/kana/DiagraphFilter"
import KanaTypeFilter from "../../filters/kana/KanaTypeFilter"

describe("Filter Chain", () => {
    const chain = new FilterChain<Kana>()

    const data = [
        new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
        new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false),
        new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
        new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true)
    ]

    it("Should not mutate the data set if no filters are added to the chain", () => {
        expect(chain.execute(data)).toStrictEqual(data)
    })

    it("Should apply the single given filter to the data", () => {
        chain.addFilter(new DiagraphFilter())

        const response = chain.execute(data)

        expect(response).toStrictEqual([
            new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
            new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)
        ])
    })

    it("Should apply multiple filters to the data", () => {
        chain.addFilter(new DiagraphFilter())
        chain.addFilter(new KanaTypeFilter(KanaType.HIRAGANA))

        const response = chain.execute(data)

        expect(response).toStrictEqual([new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)])
    })

    it("Should add filters using the builder method", () => {
        const response = new FilterChain<Kana>()
            .withFilter(new DiagraphFilter())
            .withFilter(new KanaTypeFilter(KanaType.HIRAGANA))
            .execute(data)

        expect(response).toStrictEqual([new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)])
    })
})
