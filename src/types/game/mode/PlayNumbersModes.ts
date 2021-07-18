import { PlayMenuModes } from "../../MenuModes";
import PlayMode from "../../session/PlayMode";

export default class PlayNumbersModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        return [

        ];
    }

    getTopic(): string {
        return "NUMBERS";
    }
}