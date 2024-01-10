import { createContext } from "react";
import { SessionSettingsBag } from "context/SessionSettingsContext/types.ts";

const SessionSettingsContext = createContext<SessionSettingsBag>({
  setLastLearnSession: () => {
    console.error('Failed to invoke setLastLearnSession() from SessionSettingsContext as it has not been initialised.')
  },
  setLastPlaySession: () => {
    console.error('Failed to invoke setLastLearnSession() from SessionSettingsContext as it has not been initialised.')
  },
  setGameSettings: () => {
    console.error('Failed to invoke setGameSettings() from SessionSettingsContext as it has not been initialised.')
  },
  setLearnSettings: () => {
    console.error('Failed to invoke setLearnSettings() from SessionSettingsContext as it has not been initialised.')
  },
  setDataSettings: () => {
    console.error('Failed to invoke setDataSettings() from SessionSettingsContext as it has not been initialised.')
  },
  setPreset: (id: number) => {
    console.error(`Failed to invoke setPreset(${id}) from SessionSettingsContext as it has not been initialised.`)
  },
  clearDataSettings: () => {
    console.error(`Failed to invoke clearDataSettings() from SessionSettingsContext as it has not been initialised.`)
  },
  clearGameSettings: () => {
    console.error(`Failed to invoke clearGameSettings() from SessionSettingsContext as it has not been initialised.`)
  }
})

export default SessionSettingsContext