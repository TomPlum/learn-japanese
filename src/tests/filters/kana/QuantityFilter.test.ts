import { Kana } from "../../../domain/kana/Kana"
import KanaType from "../../../domain/kana/KanaType"
import { KanaColumn } from "../../../domain/kana/KanaColumn"
import QuantityFilter from "../../../filters/kana/QuantityFilter"
import Arrays from "../../../utility/Arrays"

const getRandomElements = jest.fn()

beforeEach(() => {
  Arrays.getRandomElements = getRandomElements
  getRandomElements.mockImplementation((array: [], quantity: number) => {
    return array.splice(0, quantity)
  })
})

describe("Quantity Filter", () => {
  const data = [
    new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
    new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false),
    new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
    new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true)
  ]

  it("Should return the first n kana", () => {
    const response = new QuantityFilter(2).apply(data)
    expect(response).toStrictEqual([
      new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
      new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)
    ])
  })

  it("Should return n random kana when specifying random as true", () => {
    const filter = new QuantityFilter(2, true)

    const response = filter.apply(data)

    expect(getRandomElements).toHaveBeenCalledWith(data, 2)
    expect(response).toStrictEqual([
      new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false),
      new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true)
    ])
  })
})
