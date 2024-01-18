import SessionMode from "types/session/SessionMode"
import GameSettingsConverter from "./GameSettingsConverter"
import DataSettingsConverter from "./DataSettingsConverter"
import LearnSettings from "types/session/settings/LearnSettings"
import PresetBuilder from "types/session/PresetBuilder"
import { SessionSettingsState } from "context/SessionSettingsContext"

class PresetConverter {
  private readonly gameSettingsConverter = new GameSettingsConverter()
  private readonly dataSettingsConverter = new DataSettingsConverter()

  public convertSessionSettings(settings: SessionSettingsState): SessionMode {
    const id = settings.id!
    const name = settings.name!
    const colour = settings.colour!
    const icon = settings.icon!
    const topic = settings.topic!
    const dataSettings = this.dataSettingsConverter.deserialise(settings.data)

    const commonProperties = new PresetBuilder()
      .withID(id)
      .withDisplayName(name)
      .withColour(colour)
      .withIcon(icon)
      .withDataSettings(dataSettings)
      .withTopicName(topic)

    if (settings.game) {
      const gameSettings = this.gameSettingsConverter.deserialise(settings.game)
      return commonProperties.withGameSettings(gameSettings).build()
    } else {
      return commonProperties.withLearnSettings(new LearnSettings()).build()
    }
  }
}

export default PresetConverter
