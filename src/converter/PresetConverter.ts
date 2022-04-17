import SessionMode from "../domain/session/SessionMode";
import { LearnPresetRequest, PlayPresetRequest, PresetRequest } from "../repository/PresetRepository";
import PlayMode from "../domain/session/PlayMode";
import LearnMode from "../domain/session/LearnMode";
import GameSettingsConverter from "./GameSettingsConverter";
import DataSettingsConverter from "./DataSettingsConverter";
import GameSettings from "../domain/session/settings/game/GameSettings";

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
}

export default PresetConverter;
