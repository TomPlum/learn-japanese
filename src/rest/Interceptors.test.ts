import { injectStore, refreshTokenInterceptor, RetryableAxiosRequestConfig } from "./Interceptors.ts"
import { AxiosError, AxiosHeaders } from "axios";
import RestClient from "./RestClient.ts"
import { store } from "../store.ts"
import { setAccessToken, setRefreshToken, setUser } from "../slices/UserSlice.ts"
import { Environment } from "../utility/Environment.ts"
import api from "./API.ts"
import { testUser } from "../setupTests.ts"

vi.mock("rest/API")
const mockApi = api as jest.MockedFunction<typeof api>
const mockPost = vi.fn()
const mockEnvironment = vi.fn()

beforeEach(() => {
  RestClient.post = mockPost
  Environment.variable = mockEnvironment
  injectStore(store)
  store.dispatch(setUser(testUser))
  store.dispatch(setAccessToken(""))
  store.dispatch(setRefreshToken(""))
})

describe("Axios Interceptors", () => {
  describe("Refresh Token Interceptor", () => {
    it("Should clear the store if the failed request is the refresh-token endpoint", () => {
      mockEnvironment.mockReturnValueOnce("https://japanese.tomplumpton.me/learn-japanese") // Mock Host URI
      store.dispatch(setUser(testUser)) // Assume session was active
      const error: AxiosError = {
        config: {
          url: "https://japanese.tomplumpton.me/learn-japanese/user/refresh-token",
          headers: new AxiosHeaders()
        },
        response: {
          data: {},
          status: 401,
          statusText: "Bad Request",
          headers: {},
          config: {
            headers: new AxiosHeaders()
          }
        },
        isAxiosError: false,
        toJSON: () => {
          return {}
        },
        name: "",
        message: "Something went wrong"
      }
      return refreshTokenInterceptor(error).catch(() => {
        expect(store.getState().user.user).toBeUndefined()
      })
    })

    it("Should not fire any requests and reject the promise if the URI is login", () => {
      const error: AxiosError = {
        config: {
          url: "/user/login",
          headers: new AxiosHeaders()
        },
        response: {
          data: {},
          status: 401,
          statusText: "Bad Request",
          headers: {},
          config: {
            headers: new AxiosHeaders()
          }
        },
        isAxiosError: false,
        toJSON: () => {
          return {}
        },
        name: "",
        message: "Something went wrong"
      }

      return refreshTokenInterceptor(error).catch((response) => {
        expect(mockPost).not.toHaveBeenCalled()
        expect(response).toStrictEqual(error)
      })
    })

    it("Should return not fire any requests and reject the promise if the URI is NOT login, but is NOT HTTP 401", () => {
      const config: RetryableAxiosRequestConfig = {
        url: "/user/login",
        headers: new AxiosHeaders(),
        retry: true
      }

      const error: AxiosError = {
        config: config,
        response: {
          data: {},
          status: 503,
          statusText: "Internal Server Error",
          headers: {},
          config: {
            headers: new AxiosHeaders()
          }
        },
        isAxiosError: false,
        toJSON: () => {
          return {}
        },
        name: "",
        message: "Something went wrong"
      }
      return refreshTokenInterceptor(error).catch((response) => {
        expect(mockPost).not.toHaveBeenCalled()
        expect(response).toStrictEqual(error)
      })
    })

    it("Should call the refresh-token endpoint with the refresh token from the Redux store", () => {
      mockPost.mockResolvedValueOnce({ data: { accessToken: "ACCESS_TOKEN", refreshToken: "REFRESH_TOKEN" } })
      store.dispatch(setRefreshToken("ca6b68d4-85cb-45f5-b1fa-2ead8faa77ec"))

      const error: AxiosError = {
        config: {
          url: "/user/set-nickname",
          headers: new AxiosHeaders()
        },
        response: {
          data: {},
          status: 401,
          statusText: "Bad Request",
          headers: {},
          config: {
            headers: new AxiosHeaders()
          }
        },
        isAxiosError: false,
        toJSON: () => {
          return {}
        },
        name: "",
        message: "Something went wrong"
      }

      return refreshTokenInterceptor(error).then(() => {
        expect(mockPost).toHaveBeenCalledWith("/user/refresh-token", {
          token: "ca6b68d4-85cb-45f5-b1fa-2ead8faa77ec"
        })
        expect(store.getState().user.user?.token).toBe("ACCESS_TOKEN")
        expect(store.getState().user.user?.refreshToken).toBe("REFRESH_TOKEN")
        expect(mockApi).toHaveBeenCalledWith({ retry: true, url: "/user/set-nickname", headers: new AxiosHeaders() })
      })
    })

    it("Should return an error message if the refresh-token endpoint has no data", () => {
      mockPost.mockResolvedValueOnce({ data: undefined })
      store.dispatch(setRefreshToken("ca6b68d4-85cb-45f5-b1fa-2ead8faa77ec"))
      const error: AxiosError = {
        config: {
          url: "/user/set-nickname",
          headers: new AxiosHeaders()
        },
        response: {
          data: {},
          status: 401,
          statusText: "Bad Request",
          headers: {},
          config: {
            headers: new AxiosHeaders()
          }
        },
        isAxiosError: false,
        toJSON: () => {
          return {}
        },
        name: "",
        message: "Something went wrong"
      }
      return refreshTokenInterceptor(error).catch((response) => {
        expect(response).toBe("Failed to refresh session. Please sign-in again.")
      })
    })

    it("Should return an error message if the refresh-token call is rejected", () => {
      mockPost.mockRejectedValueOnce({})
      store.dispatch(setRefreshToken("ca6b68d4-85cb-45f5-b1fa-2ead8faa77ec"))
      const error: AxiosError = {
        config: {
          url: "/user/set-nickname",
          headers: new AxiosHeaders()
        },
        response: {
          data: {},
          status: 401,
          statusText: "Bad Request",
          headers: {},
          config: {
            headers: new AxiosHeaders()
          }
        },
        isAxiosError: false,
        toJSON: () => {
          return {}
        },
        name: "",
        message: "Something went wrong"
      }
      return refreshTokenInterceptor(error).catch((response) => {
        expect(response).toBe("Failed to refresh session. Please sign-in again.")
      })
    })
  })
})
