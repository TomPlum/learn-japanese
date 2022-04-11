import { faBezierCurve, faCircle, faFlask, faPaintBrush, faRandom, faSchool, faStar } from "@fortawesome/free-solid-svg-icons";
import { PlayMenuModes } from "../../MenuModes";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";
import QuestionType from "../QuestionType";
import PlayMode from "../../session/PlayMode";
import { KanjiSettingsBuilder } from "../../session/settings/data/KanjiSettings";
import { QuestionSettingsBuilder } from "../../session/settings/game/QuestionSettings";
import LearnableField from "../../learn/LearnableField";
import { TimeSettingsBuilder } from "../../session/settings/game/TimeSettings";
import { HintSettingsBuilder } from "../../session/settings/game/HintSettings";

export default class PlayKanjiModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        const defaultKanjiSettings = new KanjiSettingsBuilder().withJoyoKanji().withQuantity(25).build();

        return [
            new PlayMode("Kanji", "#6857ee", faPaintBrush,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
                    .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
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
            new PlayMode("Match", "#e79711", faBezierCurve,
                new KanjiSettingsBuilder().withJoyoKanji().withQuantity(80).build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder()
                        .withFields(LearnableField.KANJI, LearnableField.MEANING)
                        .withType(QuestionType.MATCH)
                        .withScoreTracking(true)
                        .withQuantity(4)
                        .build()
                    )
                    .build()
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
            new PlayMode("Grade 1 Practice", "#23d5ea", faFlask, defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder()
                        .withFields(LearnableField.RANDOM, LearnableField.RANDOM)
                        .withType(QuestionType.RANDOM)
                        .withCardQuantity(4)
                        .withScoreTracking(true)
                        .build()
                    )
                    .build(),
                "Grade 1",
                true
            ) //TODO: Remove this dummy example once serialised in DB
        ];
    }

    getTopic(): string {
        return "KANJI";
    }
}
