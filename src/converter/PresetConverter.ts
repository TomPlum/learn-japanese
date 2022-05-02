import SessionMode from "../domain/session/SessionMode";
import { CustomPresetDetails, LearnPresetRequest, PlayPresetRequest, PresetRequest } from "../repository/PresetRepository";
import PlayMode from "../domain/session/PlayMode";
import LearnMode from "../domain/session/LearnMode";
import GameSettingsConverter from "./GameSettingsConverter";
import DataSettingsConverter from "./DataSettingsConverter";
import { SessionSettingsState } from "../slices/SessionSettingsSlice";
import LearnSettings from "../domain/session/settings/LearnSettings";

class PresetConverter {

    private readonly gameSettingsConverter = new GameSettingsConverter();
    private readonly dataSettingsConverter = new DataSettingsConverter();

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
            } as PlayPresetRequest;
        } else if (preset.settings.learnSettings) {
            return { ...commonProperties} as LearnPresetRequest;
        } else {
            throw new Error(`Cannot convert unknown preset type [${preset.constructor.name}]`);
        }
    }

    public convertSessionSettings(settings: SessionSettingsState): SessionMode {
        const id = settings.id!;
        const name = settings.name!;
        const colour = settings.colour!;
        const icon = settings.icon!;
        const topic = settings.topic!;
        const dataSettings = this.dataSettingsConverter.deserialise(settings.data);

        if (settings.game) {
            const gameSettings = this.gameSettingsConverter.deserialise(settings.game);
            return new PlayMode(id, name, colour, icon, dataSettings, gameSettings, topic);
        } else {
            return new LearnMode(id, name, colour, icon, dataSettings, new LearnSettings(), topic)
        }
    }
}

export default PresetConverter;
