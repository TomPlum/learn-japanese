import LearnMenuModes from "./LearnMenuModes";
import LearningMode from "../LearningMode";
import { faBaby, faRuler, faSort, faSortNumericDown, faStopwatch, faTimes } from "@fortawesome/free-solid-svg-icons";

export default class LearnNumbersMode extends LearnMenuModes {
    getLearningTopics(): LearningMode[] {
        return [
            new LearningMode("Numbers", "#fdb40e", faSortNumericDown, { numbers: { numbers: true } }),
            new LearningMode("Counters", "#ff7730", faStopwatch, { numbers: { counters: true } }),
            new LearningMode("Age", "#1785e2", faBaby, { numbers: { age: true } }),
            new LearningMode("Exceptions", "#a01219", faTimes, { numbers: { exceptions: true } }),
            new LearningMode("Units", "#fc3131", faRuler, { numbers: { units: true } }),
            new LearningMode("Sequence", "#fc3131", faSort, { numbers: { sequence: true } }),
        ];
    }

    getTopic(): string {
        return "NUMBERS"
    }
}