import RestClient from "../rest/RestClient"
import UpdateResponse from "../rest/response/UpdateResponse"

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

export default { deleteAccount }
