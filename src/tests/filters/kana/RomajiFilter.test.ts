import { Kana } from "../../../domain/kana/Kana"
import KanaType from "../../../domain/kana/KanaType"
import { KanaColumn } from "../../../domain/kana/KanaColumn"
import RomajiFilter from "../../../filters/kana/RomajiFilter"

describe("Romaji Filter", () => {
  const data = [
    new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
    new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false)
  ]

  it("Should return a Kana if the search term matches a romaji string exactly", () => {
    const response = new RomajiFilter("shu").apply(data)
    expect(response).toStrictEqual([new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false)])
  })

  it("Should return a Kana if the search term matches a romaji string exactly when there are multiple", () => {
    const response = new RomajiFilter("fu").apply(data)
    expect(response).toStrictEqual([new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false)])
  })

  it("Should return a Kana if the search term is a part of a romaji string", () => {
    const response = new RomajiFilter("sh").apply(data)
    expect(response).toStrictEqual([new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false)])
  })

  it("Should return all matches if the given search term is contained in multiple Kana's romaji arrays", () => {
    const response = new RomajiFilter("hu").apply(data)
    expect(response).toStrictEqual([
      new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
      new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false)
    ])
  })
})
