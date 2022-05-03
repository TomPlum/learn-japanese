import { CustomIcon, Icon } from "../domain/Icon";
import { SessionSettings } from "../domain/session/settings/SessionSettings";
import GameSettingsConverter from "../converter/GameSettingsConverter";
import DataSettingsConverter from "../converter/DataSettingsConverter";
import { DataSettingsState } from "../slices/DataSettingsSlice";
import { GameSettingState } from "../slices/GameSettingsSlice";
import LearnSettings from "../domain/session/settings/LearnSettings";

interface PlaySession {
    data: DataSettingsState;
    game: GameSettingState;
}

interface LearnSession {
    data: DataSettingsState;
}

class LocalStorageService {

    private readonly RECENT_ICONS_KEY = "recent-icons";

    /**
     * Caches the given icon in local storage.
     * Considers only the last 5 icons as recently used.
     * Duplicate icons are disregarded.
     * @param icon The name of the icon to store.
     */
    public addRecentlyUsedIcon(icon: CustomIcon) {
        const icons = this.getRecentlyUsedIcons();
        if (!icons.includes(icon)) {
            if (icons.length === 5) {
                icons.pop();
            }
            icons.unshift(icon);
            let value = JSON.stringify(icons);
            localStorage.setItem(this.RECENT_ICONS_KEY, value);
        }
    }

    public getRecentlyUsedIcons(): (IconDefinition | Icon | string)[] {
        const value = localStorage.getItem(this.RECENT_ICONS_KEY);
        return JSON.parse(value ?? "[]") as Icon[];
    }
}

export default LocalStorageService;
