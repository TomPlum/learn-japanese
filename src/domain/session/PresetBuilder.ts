import DataSettings from "./settings/data/DataSettings";
import ModeSettings from "./settings/ModeSettings";
import { KanaSettingsBuilder } from "./settings/data/KanaSettings";
import GameSettings, { GameSettingsBuilder } from "./settings/game/GameSettings";
import { CustomIcon } from "../Icon";
import LearnSettings from "./settings/LearnSettings";

export interface LearnPresetSteps {
    withLearnSettings: (settings: LearnSettings) => LearnPresetStepsBuilder;
}

export interface PlayPresetSteps {
    withGameSettings: (settings: GameSettings) => PlayPresetStepsBuilder;
}

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

class PresetBuilder implements CommonPresetSteps, LearnPresetSteps, PlayPresetSteps {
    private _id: number = -1;
    private _favourite_id: number | undefined;
    private _description: string = "";
    private _displayName: string = "";
    private _shortName?: string = "";
    private _colour: string = "";
    private _icon: CustomIcon = "";
    private _topicName: string = "";
    private _dataSettings: DataSettings = new KanaSettingsBuilder().build();
    private _modeSettings: ModeSettings = new GameSettingsBuilder().build();
    private _custom?: boolean = false;


    public forLearnSession(): LearnPresetSteps {
        return new LearnPresetStepsBuilder();
    }

    public forPlaySession(): PlayPresetSteps {
        return new PlayPresetStepsBuilder();
    }

}

class LearnPresetStepsBuilder implements LearnPresetSteps {
    private learnSettings: ModeSettings = new GameSettingsBuilder().build();

    public withLearnSettings(settings: LearnSettings): LearnPresetStepsBuilder {
        this.learnSettings = settings;
        return this;
    }
}

class PlayPresetStepsBuilder implements PlayPresetSteps {
    private _gameSettings: GameSettings = new GameSettingsBuilder().build();

    public withGameSettings(settings: GameSettings): PresetBuilder {
        this._gameSettings = settings;
        return this;
    }
}

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
