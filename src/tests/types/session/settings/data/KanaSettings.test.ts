import KanaSettings, { KanaSettingsBuilder } from "../../../../../domain/session/settings/data/KanaSettings"

describe("Kana Settings", function () {
  describe("Builder", () => {
    it("Should default to all unselected but regular kana, and undefined quantity", () => {
      const settings = new KanaSettingsBuilder().build()
      expect(settings).toStrictEqual(new KanaSettings(false, false, false, false, true, false, undefined))
    })

    it("Should set hiragana to true when specifying but not passing any arg", () => {
      const settings = new KanaSettingsBuilder().withHiragana().build()
      expect(settings.hiragana).toBe(true)
    })

    it("Should set hiragana to false when specifying", () => {
      const settings = new KanaSettingsBuilder().withHiragana(false).build()
      expect(settings.hiragana).toBe(false)
    })

    it("Should set katakana to true when specifying but not passing any arg", () => {
      const settings = new KanaSettingsBuilder().withKatakana().build()
      expect(settings.katakana).toBe(true)
    })

    it("Should set katakana to false when specifying", () => {
      const settings = new KanaSettingsBuilder().withKatakana(false).build()
      expect(settings.katakana).toBe(false)
    })

    it("Should set diagraphs to true when specifying but not passing any arg", () => {
      const settings = new KanaSettingsBuilder().withDiagraphs().build()
      expect(settings.diagraphs).toBe(true)
    })

    it("Should set diagraphs to false when specifying", () => {
      const settings = new KanaSettingsBuilder().withDiagraphs(false).build()
      expect(settings.diagraphs).toBe(false)
    })

    it("Should set diacriticals to true when specifying but not passing any arg", () => {
      const settings = new KanaSettingsBuilder().withDiacriticals().build()
      expect(settings.diacriticals).toBe(true)
    })

    it("Should set diacriticals to false when specifying", () => {
      const settings = new KanaSettingsBuilder().withDiacriticals(false).build()
      expect(settings.diacriticals).toBe(false)
    })

    it("Should set regular to true when specifying but not passing any arg", () => {
      const settings = new KanaSettingsBuilder().withRegularKana().build()
      expect(settings.regular).toBe(true)
    })

    it("Should set regular to false when specifying", () => {
      const settings = new KanaSettingsBuilder().withRegularKana(false).build()
      expect(settings.regular).toBe(false)
    })

    it("Should set only diagraphs to true when specifying but not passing any arg", () => {
      const settings = new KanaSettingsBuilder().withOnlyDiagraphs().build()
      expect(settings.onlyDiagraphs).toBe(true)
    })

    it("Should set only diagraphs to false when specifying", () => {
      const settings = new KanaSettingsBuilder().withOnlyDiagraphs(false).build()
      expect(settings.onlyDiagraphs).toBe(false)
    })

    it("Should set quantity when specifying", () => {
      const settings = new KanaSettingsBuilder().withQuantity(25).build()
      expect(settings.quantity).toBe(25)
    })

    it("Should set undefined when specifying max quantity", () => {
      const settings = new KanaSettingsBuilder().withMaxQuantity().build()
      expect(settings.quantity).toBe(undefined)
    })
  })
})
