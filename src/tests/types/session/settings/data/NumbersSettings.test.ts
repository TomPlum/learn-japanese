import NumbersSettings, { NumbersSettingsBuilder } from "../../../../../domain/session/settings/data/NumbersSettings"

describe("Numbers Settings", () => {
  describe("Builder", () => {
    it("Should default to all unselected with undefined quantity", () => {
      const settings = new NumbersSettingsBuilder().build()
      expect(settings).toStrictEqual(new NumbersSettings(false, false, false, false, false, false, undefined))
    })

    it("Should set numbers to true when specifying but not passing any arg", () => {
      const settings = new NumbersSettingsBuilder().withNumbers().build()
      expect(settings.numbers).toBe(true)
    })

    it("Should set numbers to false when specifying", () => {
      const settings = new NumbersSettingsBuilder().withNumbers(false).build()
      expect(settings.numbers).toBe(false)
    })

    it("Should set counters to true when specifying but not passing any arg", () => {
      const settings = new NumbersSettingsBuilder().withCounters().build()
      expect(settings.counters).toBe(true)
    })

    it("Should set counters to false when specifying", () => {
      const settings = new NumbersSettingsBuilder().withCounters(false).build()
      expect(settings.counters).toBe(false)
    })

    it("Should set age to true when specifying but not passing any arg", () => {
      const settings = new NumbersSettingsBuilder().withAge().build()
      expect(settings.age).toBe(true)
    })

    it("Should set age to false when specifying", () => {
      const settings = new NumbersSettingsBuilder().withAge(false).build()
      expect(settings.age).toBe(false)
    })

    it("Should set exceptions to true when specifying but not passing any arg", () => {
      const settings = new NumbersSettingsBuilder().withExceptions().build()
      expect(settings.exceptions).toBe(true)
    })

    it("Should set exceptions to false when specifying", () => {
      const settings = new NumbersSettingsBuilder().withExceptions(false).build()
      expect(settings.exceptions).toBe(false)
    })

    it("Should set units to true when specifying but not passing any arg", () => {
      const settings = new NumbersSettingsBuilder().withUnits().build()
      expect(settings.units).toBe(true)
    })

    it("Should set units to false when specifying", () => {
      const settings = new NumbersSettingsBuilder().withUnits(false).build()
      expect(settings.units).toBe(false)
    })

    it("Should set sequence to true when specifying but not passing any arg", () => {
      const settings = new NumbersSettingsBuilder().withSequence().build()
      expect(settings.sequence).toBe(true)
    })

    it("Should set sequence to false when specifying", () => {
      const settings = new NumbersSettingsBuilder().withSequence(false).build()
      expect(settings.sequence).toBe(false)
    })

    it("Should set quantity when specifying", () => {
      const settings = new NumbersSettingsBuilder().withQuantity(35).build()
      expect(settings.quantity).toBe(35)
    })
  })
})
