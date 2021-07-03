import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { SessionSettings } from "./GameSettings";
import React from "react";

class SessionMode {
    private readonly _displayName: string;
    private readonly _colour: string;
    private readonly _icon: IconDefinition | string;
    private readonly _settings: SessionSettings;
    private readonly _custom: boolean;
    private readonly _menu: React.FunctionComponent | React.ComponentClass<any> | undefined = undefined;

    constructor(displayName: string, colour: string, icon: IconDefinition | string, settings: SessionSettings,
                custom = false, menu: React.FunctionComponent | React.ComponentClass<any> | undefined = undefined) {
        this._displayName = displayName;
        this._colour = colour;
        this._icon = icon;
        this._settings = settings;
        this._custom = custom;
        this._menu = menu;
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

    get settings(): SessionSettings {
        return this._settings;
    }

    get custom(): boolean {
        return this._custom;
    }

    get menu(): React.FunctionComponent | React.ComponentClass<any> | undefined {
        return this._menu;
    }
}

export default SessionMode;