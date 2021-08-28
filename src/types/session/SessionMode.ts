import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import DataSettings from "./settings/data/DataSettings";
import ModeSettings from "./settings/ModeSettings";

abstract class SessionMode {
    private readonly _displayName: string;
    private readonly _colour: string;
    private readonly _icon: IconDefinition | string;
    private readonly _dataSettings: DataSettings;
    private readonly _modeSettings: ModeSettings;

    protected constructor(displayName: string, colour: string, icon: IconDefinition | string,
                          dataSettings: DataSettings, modeSettings: ModeSettings) {
        this._displayName = displayName;
        this._colour = colour;
        this._icon = icon;
        this._dataSettings = dataSettings;
        this._modeSettings = modeSettings;
    }

    get displayName(): string {
        return this._displayName;
    }

    get colour(): string {
        return this._colour;
    }

    get icon(): IconDefinition | string {
        return this._icon;
    }

    get dataSettings(): DataSettings {
        return this._dataSettings;
    }

    get modeSettings(): ModeSettings {
        return this._modeSettings;
    }
}

export default SessionMode;
