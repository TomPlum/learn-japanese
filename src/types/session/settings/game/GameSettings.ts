import ModeSettings from "../ModeSettings";
import LifeSettings, { LifeSettingsBuilder } from "./LifeSettings";
import HintSettings, { HintSettingsBuilder } from "./HintSettings";
import TimeSettings, { TimeSettingsBuilder } from "./TimeSettings";
import QuestionSettings, { QuestionSettingsBuilder } from "./QuestionSettings";

export default class GameSettings implements ModeSettings {
    private readonly _hints: HintSettings;
    private readonly _lives: LifeSettings;
    private readonly _time: TimeSettings;
    private readonly _question: QuestionSettings;

    public constructor(hints: HintSettings, lives: LifeSettings, time: TimeSettings, display: QuestionSettings) {
        this._hints = hints;
        this._lives = lives;
        this._time = time;
        this._question = display;
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

    get question(): QuestionSettings {
        return this._question;
    }
}

export class GameSettingsBuilder {
    private _hints: HintSettings = new HintSettingsBuilder().build();
    private _lives: LifeSettings = new LifeSettingsBuilder().build();
    private _time: TimeSettings = new TimeSettingsBuilder().build();
    private _display: QuestionSettings = new QuestionSettingsBuilder().build();

    public fromExisting(settings: GameSettings): GameSettingsBuilder {
        this._hints = settings.hints;
        this._lives = settings.lives;
        this._time = settings.time;
        this._display = settings.question;
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

    public withQuestionSettings(display: QuestionSettings): GameSettingsBuilder {
        this._display = display;
        return this;
    }

    public build(): GameSettings {
        return new GameSettings(this._hints, this._lives, this._time, this._display);
    }
}