import { PlayMenuModes } from "../../MenuModes";
import PlayMode from "../../session/PlayMode";
import { faCircle, faGrinBeam, faToriiGate } from "@fortawesome/free-solid-svg-icons";
import { SentenceStructureSettingsBuilder } from "../../session/settings/data/SentenceStructureSettings";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";
import { QuestionSettingsBuilder } from "../../session/settings/game/QuestionSettings";
import QuestionType from "../QuestionType";
import LearnableField from "../../learn/LearnableField";
import { HintSettingsBuilder } from "../../session/settings/game/HintSettings";
import { TimeSettingsBuilder } from "../../session/settings/game/TimeSettings";
import { LifeSettingsBuilder } from "../../session/settings/game/LifeSettings";

class PlaySentenceStructureModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        const defaultDataSettings = new SentenceStructureSettingsBuilder().build();

        return [
            new PlayMode(1, "Japanese", "#a92739", faToriiGate,
                new SentenceStructureSettingsBuilder()
                    .withQuantity(25)
                    .withAdjectives()
                    .withNouns()
                    .withVerbs()
                    .withAdverbs()
                    .build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder()
                        .withType(QuestionType.CHOICE)
                        .withFields(LearnableField.MEANING, LearnableField.JAPANESE)
                        .withScoreTracking()
                        .withCardQuantity(4)
                        .build())
                    .withHintSettings(new HintSettingsBuilder().withQuantity(5).build())
                    .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
                    .withLifeSettings(new LifeSettingsBuilder().isEnabled().withQuantity(5).build()
                ).build()
            ),
            new PlayMode(1, "Meaning", "#57afd9", faGrinBeam,   new SentenceStructureSettingsBuilder()
                    .withQuantity(25)
                    .withAdjectives()
                    .withNouns()
                    .withVerbs()
                    .withAdverbs()
                    .build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder()
                        .withType(QuestionType.TEXT)
                        .withFields(LearnableField.JAPANESE, LearnableField.MEANING)
                        .withScoreTracking()
                        .build())
                    .withHintSettings(new HintSettingsBuilder().withQuantity(5).build())
                    .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
                    .withLifeSettings(new LifeSettingsBuilder().isEnabled().withQuantity(5).build()
                ).build()
            ),
            new PlayMode(1, "Placeholder 3", "#000", faCircle, defaultDataSettings,
                new GameSettingsBuilder().build()
            ),
            new PlayMode(1, "Placeholder 4", "#000", faCircle, defaultDataSettings,
                new GameSettingsBuilder().build()
            ),
            new PlayMode(1, "Placeholder 5", "#000", faCircle, defaultDataSettings,
                new GameSettingsBuilder().build()
            ),
            new PlayMode(1, "Placeholder 6", "#000", faCircle, defaultDataSettings,
                new GameSettingsBuilder().build()
            ),
        ];
    }

    getTopic(): string {
        return "SENTENCE";
    }

}

export default PlaySentenceStructureModes;
