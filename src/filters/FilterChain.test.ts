import FilterChain from "./FilterChain.ts"
import { Kana } from "types/kana/Kana.ts"
import KanaType from "types/kana/KanaType.ts"
import { KanaColumn } from "types/kana/KanaColumn.ts"
import DiagraphFilter from "./kana/DiagraphFilter.ts"
import KanaTypeFilter from "./kana/KanaTypeFilter.ts"

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
