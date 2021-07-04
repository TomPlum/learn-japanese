import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import DataSettings from "./DataSettings";
import { ModeSettings } from "./GameSettings";

abstract class SessionMode {
    private readonly _displayName: string;
    private readonly _colour: string;
    private readonly _icon: IconDefinition | string;
    private readonly _dataSettings: DataSettings;
    private readonly _modeSettings: ModeSettings;
    private readonly _custom: boolean;
    private readonly _menu: React.FunctionComponent | React.ComponentClass<any> | undefined = undefined;

    protected constructor(displayName: string, colour: string, icon: IconDefinition | string,
                          dataSettings: DataSettings, modeSettings: ModeSettings,
                          custom = false, menu: React.FunctionComponent | React.ComponentClass<any> | undefined = undefined) {
        this._displayName = displayName;
        this._colour = colour;
        this._icon = icon;
        this._dataSettings = dataSettings;
        this._modeSettings = modeSettings;
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

    get dataSettings(): DataSettings {
        return this._dataSettings;
    }

    get modeSettings(): ModeSettings {
        return this._modeSettings;
    }

    get custom(): boolean {
        return this._custom;
    }

    get menu(): React.FunctionComponent | React.ComponentClass<any> | undefined {
        return this._menu;
    }
}

export default SessionMode;