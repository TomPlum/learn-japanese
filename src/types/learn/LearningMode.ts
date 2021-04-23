import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { LearningSessionSettings } from "./LearningSessionSettings";
import React from "react";

export default class LearningMode {
    private readonly _displayName: string;
    private readonly _colour: string;
    private readonly _icon: IconDefinition | string;
    private readonly _settings: LearningSessionSettings;
    private readonly _custom: boolean;
    private readonly _menu: React.FunctionComponent | React.ComponentClass<any> | undefined = undefined;

    public constructor(
        displayName: string, colour: string, icon: IconDefinition | string, settings: LearningSessionSettings,
        custom: boolean = false, menu: React.FunctionComponent | React.ComponentClass<any> | undefined = undefined
    ) {
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

    get settings(): LearningSessionSettings {
        return this._settings;
    }

    get isCustom(): boolean {
        return this._custom;
    }

    get menu(): React.FunctionComponent | React.ComponentClass<any> | undefined {
        return this._menu;
    }
}