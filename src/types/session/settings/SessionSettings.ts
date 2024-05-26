import DataSettings from "./data/DataSettings"
import GameSettings from "./game/GameSettings"
import LearnSettings from "./LearnSettings"
import SessionMode from "../SessionMode"
import PlayMode from "../PlayMode"
import LearnMode from "../LearnMode"

export class SessionSettings {
  private readonly _gameSettings: GameSettings | undefined
  private readonly _learnSettings: LearnSettings | undefined
  private readonly _dataSettings: DataSettings

  private constructor(dataSettings: DataSettings, gameSettings?: GameSettings, learnSettings?: LearnSettings) {
    this._gameSettings = gameSettings
    this._learnSettings = learnSettings
    this._dataSettings = dataSettings
  }

  public static forGame(dataSettings: DataSettings, settings: GameSettings) {
    return new SessionSettings(dataSettings, settings, undefined)
  }

  public static forLearning(dataSettings: DataSettings, settings: LearnSettings) {
    return new SessionSettings(dataSettings, undefined, settings)
  }

  public static fromPreset(preset: SessionMode) {
    if (preset instanceof PlayMode) {
      return SessionSettings.forGame(preset.dataSettings, preset.modeSettings as GameSettings)
    } else if (preset instanceof LearnMode) {
      return SessionSettings.forLearning(preset.dataSettings, preset.modeSettings as LearnSettings)
    } else {
      throw new Error("Unknown preset type")
    }
  }

  get gameSettings(): GameSettings | undefined {
    return this._gameSettings
  }

  get learnSettings(): LearnSettings | undefined {
    return this._learnSettings
  }

  get dataSettings(): DataSettings {
    return this._dataSettings
  }
}
