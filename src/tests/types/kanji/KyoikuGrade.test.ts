import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade"

describe("Kyoiku Grade", () => {
  describe("Static Grade Presets", () => {
    it("Grade 1", () => {
      expect(KyoikuGrade.ONE.value).toBe(1)
      expect(KyoikuGrade.ONE.quantity).toBe(80)
    })

    it("Grade 2", () => {
      expect(KyoikuGrade.TWO.value).toBe(2)
      expect(KyoikuGrade.TWO.quantity).toBe(160)
    })

    it("Grade 3", () => {
      expect(KyoikuGrade.THREE.value).toBe(3)
      expect(KyoikuGrade.THREE.quantity).toBe(200)
    })

    it("Grade 4", () => {
      expect(KyoikuGrade.FOUR.value).toBe(4)
      expect(KyoikuGrade.FOUR.quantity).toBe(220)
    })

    it("Grade 5", () => {
      expect(KyoikuGrade.FIVE.value).toBe(5)
      expect(KyoikuGrade.FIVE.quantity).toBe(185)
    })

    it("Grade 6", () => {
      expect(KyoikuGrade.SIX.value).toBe(6)
      expect(KyoikuGrade.SIX.quantity).toBe(181)
    })
  })

  describe("From Integer Static Factory Constructor", () => {
    it("Grade 1", () => {
      expect(KyoikuGrade.fromInteger(1)).toBe(KyoikuGrade.ONE)
    })

    it("Grade 2", () => {
      expect(KyoikuGrade.fromInteger(2)).toBe(KyoikuGrade.TWO)
    })

    it("Grade 3", () => {
      expect(KyoikuGrade.fromInteger(3)).toBe(KyoikuGrade.THREE)
    })

    it("Grade 4", () => {
      expect(KyoikuGrade.fromInteger(4)).toBe(KyoikuGrade.FOUR)
    })

    it("Grade 5", () => {
      expect(KyoikuGrade.fromInteger(5)).toBe(KyoikuGrade.FIVE)
    })

    it("Grade 6", () => {
      expect(KyoikuGrade.fromInteger(6)).toBe(KyoikuGrade.SIX)
    })

    it("Grade 7", () => {
      expect(KyoikuGrade.fromInteger(7)).toBe(KyoikuGrade.SEVEN)
    })

    it("Grade 8", () => {
      expect(KyoikuGrade.fromInteger(8)).toBe(KyoikuGrade.EIGHT)
    })

    it("Grade 9", () => {
      expect(KyoikuGrade.fromInteger(9)).toBe(KyoikuGrade.NINE)
    })

    it("Grade 10", () => {
      expect(KyoikuGrade.fromInteger(10)).toBe(KyoikuGrade.TEN)
    })

    it("Grade 11", () => {
      expect(KyoikuGrade.fromInteger(11)).toBe(KyoikuGrade.ELEVEN)
    })

    it("Grade 12", () => {
      expect(KyoikuGrade.fromInteger(12)).toBe(KyoikuGrade.TWELVE)
    })

    it("Should return UNKNOWN if the value is not recognised", () => {
      expect(KyoikuGrade.fromInteger(15)).toBe(KyoikuGrade.UNKNOWN)
    })
  })
})
