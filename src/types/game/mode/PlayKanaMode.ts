import { faFire, faFont, faGraduationCap, faStopwatch, faVial } from "@fortawesome/free-solid-svg-icons";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";
import { HARDCORE, KANA, RELAXED, ROMAJI, TIME_ATTACK } from "../../../data/GameModePresets";
import SessionMode from "../../session/SessionMode";
import { MenuModes } from "../../MenuModes";

export default class PlayKanaMode implements MenuModes {
    getModes(): SessionMode[] {
        return [
            new SessionMode("Relaxed", "#fdb40e", faGraduationCap, RELAXED),
            new SessionMode("Time Attack", "#ff7730", faStopwatch, TIME_ATTACK),
            new SessionMode("Rōmaji", "#1785e2", faFont, ROMAJI),
            new SessionMode("Kana", "#a01219", faKickstarterK, KANA),
            new SessionMode("Hardcore", "#fc3131", faFire, HARDCORE),
            new SessionMode("Custom", "#41d085", faVial, {})
        ];
    }

    getTopic(): string {
        return "KANA";
    }
}