import { PlayMenuModes } from "../../MenuModes";
import PlayMode from "../../session/PlayMode";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { KanaSettingsBuilder } from "../../session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";
import { QuestionSettingsBuilder } from "../../session/settings/game/QuestionSettings";
import { QuestionType } from "../QuestionType";
import LearnableField from "../../learn/LearnableField";
import { LifeSettingsBuilder } from "../../session/settings/game/LifeSettings";

export default class PlayNumbersModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        return [
            new PlayMode("Relaxed", "#fdb40e", faGraduationCap,
                new KanaSettingsBuilder().withEverything().build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder()
                        .withType(QuestionType.TEXT)
                        .withFields(LearnableField.KANA, LearnableField.ROMAJI)
                        .withScoreTracking(false)
                        .build()
                    )
                    .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
                    .build()
            ),
        ];
    }

    getTopic(): string {
        return "NUMBERS";
    }
}
