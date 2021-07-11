import { faCircle, faPaintBrush, faRandom, faSchool, faStar } from "@fortawesome/free-solid-svg-icons";
import { PlayMenuModes } from "../../MenuModes";
import CustomLearningMode from "../../learn/CustomLearningMode";
import KanjiSettingsMenu from "../../../components/learn/kanji/KanjiSettingsMenu";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";
import { QuestionType } from "../QuestionType";
import PlayMode from "../../session/PlayMode";
import { KanjiSettingsBuilder } from "../../session/settings/data/KanjiSettings";
import { QuestionSettingsBuilder } from "../../session/settings/game/QuestionSettings";

export default class PlayKanjiModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        const defaultKanjiSettings = new KanjiSettingsBuilder().withJoyoKanji().withQuantity(25).build();

        return [
            new PlayMode("Kanji", "#6857ee", faPaintBrush,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.KANJI).withCardQuantity(4).withScoreTracking(true).build())
                    .build()
            ),
            new PlayMode("Meaning", "#65cd3a", faSchool,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.MEANING).withCardQuantity(4).withScoreTracking(true).build())
                    .build()
            ),
            new PlayMode("On'yomi", "#eacd35", faStar,
                defaultKanjiSettings,
                new GameSettingsBuilder().build()
            ),
            new PlayMode("Kun'yomi", "#e21717", faCircle,
                defaultKanjiSettings,
                new GameSettingsBuilder().build()
            ),
            new PlayMode("Random", "#3cabca", faRandom,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.RANDOM).withCardQuantity(4).withScoreTracking(true).build())
                    .build()
            ),
            new CustomLearningMode(KanjiSettingsMenu)
        ];
    }

    getTopic(): string {
        return "KANJI";
    }
}