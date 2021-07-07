import { HintQuantity } from "../../../game/HintQuantity";
import { LifeQuantity } from "../../../game/LifeQuantity";
import { DisplayType } from "../../../game/DisplayType";
import ModeSettings from "../ModeSettings";
import LifeSettings, { LifeSettingsBuilder } from "./LifeSettings";

export default class GameSettings implements ModeSettings {
    private readonly _hints: HintSettings;
    private readonly _lives: LifeSettings;
    private readonly _time: TimeSettings;
    private readonly _display: DisplaySettings;

    public constructor(hints: HintSettings, lives: LifeSettings, time: TimeSettings, display: DisplaySettings) {
        this._hints = hints;
        this._lives = lives;
        this._time = time;
        this._display = display;
    }

    get hints(): HintSettings {
        return this._hints;
    }

    get lives(): LifeSettings {
        return this._lives;
    }

    get time(): TimeSettings {
        return this._time;
    }

    get display(): DisplaySettings {
        return this._display;
    }
}

export class GameSettingsBuilder {
    private _hints: HintSettings = { enabled: true, quantity: HintQuantity.UNLIMITED };
    private _lives: LifeSettings = new LifeSettingsBuilder().build();
    private _time: TimeSettings = { timed: true, countdown: false };
    private _display: DisplaySettings = { type: DisplayType.ROMAJI, cards: 1, score: true };

    public fromExisting(settings: GameSettings): GameSettingsBuilder {
        this._hints = settings.hints;
        this._lives = settings.lives;
        this._time = settings.time;
        this._display = settings.display;
        return this;
    }

    public withHintSettings(hints: HintSettings): GameSettingsBuilder {
        this._hints = hints;
        return this;
    }

    public withLifeSettings(lives: LifeSettings): GameSettingsBuilder {
        this._lives = lives;
        return this;
    }

    public withTimeSettings(time: TimeSettings): GameSettingsBuilder {
        this._time = time;
        return this;
    }

    public withDisplaySettings(display: DisplaySettings): GameSettingsBuilder {
        this._display = display;
        return this;
    }

    public build(): GameSettings {
        return new GameSettings(this._hints, this._lives, this._time, this._display);
    }
}

export interface DisplaySettings {
    type: DisplayType;
    cards: number;
    score: boolean;
}

export interface HintSettings {
    enabled: boolean;
    quantity?: HintQuantity;
}

export interface TimeSettings {
    timed: boolean;
    countdown: boolean;
    secondsPerQuestion?: number;
}
