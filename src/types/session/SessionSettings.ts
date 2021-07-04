import DataSettings, { LearnSettings } from "./DataSettings";
import GameSettings from "./GameSettings";

export class SessionSettings {
    private readonly _gameSettings: GameSettings | undefined;
    private readonly _learnSettings: LearnSettings | undefined;
    private readonly _dataSettings: DataSettings;

    private constructor(dataSettings: DataSettings, gameSettings?: GameSettings, learnSettings?: LearnSettings) {
        this._gameSettings = gameSettings;
        this._learnSettings = learnSettings;
        this._dataSettings = dataSettings;
    }

    public static forGame(dataSettings: DataSettings, settings: GameSettings) {
        return new SessionSettings(dataSettings, settings, undefined);
    }

    public static forLearning(dataSettings: DataSettings, settings: LearnSettings) {
        return new SessionSettings(dataSettings, undefined, settings);
    }

    get gameSettings(): GameSettings | undefined {
        return this._gameSettings;
    }

    get learnSettings(): LearnSettings | undefined {
        return this._learnSettings;
    }

    get dataSettings(): DataSettings {
        return this._dataSettings;
    }
}