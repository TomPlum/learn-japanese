import RestClient, { APIResponse } from "../rest/RestClient";
import UpdateResponse from "../rest/response/UpdateResponse";
import DataResponse from "../rest/response/DataResponse";
import { User, UserPreferences } from "../slices/UserSlice";

export interface UserPreferencesResponse {
    defaultFont: string;
    theme: string;
    language: string;
    highScores: string;
    defaultMode: string;
    cardsPerDay: number;
    confidenceMenuStyle: string;
}

export interface UserExistsResponse {
    exists: boolean;
    error?: string;
}

export default class UserService {

    /**
     * Checks if a user with the given username already exists.
     * @param username The username to search for.
     * @return boolean true if exists, else false.
     */
    public async usernameExists(username: string): Promise<UserExistsResponse> {
        return RestClient.get<UserExistsResponse>("/user/exists?username=" + username.trim()).then(response => {
            if (response.data?.exists) {
                return { exists: response.data?.exists };
            } else {
                return { exists: false, error: response.data?.error }
            }
        }).catch(response => {
            return { exists: false, error: response.data?.error };
        });
    }

    /**
     * Checks if a user with the given email address already exists.
     * @param email The email to search for.
     * @return boolean true if exists, else false.
     */
    public async emailAlreadyRegistered(email: string): Promise<UserExistsResponse> {
        return RestClient.get<UserExistsResponse>("/user/exists?email=" + email.trim()).then(response => {
            if (response.data?.exists) {
                return { exists: true };
            } else {
                return { exists: false, error: response.data?.error }
            }
        }).catch(response => {
            return { exists: false, error: response.data?.error };
        });
    }

    /**
     * Updates the nickname of the current user in context.
     * @param nickname The desired new nickname of the user.
     * @return response true if successful, else false with the reason.
     */
    public async setNickname(nickname: string): Promise<UpdateResponse> {
        return RestClient.put("/user/set-nickname/" + nickname.trim()).then(() => {
            return { success: true };
        }).catch((response: APIResponse<UpdateResponse>) => {
            return { success: false, error: response.error };
        });
    }

    /**
     * Gets the application preferences of the current user in context.
     * @return response The users preferences or an error if not found.
     */
    public async getPreferences(): Promise<DataResponse<UserPreferencesResponse>> {
        return RestClient.get<UserPreferences>("/user/preferences").then(response => {
            return { data: response.data };
        }).catch(response => {
            return { error: response.error };
        })
    }

    /**
     * Updates the application preferences of the current user in context.
     * @param preferences The updated preferences selection.
     * @return response true if successful, else false with the reason.
     */
    public async updatePreferences(preferences: UserPreferences): Promise<UpdateResponse> {
        return RestClient.put("/user/update-preferences", preferences).then(() => {
            return { success: true };
        }).catch((response: APIResponse<UpdateResponse>) => {
            return { success: false, error: response.error };
        });
    }

    /**
     * Checks if the user in local storage is still authenticated.
     * The JWT token is passed to the API for server-side session verification.
     * @return true if authenticated, else false.
     */
    public async isAuthenticated(): Promise<boolean> {
        const userJson = localStorage.getItem("user");
        const user: User = userJson ? JSON.parse(userJson) : undefined;

        if (user) {
            return RestClient.post<boolean>("/user/is-authenticated", { token: user.token }).then(response => {
                return response.data ?? false;
            }).catch(() => {
                return false;
            });
        }

        return Promise.resolve(false);
    }
}
