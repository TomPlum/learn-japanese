import { faFire, faFont, faGraduationCap, faStopwatch, faVial } from "@fortawesome/free-solid-svg-icons";
import { PlayMenuModes } from "./PlayMenuModes";
import PlayMode from "../PlayMode";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";
import { HARDCORE, KANA, RELAXED, ROMAJI, TIME_ATTACK } from "../../../data/GameModePresets";

export default class PlayKanaMode implements PlayMenuModes {
    getModes(): PlayMode[] {
        return [
            new PlayMode("Relaxed", "#fdb40e", faGraduationCap, RELAXED),
            new PlayMode("Time Attack", "#ff7730", faStopwatch, TIME_ATTACK),
            new PlayMode("Rōmaji", "#1785e2", faFont, ROMAJI),
            new PlayMode("Kana", "#a01219", faKickstarterK, KANA),
            new PlayMode("Hardcore", "#fc3131", faFire, HARDCORE),
            new PlayMode("Custom", "#41d085", faVial, {})
        ];
    }
}