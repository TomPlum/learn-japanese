import SessionMode from "../domain/session/SessionMode";
import { LearnPresetRequest, PlayPresetRequest, PresetRequest } from "../repository/PresetRepository";
import PlayMode from "../domain/session/PlayMode";
import LearnMode from "../domain/session/LearnMode";
import GameSettingsConverter from "./GameSettingsConverter";
import DataSettingsConverter from "./DataSettingsConverter";
import GameSettings from "../domain/session/settings/game/GameSettings";
import { SessionSettingsState } from "../slices/SessionSettingsSlice";
import LearnSettings from "../domain/session/settings/LearnSettings";

class PresetConverter {

    private readonly gameSettingsConverter = new GameSettingsConverter();
    private readonly dataSettingsConverter = new DataSettingsConverter();

    public convertRequest(preset: SessionMode): PresetRequest {
        const commonProperties = {
            name: preset.displayName,
            icon: preset.icon.toString(),
            colour: preset.colour.replace("#", ""),
            topic: preset.dataSettings.topic.name,
            data: this.dataSettingsConverter.convertRequest(preset.dataSettings)
        }

        if (preset instanceof PlayMode) {
            return {
                ...commonProperties,
                game: this.gameSettingsConverter.convertRequest(preset.modeSettings as GameSettings)
            } as PlayPresetRequest;
        } else if (preset instanceof LearnMode) {
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
