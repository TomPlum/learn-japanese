import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default class PlayMode {
    private readonly _displayName: string;
    private readonly _colour: string;
    private readonly _icon: IconDefinition | string;

    constructor(displayName: string, colour: string, icon: IconDefinition | string) {
        this._displayName = displayName;
        this._colour = colour;
        this._icon = icon;
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
}