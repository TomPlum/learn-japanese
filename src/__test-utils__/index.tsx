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
import FontProvider, { FontContextBag, useFontContext } from "context/FontContext";
import NotificationProvider, {
  NotificationContextBag,
  NotificationList,
  useNotificationContext
} from "context/NotificationContext";

interface ContextListener<Bag> {
  useContextHook: () => Bag
  onContextValueChange: (value: Bag) => void
}

const ReactContextListener = <Bag,> ({ children, useContextHook, onContextValueChange }: PropsWithChildren<ContextListener<Bag>>) => {
  const value = useContextHook()

  useEffect(() => {
    onContextValueChange(value)
  }, [JSON.stringify(value), onContextValueChange]);

  return <>{children}</>
}

export interface RenderProps {
  url?: string
  font?: string
  notifications?: NotificationList
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
  onNotificationContextValueChange: Mock
  onFontContextValueChange: Mock
  history: History
  component: RenderResult
}

const render = (component: ReactElement, { url, font, notifications, sessionSettings }: RenderProps = {}): RenderResponse => {
  const onSessionSettingsChange = vi.fn()
  const onFontChange = vi.fn()
  const onNotificationChange = vi.fn()

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
          <ReactContextListener<SessionSettingsBag>
            useContextHook={useSessionSettingsContext}
            onContextValueChange={onSessionSettingsChange}
          >
            <FontProvider initialFont={font}>
              <ReactContextListener<FontContextBag>
                useContextHook={useFontContext}
                onContextValueChange={onFontChange}
              >
                <NotificationProvider initialNotifications={notifications}>
                  <ReactContextListener<NotificationContextBag>
                    useContextHook={useNotificationContext}
                    onContextValueChange={onNotificationChange}
                  >
                    <Provider store={defaultStore}>
                      {children}
                    </Provider>
                  </ReactContextListener>
                </NotificationProvider>
              </ReactContextListener>
            </FontProvider>
          </ReactContextListener>
        </SessionSettingsProvider>
      </I18nextProvider>
    </HistoryRouter>
  )

  return {
    component: rtlRender(component, { wrapper: Wrapper }),
    onSessionSettingsContextValueChange: onSessionSettingsChange,
    onFontContextValueChange: onFontChange,
    onNotificationContextValueChange: onNotificationChange,
    history
  }
}

export {
  render
}