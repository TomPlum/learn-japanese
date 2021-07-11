import { GameSettingsBuilder } from "../../../../../types/session/settings/game/GameSettings";
import { LifeQuantity } from "../../../../../types/game/LifeQuantity";
import { QuestionType } from "../../../../../types/game/QuestionType";
import LifeSettings, { LifeSettingsBuilder } from "../../../../../types/session/settings/game/LifeSettings";
import HintSettings, { HintSettingsBuilder } from "../../../../../types/session/settings/game/HintSettings";
import TimeSettings, { TimeSettingsBuilder } from "../../../../../types/session/settings/game/TimeSettings";
import QuestionSettings, { QuestionSettingsBuilder } from "../../../../../types/session/settings/game/QuestionSettings";
import { HintQuantity } from "../../../../../types/game/HintQuantity";

describe("Game Settings", () => {
    describe("Builder", () => {
        it("Should set default Hint settings if not specified", () => {
            const settings = new GameSettingsBuilder().build();
            expect(settings.hints).toStrictEqual(new HintSettingsBuilder().build());
        });

        it("Should set default Life settings if not specified", () => {
            const settings = new GameSettingsBuilder().build();
            expect(settings.lives).toStrictEqual(new LifeSettingsBuilder().build());
        });

        it("Should set default Display settings if not specified", () => {
            const settings = new GameSettingsBuilder().build();
            expect(settings.question).toStrictEqual(
                new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withCardQuantity(1).withScoreTracking(false).build()
            );
        });

        it("Should set default Time settings if not specified", () => {
            const settings = new GameSettingsBuilder().build();
            expect(settings.time).toStrictEqual(new TimeSettingsBuilder().isTimed().build());
        });

        it("Should override settings when specified", () => {
            const settings = new GameSettingsBuilder()
                .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.KANA).withCardQuantity(6).withScoreTracking(true).build())
                .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
                .withLifeSettings(new LifeSettingsBuilder().isEnabled().withQuantity(LifeQuantity.ONE).build())
                .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
                .build();

            expect(settings.question).toStrictEqual(new QuestionSettings(QuestionType.KANA, 6, true));
            expect(settings.hints).toStrictEqual(new HintSettings(false, HintQuantity.UNLIMITED));
            expect(settings.lives).toStrictEqual(new LifeSettings(true, LifeQuantity.ONE));
            expect(settings.time).toStrictEqual(new TimeSettings(true, true, 5));
        });

        it("Should build upon the existing values when creating from an existing settings object", () => {
            const settings = new GameSettingsBuilder().withHintSettings(new HintSettingsBuilder().isEnabled(false).build()).build();

            const newSettings = new GameSettingsBuilder()
                .fromExisting(settings)
                .withLifeSettings(new LifeSettingsBuilder().isEnabled().withQuantity(LifeQuantity.ONE).build())
                .build();

            expect(newSettings.hints).toStrictEqual(new HintSettingsBuilder().isEnabled(false).build());
            expect(newSettings.lives).toStrictEqual(new LifeSettingsBuilder().isEnabled().withQuantity(LifeQuantity.ONE).build());
        });
    });
});