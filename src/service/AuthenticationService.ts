import RestClient, { APIResponse } from "../rest/RestClient"
import { UserPreferencesResponse } from "./UserService"
import DataResponse from "../rest/response/DataResponse"
import UpdateResponse from "../rest/response/UpdateResponse"

export interface LoginResponse {
  username: string
  email: string
  nickname?: string
  roles: string[]
  locked: boolean
  expired: boolean
  credentialsExpired: boolean
  creationDate: string
  enabled: boolean
  token: string
  refreshToken: string
  preferences: UserPreferencesResponse
}

export interface SignUpResponse {
  username: string
  email: string
  nickname?: string
}

const register = (
  username: string,
  email: string,
  password: string,
  nickname?: string
): Promise<DataResponse<SignUpResponse>> => {
  const request = { username: username, email: email, password: password, nickname: nickname }

  return RestClient.post<SignUpResponse>("/user/register", request).then((response) => {
    if (!response.data) {
      return { success: false, error: "No data returned post user-registration." }
    }
    return { success: true, data: response.data }
  })
}

const login = (username: string, password: string): Promise<LoginResponse> => {
  return RestClient.post<LoginResponse>("/user/login", {
    username: username,
    password: password
  })
    .then((response: APIResponse<LoginResponse>) => {
      if (response?.data?.token) {
        localStorage.setItem("user", JSON.stringify(response.data))
      } else {
        return Promise.reject({ error: "An error occurred when trying to authenticate the user." })
      }
      return response.data
    })
    .catch((response: APIResponse<LoginResponse>) => {
      if (response.status === 401) {
        return Promise.reject("AUTHENTICATION_ERROR")
      }
      return Promise.reject("Unknown login error: " + response.error)
    })
}

const logout = () => {
  localStorage.removeItem("user")
}

const deleteAccount = (password: string): Promise<UpdateResponse> => {
  return RestClient.delete<UpdateResponse>("/user/delete", { password: password })
    .then(() => {
      return { success: true }
    })
    .catch((response) => {
      return {
        success: false,
        error:
          response.data.error === "PASSWORD_DOES_NOT_MATCH"
            ? "Your password is incorrect."
            : "Something went wrong. Please try again."
      }
    })
}

export default { register, login, logout, deleteAccount }
