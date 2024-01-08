import { render as rtlRender, RenderResult } from "@testing-library/react";
import { PropsWithChildren, ReactElement, useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "__test-utils__/i18n-testing.ts"
import { Provider } from "react-redux"
import { store as defaultStore } from "../store.ts"
import SessionSettingsProvider, { SessionSettingsBag, useSessionSettingsContext } from "context/SessionSettingsContext";
import LearnMode from "domain/session/LearnMode.ts"
import PlayMode from "domain/session/PlayMode.ts"
import DataSettings from "domain/session/settings/data/DataSettings.ts"
import GameSettings from "domain/session/settings/game/GameSettings.ts"
import LearnSettings from "domain/session/settings/LearnSettings.ts"
import { History } from "@remix-run/router"
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import { createMemoryHistory } from "history";
import { Mock } from "vitest";

interface BagInjector {
  onContextValueChange: (value: SessionSettingsBag) => void
}

const SessionSettingsContextInjector = ({ children, onContextValueChange }: PropsWithChildren<BagInjector>) => {
  const value = useSessionSettingsContext()

  useEffect(() => {
    onContextValueChange(value)
  }, [value, onContextValueChange]);

  return <>{children}</>
}

export interface RenderProps {
  url?: string
  sessionSettings?: {
    dataSettings?: DataSettings
    gameSettings?: GameSettings
    learnSettings?: LearnSettings
    lastLearnPreset?: LearnMode
    lastPlayPreset?: PlayMode
  }
}

export interface RenderResponse {
  onSessionSettingsContextValueChange: Mock
  history: History
  component: RenderResult
}

const render = (component: ReactElement, { url, sessionSettings }: RenderProps = {}): RenderResponse => {
  const onSessionSettingsContextValueChange = vi.fn()
  const history = createMemoryHistory({ initialEntries: [url ?? '/'] }) as never as History

  const Wrapper = ({ children }: PropsWithChildren) => (
    <HistoryRouter history={history}>
      <I18nextProvider i18n={i18n} defaultNS="translation">
        <SessionSettingsProvider
          gameSettings={sessionSettings?.gameSettings}
          dataSettings={sessionSettings?.dataSettings}
          lastLearnPreset={sessionSettings?.lastLearnPreset}
          lastPlayPreset={sessionSettings?.lastPlayPreset}
        >
          <SessionSettingsContextInjector onContextValueChange={onSessionSettingsContextValueChange}>
            <Provider store={defaultStore}>
              {children}
            </Provider>
          </SessionSettingsContextInjector>
        </SessionSettingsProvider>
      </I18nextProvider>
    </HistoryRouter>
  )

  return {
    component: rtlRender(component, { wrapper: Wrapper }),
    onSessionSettingsContextValueChange,
    history
  }
}

export {
  render
}