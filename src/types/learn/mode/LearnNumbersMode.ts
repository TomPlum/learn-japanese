import { faBaby, faRuler, faSort, faSortNumericDown, faStopwatch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { LearnMenuModes } from "../../MenuModes";
import LearnMode from "../../session/LearnMode";
import LearnSettings from "../../session/settings/LearnSettings";
import { NumbersSettingsBuilder } from "../../session/settings/data/NumbersSettings";

export default class LearnNumbersMode implements LearnMenuModes {
    getModes(): LearnMode[] {
        const defaultLearnSettings = new LearnSettings();

        return [
            new LearnMode("Numbers", "#fdb40e", faSortNumericDown,
                new NumbersSettingsBuilder().withNumbers().build(),
                defaultLearnSettings
            ),
            new LearnMode("Counters", "#ff7730", faStopwatch,
                new NumbersSettingsBuilder().withCounters().build(),
                defaultLearnSettings
            ),
            new LearnMode("Age", "#1785e2", faBaby,
                new NumbersSettingsBuilder().withAge().build(),
                defaultLearnSettings
            ),
            new LearnMode("Exceptions", "#a01219", faTimes,
                new NumbersSettingsBuilder().withExceptions().build(),
                defaultLearnSettings
            ),
            new LearnMode("Units", "#fc3131", faRuler,
                new NumbersSettingsBuilder().withUnits().build(),
                defaultLearnSettings
            ),
            new LearnMode("Sequence", "#fc3131", faSort,
                new NumbersSettingsBuilder().withSequence().build(),
                defaultLearnSettings
            )
        ];
    }

    getTopic(): string {
        return "NUMBERS"
    }
}