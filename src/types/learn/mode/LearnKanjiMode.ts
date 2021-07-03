import { faClock, faFillDrip, faPaintBrush, faSchool, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { KyoikuGrade } from "../../kanji/KyoikuGrade";
import CustomLearningMode from "../CustomLearningMode";
import KanjiSettingsMenu from "../../../components/learn/kanji/KanjiSettingsMenu";
import { MenuModes } from "../../MenuModes";
import SessionMode from "../../session/SessionMode";

export default class LearnKanjiMode implements MenuModes {
    getModes(): SessionMode[] {
        return [
            new SessionMode("Kyōiku", "#fdb40e", faSchool, { kanji: { grades: KyoikuGrade.ALL } }),
            new SessionMode("Jōyō", "#ff7730", faPaintBrush, { kanji: { joyo: true } }),
            new SessionMode("Numbers", "#1785e2", faYenSign, { kanji: { numbers: true } }),
            new SessionMode("Colours", "#a01219", faFillDrip, { kanji: { colours: true } }),
            new SessionMode("Time", "#fc3131", faClock, { kanji: { time: true } }),
            new CustomLearningMode(KanjiSettingsMenu)
        ];
    }

    getTopic(): string {
        return "KANJI"
    }
}