import { PropsWithChildren, useCallback, useMemo, useState } from "react"
import { DataSettingsState, GameSettingState, SessionSettingsBag, SessionSettingsState } from "./types.ts"
import SessionSettingsContext from "context/SessionSettingsContext/SessionSettingsContext.tsx"
import PlayMode from "domain/session/PlayMode.ts"
import DataSettingsConverter from "converter/DataSettingsConverter.ts"
import LearnMode from "domain/session/LearnMode.ts"
import GameSettingsConverter from "converter/GameSettingsConverter.ts"
import LearnSettings from "domain/session/settings/LearnSettings.ts"
import DataSettings from "domain/session/settings/data/DataSettings.ts"
import GameSettings from "domain/session/settings/game/GameSettings.ts"
import { useLocalStorage } from "@uidotdev/usehooks"

const SessionSettingsProvider = ({ children }: PropsWithChildren) => {
  const [learnSettings, setLearnSettings] = useState<LearnSettings>()
  const [preset, setPreset] = useLocalStorage<number>("selected-preset-id")
  const [gameSettings, setGameSettings] = useLocalStorage<GameSettingState| undefined>("game-config")
  const [dataSettings, setDataSettings] = useLocalStorage<DataSettingsState| undefined>("data-config")
  const [lastPlaySession, setLastPlaySession] = useLocalStorage<SessionSettingsState | undefined>("last-play-session")
  const [lastLearnSession, setLastLearnSession] = useLocalStorage<SessionSettingsState| undefined>("last-learn-session")

  const convertPlayModeToSessionState = useCallback((mode: PlayMode) => {
    setLastPlaySession({
      isPreset: true,
      topic: mode.topicName,
      id: mode.id,
      name: mode.displayName,
      icon: mode.icon.toString(),
      colour: mode.colour,
      game: new GameSettingsConverter().serialise(mode.modeSettings as GameSettings),
      data: new DataSettingsConverter().serialise(mode.dataSettings)
    })
  }, [setLastPlaySession])

  const convertLearnModeToSessionState = useCallback((mode: LearnMode) => {
    setLastLearnSession({
      isPreset: true,
      topic: mode.topicName,
      id: mode.id,
      name: mode.displayName,
      icon: mode.icon.toString(),
      colour: mode.colour,
      data: new DataSettingsConverter().serialise(mode.dataSettings)
    })
  }, [setLastLearnSession])

  const convertGameSettings = useCallback((settings?: GameSettings) => {
    if (settings) {
      setGameSettings(new GameSettingsConverter().serialise(settings))
    } else {
      setGameSettings(undefined)
    }
  }, [setGameSettings])

  const convertFromDataSettings = useCallback((settings?: DataSettings) => {
    if (settings) {
      setDataSettings(new DataSettingsConverter().serialise(settings))
    } else {
      setDataSettings(undefined)
    }
  }, [setDataSettings])

  const values: SessionSettingsBag = useMemo(
    () => ({
      lastLearnSession,
      setLastLearnSession: convertLearnModeToSessionState,
      lastPlaySession,
      setLastPlaySession: convertPlayModeToSessionState,
      gameSettings: gameSettings ? new GameSettingsConverter().deserialise(gameSettings) : undefined,
      setGameSettings: convertGameSettings,
      learnSettings,
      setLearnSettings,
      dataSettings: dataSettings ? new DataSettingsConverter().deserialise(dataSettings): undefined,
      setDataSettings: convertFromDataSettings,
      preset,
      setPreset
    }),
    [
      lastLearnSession,
      convertLearnModeToSessionState,
      lastPlaySession,
      convertPlayModeToSessionState,
      gameSettings,
      setGameSettings,
      learnSettings,
      setLearnSettings,
      dataSettings,
      setDataSettings,
      preset,
      setPreset
    ]
  )

  return (
    <SessionSettingsContext.Provider value={values}>
      {children}
    </SessionSettingsContext.Provider>
  )
}

export default SessionSettingsProvider