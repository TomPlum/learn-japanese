import RestClient, { APIResponse } from "../rest/RestClient"
import UpdateResponse from "../rest/response/UpdateResponse"
import DataResponse from "../rest/response/DataResponse"
import { User, UserPreferences } from "../slices/UserSlice"
import PatchRequest from "../rest/request/patch/PatchRequest"
import PatchReplaceOperation from "../rest/request/patch/PatchReplaceOperation"
import { Preference } from "../domain/user/Preference"

export interface UserPreferencesResponse {
    kanjiFont: string
    theme: string
    language: string
    highScoresBehaviour: string
    defaultMode: string
    flashCardsQuantity: number
    confidenceMenuStyle: string
    profileVisibility: string
    streakCardView: string
    romajiVisibility: string
    activityFeedQuantity: number
    streakNotifications: boolean
    mistakesReminders: boolean
}

export interface UserExistsResponse {
    exists: boolean
    error?: string
}

export interface UserPreferenceUpdate {
    preference: Preference
    value: string
}

export interface PublicUsernamesResponse {
    users: string[]
}

export default class UserService {
    /**
     * Checks if a user with the given username already exists.
     * @param username The username to search for.
     * @return boolean true if exists, else false.
     */
    public async usernameExists(username: string): Promise<UserExistsResponse> {
        return RestClient.get<UserExistsResponse>(`/user/exists?username=${username.trim()}`)
            .then((response) => {
                if (response.data?.exists) {
                    return { exists: response.data?.exists }
                } else {
                    return { exists: false, error: response.data?.error }
                }
            })
            .catch((response) => {
                return { exists: false, error: response.data?.error }
            })
    }

    /**
     * Checks if a user with the given email address already exists.
     * @param email The email to search for.
     * @return boolean true if exists, else false.
     */
    public async emailAlreadyRegistered(email: string): Promise<UserExistsResponse> {
        return RestClient.get<UserExistsResponse>(`/user/exists?email=${email.trim()}`)
            .then((response) => {
                if (response.data?.exists) {
                    return { exists: true }
                } else {
                    return { exists: false, error: response.data?.error }
                }
            })
            .catch((response) => {
                return { exists: false, error: response.data?.error }
            })
    }

    /**
     * Updates the nickname of the current user in context.
     * @param nickname The desired new nickname of the user.
     * @return response true if successful, else false with the reason.
     */
    public async setNickname(nickname: string): Promise<UpdateResponse> {
        return RestClient.put(`/user/set-nickname/${nickname.trim()}`)
            .then(() => {
                return { success: true }
            })
            .catch((response: APIResponse<UpdateResponse>) => {
                return { success: false, error: response.error }
            })
    }

    /**
     * Gets the application preferences of the current user in context.
     * @return response The users preferences or an error if not found.
     */
    public async getPreferences(): Promise<DataResponse<UserPreferencesResponse>> {
        return RestClient.get<UserPreferences>("/user/preferences")
            .then((response) => {
                return { data: response.data }
            })
            .catch((response) => {
                return { error: response.error }
            })
    }

    /**
     * Updates the application preferences of the current user in context.
     * @param updates The updated preferences' selection.
     * @return response true if successful, else false with the reason.
     */
    public async updatePreferences(updates: UserPreferenceUpdate[]): Promise<UpdateResponse> {
        const request = new PatchRequest(
            updates.map((update: UserPreferenceUpdate) => {
                return new PatchReplaceOperation(update.preference, update.value)
            })
        )

        return RestClient.patchJSON("/user/update-preferences", request)
            .then(() => {
                return { success: true }
            })
            .catch((response: APIResponse<UpdateResponse>) => {
                return { success: false, error: response.error }
            })
    }

    /**
     * Checks if the user in local storage is still authenticated.
     * The JWT token is passed to the API for server-side session verification.
     * @return true if authenticated, else false.
     */
    public async isAuthenticated(): Promise<boolean> {
        const userJson = localStorage.getItem("user")
        const user: User = userJson ? JSON.parse(userJson) : undefined

        if (user) {
            return RestClient.post<boolean>("/user/is-authenticated", { token: user.token })
                .then((response) => {
                    return response.data ?? false
                })
                .catch(() => {
                    return false
                })
        }

        return Promise.resolve(false)
    }

    /**
     * Retrieves the number of consecutive days the user
     * has been actively engaging with the application.
     * @return The users current streak in days.
     */
    public async getActivityStreak(): Promise<number> {
        const startDate = new Date("2021/01/30")
        const now = new Date()
        const diff = now.getTime() - startDate.getTime()
        const days = diff / (1000 * 3600 * 24)
        return Promise.resolve(Number(days.toFixed(0)))
    }

    /**
     * Retrieves a list of all public usernames that
     * are like the given search term.
     * @param username - The user search term.
     * @return a list of usernames.
     */
    public async getPublicUsers(username: string): Promise<string[]> {
        return RestClient.get<PublicUsernamesResponse>(`/user/usernames?search=${username}`)
            .then((response) => {
                if (response.data) {
                    return response.data.users
                }
                return []
            })
            .catch((response) => {
                return []
            })
    }
}
