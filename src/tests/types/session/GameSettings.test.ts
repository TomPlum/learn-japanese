import { GameSettingsBuilder } from "../../../types/session/GameSettings";
import { HintQuantity } from "../../../types/game/HintQuantity";
import { LifeQuantity } from "../../../types/game/LifeQuantity";
import { DisplayType } from "../../../types/game/DisplayType";

describe("Game Settings", () => {
    describe("Builder", () => {
        it("Should set default Hint settings if not specified", () => {
            const settings = new GameSettingsBuilder().build();
            expect(settings.hints).toStrictEqual({ enabled: true, quantity: HintQuantity.UNLIMITED });
        });

        it("Should set default Life settings if not specified", () => {
            const settings = new GameSettingsBuilder().build();
            expect(settings.lives).toStrictEqual({ enabled: true, quantity: LifeQuantity.FIVE });
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
                .withHintSettings({ enabled: false })
                .withLifeSettings({ enabled: true, quantity: LifeQuantity.ONE })
                .withTimeSettings({ timed: false, countdown: true, secondsPerQuestion: 5 })
                .build();

            expect(settings.display).toStrictEqual({ type: DisplayType.KANA, cards: 6, score: true });
            expect(settings.hints).toStrictEqual({ enabled: false });
            expect(settings.lives).toStrictEqual({ enabled: true, quantity: LifeQuantity.ONE });
            expect(settings.time).toStrictEqual({ timed: false, countdown: true, secondsPerQuestion: 5 });
        });

        it("Should build upon the existing values when creating from an existing settings object", () => {
            const settings = new GameSettingsBuilder().withHintSettings({ enabled: false }).build();

            const newSettings = new GameSettingsBuilder()
                .fromExisting(settings)
                .withLifeSettings({ enabled: true, quantity: LifeQuantity.ONE })
                .build();

            expect(newSettings.hints).toStrictEqual({ enabled: false });
            expect(newSettings.lives).toStrictEqual({ enabled: true, quantity: LifeQuantity.ONE });
        });
    });
});