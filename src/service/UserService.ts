import RestClient, { APIResponse } from "../rest/RestClient";
import UpdateResponse from "../rest/UpdateResponse";

export default class UserService {
    public async setNickname(nickname: string): Promise<UpdateResponse> {
        return RestClient.put("/user/set-nickname/" + nickname.trim()).then(() => {
            return { success: true };
        }).catch((response: APIResponse<UpdateResponse>) => {
            return { success: false, error: response.error };
        });
    }
}
