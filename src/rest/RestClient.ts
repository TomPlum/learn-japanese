import { AxiosError, AxiosResponse, Method } from "axios"
import { Environment } from "../utility/Environment"
import api from "./API"
import { store } from "../store"
import { refreshTokenInterceptor } from "./Interceptors"
import PatchRequest from "./request/patch/PatchRequest"

api.interceptors.response.use((response: AxiosResponse) => {
  return response
}, refreshTokenInterceptor)

export interface APIResponse<T> {
  data: T | undefined
  status: number
  error?: string
}

class RestClient {
  static async get<T>(endpoint: string): Promise<APIResponse<T>> {
    return await RestClient.makeRestRequest<T>("GET", endpoint)
  }

  static async post<T>(endpoint: string, body: object): Promise<APIResponse<T>> {
    return await RestClient.makeRestRequest<T>("POST", endpoint, body)
  }

  static async put<T>(endpoint: string, body?: object): Promise<APIResponse<T>> {
    return await RestClient.makeRestRequest<T>("PUT", endpoint, body)
  }

  static async delete<T>(endpoint: string, body?: object): Promise<APIResponse<T>> {
    return await RestClient.makeRestRequest<T>("DELETE", endpoint, body)
  }

  static async patch<T>(endpoint: string, body?: object): Promise<APIResponse<T>> {
    return await RestClient.makeRestRequest<T>("PATCH", endpoint, body)
  }

  static async patchJSON<T>(endpoint: string, request: PatchRequest): Promise<APIResponse<T>> {
    return await RestClient.makeRestRequest<T>("PATCH", endpoint, request.toJSON(), "application/json-patch+json")
  }

  static async send<T>(method: Method, endpoint: string, body?: object): Promise<APIResponse<T>> {
    return await RestClient.makeRestRequest<T>(method, endpoint, body)
  }

  private static async makeRestRequest<T>(
    method: Method,
    endpoint: string,
    body?: object,
    contentType?: string
  ): Promise<APIResponse<T>> {
    const host = Environment.variable("API_HOST_URI")

    if (!host) {
      throw new ReferenceError("Host URI is not defined!")
    }

    if (!endpoint) {
      throw new ReferenceError("Endpoint is not defined!")
    }

    const URI = host + endpoint
    //console.log("Sending " + method + " request to " + URI);

    return await api(URI, {
      method: method,
      headers: {
        "Content-Type": contentType ?? "application/json",
        Authorization: `Bearer ${store.getState().user.user?.token}`
      },
      data: body ? JSON.stringify(body) : undefined
    })
      .then(async (response) => {
        //console.log("Successfully received " + response.status + " response");
        return {
          error: undefined,
          data: response.data,
          status: response.status
        }
      })
      .catch((e: AxiosError<APIResponse<any>>) => {
        //console.log("An error occurred while making a request to " + endpoint, e);
        if (e.response) {
          if (e.response.status === 401) {
            return Promise.reject({
              data: undefined,
              status: 401,
              error: "User is not authenticated."
            })
          }

          return Promise.reject({
            data: e.response.data,
            status: e.response.status,
            error: e.response.data.error
          })
        } else if (e.request) {
          return Promise.reject({
            data: undefined,
            status: e.request.status,
            error: "No response returned from the API"
          })
        } else {
          return Promise.reject({
            data: undefined,
            status: 400,
            error: "Something went wrong while setting up the request."
          })
        }
      })
  }
}

export default RestClient
