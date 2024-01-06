import each from "jest-each"
import { Numbers } from "./Numbers.ts"

describe("Numbers Utility", () => {
  describe("Random Integer", () => {
    it("Should generate a random number between the given intervals", () => {
      const value = Numbers.randomInt(3, 10)
      expect(value >= 3 && value <= 10).toBe(true)
    })
  })

  describe("Ordinal Suffix", () => {
    each([1, 21, 31, 41]).it("Should return 'st' for a number whose ordinal suffix is 'st'", (value: number) => {
      expect(Numbers.getOrdinalSuffix(value)).toBe("st")
    })

    each([4, 5, 6, 7, 11]).it("Should return 'th' for a number whose ordinal suffix is 'th'", (value: number) => {
      expect(Numbers.getOrdinalSuffix(value)).toBe("th")
    })

    each([2, 22, 32, 42]).it("Should return 'nd' for a number whose ordinal suffix is 'nd'", (value: number) => {
      expect(Numbers.getOrdinalSuffix(value)).toBe("nd")
    })

    each([3, 23, 33, 43]).it("Should return 'rd' for a number whose ordinal suffix is 'rd'", (value: number) => {
      expect(Numbers.getOrdinalSuffix(value)).toBe("rd")
    })
  })
})
