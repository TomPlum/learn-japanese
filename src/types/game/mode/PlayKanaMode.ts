import { faFire, faFont, faGraduationCap, faStopwatch, faVial } from "@fortawesome/free-solid-svg-icons";
import { PlayMenuModes } from "./PlayMenuModes";
import PlayMode from "../PlayMode";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";

export default class PlayKanaMode implements PlayMenuModes {
    getModes(): PlayMode[] {
        return [
            new PlayMode("Relaxed", "#fdb40e", faGraduationCap),
            new PlayMode("Time Attack", "#ff7730", faStopwatch),
            new PlayMode("Rōmaji", "#1785e2", faFont),
            new PlayMode("Kana", "#a01219", faKickstarterK),
            new PlayMode("Hardcore", "#fc3131", faFire),
            new PlayMode("Custom", "#41d085", faVial)
        ];
    }
}