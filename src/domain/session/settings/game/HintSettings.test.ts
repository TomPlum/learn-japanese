import HintSettings, { HintSettingsBuilder } from "./HintSettings.ts"

describe("Hint Settings", () => {
  describe("Builder", () => {
    it("Should default to enabled with 0 hints", () => {
      const settings = new HintSettingsBuilder().build()
      expect(settings).toStrictEqual(new HintSettings(true, 0, false))
    })

    it("Should set enabled to true when specified by no args are passed", () => {
      const settings = new HintSettingsBuilder().isEnabled().build()
      expect(settings.enabled).toBe(true)
    })

    it("Should set enabled to false when specified", () => {
      const settings = new HintSettingsBuilder().isEnabled(false).build()
      expect(settings.enabled).toBe(false)
    })

    it("Should set unlimited to true when specified by no args are passed", () => {
      const settings = new HintSettingsBuilder().areUnlimited().build()
      expect(settings.unlimited).toBe(true)
    })

    it("Should set unlimited to false when specified", () => {
      const settings = new HintSettingsBuilder().areUnlimited(false).build()
      expect(settings.unlimited).toBe(false)
    })

    it("Should set the hint quantity when specified", () => {
      const settings = new HintSettingsBuilder().isEnabled().withQuantity(5).build()
      expect(settings.quantity).toBe(5)
    })
  })
})
