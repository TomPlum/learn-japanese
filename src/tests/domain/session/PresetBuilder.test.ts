import PresetBuilder from "../../../domain/session/PresetBuilder"
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings"
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings"

describe("Preset Builder", () => {
  it("Should default the ID to -1", () => {
    const preset = new PresetBuilder().build()
    const id = preset.id
    expect(id).toBe(-1)
  })

  it("Should default the favourite ID to undefined", () => {
    const preset = new PresetBuilder().build()
    const favouriteId = preset.favourite_id
    expect(favouriteId).toBeUndefined()
  })

  it("Should default the description to an empty string", () => {
    const preset = new PresetBuilder().build()
    const description = preset.description
    expect(description).toBe("")
  })

  it("Should default the display name to an empty string", () => {
    const preset = new PresetBuilder().build()
    const displayName = preset.displayName
    expect(displayName).toBe("")
  })

  it("Should default the short name to undefined", () => {
    const preset = new PresetBuilder().withDisplayName("Display Name").build()
    const shortName = preset.getShortName()
    expect(shortName).toBe("Display Name") // If undefined, it returns the display name
  })

  it("Should default the colour to an empty string", () => {
    const preset = new PresetBuilder().build()
    const colour = preset.colour
    expect(colour).toBe("")
  })

  it("Should default the topic name to an empty string", () => {
    const preset = new PresetBuilder().build()
    const topicName = preset.topicName
    expect(topicName).toBe("")
  })

  it("Should default the data settings to default kana", () => {
    const preset = new PresetBuilder().build()
    const dataSettings = preset.dataSettings
    expect(dataSettings).toStrictEqual(new KanaSettingsBuilder().build())
  })

  it("Should default the mode settings to default game", () => {
    const preset = new PresetBuilder().build()
    const modeSettings = preset.modeSettings
    expect(modeSettings).toStrictEqual(new GameSettingsBuilder().build())
  })

  it("Should default custom to false", () => {
    const preset = new PresetBuilder().build()
    const custom = preset.custom
    expect(custom).toBe(false)
  })
})
