import { refreshTokenInterceptor } from "../../rest/Interceptors";
import { AxiosError } from "axios";
import RestClient from "../../rest/RestClient";
import { store } from "../../store";
import { setAccessToken, setRefreshToken, setUser } from "../../slices/UserSlice";

const mockPost = jest.fn();

beforeEach(() => {
    RestClient.post = mockPost;
    store.dispatch(setUser({
        username: "TomPlum42",
        nickname: "Tom",
        email: "tom@hotmail.com",
        creationDate: "2021-08-09T00:00",
        expired: false,
        locked: false,
        credentialsExpired: false,
        enabled: true,
        roles: ["user"],
        token: "TOKEN",
        refreshToken: "REFRESH_TOKEN",
        preferences: {
            defaultFont: "Gothic",
            theme: "Dark Mode",
            language: "English",
            highScores: "Ask Each Time",
            defaultMode: "Play",
            cardsPerDay: 10,
            confidenceMenuStyle: "Numbers 1 - 6"
        }
    }));
    store.dispatch(setAccessToken(""));
    store.dispatch(setRefreshToken(""));
});

describe("Axios Interceptors", () => {
    describe("Refresh Token Interceptor", () => {
        it("Should return an error if the failed request is the refresh-token endpoint", () => {
            const error: AxiosError = {
                config: {
                    url: "/user/refresh-token",
                },
                response: {
                    data: {},
                    status: 401,
                    statusText: "Bad Request",
                    headers: {},
                    config: {}
                },
                isAxiosError: false,
                toJSON: () => { return {} },
                name: "",
                message: "Something went wrong"
            };
            return refreshTokenInterceptor(error).then(response => {
                expect(response).toStrictEqual({ error: "Failed to refresh session. Please sign-in again." });
            });
        });

        it("Should not fire any requests and reject the promise if the URI is login", () => {
            const error: AxiosError = {
                config: {
                    url: "/user/login",
                },
                response: {
                    data: {},
                    status: 401,
                    statusText: "Bad Request",
                    headers: {},
                    config: {}
                },
                isAxiosError: false,
                toJSON: () => { return {} },
                name: "",
                message: "Something went wrong"
            };
            return refreshTokenInterceptor(error).catch(response => {
                expect(mockPost).not.toHaveBeenCalled();
                expect(response).toBe("Failed to refresh session. Please sign-in again.");
            });
        });

        it("Should return not fire any requests and reject the promise if the URI is NOT login, but is NOT HTTP 401", () => {
            const error: AxiosError = {
                config: {
                    url: "/user/login",
                },
                response: {
                    data: {},
                    status: 503,
                    statusText: "Internal Server Error",
                    headers: {},
                    config: {}
                },
                isAxiosError: false,
                toJSON: () => { return {} },
                name: "",
                message: "Something went wrong"
            };
            return refreshTokenInterceptor(error).catch(response => {
                expect(mockPost).not.toHaveBeenCalled();
                expect(response).toBe("Failed to refresh session. Please sign-in again.");
            });
        });

        it("Should call the refresh-token endpoint with the refresh token from the Redux store", () => {
            mockPost.mockResolvedValueOnce({ data: { accessToken: "ACCESS_TOKEN", refreshToken: "REFRESH_TOKEN" }});
            store.dispatch(setRefreshToken("ca6b68d4-85cb-45f5-b1fa-2ead8faa77ec"));
            const error: AxiosError = {
                config: {
                    url: "/user/set-nickname",
                },
                response: {
                    data: {},
                    status: 401,
                    statusText: "Bad Request",
                    headers: {},
                    config: {}
                },
                isAxiosError: false,
                toJSON: () => { return {} },
                name: "",
                message: "Something went wrong"
            };
            return refreshTokenInterceptor(error).then(() => {
                expect(mockPost).toHaveBeenCalledWith("/user/refresh-token", {
                    token: "ca6b68d4-85cb-45f5-b1fa-2ead8faa77ec"
                });
                expect(store.getState().user.user?.token).toBe("ACCESS_TOKEN");
                expect(store.getState().user.user?.refreshToken).toBe("REFRESH_TOKEN");
            });
        });

        it("Should return an error message if the refresh-token endpoint has no data", () => {
            mockPost.mockResolvedValueOnce({ data: undefined });
            store.dispatch(setRefreshToken("ca6b68d4-85cb-45f5-b1fa-2ead8faa77ec"));
            const error: AxiosError = {
                config: {
                    url: "/user/set-nickname",
                },
                response: {
                    data: {},
                    status: 401,
                    statusText: "Bad Request",
                    headers: {},
                    config: {}
                },
                isAxiosError: false,
                toJSON: () => { return {} },
                name: "",
                message: "Something went wrong"
            };
            return refreshTokenInterceptor(error).catch(response => {
                expect(response).toBe("Failed to refresh session. Please sign-in again.");
            });
        });

        it("Should return an error message if the refresh-token call is rejected", () => {
            mockPost.mockRejectedValueOnce({});
            store.dispatch(setRefreshToken("ca6b68d4-85cb-45f5-b1fa-2ead8faa77ec"));
            const error: AxiosError = {
                config: {
                    url: "/user/set-nickname",
                },
                response: {
                    data: { },
                    status: 401,
                    statusText: "Bad Request",
                    headers: {},
                    config: {}
                },
                isAxiosError: false,
                toJSON: () => { return {} },
                name: "",
                message: "Something went wrong"
            };
            return refreshTokenInterceptor(error).catch(response => {
                expect(response).toBe("Failed to refresh session. Please sign-in again.");
            });
        });
    });
});
