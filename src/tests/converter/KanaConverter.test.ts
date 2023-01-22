import KanaConverter from "../../converter/KanaConverter"
import { KanaResponse } from "../../repository/KanaRepository"
import KanaType from "../../domain/kana/KanaType"
import { KanaColumn } from "../../domain/kana/KanaColumn"

describe("Kana Converter", () => {
  const converter = new KanaConverter()

  it("Should convert the character", () => {
    const source: KanaResponse = { character: "あ", column: "vowel", romaji: ["a"], diacritical: false }
    const target = converter.convert(source, KanaType.HIRAGANA)
    expect(target.code).toBe("あ")
  })

  it("Should convert the romaji", () => {
    const source: KanaResponse = { character: "あ", column: "vowel", romaji: ["a"], diacritical: false }
    const target = converter.convert(source, KanaType.HIRAGANA)
    expect(target.getRomaji()).toStrictEqual(["a"])
  })

  it("Should convert the type", () => {
    const source: KanaResponse = { character: "あ", column: "vowel", romaji: ["a"], diacritical: false }
    const target = converter.convert(source, KanaType.HIRAGANA)
    expect(target.type).toBe(KanaType.HIRAGANA)
  })

  describe("Column", () => {
    it("Should convert the column if it is from the vowel column", () => {
      const source: KanaResponse = { character: "あ", column: "vowel", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.VOWEL)
    })

    it("Should convert the column if it is from the k column", () => {
      const source: KanaResponse = { character: "あ", column: "k", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.K)
    })

    it("Should convert the column if it is from the s column", () => {
      const source: KanaResponse = { character: "あ", column: "s", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.S)
    })

    it("Should convert the column if it is from the t column", () => {
      const source: KanaResponse = { character: "あ", column: "t", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.T)
    })

    it("Should convert the column if it from the n column", () => {
      const source: KanaResponse = { character: "あ", column: "n", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.N)
    })

    it("Should convert the column if it from the h column", () => {
      const source: KanaResponse = { character: "あ", column: "h", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.H)
    })

    it("Should convert the column if it from the m column", () => {
      const source: KanaResponse = { character: "あ", column: "m", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.M)
    })

    it("Should convert the column if it from the y column", () => {
      const source: KanaResponse = { character: "あ", column: "y", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.Y)
    })

    it("Should convert the column if it from the r column", () => {
      const source: KanaResponse = { character: "あ", column: "r", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.R)
    })

    it("Should convert the column if it from the w column", () => {
      const source: KanaResponse = { character: "あ", column: "w", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.W)
    })

    it("Should convert the column if it from the other column", () => {
      const source: KanaResponse = { character: "あ", column: "other", romaji: ["a"], diacritical: false }
      const target = converter.convert(source, KanaType.HIRAGANA)
      expect(target.column).toBe(KanaColumn.OTHER)
    })

    it("Should throw an exception if the column is an unknown value", () => {
      const source: KanaResponse = { character: "あ", column: "test", romaji: ["a"], diacritical: false }
      expect(() => converter.convert(source, KanaType.HIRAGANA)).toThrow("Invalid Kana Column [test]")
    })
  })

  it("Should convert the diacritical boolean", () => {
    const source: KanaResponse = { character: "あ", column: "vowel", romaji: ["a"], diacritical: false }
    const target = converter.convert(source, KanaType.HIRAGANA)
    expect(target.isDiacritical).toBe(false)
  })
})
