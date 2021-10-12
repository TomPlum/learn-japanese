import RestClient, { APIResponse } from "../rest/RestClient";
import UpdateResponse from "../rest/UpdateResponse";
import DataResponse from "../rest/DataResponse";

export interface UserPreferences {
    defaultFont: string;
    theme: string;
    language: string;
    highScores: string;
    defaultMode: string;
    cardsPerDay: number;
    confidenceMenuStyle: string;
}

export default class UserService {
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
    public async getPreferences(): Promise<DataResponse<UserPreferences>> {
        return RestClient.get<UserPreferences>("/user/preferences").then(response => {
            return { data: response.data };
        }).catch(response => {
            return { error: response.error };
        })
    }
}
