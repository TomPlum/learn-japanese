import { PlayMenuModes } from "../../MenuModes";
import PlayMode from "../../session/PlayMode";
import { faBaby, faCalculator, faRuler, faSort, faSortNumericDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";
import { QuestionSettingsBuilder } from "../../session/settings/game/QuestionSettings";
import QuestionType from "../QuestionType";
import LearnableField from "../../learn/LearnableField";
import { LifeSettingsBuilder } from "../../session/settings/game/LifeSettings";
import { NumbersSettingsBuilder } from "../../session/settings/data/NumbersSettings";
import { TimeSettingsBuilder } from "../../session/settings/game/TimeSettings";
import { HintSettingsBuilder } from "../../session/settings/game/HintSettings";

export default class PlayNumbersModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        const gameSettings = new GameSettingsBuilder()
            .withQuestionSettings(new QuestionSettingsBuilder()
                .withCardQuantity(4)
                .withScoreTracking()
                .withType(QuestionType.CHOICE)
                .withFields(LearnableField.MEANING, LearnableField.JAPANESE)
                .build()
            )
            .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
            .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
            .withLifeSettings(new LifeSettingsBuilder().withQuantity(5).build())
            .build();

        return [
            new PlayMode(1, "Numbers", "#fdb40e", faSortNumericDown,
                new NumbersSettingsBuilder().withNumbers().build(),
                gameSettings
            ),
            new PlayMode(1, "Counters", "#ff7730", faCalculator,
                new NumbersSettingsBuilder().withCounters().build(),
                gameSettings
            ),
            new PlayMode(1, "Age", "#1785e2", faBaby,
                new NumbersSettingsBuilder().withAge().build(),
                gameSettings
            ),
            new PlayMode(1, "Exceptions", "#a01219", faTimes,
                new NumbersSettingsBuilder().withExceptions().build(),
                gameSettings
            ),
            new PlayMode(1, "Units", "#4ed440", faRuler,
                new NumbersSettingsBuilder().withUnits().build(),
                gameSettings
            ),
            new PlayMode(1, "Sequence", "#fc3131", faSort,
                new NumbersSettingsBuilder().withSequence().build(),
                gameSettings
            )
        ];
    }

    getTopic(): string {
        return "NUMBERS";
    }
}
