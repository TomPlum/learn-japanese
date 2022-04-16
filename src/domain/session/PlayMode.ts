import SessionMode from "./SessionMode";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import DataSettings from "./settings/data/DataSettings";
import GameSettings from "./settings/game/GameSettings";

export default class PlayMode extends SessionMode {
    //TODO: add builder
    constructor(id: number, displayName: string, colour: string, icon: IconDefinition | string, dataSettings: DataSettings,
                gameSettings: GameSettings, shortName?: string, custom?: boolean) {
        super(id, displayName, colour, icon, dataSettings, gameSettings, shortName, custom);
    }

    getUniqueID(): string {
        return `play-${this._id}`;
    }
}
