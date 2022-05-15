import DataSettings from "./settings/data/DataSettings";
import ModeSettings from "./settings/ModeSettings";
import { KanaSettingsBuilder } from "./settings/data/KanaSettings";
import GameSettings, { GameSettingsBuilder } from "./settings/game/GameSettings";
import { CustomIcon } from "../Icon";
import LearnSettings from "./settings/LearnSettings";
import SessionMode from "./SessionMode";
import PlayMode from "./PlayMode";
import LearnMode from "./LearnMode";

export interface LearnPresetSteps {
    withLearnSettings: (settings: LearnSettings) => LearnPresetStepsBuilder;
}

/*export interface PlayPresetSteps {
    withGameSettings: (settings: GameSettings) => PlayPresetStepsBuilder;
}*/

export interface CommonPresetSteps {
    withID: (id: number) => CommonPresetSteps;
    withFavouriteID: (id: number) => CommonPresetSteps;
    withDescription: (description: string) => CommonPresetSteps;
    withDisplayName: (name: string) => CommonPresetSteps;
    withShortName: (name: string) => CommonPresetSteps;
    withColour: (colour: string) => CommonPresetSteps;
    withIcon: (icon: CustomIcon) => CommonPresetSteps;
    withTopicName: (topic: string) => CommonPresetSteps;
    withDataSettings: (settings: DataSettings) => CommonPresetSteps;
    isCustom: () => CommonPresetSteps;
}

class PresetBuilder {
    private _id: number = -1;
    private _favourite_id: number | undefined;
    private _description: string = "";
    private _displayName: string = "";
    private _shortName?: string = undefined;
    private _colour: string = "";
    private _icon: CustomIcon = "";
    private _topicName: string = "";
    private _dataSettings: DataSettings = new KanaSettingsBuilder().build();
    private _modeSettings: ModeSettings = new GameSettingsBuilder().build();
    private _custom: boolean = false;

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

class LearnPresetStepsBuilder implements LearnPresetSteps {
    private learnSettings: ModeSettings = new GameSettingsBuilder().build();

    public withLearnSettings(settings: LearnSettings): LearnPresetStepsBuilder {
        this.learnSettings = settings;
        return this;
    }
}

/*class PlayPresetStepsBuilder implements PlayPresetSteps {
    private _gameSettings: GameSettings = new GameSettingsBuilder().build();

    public withGameSettings(settings: GameSettings): PresetBuilder {
        this._gameSettings = settings;
        return this;
    }
}*/

class CommonPresetStepsBuilder implements CommonPresetSteps {
    private _id: number = -1;
    private _favourite_id: number | undefined;
    private _description: string = "";
    private _displayName: string = "";
    private _shortName?: string = "";
    private _colour: string = "";
    private _icon: CustomIcon = "";
    private _topicName: string = "";
    private _dataSettings: DataSettings = new KanaSettingsBuilder().build();
    private _custom?: boolean = false;

    public withID(id: number): CommonPresetSteps {
        this._id = id;
        return this;
    }

    public withFavouriteID(id: number): CommonPresetSteps {
        this._favourite_id = id;
        return this;
    }

    public withDescription(description: string): CommonPresetSteps {
        this._description = description;
        return this;
    }

    public withDisplayName(name: string): CommonPresetSteps {
        this._displayName = name;
        return this;
    }

    public withShortName(name: string): CommonPresetSteps {
        this._shortName = name;
        return this;
    }

    public withColour(colour: string): CommonPresetSteps {
        this._colour = colour;
        return this;
    }

    public withIcon(icon: CustomIcon): CommonPresetSteps {
        this._icon = icon;
        return this;
    }

    public withDataSettings(settings: DataSettings): CommonPresetSteps {
        this._dataSettings = settings;
        return this;
    }

    public withTopicName(topic: string): CommonPresetSteps {
        this._topicName = topic;
        return this;
    }

    public isCustom(): CommonPresetSteps {
        this._custom = true;
        return this;
    }
}

export default PresetBuilder;
