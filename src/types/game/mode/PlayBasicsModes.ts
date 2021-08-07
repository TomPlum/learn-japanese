import PlayMode from "../../session/PlayMode";
import { PlayMenuModes } from "../../MenuModes";

export default class PlayBasicsModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        return [

        ];
    }

    getTopic(): string {
        return "BASICS";
    }
}
