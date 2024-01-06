import { Kana } from "../../domain/kana/Kana.ts"
import KanaType from "../../domain/kana/KanaType.ts"
import { KanaColumn } from "../../domain/kana/KanaColumn.ts"
import KanaTypeFilter from "./KanaTypeFilter.ts"

describe("Kana Type Filter", () => {
  const data = [
    new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
    new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)
  ]

  it("Should retain all Kana with the given type when the include boolean is true", () => {
    const response = new KanaTypeFilter(KanaType.HIRAGANA, true).apply(data)
    expect(response).toStrictEqual([new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)])
  })

  it("Should filter out all kana with the given type by default", () => {
    const response = new KanaTypeFilter(KanaType.HIRAGANA).apply(data)
    expect(response).toStrictEqual([new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)])
  })
})
