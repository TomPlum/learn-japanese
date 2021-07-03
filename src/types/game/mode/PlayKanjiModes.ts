import { faCircle, faClock, faFillDrip, faPaintBrush, faRandom, faSchool, faStar, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { RELAXED } from "../../../data/GameModePresets";
import SessionMode from "../../session/SessionMode";
import { MenuModes } from "../../MenuModes";
import CustomLearningMode from "../../learn/CustomLearningMode";
import KanjiSettingsMenu from "../../../components/learn/kanji/KanjiSettingsMenu";

export default class PlayKanjiModes implements MenuModes {
    getModes(): SessionMode[] {
        return [
            new SessionMode("Kanji", "#6857ee", faPaintBrush, RELAXED),
            new SessionMode("Meaning", "#65cd3a", faSchool, { display: {  } }),
            new SessionMode("On'yomi", "#eacd35", faStar, RELAXED),
            new SessionMode("Kun'yomi", "#e21717", faCircle, RELAXED),
            new SessionMode("Random", "#3cabca", faRandom, RELAXED),
            new CustomLearningMode(KanjiSettingsMenu)
        ];
    }

    getTopic(): string {
        return "KANJI";
    }
}