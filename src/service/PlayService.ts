import { SessionSettings } from "../domain/session/settings/SessionSettings";
import UpdateResponse from "../rest/response/UpdateResponse";

class PlayService {
    public getUserCustomPresets(): SessionSettings[] {
        return [];
    }

    public saveCustomPreset(name: string, settings: SessionSettings): Promise<UpdateResponse> {
        return Promise.resolve({ success: true });
    }
}

export default PlayService;
