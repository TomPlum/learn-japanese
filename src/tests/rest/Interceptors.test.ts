import { injectStore, refreshTokenInterceptor } from "../../rest/Interceptors";
import { AxiosError } from "axios";
import RestClient from "../../rest/RestClient";
import { store } from "../../store";
import { setAccessToken, setRefreshToken, setUser } from "../../slices/UserSlice";
import { Environment } from "../../utility/Environment";
import api from "../../rest/API";
import { testUser } from "../../setupTests";

jest.mock("../../rest/API");
const mockApi = api as jest.MockedFunction<typeof api>;
const mockPost = jest.fn();
const mockEnvironment = jest.fn();

beforeEach(() => {
    RestClient.post = mockPost;
    Environment.variable = mockEnvironment;
    injectStore(store);
    store.dispatch(setUser(testUser));
    store.dispatch(setAccessToken(""));
    store.dispatch(setRefreshToken(""));
});

describe("Axios Interceptors", () => {
    describe("Refresh Token Interceptor", () => {
        it("Should clear the store if the failed request is the refresh-token endpoint", () => {
            mockEnvironment.mockReturnValueOnce("https://japanese.tomplumpton.me/learn-japanese"); // Mock Host URI
            store.dispatch(setUser(testUser)); // Assume session was active
            const error: AxiosError = {
                config: {
                    url: "https://japanese.tomplumpton.me/learn-japanese/user/refresh-token",
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
                expect(store.getState().user.user).toBeUndefined();
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
                    url: "/user/set-nickname"
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
                expect(mockApi).toHaveBeenCalledWith({ retry: true, url: "/user/set-nickname" });
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
