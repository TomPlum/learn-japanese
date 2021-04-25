import LearningMode from "../LearningMode";
import LearnMenuModes from "./LearnMenuModes";
import { faClock, faFillDrip, faPaintBrush, faSchool, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { KyoikuGrade } from "../../kanji/KyoikuGrade";
import CustomLearningMode from "../CustomLearningMode";
import KanjiSettingsMenu from "../../../components/learn/kanji/KanjiSettingsMenu";

export default class LearnKanjiMode extends LearnMenuModes {
    getLearningTopics(): LearningMode[] {
        return [
            new LearningMode("Kyōiku", "#fdb40e", faSchool, { kanji: { grades: KyoikuGrade.ALL } }),
            new LearningMode("Jōyō", "#ff7730", faPaintBrush, { kanji: { joyo: true } }),
            new LearningMode("Numbers", "#1785e2", faYenSign, { kanji: { numbers: true } }),
            new LearningMode("Colours", "#a01219", faFillDrip, { kanji: { colours: true } }),
            new LearningMode("Time", "#fc3131", faClock, { kanji: { time: true } }),
            new CustomLearningMode(KanjiSettingsMenu)
        ];
    }

    getTopic(): string {
        return "KANJI"
    }

    isCustomisable(): boolean {
        return true;
    }
}