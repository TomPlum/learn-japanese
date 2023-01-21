import TimeSettings, { TimeSettingsBuilder } from "../../../../../domain/session/settings/game/TimeSettings"

describe("Time Settings", () => {
  describe("Builder", () => {
    it("Should default to everything turned off", () => {
      const settings = new TimeSettingsBuilder().build()
      expect(settings).toStrictEqual(new TimeSettings(false, false, 0))
    })

    it("Should set timed to true when no args passed", () => {
      const settings = new TimeSettingsBuilder().isTimed().build()
      expect(settings.timed).toBe(true)
    })

    it("Should set timed to false when specified", () => {
      const settings = new TimeSettingsBuilder().isTimed(false).build()
      expect(settings.timed).toBe(false)
    })

    it("Should set countdown to true when no args passed", () => {
      const settings = new TimeSettingsBuilder().isCountDown().build()
      expect(settings.countdown).toBe(true)
    })

    it("Should set countdown to false when specified", () => {
      const settings = new TimeSettingsBuilder().isCountDown(false).build()
      expect(settings.countdown).toBe(false)
    })

    it("Should set the seconds per question when specified", () => {
      const settings = new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(10).build()
      expect(settings.secondsPerQuestion).toBe(10)
    })
  })
})
