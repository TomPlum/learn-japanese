import LearnMenuModes from "./LearnMenuModes";
import LearningMode from "../LearningMode";
import { faBaby, faRuler, faSort, faSortNumericDown, faStopwatch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { KyoikuGrade } from "../../kanji/KyoikuGrade";

export default class LearnNumbersMode extends LearnMenuModes {
    getLearningTopics(): LearningMode[] {
        return [
            new LearningMode("Numbers", "#fdb40e", faSortNumericDown, { kanji: { grades: KyoikuGrade.ALL } }),
            new LearningMode("Counters", "#ff7730", faStopwatch, { kanji: { joyo: true } }),
            new LearningMode("Age", "#1785e2", faBaby, { kanji: { numbers: true } }),
            new LearningMode("Exceptions", "#a01219", faTimes, { kanji: { colours: true } }),
            new LearningMode("Units", "#fc3131", faRuler, { kanji: { time: true } }),
            new LearningMode("Sequence", "#fc3131", faSort, { kanji: { time: true } }),
        ];
    }

    getTopic(): string {
        return "NUMBERS"
    }
}