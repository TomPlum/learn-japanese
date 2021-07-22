import { faFire, faFont, faGraduationCap, faStopwatch, faVial } from "@fortawesome/free-solid-svg-icons";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";
import { PlayMenuModes } from "../../MenuModes";
import PlayMode from "../../session/PlayMode";
import { KanaSettingsBuilder } from "../../session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";
import { QuestionSettingsBuilder } from "../../session/settings/game/QuestionSettings";
import { QuestionType } from "../QuestionType";
import { HintSettingsBuilder } from "../../session/settings/game/HintSettings";
import { LifeSettingsBuilder } from "../../session/settings/game/LifeSettings";
import { TimeSettingsBuilder } from "../../session/settings/game/TimeSettings";
import { LifeQuantity } from "../LifeQuantity";
import LearnableField from "../../learn/LearnableField";
import FilterChain from "../../../filters/FilterChain";
import DiagraphFilter from "../../../filters/kana/DiagraphFilter";
import { Kana } from "../../kana/Kana";
import { Learnable } from "../../learn/Learnable";
import KanaTypeFilter from "../../../filters/kana/KanaTypeFilter";
import KanaSettingsForm from "../../../components/settings/data/KanaSettingsForm";

export default class PlayKanaModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        return [
            new PlayMode("Relaxed", "#fdb40e", faGraduationCap,
                new KanaSettingsBuilder().withEverything().build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(
                        new QuestionSettingsBuilder()
                            .withType(QuestionType.TEXT)
                            .withFields(LearnableField.KANA, LearnableField.ROMAJI)
                            .withScoreTracking(false)
                            .build()
                    )
                    .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
                    .build()
            ),
            new PlayMode("Time Attack", "#ff7730", faStopwatch,
                new KanaSettingsBuilder().withEverything().build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(
                        new QuestionSettingsBuilder()
                            .withType(QuestionType.TEXT)
                            .withFields(LearnableField.KANA, LearnableField.ROMAJI)
                            .withScoreTracking(true)
                            .build()
                    )
                    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(3).build())
                    .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
                    .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(10).build())
                    .build()
            ),
            new PlayMode("Rōmaji", "#1785e2", faFont,
                new KanaSettingsBuilder().withEverything().build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(
                        new QuestionSettingsBuilder()
                            .withType(QuestionType.TEXT)
                            .withFields(LearnableField.KANA, LearnableField.ROMAJI)
                            .withScoreTracking(true)
                            .build()
                    )
                    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(3).build())
                    .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
                    .build()
            ),
            new PlayMode("Kana", "#a01219", faKickstarterK,
                new KanaSettingsBuilder().withEverything().build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(
                        new QuestionSettingsBuilder()
                            .withFields(LearnableField.ROMAJI, LearnableField.KANA)
                            .withType(QuestionType.CHOICE)
                            .withWrongOptionsFilterChain((data: Learnable) => {
                                return new FilterChain<Kana>()
                                    .withFilter(new DiagraphFilter((data as Kana).isDiagraph()))
                                    .withFilter(new KanaTypeFilter((data as Kana).type, true))
                            })
                            .withCardQuantity(4)
                            .withScoreTracking(true)
                            .build()
                    )
                    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(3).build())
                    .build()
            ),
            new PlayMode("Hardcore", "#fc3131", faFire,
                new KanaSettingsBuilder().withEverything().withMaxQuantity().build(),
                new GameSettingsBuilder()
                    .withQuestionSettings(
                        new QuestionSettingsBuilder()
                            .withFields(LearnableField.ROMAJI, LearnableField.KANA)
                            .withType(QuestionType.CHOICE)
                            .withCardQuantity(6)
                            .withScoreTracking(true)
                            .build()
                    )
                    .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
                    .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.ONE).build())
                    .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
                    .build()
            ),
            new PlayMode("Custom",
                "#41d085",
                faVial,
                new KanaSettingsBuilder().withEverything().build(),
                new GameSettingsBuilder().build(),
                true,
                KanaSettingsForm
            )
        ];
    }

    getTopic(): string {
        return "KANA";
    }
}