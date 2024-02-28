import RestClient from "../rest/RestClient.ts"
import authentication from "./AuthenticationService.ts"
import { localStorageMock } from "../setupTests.ts"

describe("Authentication Service", () => {
  const restGet = vi.fn()
  const restPost = vi.fn()
  const restDelete = vi.fn()

  beforeEach(() => {
    RestClient.get = restGet
    RestClient.post = restPost
    RestClient.delete = restDelete
  })

  afterEach(() => {
    localStorageMock.clear()
  })

  describe("Delete Account", () => {
    it("Should call the correct endpoint and request body", async () => {
      restDelete.mockResolvedValueOnce({})
      return authentication.deleteAccount("MyPassword").then(() => {
        expect(restDelete).toHaveBeenLastCalledWith("/user/delete", { password: "MyPassword" })
      })
    })

    it("Should return true if the API call succeeds", async () => {
      restDelete.mockResolvedValueOnce({})
      return authentication.deleteAccount("MyPassword").then((response) => {
        expect(response).toStrictEqual({ success: true })
      })
    })

    it("Should return false if the API call fails", async () => {
      restDelete.mockRejectedValueOnce({ data: { error: "Internal Server Error" } })
      return authentication.deleteAccount("MyPassword").then((response) => {
        expect(response.success).toBe(false)
      })
    })

    it("Should return incorrect password message if the API returns PASSWORD_DOES_NOT_MATCH", async () => {
      restDelete.mockRejectedValueOnce({ data: { error: "PASSWORD_DOES_NOT_MATCH" } })
      return authentication.deleteAccount("MyPassword").then((response) => {
        expect(response.error).toBe("Your password is incorrect.")
      })
    })

    it("Should return a generic error message if the API call fails with an unknown error code", async () => {
      restDelete.mockRejectedValueOnce({ data: { error: "UNKNOWN_CODE" } })
      return authentication.deleteAccount("MyPassword").then((response) => {
        expect(response.error).toBe("Something went wrong. Please try again.")
      })
    })
  })
})
