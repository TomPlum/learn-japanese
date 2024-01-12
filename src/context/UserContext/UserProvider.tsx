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
import useSetPreference from "context/UserContext/useSetPreference.ts";

const UserProvider = ({ initialUser, children }: PropsWithChildren<UserProviderProps>) => {
  const [user, setUser] = useLocalStorage<User>("user", initialUser)
  const { updateUserPreference } = useSetPreference()

  useEffect(() => {
    if (user) {
      localStorage.setItem("i18nextLng", user?.preferences.language === "English" ? "en" : "jp")
    }
  }, [user?.preferences.language]);

  const setPreferences = useCallback((preferences: UserPreferences) => {
    if (user) {
      setUser(current => {
        return {
          ...current,
          preferences
        }
      })
    }
  }, [user, setUser])

  const setPreference = useCallback(({ preference, value }: SetPreferenceRequest) => {
    if (user) {
      const updatedUser = updateUserPreference(user, preference, value)
      setUser(updatedUser)
    }
  }, [user, setUser])

  const setAccessToken = useCallback((token: string) => {
    if (user) {
      setUser(current => {
        return {
          ...current,
          token: token
        }
      })
    }
  }, [user, setUser])

  const setRefreshToken = useCallback((token: string) => {
    if (user) {
      setUser(current => {
        return {
          ...current,
          refreshToken: token
        }
      })
    }
  }, [user, setUser])

  const setNickName = useCallback((name: string) => {
    if (user) {
      setUser(current => {
        return {
          ...current,
          nickname: name
        }
      })
    }
  }, [user, setUser])

  const clearUser = useCallback(() => {
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