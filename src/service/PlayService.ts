import { SessionSettings } from "../domain/session/settings/SessionSettings";
import UpdateResponse from "../rest/response/UpdateResponse";
import { Icon } from "../domain/Icon";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

class PlayService {
    public getUserCustomPresets(): SessionSettings[] {
        return [];
    }

    public saveCustomPreset(name: string, icon: IconDefinition | Icon | string, settings: SessionSettings): Promise<UpdateResponse> {
        return Promise.resolve({ success: true });
    }
}

export default PlayService;
