import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import {
  DataSettingsState,
  GameSettingState,
  SessionSettingsBag,
  SessionSettingsContextProviderProps,
  SessionSettingsState
} from "./types.ts";
import SessionSettingsContext from "context/SessionSettingsContext/SessionSettingsContext.tsx"
import PlayMode from "domain/session/PlayMode.ts"
import DataSettingsConverter from "converter/DataSettingsConverter.ts"
import LearnMode from "domain/session/LearnMode.ts"
import GameSettingsConverter from "converter/GameSettingsConverter.ts"
import LearnSettings from "domain/session/settings/LearnSettings.ts"
import DataSettings from "domain/session/settings/data/DataSettings.ts"
import GameSettings from "domain/session/settings/game/GameSettings.ts"
import { useLocalStorage } from "@uidotdev/usehooks"

const gameSettingsConverter = new GameSettingsConverter()
const dataSettingsConverter = new DataSettingsConverter();

const SessionSettingsProvider = ({
   gameSettings,
   dataSettings,
   lastLearnPreset,
   lastPlayPreset,
   children
}: PropsWithChildren<SessionSettingsContextProviderProps>) => {
  const [learnSettings, setLearnSettings] = useState<LearnSettings>()
  const [preset, setPreset] = useLocalStorage<number>("selected-preset-id")

  const initialGameState = gameSettings ? gameSettingsConverter.serialise(gameSettings) : undefined
  const [gameState, setGameSettings] = useLocalStorage<GameSettingState | undefined>("game-config", initialGameState)

  const initialDataState = dataSettings ? dataSettingsConverter.serialise(dataSettings) : undefined
  const [dataState, setDataSettings] = useLocalStorage<DataSettingsState | undefined>("data-config", initialDataState)

  const convertPlayModeToSessionState = useCallback((mode: PlayMode) => {
    return {
      isPreset: true,
      topic: mode.topicName,
      id: mode.id,
      name: mode.displayName,
      icon: mode.icon.toString(),
      colour: mode.colour,
      game: gameSettingsConverter.serialise(mode.modeSettings as GameSettings),
      data: dataSettingsConverter.serialise(mode.dataSettings)
    }
  }, [])

  const convertLearnModeToSessionState = useCallback((mode: LearnMode): SessionSettingsState => {
    return {
      isPreset: true,
      topic: mode.topicName,
      id: mode.id,
      name: mode.displayName,
      icon: mode.icon.toString(),
      colour: mode.colour,
      data: dataSettingsConverter.serialise(mode.dataSettings)
    }
  }, [])

  const initialLastPlaySession = lastPlayPreset ? convertPlayModeToSessionState(lastPlayPreset) : undefined
  const [lastPlaySession, setLastPlaySession] = useLocalStorage<SessionSettingsState | undefined>(
    "last-play-session",
    initialLastPlaySession
  )

  const initialLastLearnSession = lastLearnPreset ? convertLearnModeToSessionState(lastLearnPreset) : undefined
  const [lastLearnSession, setLastLearnSession] = useLocalStorage<SessionSettingsState| undefined>(
    "last-learn-session",
    initialLastLearnSession
  )

  const convertGameSettings = useCallback((settings?: GameSettings) => {
    if (settings) {
      setGameSettings(gameSettingsConverter.serialise(settings))
    } else {
      setGameSettings(undefined)
    }
  }, [setGameSettings])

  const convertFromDataSettings = useCallback((settings?: DataSettings) => {
    if (settings) {
      setDataSettings(dataSettingsConverter.serialise(settings))
    } else {
      setDataSettings(undefined)
    }
  }, [setDataSettings])

  const values: SessionSettingsBag = useMemo(
    () => ({
      lastLearnSession,
      setLastLearnSession: (preset: LearnMode) => setLastLearnSession(convertLearnModeToSessionState(preset)),
      lastPlaySession,
      setLastPlaySession: (preset: PlayMode) => setLastPlaySession(convertPlayModeToSessionState(preset)),
      gameSettings: gameState ? gameSettingsConverter.deserialise(gameState) : undefined,
      setGameSettings: convertGameSettings,
      learnSettings,
      setLearnSettings,
      dataSettings: dataState ? dataSettingsConverter.deserialise(dataState): undefined,
      setDataSettings: convertFromDataSettings,
      preset,
      setPreset
    }),
    [
      lastLearnSession,
      convertLearnModeToSessionState,
      lastPlaySession,
      convertPlayModeToSessionState,
      gameState,
      setGameSettings,
      learnSettings,
      setLearnSettings,
      dataState,
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