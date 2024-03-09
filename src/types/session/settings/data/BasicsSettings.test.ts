import BasicsSettings, { BasicsSettingsBuilder } from "./BasicsSettings.ts"

describe("Basics Settings", () => {
  describe("Builder", () => {
    it("Should default to all unselected with undefined quantity", () => {
      const settings = new BasicsSettingsBuilder().build()
      expect(settings).toStrictEqual(new BasicsSettings(false, false, false, false, false, false, undefined))
    })

    it("Should set colours to true when specifying but not passing any arg", () => {
      const settings = new BasicsSettingsBuilder().withColours().build()
      expect(settings.colours).toBe(true)
    })

    it("Should set colours to false when specifying", () => {
      const settings = new BasicsSettingsBuilder().withColours(false).build()
      expect(settings.colours).toBe(false)
    })

    it("Should set animals to true when specifying but not passing any arg", () => {
      const settings = new BasicsSettingsBuilder().withAnimals().build()
      expect(settings.animals).toBe(true)
    })

    it("Should set animals to false when specifying", () => {
      const settings = new BasicsSettingsBuilder().withAnimals(false).build()
      expect(settings.animals).toBe(false)
    })

    it("Should set directions to true when specifying but not passing any arg", () => {
      const settings = new BasicsSettingsBuilder().withDirections().build()
      expect(settings.directions).toBe(true)
    })

    it("Should set directions to false when specifying", () => {
      const settings = new BasicsSettingsBuilder().withDirections(false).build()
      expect(settings.directions).toBe(false)
    })

    it("Should set weather to true when specifying but not passing any arg", () => {
      const settings = new BasicsSettingsBuilder().withWeather().build()
      expect(settings.weather).toBe(true)
    })

    it("Should set weather to false when specifying", () => {
      const settings = new BasicsSettingsBuilder().withWeather(false).build()
      expect(settings.weather).toBe(false)
    })

    it("Should set family to true when specifying but not passing any arg", () => {
      const settings = new BasicsSettingsBuilder().withFamily().build()
      expect(settings.family).toBe(true)
    })

    it("Should set family to false when specifying", () => {
      const settings = new BasicsSettingsBuilder().withFamily(false).build()
      expect(settings.family).toBe(false)
    })

    it("Should set body to true when specifying but not passing any arg", () => {
      const settings = new BasicsSettingsBuilder().withBody().build()
      expect(settings.body).toBe(true)
    })

    it("Should set body to false when specifying", () => {
      const settings = new BasicsSettingsBuilder().withBody(false).build()
      expect(settings.body).toBe(false)
    })

    it("Should set quantity when specifying", () => {
      const settings = new BasicsSettingsBuilder().withQuantity(50).build()
      expect(settings.quantity).toBe(50)
    })
  })
})
