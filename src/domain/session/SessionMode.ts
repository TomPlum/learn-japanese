import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import DataSettings from "./settings/data/DataSettings";
import ModeSettings from "./settings/ModeSettings";
import { GridItem } from "../../components/layout/wizard/grid/GridItem";
import { Icon } from "../Icon";

abstract class SessionMode implements GridItem {
    private readonly _displayName: string;
    private readonly _colour: string;
    private readonly _icon: IconDefinition | string;
    private readonly _dataSettings: DataSettings;
    private readonly _modeSettings: ModeSettings;
    private readonly _shortName?: string;
    private readonly _custom?: boolean;

    protected constructor(displayName: string, colour: string, icon: IconDefinition | string,
                          dataSettings: DataSettings, modeSettings: ModeSettings, shortName?: string, custom?: boolean) {
        this._displayName = displayName;
        this._colour = colour;
        this._icon = icon;
        this._dataSettings = dataSettings;
        this._modeSettings = modeSettings;
        this._shortName = shortName;
        this._custom = custom;
    }

    get displayName(): string {
        return this._displayName;
    }

    get colour(): string {
        return this._colour;
    }

    get icon(): IconDefinition | Icon | string {
        return this._icon;
    }

    get dataSettings(): DataSettings {
        return this._dataSettings;
    }

    get modeSettings(): ModeSettings {
        return this._modeSettings;
    }

    get custom(): boolean {
        return this._custom ?? false;
    }

    getLongName(): string {
        return this._displayName
    }

    getShortName(): string {
        return this._shortName ?? this._displayName;
    }
}


export default SessionMode;
