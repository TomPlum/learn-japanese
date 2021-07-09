import { GameSettingsBuilder } from "../../../types/session/settings/game/GameSettings";
import { LifeQuantity } from "../../../types/game/LifeQuantity";
import { DisplayType } from "../../../types/game/DisplayType";
import { LifeSettingsBuilder } from "../../../types/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../../../types/session/settings/game/HintSettings";

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
            expect(settings.display).toStrictEqual({ type: DisplayType.ROMAJI, cards: 1, score: true });
        });

        it("Should set default Time settings if not specified", () => {
            const settings = new GameSettingsBuilder().build();
            expect(settings.time).toStrictEqual({ timed: true, countdown: false });
        });

        it("Should override settings when specified", () => {
            const settings = new GameSettingsBuilder()
                .withDisplaySettings({ type: DisplayType.KANA, cards: 6, score: true })
                .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
                .withLifeSettings(new LifeSettingsBuilder().isEnabled().withQuantity(LifeQuantity.ONE).build())
                .withTimeSettings({ timed: false, countdown: true, secondsPerQuestion: 5 })
                .build();

            expect(settings.display).toStrictEqual({ type: DisplayType.KANA, cards: 6, score: true });
            expect(settings.hints).toStrictEqual(new HintSettingsBuilder().isEnabled(false).build());
            expect(settings.lives).toStrictEqual(new LifeSettingsBuilder().isEnabled().withQuantity(LifeQuantity.ONE).build());
            expect(settings.time).toStrictEqual({ timed: false, countdown: true, secondsPerQuestion: 5 });
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