import { HintQuantity } from "../game/HintQuantity";
import { LifeQuantity } from "../game/LifeQuantity";
import { DisplayType } from "../game/DisplayType";
import { LearnSettings } from "../learn/LearningSessionSettings";

export interface SessionSettings {}

export default class GameSettings implements SessionSettings {
    private readonly _hints: HintSettings;
    private readonly _lives: LifeSettings;
    private readonly _time: TimeSettings;
    private readonly _display: DisplaySettings;
    private readonly _kana?: KanaSettings;

    public constructor(hints: HintSettings, lives: LifeSettings, time: TimeSettings, display: DisplaySettings, kana?: KanaSettings) {
        this._hints = hints;
        this._lives = lives;
        this._time = time;
        this._display = display;
        this._kana = kana;
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

    get kana(): KanaSettings | undefined {
        return this._kana;
    }
}

export class GameSettingsBuilder {
    private _hints: HintSettings = { enabled: true, quantity: HintQuantity.UNLIMITED };
    private _lives: LifeSettings = { enabled: true, quantity: LifeQuantity.FIVE };
    private _time: TimeSettings = { timed: true, countdown: false };
    private _display: DisplaySettings = { type: DisplayType.ROMAJI, cards: 1, score: true };
    private _kana?: KanaSettings = { hiragana: true, katakana: true, diagraphs: true, quantity: 50 };

    public fromExisting(settings: GameSettings): GameSettingsBuilder {
        this._hints = settings.hints;
        this._lives = settings.lives;
        this._time = settings.time;
        this._display = settings.display;
        this._kana = settings.kana;
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

    public withKanaSettings(kana: KanaSettings): GameSettingsBuilder {
        this._kana = kana;
        return this;
    }

    public build(): GameSettings {
        return new GameSettings(this._hints, this._lives, this._time, this._display, this._kana);
    }
}

export interface DisplaySettings {
    type: DisplayType;
    cards: number;
    score: boolean;
}

export interface LifeSettings {
    enabled: boolean;
    quantity?: LifeQuantity;
}

export interface HintSettings {
    enabled: boolean;
    quantity?: HintQuantity;
}

export interface KanaSettings extends LearnSettings {
    hiragana?: boolean;
    katakana?: boolean;
    diagraphs?: boolean;
    diacriticals?: boolean
    quantity?: number;
}

export interface TimeSettings {
    timed: boolean;
    countdown: boolean;
    secondsPerQuestion?: number;
}
