import { AxiosError, AxiosRequestConfig } from "axios"
import { clearUser, setAccessToken, setRefreshToken } from "../slices/UserSlice"
import RestClient from "./RestClient"
import { Environment } from "../utility/Environment"
import api from "./API"
import { EnhancedStore } from "@reduxjs/toolkit"

export interface RetryableAxiosRequestConfig extends AxiosRequestConfig {
    retry: boolean
}

interface RefreshTokenResponse {
    accessToken: string
    refreshToken: string
}

let store: EnhancedStore

/**
 * Injects the Redux store instance to avoid circular dependencies.
 * @param _store The store instance as injected into the global provider.
 */
export const injectStore = (_store: EnhancedStore) => {
    store = _store
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
        const username = store.getState().user.user.username
        store.dispatch(clearUser())
        window.location.href = `/login?session-expired=true&username=${username}`
    }

    if (config.url !== "/user/login" && error.response) {
        if (error.response.status === 401 && !config.retry) {
            config.retry = true
            const refreshToken = store.getState().user.user?.refreshToken
            return RestClient.post<RefreshTokenResponse>("/user/refresh-token", { token: refreshToken })
                .then((response) => {
                    if (response.data) {
                        store.dispatch(setAccessToken(response.data.accessToken))
                        store.dispatch(setRefreshToken(response.data.refreshToken))
                        return api(config)
                    }
                })
                .catch((err) => {
                    return Promise.reject(failureErrorMessage)
                })
        }
    }

    return Promise.reject(error)
}
