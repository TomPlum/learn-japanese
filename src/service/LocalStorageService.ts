import { CustomIcon, Icon } from "../domain/Icon"
import { SessionSettings } from "../domain/session/settings/SessionSettings"
import GameSettingsConverter from "../converter/GameSettingsConverter"
import DataSettingsConverter from "../converter/DataSettingsConverter"
import { DataSettingsState } from "../slices/DataSettingsSlice"
import { GameSettingState } from "../slices/GameSettingsSlice"
import LearnSettings from "../domain/session/settings/LearnSettings"

interface PlaySession {
  data: DataSettingsState
  game: GameSettingState
}

interface LearnSession {
  data: DataSettingsState
}

class LocalStorageService {
  private readonly gameSettingsConverter = new GameSettingsConverter()
  private readonly dataSettingsConverter = new DataSettingsConverter()

  private readonly RECENT_ICONS_KEY = "recent-icons"
  private readonly HIDE_USER_PROFILE_HINT = "hide-user-profile-hint"
  private readonly KANJI_FONT_KEY = "font"

  private readonly LAST_PLAY_SESSION_KEY = "last-play-session"
  private readonly LAST_LEARN_SESSION_KEY = "last-learn-session"

  /**
   * Caches the given icon in local storage.
   * Considers only the last 5 icons as recently used.
   * Duplicate icons are disregarded.
   * @param icon The name of the icon to store.
   */
  public addRecentlyUsedIcon(icon: CustomIcon) {
    const icons = this.getRecentlyUsedIcons()
    if (!icons.includes(icon)) {
      if (icons.length === 5) {
        icons.pop()
      }
      icons.unshift(icon)
      const value = JSON.stringify(icons)
      localStorage.setItem(this.RECENT_ICONS_KEY, value)
    }
  }

  /**
   * Retrieves a list of all the recently used icons from the
   * IconPicker component.
   * @return icons An array of the most recently used icons.
   */
  public getRecentlyUsedIcons(): CustomIcon[] {
    const value = localStorage.getItem(this.RECENT_ICONS_KEY)
    return JSON.parse(value ?? "[]") as Icon[]
  }

  /**
   * Store the users' preference for hiding the account registration hint
   * in the profile card on the dashboard.
   */
  public setHideUserProfileHint() {
    localStorage.setItem(this.HIDE_USER_PROFILE_HINT, "true")
  }

  /**
   * Retrieves users' preference for hiding the account registration hint
   * in the profile card on the dashboard.
   * @return true if the user wishes to hide the card.
   */
  public getHideUserProfileHint() {
    const value = localStorage.getItem(this.HIDE_USER_PROFILE_HINT)
    return value === "true"
  }

  public addLastPlaySession(settings: SessionSettings) {
    const gameSettings = this.gameSettingsConverter.serialise(settings.gameSettings!)
    const dataSettings = this.dataSettingsConverter.serialise(settings.dataSettings)
    localStorage.setItem(this.LAST_PLAY_SESSION_KEY, JSON.stringify({ game: gameSettings, data: dataSettings }))
  }

  public getLastPlaySession(): SessionSettings | undefined {
    const value = localStorage.getItem(this.LAST_PLAY_SESSION_KEY)
    if (!value) return undefined
    const session = JSON.parse(value) as PlaySession
    const dataSettings = this.dataSettingsConverter.deserialise(session.data)
    const gameSettings = this.gameSettingsConverter.deserialise(session.game)
    return SessionSettings.forGame(dataSettings, gameSettings)
  }

  public addLastLearnSession(settings: SessionSettings) {
    const dataSettings = this.dataSettingsConverter.serialise(settings.dataSettings)
    localStorage.setItem(this.LAST_LEARN_SESSION_KEY, JSON.stringify({ data: dataSettings }))
  }

  public getLastLearnSession(): SessionSettings | undefined {
    const value = localStorage.getItem(this.LAST_LEARN_SESSION_KEY)
    if (!value) return undefined
    const session = JSON.parse(value) as PlaySession
    const dataSettings = this.dataSettingsConverter.deserialise(session.data)
    return SessionSettings.forLearning(dataSettings, new LearnSettings())
  }

  /**
   * Clears all locally stored data expect for the user
   * session information.
   */
  public clear() {
    localStorage.removeItem(this.RECENT_ICONS_KEY)
    localStorage.removeItem(this.HIDE_USER_PROFILE_HINT)
    localStorage.removeItem(this.LAST_PLAY_SESSION_KEY)
    localStorage.removeItem(this.LAST_LEARN_SESSION_KEY)
    localStorage.removeItem(this.KANJI_FONT_KEY)
  }
}

export default LocalStorageService
