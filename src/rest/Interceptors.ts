import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { store } from "../store";
import { setAccessToken, setRefreshToken } from "../slices/UserSlice";
import RestClient, { RefreshTokenResponse } from "./RestClient";

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
                } else {
                    return { error: failureErrorMessage };
                }
            }).catch(err => {
                return { error: failureErrorMessage };
            });
        }
    }
}
