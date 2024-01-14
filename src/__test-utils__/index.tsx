import { render as rtlRender, RenderResult } from "@testing-library/react";
import { PropsWithChildren, ReactElement, useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "__test-utils__/i18n-testing.ts"
import SessionSettingsProvider, { SessionSettingsBag, useSessionSettingsContext } from "context/SessionSettingsContext";
import LearnMode from "types/session/LearnMode.ts"
import PlayMode from "types/session/PlayMode.ts"
import DataSettings from "types/session/settings/data/DataSettings.ts"
import GameSettings from "types/session/settings/game/GameSettings.ts"
import LearnSettings from "types/session/settings/LearnSettings.ts"
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
import UserProvider, { User, UserContextBag, useUserContext } from "context/UserContext";
import { localStorageMock } from "../setupTests.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 0,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchOnMount: true
    }
  }
})

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
  user?: User
  sessionSettings?: {
    dataSettings?: DataSettings
    gameSettings?: GameSettings
    learnSettings?: LearnSettings
    lastLearnPreset?: LearnMode
    lastPlayPreset?: PlayMode
  }
}

export interface RenderResponse {
  onUserContextValueChange: Mock
  onSessionSettingsContextValueChange: Mock
  onNotificationContextValueChange: Mock
  onFontContextValueChange: Mock
  history: History
  component: RenderResult
}

const render = (component: ReactElement, {
  user,
  url,
  font,
  notifications,
  sessionSettings
}: RenderProps = {}): RenderResponse => {
  const onSessionSettingsChange = vi.fn()
  const onFontChange = vi.fn()
  const onNotificationChange = vi.fn()
  const onUserChange = vi.fn()

  if (user) {
    localStorageMock.setItem("user", JSON.stringify(user))
  }

  const history = createMemoryHistory({ initialEntries: [url ?? '/'] }) as never as History

  const Wrapper = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={testQueryClient}>
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
                      <UserProvider>
                        <ReactContextListener<UserContextBag>
                          useContextHook={useUserContext}
                          onContextValueChange={onUserChange}
                        >
                          {children}
                        </ReactContextListener>
                      </UserProvider>
                    </ReactContextListener>
                  </NotificationProvider>
                </ReactContextListener>
              </FontProvider>
            </ReactContextListener>
          </SessionSettingsProvider>
        </I18nextProvider>
      </HistoryRouter>
    </QueryClientProvider>
  )

  return {
    component: rtlRender(component, { wrapper: Wrapper }),
    onSessionSettingsContextValueChange: onSessionSettingsChange,
    onFontContextValueChange: onFontChange,
    onNotificationContextValueChange: onNotificationChange,
    onUserContextValueChange: onUserChange,
    history
  }
}

const wrapper = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}

export {
  render,
  wrapper
}