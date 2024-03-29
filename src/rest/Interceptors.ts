import { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";
import RestClient from "./RestClient"
import { Environment } from "../utility/Environment"
import api from "./API"

export interface RetryableAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosHeaders
  retry: boolean
}

interface RefreshTokenResponse {
  accessToken: string
  refreshToken: string
}

/**
 * Used when intercepting Axios errors and refreshing JWT access tokens.
 * Ignores the log-in endpoint and only acts on 401 bad requests.
 *
 * If the refresh-token endpoint itself fails, then the attempt is discarded.
 * Upon success, the new access and refresh tokens are dispatched via Redux and
 * updated in the user object in the browsers local storage.
 *
 * @param error The error object from Axios containing request/response details.
 */
export const refreshTokenInterceptor = async (error: AxiosError) => {
  const config = error.config as RetryableAxiosRequestConfig

  const failureErrorMessage = "Failed to refresh session. Please sign-in again."

  const refreshEndpoint = `${Environment.variable("API_HOST_URI")}/user/refresh-token`
  if (config && config.url === refreshEndpoint && error.response && error.response.status !== 200) {
    const username = "{PLACEHOLDER}" // TODO: Get user from context in JPUI-58
    // store.dispatch(clearUser()) // TODO: Clear from context in JPUI-58
    window.location.href = `${import.meta.env.VITE_BASE_PATH}/login?session-expired=true&username=${username}`
  }

  if (config.url !== "/user/login" && error.response) {
    if (error.response.status === 401 && !config.retry) {
      config.retry = true
      const refreshToken = "{PLACEHOLDER}}" // TODO: Get refresh token from context in JPUI-58
      return RestClient.post<RefreshTokenResponse>("/user/refresh-token", { token: refreshToken })
        .then((response) => {
          if (response.data) {
            // store.dispatch(setAccessToken(response.data.accessToken)) // TODO: Set access token in context in JPUI-58
            // store.dispatch(setRefreshToken(response.data.refreshToken)) // TODO: Set refresh token in context in JPUI-58
            return api(config)
          }
        })
        .catch(() => {
          return Promise.reject(failureErrorMessage)
        })
    }
  }

  return Promise.reject(error)
}
