import LearnableField from "./LearnableField.ts"
import katakana from "../../data/Katakana.ts"
import hiragana from "../../data/Hiragana.ts"
import { Kanji } from "../kanji/Kanji.ts"
import { KanjiReading } from "../kanji/KanjiReading.ts"
import { ReadingType } from "../kanji/ReadingType.ts"
import { KyoikuGrade } from "../kanji/KyoikuGrade.ts"
import JLTPLevel from "./JLTPLevel.ts"

describe("Learnable Field", () => {
  describe("From Translation Path", () => {
    it("English Meaning", () => {
      expect(LearnableField.fromTranslationPath("learnable.field.meaning.name")).toBe(LearnableField.MEANING)
    })

    it("Kanji", () => {
      expect(LearnableField.fromTranslationPath("learnable.field.kanji.name")).toBe(LearnableField.KANJI)
    })

    it("Kana", () => {
      expect(LearnableField.fromTranslationPath("learnable.field.kana.name")).toBe(LearnableField.KANA)
    })

    it("Japanese", () => {
      expect(LearnableField.fromTranslationPath("learnable.field.japanese.name")).toBe(LearnableField.JAPANESE)
    })

    it("Rōmaji", () => {
      expect(LearnableField.fromTranslationPath("learnable.field.romaji.name")).toBe(LearnableField.ROMAJI)
    })

    it("On'Yomi Reading", () => {
      expect(LearnableField.fromTranslationPath("learnable.field.on.name")).toBe(LearnableField.ONYOMI_READING)
    })

    it("Kun'Yomi Reading", () => {
      expect(LearnableField.fromTranslationPath("learnable.field.kun.name")).toBe(LearnableField.KUNYOMI_READING)
    })

    it("Random", () => {
      expect(LearnableField.fromTranslationPath("learnable.field.random.name")).toBe(LearnableField.RANDOM)
    })

    it("Should throw an exception if an unknown name is passed", () => {
      expect(() => LearnableField.fromTranslationPath("Blah")).toThrow("Invalid Learnable Field Translation Path: Blah")
    })
  })

  describe("Validation Regex", () => {
    it("Kana", () => {
      const kana = hiragana()
        .concat(katakana())
        .map((it) => it.code)
      kana.forEach((kana) => expect(kana).toMatch(LearnableField.KANA.validationRegex))
    })

    it("Kanji", () => {
      const kanji = new Kanji(
        "魚",
        [new KanjiReading("sakana", "さかな", ReadingType.KUN)],
        ["fish"],
        KyoikuGrade.TWO,
        JLTPLevel.N5,
        "",
        [],
        9,
        ["animal"]
      )
      expect(kanji.getValue()).toMatch(LearnableField.KANJI.validationRegex)
    })

    it("On'Yomi Readings", () => {
      const readings = new Kanji(
        "鳥",
        [new KanjiReading("tori", "とり", ReadingType.ON)],
        ["bird"],
        KyoikuGrade.TWO,
        JLTPLevel.N5,
        "",
        [],
        10,
        ["animal"]
      )
        .getOnyomiReadings()
        .map((it) => it.kana)

      readings.forEach((reading) => expect(reading).toMatch(LearnableField.ONYOMI_READING.validationRegex))
    })

    it("Kun'Yomi Readings", () => {
      const readings = new Kanji(
        "魚",
        [new KanjiReading("sakana", "さかな", ReadingType.KUN)],
        ["fish"],
        KyoikuGrade.TWO,
        JLTPLevel.N5,
        "",
        [],
        10,
        ["animal"]
      )
        .getKunyomiReadings()
        .map((it) => it.kana)

      readings.forEach((kana) => expect(kana).toMatch(LearnableField.KUNYOMI_READING.validationRegex))
    })
  })

  it("Should return all values for the value() call", () => {
    const values = LearnableField.values()
    expect(values).toStrictEqual([
      LearnableField.MEANING,
      LearnableField.KANJI,
      LearnableField.KANA,
      LearnableField.JAPANESE,
      LearnableField.ROMAJI,
      LearnableField.ONYOMI_READING,
      LearnableField.KUNYOMI_READING,
      LearnableField.RANDOM
    ])
  })
})
