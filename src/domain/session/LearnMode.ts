import SessionMode from "./SessionMode";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import DataSettings from "./settings/data/DataSettings";
import LearnSettings from "./settings/LearnSettings";

export default class LearnMode extends SessionMode {
    constructor(id: number, displayName: string, colour: string, icon: IconDefinition | string, dataSettings: DataSettings,
                settings: LearnSettings, shortName?: string, custom?: boolean) {
        super(id, displayName, colour, icon, dataSettings, settings, shortName, custom);
    }

    getUniqueID(): string {
        return `learn-${this._id}`;
    }
}
