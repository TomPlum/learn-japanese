import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { store } from "../store";
import { setAccessToken, setRefreshToken } from "../slices/UserSlice";
import RestClient, { RefreshTokenResponse } from "./RestClient";

/**
 * Used when intercepting Axios errors and refreshing JWT access tokens.
 * Ignores the log-in endpoint and only acts on 401 bad requests.
 *
 * If the refresh-token endpoint itself fails, then the attempt is discarded.
 * Upon success, the new access and refresh tokens are dispatched via Redux and
 * updated in the user object in the browsers local storage.
 *
 * @param err The error object from Axios containing request/response details.
 */
export const refreshTokenInterceptor = async (err: AxiosError) => {
    const config: AxiosRequestConfig = err.config;

    const failureErrorMessage = "Failed to refresh session. Please sign-in again.";

    if (config.url === "/user/refresh-token" && err.response && err.response.status !== 200) {
        return { error: failureErrorMessage };
    }

    if (config.url !== "/user/login" && err.response) {
        if (err.response.status === 401) {
            const refreshToken = store.getState().user.user?.refreshToken;
            return RestClient.post<RefreshTokenResponse>("/user/refresh-token", { token: refreshToken }).then(response => {
                if (response.data) {
                    store.dispatch(setAccessToken(response.data.accessToken));
                    store.dispatch(setRefreshToken(response.data.refreshToken));
                }
            }).catch(err => {
                return Promise.reject(failureErrorMessage);
            });
        }
    }

    return Promise.reject(failureErrorMessage);
}
