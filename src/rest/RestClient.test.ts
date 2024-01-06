import RestClient from "./RestClient.ts"
import { Environment } from "../utility/Environment.ts"
import { store } from "../store.ts"
import { setUser } from "../slices/UserSlice.ts"
import api from "./API.ts"
import PatchRequest from "./request/patch/PatchRequest.ts"
import PatchReplaceOperation from "./request/patch/PatchReplaceOperation.ts"
import { testUser } from "../setupTests.ts"

vi.mock("rest/API")
const mockApi = api as jest.MockedFunction<typeof api>

interface ExampleResponse {
  value: string
}

describe("Rest Client", () => {
  const environment = vi.fn()

  beforeEach(() => {
    Environment.variable = environment
    environment.mockReturnValue("https://japanese.tomplumpton.me/learn-japanese")
    store.dispatch(setUser(testUser))
  })

  describe("GET", () => {
    it("Should map the response JSON to the specified type when the API call is successful", async () => {
      mockApi.mockResolvedValue({
        config: {},
        status: 200,
        headers: {},
        statusText: "Success",
        data: { value: "test-value" }
      })

      return RestClient.get<ExampleResponse>("/kanji/by-character/人").then((response) => {
        expect(response).toStrictEqual({
          status: 200,
          error: undefined,
          data: { value: "test-value" }
        })
      })
    })

    it("Should call axios with the correct URI and configuration", () => {
      mockApi.mockResolvedValue({
        config: {},
        status: 200,
        headers: {},
        statusText: "Success",
        data: { value: "test-value" }
      })

      return RestClient.get<ExampleResponse>("/kanji/by-character/人").then(() => {
        expect(mockApi).toHaveBeenLastCalledWith(
          "https://japanese.tomplumpton.me/learn-japanese/kanji/by-character/人",
          {
            method: "GET",
            headers: { "Content-Type": "application/json", Authorization: "Bearer TOKEN" },
            data: undefined
          }
        )
      })
    })

    it("Should return an error response when the promise is rejected and the error has a response", () => {
      mockApi.mockRejectedValue({ response: { data: "He's dead Jim.", status: 500 } })

      return RestClient.get<ExampleResponse>("/kanji/by-character/人").catch((response) => {
        expect(response).toStrictEqual({
          data: "He's dead Jim.",
          status: 500,
          error: undefined
        })
      })
    })

    it("Should return an authentication error if the promise is rejected with a response and 401 status", () => {
      mockApi.mockRejectedValue({ response: { error: "Unauthorised.", status: 401 } })

      return RestClient.get<ExampleResponse>("/kanji/by-character/人").catch((response) => {
        expect(response).toStrictEqual({
          data: undefined,
          status: 401,
          error: "User is not authenticated."
        })
      })
    })

    it("Should return an error response when the promise is rejected and the error has a request", () => {
      mockApi.mockRejectedValue({ request: { status: 500 } })

      return RestClient.get<ExampleResponse>("/kanji/by-character/人").catch((response) => {
        expect(response).toStrictEqual({
          data: undefined,
          status: 500,
          error: "No response returned from the API"
        })
      })
    })

    it("Should return an error response when the promise is rejected and the error has not request or response", () => {
      mockApi.mockRejectedValue({})

      return RestClient.get<ExampleResponse>("/kanji/by-character/人").catch((response) => {
        expect(response).toStrictEqual({
          data: undefined,
          status: 400,
          error: "Something went wrong while setting up the request."
        })
      })
    })

    it("Should throw an error if the endpoint is undefined", async () => {
      await expect(() => RestClient.get("")).rejects.toThrow("Endpoint is not defined!")
    })

    it("Should throw an error if the host is undefined", async () => {
      environment.mockReturnValueOnce(undefined)
      await expect(() => RestClient.get("")).rejects.toThrow("Host URI is not defined!")
    })
  })

  describe("POST", () => {
    it("Should call axios with the correct URI and configuration", () => {
      mockApi.mockResolvedValue({
        config: {},
        status: 200,
        headers: {},
        statusText: "Success",
        data: { value: "test-value" }
      })

      return RestClient.post<ExampleResponse>("/kanji/by-character/人", { request: "Hello" }).then(() => {
        expect(mockApi).toHaveBeenLastCalledWith(
          "https://japanese.tomplumpton.me/learn-japanese/kanji/by-character/人",
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: "Bearer TOKEN" },
            data: '{"request":"Hello"}'
          }
        )
      })
    })

    it("Should throw an error if the endpoint is undefined", async () => {
      await expect(() => RestClient.post("", {})).rejects.toThrow("Endpoint is not defined!")
    })

    it("Should throw an error if the host is undefined", async () => {
      environment.mockReturnValueOnce(undefined)
      await expect(() => RestClient.post("", {})).rejects.toThrow("Host URI is not defined!")
    })
  })

  describe("PUT", () => {
    it("Should call axios with the correct URI and configuration", () => {
      mockApi.mockResolvedValue({
        config: {},
        status: 201,
        headers: {},
        statusText: "Success",
        data: { value: "test-value" }
      })

      return RestClient.put<undefined>("/user/set-nickname/tom").then(() => {
        expect(mockApi).toHaveBeenLastCalledWith(
          "https://japanese.tomplumpton.me/learn-japanese/user/set-nickname/tom",
          {
            method: "PUT",
            headers: { "Content-Type": "application/json", Authorization: "Bearer TOKEN" }
          }
        )
      })
    })

    it("Should call axios with the correct the given request body if one is passed", () => {
      mockApi.mockResolvedValue({
        config: {},
        status: 201,
        headers: {},
        statusText: "Success",
        data: { value: "test-value" }
      })

      return RestClient.put<undefined>("/user/set-nickname/tom", { key: "value" }).then(() => {
        expect(mockApi).toHaveBeenLastCalledWith(
          "https://japanese.tomplumpton.me/learn-japanese/user/set-nickname/tom",
          {
            method: "PUT",
            data: '{"key":"value"}',
            headers: { "Content-Type": "application/json", Authorization: "Bearer TOKEN" }
          }
        )
      })
    })

    it("Should throw an error if the endpoint is undefined", async () => {
      await expect(() => RestClient.put("", {})).rejects.toThrow("Endpoint is not defined!")
    })

    it("Should throw an error if the host is undefined", async () => {
      environment.mockReturnValueOnce(undefined)
      await expect(() => RestClient.put("", {})).rejects.toThrow("Host URI is not defined!")
    })
  })

  describe("PATCH", () => {
    it("Should call axios with the correct URI and configuration", () => {
      mockApi.mockResolvedValue({
        config: {},
        status: 201,
        headers: {},
        statusText: "Success",
        data: { value: "test-value" }
      })

      return RestClient.patch<undefined>("/user/set-nickname/tom").then(() => {
        expect(mockApi).toHaveBeenLastCalledWith(
          "https://japanese.tomplumpton.me/learn-japanese/user/set-nickname/tom",
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json", Authorization: "Bearer TOKEN" }
          }
        )
      })
    })

    it("Should call axios with the correct the given request body if one is passed", () => {
      mockApi.mockResolvedValue({
        config: {},
        status: 201,
        headers: {},
        statusText: "Success",
        data: { value: "test-value" }
      })

      return RestClient.patch<undefined>("/user/set-nickname/tom", { key: "value" }).then(() => {
        expect(mockApi).toHaveBeenLastCalledWith(
          "https://japanese.tomplumpton.me/learn-japanese/user/set-nickname/tom",
          {
            method: "PATCH",
            data: '{"key":"value"}',
            headers: { "Content-Type": "application/json", Authorization: "Bearer TOKEN" }
          }
        )
      })
    })

    it("Should throw an error if the endpoint is undefined", async () => {
      await expect(() => RestClient.patch("", {})).rejects.toThrow("Endpoint is not defined!")
    })

    it("Should throw an error if the host is undefined", async () => {
      environment.mockReturnValueOnce(undefined)
      await expect(() => RestClient.patch("", {})).rejects.toThrow("Host URI is not defined!")
    })
  })

  describe("PATCH JSON", () => {
    it("Should call axios with the correct URI and configuration", () => {
      mockApi.mockResolvedValue({
        config: {},
        status: 201,
        headers: {},
        statusText: "Success",
        data: { value: "test-value" }
      })

      const request = new PatchRequest([new PatchReplaceOperation("theme", "Dark")])
      return RestClient.patchJSON<undefined>("/user/update-preferences", request).then(() => {
        expect(mockApi).toHaveBeenLastCalledWith(
          "https://japanese.tomplumpton.me/learn-japanese/user/update-preferences",
          {
            method: "PATCH",
            data: '[{"op":"replace","path":"/theme","value":"Dark"}]',
            headers: { "Content-Type": "application/json-patch+json", Authorization: "Bearer TOKEN" }
          }
        )
      })
    })

    it("Should throw an error if the endpoint is undefined", async () => {
      const request = new PatchRequest([new PatchReplaceOperation("/theme", "Dark")])
      await expect(() => RestClient.patchJSON("", request)).rejects.toThrow("Endpoint is not defined!")
    })

    it("Should throw an error if the host is undefined", async () => {
      environment.mockReturnValueOnce(undefined)
      const request = new PatchRequest([new PatchReplaceOperation("/theme", "Dark")])
      await expect(() => RestClient.patchJSON("", request)).rejects.toThrow("Host URI is not defined!")
    })
  })

  describe("DELETE", () => {
    it("Should call axios with the correct URI and configuration", () => {
      mockApi.mockResolvedValue({
        config: {},
        status: 204,
        headers: {},
        statusText: "Success",
        data: { value: "test-value" }
      })

      return RestClient.delete<undefined>("/user/delete").then(() => {
        expect(mockApi).toHaveBeenLastCalledWith("https://japanese.tomplumpton.me/learn-japanese/user/delete", {
          method: "DELETE",
          headers: { "Content-Type": "application/json", Authorization: "Bearer TOKEN" }
        })
      })
    })

    it("Should throw an error if the endpoint is undefined", async () => {
      await expect(() => RestClient.delete("", {})).rejects.toThrow("Endpoint is not defined!")
    })

    it("Should throw an error if the host is undefined", async () => {
      environment.mockReturnValueOnce(undefined)
      await expect(() => RestClient.delete("", {})).rejects.toThrow("Host URI is not defined!")
    })
  })

  describe("Send", () => {
    it("Should call axios with the correct method, URI and configuration", () => {
      mockApi.mockResolvedValue({
        config: {},
        status: 204,
        headers: {},
        statusText: "Success",
        data: { value: "test-value" }
      })

      return RestClient.send<undefined>("GET", "/test/endpoint", { value: "test" }).then(() => {
        expect(mockApi).toHaveBeenLastCalledWith("https://japanese.tomplumpton.me/learn-japanese/test/endpoint", {
          method: "GET",
          headers: { "Content-Type": "application/json", Authorization: "Bearer TOKEN" },
          data: '{"value":"test"}'
        })
      })
    })
  })
})
