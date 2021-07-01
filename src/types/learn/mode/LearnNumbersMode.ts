import { faBaby, faRuler, faSort, faSortNumericDown, faStopwatch, faTimes } from "@fortawesome/free-solid-svg-icons";
import SessionMode from "../../SessionMode";
import { MenuModes } from "../../MenuModes";

export default class LearnNumbersMode implements MenuModes {
    getModes(): SessionMode[] {
        return [
            new SessionMode("Numbers", "#fdb40e", faSortNumericDown, { numbers: { numbers: true } }),
            new SessionMode("Counters", "#ff7730", faStopwatch, { numbers: { counters: true } }),
            new SessionMode("Age", "#1785e2", faBaby, { numbers: { age: true } }),
            new SessionMode("Exceptions", "#a01219", faTimes, { numbers: { exceptions: true } }),
            new SessionMode("Units", "#fc3131", faRuler, { numbers: { units: true } }),
            new SessionMode("Sequence", "#fc3131", faSort, { numbers: { sequence: true } }),
        ];
    }

    getTopic(): string {
        return "NUMBERS"
    }
}