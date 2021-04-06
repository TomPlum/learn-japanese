import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { LearnSettings } from "./LearnSettings";

export default class LearningMode {
    private readonly _displayName: string;
    private readonly _colour: string;
    private readonly _icon: IconDefinition | string;
    private readonly _settings: LearnSettings;

    public constructor(displayName: string, colour: string, icon: IconDefinition | string, settings: LearnSettings) {
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

    get settings(): LearnSettings {
        return this._settings;
    }
}