import { useLocalStorage } from "@uidotdev/usehooks";
import {
  SetPreferenceRequest,
  User,
  UserContextBag,
  UserPreferences,
  UserProviderProps
} from "context/UserContext/types.ts";
import { PropsWithChildren, useCallback, useEffect, useMemo } from "react";
import UserContext from "context/UserContext/UserContext.ts";
import { Preference } from "../../domain/user/Preference.ts";

const UserProvider = ({ initialUser, children }: PropsWithChildren<UserProviderProps>) => {
  const [user, setUser] = useLocalStorage<User | undefined>("user", initialUser)

  useEffect(() => {
    if (user) {
      localStorage.setItem("i18nextLng", user?.preferences.language === "English" ? "en" : "jp")
    }
  }, [user?.preferences.language]);

  const setPreferences = useCallback((preferences: UserPreferences) => {
    if (user) {
      setUser(current => {
        if (current) {
          return {
            ...current,
            preferences
          }
        }
      })
    }
  }, [user, setUser])

  const setPreference = useCallback(({ preference, value }: SetPreferenceRequest) => {
    if (user) {
      setUser(current => {
        if (current) {
          switch (preference) {
            case Preference.PROFILE_VISIBILITY: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  profileVisibility: value
                }
              }
            }
            case Preference.LANGUAGE: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  language: value
                }
              }
            }
            case Preference.ROMAJI_VISIBILITY: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  romajiVisibility: value
                }
              }
            }
            case Preference.HIGH_SCORES_BEHAVIOUR: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  highscoresBehaviour: value
                }
              }
            }
            case Preference.STREAK_CARD_VIEW: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  streakCardView: value
                }
              }
            }
            case Preference.CONFIDENCE_MENU_STYLE: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  confidenceMenuStyle: value
                }
              }
            }
            case Preference.DEFAULT_KANJI_FONT: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  kanjiFont: value
                }
              }
            }
            case Preference.ACTIVITY_FEED_QUANTITY: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  activityFeedQuantity: value
                }
              }
            }
            case Preference.FLASH_CARDS_QUANTITY: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  flashCardsQuantity: value
                }
              }
            }
            case Preference.THEME: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  theme: value
                }
              }
            }
            case Preference.STREAK_NOTIFICATIONS: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  streakNotifications: value
                }
              }
            }
            case Preference.MISTAKES_REMINDERS: {
              return {
                ...current,
                preferences: {
                  ...current.preferences,
                  mistakesReminder: value
                }
              }
            }
            default: {
              return current
            }
          }
        }
      })
    }
  }, [user, setUser])

  const setAccessToken = useCallback((token: string) => {
    if (user) {
      setUser(current => {
        if (current) {
          return {
            ...current,
            token: token
          }
        }
      })
    }
  }, [user, setUser])

  const setRefreshToken = useCallback((token: string) => {
    if (user) {
      setUser(current => {
        if (current) {
          return {
            ...current,
            refreshToken: token
          }
        }
      })
    }
  }, [user, setUser])

  const setNickName = useCallback((name: string) => {
    if (user) {
      setUser(current => {
        if (current) {
          return {
            ...current,
            nickname: name
          }
        }
      })
    }
  }, [user, setUser])

  const clearUser = useCallback(() => {
    setUser(undefined)
    localStorage.removeItem('user')
  }, [setUser])

  const values: UserContextBag = useMemo(() => ({
    user,
    setUser,
    setPreferences,
    setPreference,
    setNickName,
    setAccessToken,
    setRefreshToken,
    clearUser
  }), [user, setUser, setPreferences, setPreference, setNickName, setAccessToken, setRefreshToken, clearUser])

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider