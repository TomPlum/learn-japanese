import { faCircle, faPaintBrush, faRandom, faSchool, faStar } from "@fortawesome/free-solid-svg-icons";
import { PlayMenuModes } from "../../MenuModes";
import CustomLearningMode from "../../learn/CustomLearningMode";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";
import { QuestionType } from "../QuestionType";
import PlayMode from "../../session/PlayMode";
import { KanjiSettingsBuilder } from "../../session/settings/data/KanjiSettings";
import { QuestionSettingsBuilder } from "../../session/settings/game/QuestionSettings";
import LearnableField from "../../learn/LearnableField";
import { TimeSettingsBuilder } from "../../session/settings/game/TimeSettings";

export default class PlayKanjiModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        const defaultKanjiSettings = new KanjiSettingsBuilder().withJoyoKanji().withQuantity(25).build();

        return [
            new PlayMode("Kanji", "#6857ee", faPaintBrush,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
                    .withQuestionSettings(new QuestionSettingsBuilder()
                        .withFields(LearnableField.MEANING, LearnableField.KANJI)
                        .withType(QuestionType.CHOICE)
                        .withCardQuantity(4)
                        .withScoreTracking(true)
                        .build()
                    ).build()
            ),
            new PlayMode("Meaning", "#65cd3a", faSchool,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder()
                        .withFields(LearnableField.KANJI, LearnableField.MEANING)
                        .withType(QuestionType.TEXT)
                        .withCardQuantity(4)
                        .withScoreTracking(true)
                        .build()
                    ).build()
            ),
            new PlayMode("On'yomi", "#eacd35", faStar,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder()
                        .withFields(LearnableField.KANJI, LearnableField.ONYOMI_READING)
                        .withType(QuestionType.CHOICE)
                        .withCardQuantity(4)
                        .withScoreTracking(true)
                        .build()
                    ).build()
            ),
            new PlayMode("Kun'yomi", "#e21717", faCircle,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder()
                        .withFields(LearnableField.KANJI, LearnableField.KUNYOMI_READING)
                        .withType(QuestionType.CHOICE)
                        .withCardQuantity(4)
                        .withScoreTracking(true)
                        .build()
                    ).build()
            ),
            new PlayMode("Random", "#3cabca", faRandom,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder()
                        .withFields(LearnableField.RANDOM, LearnableField.RANDOM)
                        .withType(QuestionType.RANDOM)
                        .withCardQuantity(4)
                        .withScoreTracking(true)
                        .build()
                    )
                    .build()
            ),
            new CustomLearningMode()
        ];
    }

    getTopic(): string {
        return "KANJI";
    }
}
