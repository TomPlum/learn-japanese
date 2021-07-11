import { faFire, faFont, faGraduationCap, faStopwatch, faVial } from "@fortawesome/free-solid-svg-icons";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";
import { PlayMenuModes } from "../../MenuModes";
import PlayMode from "../../session/PlayMode";
import KanaGameSettingsMenu from "../../../components/settings/KanaGameSettingsMenu";
import { KanaSettingsBuilder } from "../../session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";
import { QuestionSettingsBuilder } from "../../session/settings/game/QuestionSettings";
import { QuestionType } from "../QuestionType";
import { HintSettingsBuilder } from "../../session/settings/game/HintSettings";
import { HintQuantity } from "../HintQuantity";
import { LifeSettingsBuilder } from "../../session/settings/game/LifeSettings";
import { TimeSettingsBuilder } from "../../session/settings/game/TimeSettings";
import { LifeQuantity } from "../LifeQuantity";

export default class PlayKanaModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        const defaultKanaSettings = new KanaSettingsBuilder().withEverything().build();

        return [
            new PlayMode("Relaxed", "#fdb40e", faGraduationCap, defaultKanaSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withScoreTracking(false).build())
                    .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
                    .build()
            ),
            new PlayMode("Time Attack", "#ff7730", faStopwatch, defaultKanaSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withScoreTracking(true).build())
                    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
                    .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
                    .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(10).build())
                    .build()
            ),
            new PlayMode("Rōmaji", "#1785e2", faFont, defaultKanaSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withScoreTracking(true).build())
                    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
                    .build()
            ),
            new PlayMode("Kana", "#a01219", faKickstarterK, defaultKanaSettings,
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.KANA).withCardQuantity(4).withScoreTracking(true).build())
                    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
                    .build()
            ),
            new PlayMode("Hardcore", "#fc3131", faFire,
                new KanaSettingsBuilder().withEverything().withMaxQuantity().build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.KANA).withCardQuantity(6).withScoreTracking(true).build())
                    .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
                    .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.ONE).build())
                    .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
                    .build()
            ),
            new PlayMode("Custom", "#41d085", faVial, defaultKanaSettings, new GameSettingsBuilder().build(), true, KanaGameSettingsMenu)
        ];
    }

    getTopic(): string {
        return "KANA";
    }
}