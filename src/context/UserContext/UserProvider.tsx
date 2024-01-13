import {
  SetPreferenceRequest,
  User,
  UserContextBag,
  UserPreferences,
  UserProviderProps
} from "context/UserContext/types.ts";
import { PropsWithChildren, useCallback, useEffect, useMemo } from "react";
import UserContext from "context/UserContext/UserContext.ts";
import useSetPreference from "context/UserContext/useSetPreference.ts";
import useLocalStorage from "hooks/useLocalStorage";

const UserProvider = ({ children }: PropsWithChildren<UserProviderProps>) => {
  const [user, setUser] = useLocalStorage<User>({ key: "user" })
  console.log('user in provider', user)
  const { updateUserPreference } = useSetPreference()

  useEffect(() => {
    if (user) {
      localStorage.setItem("i18nextLng", user?.preferences.language === "English" ? "en" : "jp")
    }
  }, [user?.preferences.language]);

  const setPreferences = useCallback((preferences: UserPreferences) => {
    setUser(current => {
      if (current) {
        return {
          ...current,
          preferences
        }
      }

      return undefined
    })
  }, [user, setUser])

  const setPreference = useCallback(({ preference, value }: SetPreferenceRequest) => {
    if (user) {
      const updatedUser = updateUserPreference(user, preference, value)
      setUser(updatedUser)
    }
  }, [user, setUser])

  const setAccessToken = useCallback((token: string) => {
    setUser(current => {
      if (current) {
        return {
          ...current,
          token: token
        }
      }

      return undefined
    })
  }, [user, setUser])

  const setRefreshToken = useCallback((token: string) => {
    setUser(current => {
      if (current) {
        return {
          ...current,
          refreshToken: token
        }
      }

      return undefined
    })
  }, [user, setUser])

  const setNickName = useCallback((name: string) => {
    setUser(current => {
      if (current) {
        return {
          ...current,
          nickname: name
        }
      }

      return undefined
    })
  }, [user, setUser])

  const clearUser = useCallback(() => {
    setUser(undefined)
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