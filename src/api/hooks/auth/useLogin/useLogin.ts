import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import useClient from "api/useClient";
import { LoginRequest, LoginResponse } from "api/hooks/auth/useLogin/types.ts";
import { AxiosError, AxiosResponse } from "axios";
import { mutationKeys } from "api/mutationKeys.ts";
import { useUserContext } from "context/UserContext";

const useLogin = () => {
  const client = useClient()
  const { setUser } = useUserContext()

  const storeUserInContext = useCallback((res: LoginResponse) => {
    localStorage.setItem("user", JSON.stringify(res))

    setUser({
      username: res.username,
      email: res.email,
      nickname: res.nickname,
      roles: res.roles,
      locked: res.locked,
      expired: res.expired,
      credentialsExpired: res.credentialsExpired,
      enabled: res.enabled,
      creationDate: res.creationDate,
      token: res.token,
      refreshToken: res.refreshToken,
      preferences: {
        kanjiFont: res.preferences.kanjiFont,
        language: res.preferences.language,
        theme: res.preferences.theme,
        confidenceMenuStyle: res.preferences.confidenceMenuStyle,
        highScoresBehaviour: res.preferences.highScoresBehaviour,
        flashCardsQuantity: res.preferences.flashCardsQuantity,
        defaultMode: res.preferences.defaultMode,
        streakCardView: res.preferences.streakCardView,
        profileVisibility: res.preferences.profileVisibility,
        activityFeedQuantity: res.preferences.activityFeedQuantity,
        romajiVisibility: res.preferences.romajiVisibility,
        mistakesReminders: res.preferences.mistakesReminders,
        streakNotifications: res.preferences.streakNotifications
      }
    })
  }, [setUser])

  const login = useCallback(async (request: LoginRequest): Promise<LoginResponse> => {
    const { data } = await client.post<
      LoginRequest,
      AxiosResponse<LoginResponse>,
      LoginRequest
    >('/user/login', request)

    storeUserInContext(data)

    return data
  }, [client])

  return useMutation({
    mutationFn: login,
    mutationKey: [mutationKeys.login],
    onError: (error) => {
      const axiosError = error as AxiosError
      const status = axiosError.request.status

      if (status === 401) {
        return Promise.reject("AUTHENTICATION_ERROR")
      }
    }
  })
}

export default useLogin