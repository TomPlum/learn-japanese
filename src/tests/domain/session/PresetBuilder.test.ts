import PresetBuilder from "../../../domain/session/PresetBuilder";
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../domain/session/settings/game/GameSettings";
import { LifeSettingsBuilder } from "../../../domain/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../../../domain/session/settings/game/HintSettings";
import { TimeSettingsBuilder } from "../../../domain/session/settings/game/TimeSettings";
import { QuestionSettingsBuilder } from "../../../domain/session/settings/game/QuestionSettings";
import LearnableField from "../../../domain/learn/LearnableField";
import QuestionType from "../../../domain/game/QuestionType";

describe("Preset Builder", () => {
    it("Should build a valid play preset object", () => {
        const preset = new PresetBuilder()
            .withID(1)
            .withFavouriteID(12)
            .withDescription("An example test preset")
            .withColour("#FFFFFF")
            .withIcon("FaGraduationCap")
            .withDisplayName("Test Preset")
            .withShortName("Test")
            .withTopicName("Hiragana & Katakana")
            .withDataSettings(new KanaSettingsBuilder().build())
            .withGameSettings(
                new GameSettingsBuilder()
                    .withLifeSettings(
                        new LifeSettingsBuilder()
                            .withQuantity(12)
                            .isEnabled(true)
                            .build()
                    )
                    .withHintSettings(
                        new HintSettingsBuilder()
                            .withQuantity(8)
                            .isEnabled(true)
                            .areUnlimited(false)
                            .build()
                    )
                    .withTimeSettings(
                        new TimeSettingsBuilder()
                            .isTimed(true)
                            .isCountDown(false)
                            .withSecondsPerQuestion(0)
                            .build()
                    )
                    .withQuestionSettings(
                        new QuestionSettingsBuilder()
                            .withFields(LearnableField.KANA, LearnableField.ROMAJI)
                            .withQuantity(150)
                            .withType(QuestionType.CHOICE)
                            .withCardQuantity(4)
                            .withScoreTracking(true)
                            .build()
                    )
                    .build()
            )
            .build();
    });
});
