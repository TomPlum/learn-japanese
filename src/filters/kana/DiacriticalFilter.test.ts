import { Kana } from "../../domain/kana/Kana.ts"
import KanaType from "../../domain/kana/KanaType.ts"
import { KanaColumn } from "../../domain/kana/KanaColumn.ts"
import DiacriticalFilter from "./DiacriticalFilter.ts"

describe("Diacritical Filter", () => {
  const data = [
    new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
    new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true),
    new Kana("ぎ", ["gi"], KanaType.HIRAGANA, KanaColumn.K, true)
  ]

  it("Should filter out all diacriticals by default", () => {
    const response = new DiacriticalFilter().apply(data)
    expect(response).toStrictEqual([new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false)])
  })

  it("Should retain only diacriticals (including diagraphs) when the include boolean is passed as true", () => {
    const response = new DiacriticalFilter(true).apply(data)
    expect(response).toStrictEqual([
      new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true),
      new Kana("ぎ", ["gi"], KanaType.HIRAGANA, KanaColumn.K, true)
    ])
  })

  it("Should return only diacriticals but filter out diagraphs when passed as false", () => {
    const response = new DiacriticalFilter(true, false).apply(data)
    expect(response).toStrictEqual([new Kana("ぎ", ["gi"], KanaType.HIRAGANA, KanaColumn.K, true)])
  })
})
