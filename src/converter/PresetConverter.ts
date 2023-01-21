import SessionMode from "../domain/session/SessionMode"
import {
    CustomPresetDetails,
    LearnPresetRequest,
    PlayPresetRequest,
    PresetRequest
} from "../repository/PresetRepository"
import GameSettingsConverter from "./GameSettingsConverter"
import DataSettingsConverter from "./DataSettingsConverter"
import { SessionSettingsState } from "../slices/SessionSettingsSlice"
import LearnSettings from "../domain/session/settings/LearnSettings"
import PresetBuilder from "../domain/session/PresetBuilder"

class PresetConverter {
    private readonly gameSettingsConverter = new GameSettingsConverter()
    private readonly dataSettingsConverter = new DataSettingsConverter()

    public convertRequest(preset: CustomPresetDetails): PresetRequest {
        const commonProperties = {
            name: preset.name,
            icon: preset.icon.toString(),
            colour: preset.colour.replace("#", ""),
            topic: preset.settings.dataSettings.topic.name,
            data: this.dataSettingsConverter.convertRequest(preset.settings.dataSettings)
        }

        if (preset.settings.gameSettings) {
            return {
                ...commonProperties,
                game: this.gameSettingsConverter.convertRequest(preset.settings.gameSettings)
            } as PlayPresetRequest
        } else {
            return { ...commonProperties } as LearnPresetRequest
        }
    }

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
