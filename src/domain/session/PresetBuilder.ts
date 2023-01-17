import DataSettings from "./settings/data/DataSettings";
import ModeSettings from "./settings/ModeSettings";
import {KanaSettingsBuilder} from "./settings/data/KanaSettings";
import GameSettings, {GameSettingsBuilder} from "./settings/game/GameSettings";
import {CustomIcon} from "../Icon";
import LearnSettings from "./settings/LearnSettings";
import SessionMode from "./SessionMode";
import PlayMode from "./PlayMode";
import LearnMode from "./LearnMode";

class PresetBuilder {
    private _id = -1;
    private _favourite_id: number | undefined;
    private _description = "";
    private _displayName = "";
    private _shortName?: string = undefined;
    private _colour = "";
    private _icon: CustomIcon = "";
    private _topicName = "";
    private _dataSettings: DataSettings = new KanaSettingsBuilder().build();
    private _modeSettings: ModeSettings = new GameSettingsBuilder().build();
    private _custom = false;

    public withID(id: number): PresetBuilder {
        this._id = id;
        return this;
    }

    public withFavouriteID(id: number): PresetBuilder {
        this._favourite_id = id;
        return this;
    }

    public withDescription(description: string): PresetBuilder {
        this._description = description;
        return this;
    }

    public withDisplayName(name: string): PresetBuilder {
        this._displayName = name;
        return this;
    }

    public withShortName(name: string): PresetBuilder {
        this._shortName = name;
        return this;
    }

    public withColour(colour: string): PresetBuilder {
        this._colour = colour;
        return this;
    }

    public withIcon(icon: CustomIcon): PresetBuilder {
        this._icon = icon;
        return this;
    }

    public withDataSettings(settings: DataSettings): PresetBuilder {
        this._dataSettings = settings;
        return this;
    }

    public withTopicName(topic: string): PresetBuilder {
        this._topicName = topic;
        return this;
    }

    public isCustom(): PresetBuilder {
        this._custom = true;
        return this;
    }

    public withLearnSettings(settings: LearnSettings): PresetBuilder {
        this._modeSettings = settings;
        return this;
    }

    public withGameSettings(settings: GameSettings): PresetBuilder {
        this._modeSettings = settings;
        return this;
    }

    public build(): SessionMode {
        if (this._modeSettings instanceof GameSettings) {
            return new PlayMode(this._id, this._displayName, this._description, this._colour, this._icon,
                this._dataSettings, this._modeSettings, this._topicName, this._shortName, this._custom,
                this._favourite_id
            );
        } else {
            return new LearnMode(this._id, this._displayName, this._description, this._colour, this._icon,
                this._dataSettings, this._modeSettings, this._topicName, this._shortName, this._custom,
                this._favourite_id);
        }
    }

}

export default PresetBuilder;