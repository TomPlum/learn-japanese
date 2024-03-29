import { Kanji } from "./Kanji.ts"
import { KanjiReading } from "./KanjiReading.ts"
import { ReadingType } from "./ReadingType.ts"
import { Example } from "./Example.ts"
import { KyoikuGrade } from "./KyoikuGrade.ts"
import JLTPLevel from "../learn/JLTPLevel.ts"

describe("Kanji", () => {
  describe("Getters", () => {
    const kanji = new Kanji(
      "人",
      [new KanjiReading("jin", "じん", ReadingType.ON), new KanjiReading("hito", "ひと", ReadingType.KUN)],
      ["person"],
      KyoikuGrade.ONE,
      JLTPLevel.N5,
      "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
      [new Example("外国人", ["がいこくじん"], ["foreigner"])],
      1,
      []
    )

    it("Should get the readings", () => {
      expect(kanji.readings).toStrictEqual([
        new KanjiReading("jin", "じん", ReadingType.ON),
        new KanjiReading("hito", "ひと", ReadingType.KUN)
      ])
    })

    it("Should return only on'yomi readings", () => {
      expect(kanji.getOnyomiReadings()).toStrictEqual([new KanjiReading("jin", "じん", ReadingType.ON)])
    })

    it("Should return only kun'yomi readings", () => {
      expect(kanji.getKunyomiReadings()).toStrictEqual([new KanjiReading("hito", "ひと", ReadingType.KUN)])
    })

    it("Should get the value", () => {
      expect(kanji.getValue()).toBe("人")
    })

    it("Should get the meanings", () => {
      expect(kanji.getMeanings()).toStrictEqual(["person"])
    })

    it("Should return the first on and kun reading for the kana", () => {
      expect(kanji.getKana()).toStrictEqual(["じん", "ひと"])
    })

    it("Should omit the on reading from the array if there isn't one when getting the kana", () => {
      const kanji = new Kanji(
        "人",
        [new KanjiReading("hito", "ひと", ReadingType.KUN)],
        ["person"],
        KyoikuGrade.ONE,
        JLTPLevel.N5,
        "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
        [new Example("外国人", ["がいこくじん"], ["foreigner"])],
        1,
        []
      )
      expect(kanji.getKana()).toStrictEqual(["ひと"])
    })

    it("Should omit the kun reading from the array if there isn't one when getting the kana", () => {
      const kanji = new Kanji(
        "人",
        [new KanjiReading("jin", "じん", ReadingType.ON)],
        ["person"],
        KyoikuGrade.ONE,
        JLTPLevel.N5,
        "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
        [new Example("外国人", ["がいこくじん"], ["foreigner"])],
        1,
        []
      )
      expect(kanji.getKana()).toStrictEqual(["じん"])
    })

    it("Should return an empty array if there are no readings when getting the kana", () => {
      const kanji = new Kanji(
        "人",
        [],
        ["person"],
        KyoikuGrade.ONE,
        JLTPLevel.N5,
        "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
        [new Example("外国人", ["がいこくじん"], ["foreigner"])],
        1,
        []
      )
      expect(kanji.getKana()).toStrictEqual([])
    })

    it("Should get the grade", () => {
      expect(kanji.grade).toBe(KyoikuGrade.ONE)
    })

    it("Should get the source", () => {
      expect(kanji.source).toBe("https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji")
    })

    it("Should get the examples", () => {
      expect(kanji.examples).toStrictEqual([new Example("外国人", ["がいこくじん"], ["foreigner"])])
    })

    it("Should return the Kyoiku grade for the title", () => {
      expect(kanji.getTitle()).toBe("Grade 1")
    })

    it("Should return the character for the kanji variation", () => {
      expect(kanji.getKanjiVariation()).toBe("人")
    })

    it("Should construct a hint message based on the grade and starting kana", () => {
      expect(kanji.getHint()).toBe("It's Grade 1 and starts with じ.")
    })

    it("Should return the kanji character for the unique ID", () => {
      expect(kanji.getUniqueID()).toBe("人")
    })

    it("Should return a Jisho online dictionary link when getting the jisho link", () => {
      expect(kanji.getJishoLink()).toBe("https://jisho.org/search/人")
    })
  })

  describe("Equality", () => {
    it("Should return true when two Kanji have the same character", () => {
      const first = new Kanji(
        "一",
        [new KanjiReading("ichi", "いち", ReadingType.ON)],
        ["one"],
        KyoikuGrade.ONE,
        JLTPLevel.N5,
        "",
        [],
        1,
        ["number"]
      )
      const second = new Kanji(
        "一",
        [new KanjiReading("sakana", "さかな", ReadingType.KUN)],
        ["fish"],
        KyoikuGrade.TWO,
        JLTPLevel.N5,
        "",
        [],
        1,
        ["animal"]
      )
      expect(first.equals(second)).toBe(true)
    })

    it("Should return false when two Kanji have different characters", () => {
      const first = new Kanji(
        "一",
        [new KanjiReading("ichi", "いち", ReadingType.ON)],
        ["one"],
        KyoikuGrade.ONE,
        JLTPLevel.N5,
        "",
        [],
        1,
        ["number"]
      )
      const second = new Kanji(
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
      expect(first.equals(second)).toBe(false)
    })
  })
})
