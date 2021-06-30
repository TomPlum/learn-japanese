import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { GameSettings } from "./GameSettings";

export default class PlayMode {
    private readonly _displayName: string;
    private readonly _colour: string;
    private readonly _icon: IconDefinition | string;
    private readonly _settings: GameSettings;

    constructor(displayName: string, colour: string, icon: IconDefinition | string, settings: GameSettings) {
        this._displayName = displayName;
        this._colour = colour;
        this._icon = icon;
        this._settings = settings;
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

    get settings(): GameSettings {
        return this._settings;
    }
}