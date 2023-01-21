import UserService, { UserPreferencesResponse, UserPreferenceUpdate } from "../../service/UserService"
import RestClient from "../../rest/RestClient"
import DataResponse from "../../rest/response/DataResponse"
import { localStorageMock } from "../../setupTests"
import { Preference } from "../../domain/user/Preference"
import PatchRequest from "../../rest/request/patch/PatchRequest"
import PatchReplaceOperation from "../../rest/request/patch/PatchReplaceOperation"

const restPut = jest.fn()
const restGet = jest.fn()
const restPost = jest.fn()
const restJsonPatch = jest.fn()

RestClient.put = restPut
RestClient.get = restGet
RestClient.post = restPost
RestClient.patchJSON = restJsonPatch

let mockDate: typeof jest

beforeEach(() => {
    mockDate = jest.useFakeTimers("modern")
})

describe("User Service", () => {
    const service = new UserService()

    describe("Username Exists", () => {
        it("Should call the rest client with the correct endpoint", () => {
            restGet.mockResolvedValueOnce({})
            return service.usernameExists("TomPlum").then(() => {
                expect(restGet).toHaveBeenCalledWith("/user/exists?username=TomPlum")
            })
        })

        it("Should return exists true if the API returns true", () => {
            restGet.mockResolvedValueOnce({ data: { exists: true } })
            return service.usernameExists("TomPlum").then((response) => {
                expect(response.exists).toBe(true)
            })
        })

        it("Should return exists false if the API returns false", () => {
            restGet.mockResolvedValueOnce({ data: { exists: false } })
            return service.usernameExists("TomPlum").then((response) => {
                expect(response.exists).toBe(false)
            })
        })

        it("Should return exists false if the API does return an exists property", () => {
            restGet.mockResolvedValueOnce({ data: { error: "Oh no" } })
            return service.usernameExists("TomPlum").then((response) => {
                expect(response.exists).toBe(false)
            })
        })

        it("Should return the error message if the API returns one", () => {
            restGet.mockResolvedValueOnce({ data: { error: "Oh no" } })
            return service.usernameExists("TomPlum").then((response) => {
                expect(response.error).toBe("Oh no")
            })
        })

        it("Should return exists false if the API call is rejected", () => {
            restGet.mockRejectedValueOnce({ data: { error: "You must provide a valid query parameter" } })
            return service.usernameExists("TomPlum").then((response) => {
                expect(response.exists).toBe(false)
            })
        })

        it("Should return the error message if the API call is rejected", () => {
            restGet.mockRejectedValueOnce({ data: { error: "You must provide a valid query parameter" } })
            return service.usernameExists("TomPlum").then((response) => {
                expect(response.error).toBe("You must provide a valid query parameter")
            })
        })
    })

    describe("Email Exists", () => {
        it("Should call the rest client with the correct endpoint", () => {
            restGet.mockResolvedValueOnce({})
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then(() => {
                expect(restGet).toHaveBeenCalledWith("/user/exists?email=tomplum@hotmail.com")
            })
        })

        it("Should return exists true if the API returns true", () => {
            restGet.mockResolvedValueOnce({ data: { exists: true } })
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then((response) => {
                expect(response.exists).toBe(true)
            })
        })

        it("Should return exists false if the API returns false", () => {
            restGet.mockResolvedValueOnce({ data: { exists: false } })
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then((response) => {
                expect(response.exists).toBe(false)
            })
        })

        it("Should return exists false if the API does return an exists property", () => {
            restGet.mockResolvedValueOnce({ data: { error: "Oh no" } })
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then((response) => {
                expect(response.exists).toBe(false)
            })
        })

        it("Should return the error message if the API returns one", () => {
            restGet.mockResolvedValueOnce({ data: { error: "Oh no" } })
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then((response) => {
                expect(response.error).toBe("Oh no")
            })
        })

        it("Should return exists false if the API call is rejected", () => {
            restGet.mockRejectedValueOnce({ data: { error: "You must provide a valid query parameter" } })
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then((response) => {
                expect(response.exists).toBe(false)
            })
        })

        it("Should return the error message if the API call is rejected", () => {
            restGet.mockRejectedValueOnce({ data: { error: "You must provide a valid query parameter" } })
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then((response) => {
                expect(response.error).toBe("You must provide a valid query parameter")
            })
        })
    })

    describe("Set Nickname", () => {
        it("Should call the rest client with the correct endpoint", () => {
            restPut.mockResolvedValueOnce({})
            return service.setNickname("tom").then(() => {
                expect(restPut).toHaveBeenCalledWith("/user/set-nickname/tom")
            })
        })

        it("Should call trim the nickname if it has leading or trailing spaces", () => {
            restPut.mockResolvedValueOnce({})
            return service.setNickname(" tom ").then(() => {
                expect(restPut).toHaveBeenCalledWith("/user/set-nickname/tom")
            })
        })

        it("Should return true if the API response resolves successfully", () => {
            restPut.mockResolvedValueOnce({})
            return service.setNickname("tom").then((response) => {
                expect(response).toStrictEqual({ success: true })
            })
        })

        it("Should return true if the API response is rejected", () => {
            restPut.mockRejectedValueOnce({ error: "Internal Server Error" })
            return service.setNickname("tom").then((response) => {
                expect(response).toStrictEqual({ success: false, error: "Internal Server Error" })
            })
        })
    })

    describe("Get Preferences", () => {
        const validPreferencesResponse = {
            defaultFont: "Gothic",
            theme: "Dark Mode",
            language: "English",
            highScores: "Ask Each Time",
            defaultMode: "Play",
            cardsPerDay: 10,
            confidenceMenuStyle: "Numbers 1 - 6"
        }

        it("Should call the rest client with the correct endpoint", () => {
            restGet.mockResolvedValueOnce({ data: validPreferencesResponse })
            return service.getPreferences().then(() => {
                expect(restGet).toHaveBeenCalledWith("/user/preferences")
            })
        })

        it("Should return the preferences if the API call is successful", () => {
            restGet.mockResolvedValueOnce({ data: validPreferencesResponse })
            return service.getPreferences().then((response: DataResponse<UserPreferencesResponse>) => {
                expect(response.data).toBe(validPreferencesResponse)
            })
        })

        it("Should return undefined data with an error message if the API call fails", () => {
            restGet.mockRejectedValueOnce({ error: "Internal Server Error" })
            return service.getPreferences().then((response: DataResponse<UserPreferencesResponse>) => {
                expect(response.data).toBeUndefined()
                expect(response.error).toBe("Internal Server Error")
            })
        })
    })

    describe("Update Preferences", () => {
        const request: UserPreferenceUpdate = {
            preference: Preference.PROFILE_VISIBILITY,
            value: "Friends Only"
        }

        it("Should call the rest client with the correct endpoint and request body", () => {
            restJsonPatch.mockResolvedValueOnce({})
            return service.updatePreferences([request]).then(() => {
                expect(restJsonPatch).toHaveBeenCalledWith(
                    "/user/update-preferences",
                    new PatchRequest([new PatchReplaceOperation("profileVisibility", "Friends Only")])
                )
            })
        })

        it("test", () => {
            const arr = ["1", "2", "3"]
            const func = jest.fn()
            func("test", { example: arr, example2: "test" })
            expect(func).toHaveBeenCalledWith("test", { example: ["1", "2", "3"], example2: "test" })
        })

        it("Should return true if the API call was successful", () => {
            restJsonPatch.mockResolvedValueOnce({})
            return service.updatePreferences([request]).then((response) => {
                expect(response).toStrictEqual({ success: true })
            })
        })

        it("Should return false and an error message if the API call failed", () => {
            restJsonPatch.mockRejectedValueOnce({ error: "Internal Server Error" })
            return service.updatePreferences([request]).then((response) => {
                expect(response).toStrictEqual({ success: false, error: "Internal Server Error" })
            })
        })
    })

    describe("Is Authenticated", () => {
        beforeEach(() => {
            localStorageMock.clear()
        })

        it("Should call the is-authenticated endpoint if there is a user in local storage", () => {
            localStorageMock.setItem("user", JSON.stringify({ token: "TOKEN" }))
            restPost.mockResolvedValueOnce({ data: true })
            return service.isAuthenticated().then(() => {
                expect(restPost).toHaveBeenCalledWith("/user/is-authenticated", { token: "TOKEN" })
            })
        })

        it("Should return false if there is a user in local storage and there is no data in the response", () => {
            localStorageMock.setItem("user", JSON.stringify({ token: "TOKEN" }))
            restPost.mockResolvedValueOnce({ data: undefined })
            return service.isAuthenticated().then((response) => {
                expect(response).toBe(false)
            })
        })

        it("Should return the API response if there is a user in local storage", () => {
            localStorageMock.setItem("user", JSON.stringify({ token: "TOKEN" }))
            restPost.mockResolvedValueOnce({ data: true })
            return service.isAuthenticated().then((response) => {
                expect(response).toBe(true)
            })
        })

        it("Should return false if the API call is rejected", () => {
            localStorageMock.setItem("user", JSON.stringify({ token: "TOKEN" }))
            restPost.mockRejectedValueOnce({ error: "Yikes" })
            return service.isAuthenticated().then((response) => {
                expect(response).toBe(false)
            })
        })

        it("Should not call the RestClient if there is no user in local storage", () => {
            localStorageMock.clear()
            return service.isAuthenticated().then(() => {
                expect(restPost).not.toHaveBeenCalled()
            })
        })

        it("Should return false if there is no user in local storage", () => {
            localStorageMock.clear()
            return service.isAuthenticated().then((response) => {
                expect(response).toBe(false)
            })
        })
    })

    describe("Get User Activity Streak", () => {
        it("Should return the days since the defined date", () => {
            mockDate.setSystemTime(new Date(Date.UTC(2021, 1, 30, 12, 24, 59)))
            return service.getActivityStreak().then((response) => {
                expect(response).toBe(32)
            })
        })
    })
})
