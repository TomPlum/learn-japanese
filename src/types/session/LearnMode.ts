import SessionMode from "./SessionMode";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import DataSettings from "./settings/data/DataSettings";
import LearnSettings from "./settings/LearnSettings";

export default class LearnMode extends SessionMode {
    constructor(displayName: string, colour: string, icon: IconDefinition | string, dataSettings: DataSettings, settings: LearnSettings) {
        super(displayName, colour, icon, dataSettings, settings);
    }
}
