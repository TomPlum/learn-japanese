import RestClient from "../rest/RestClient"
import DataResponse from "../rest/response/DataResponse"
import UpdateResponse from "../rest/response/UpdateResponse"


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

export default { register, logout, deleteAccount }
