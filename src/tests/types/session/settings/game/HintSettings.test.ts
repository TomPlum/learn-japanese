import HintSettings, { HintSettingsBuilder } from "../../../../../types/session/settings/game/HintSettings";
import { HintQuantity } from "../../../../../types/game/HintQuantity";

describe("Hint Settings", () => {
    describe("Builder", () => {
        it("Should default to enabled with unlimited hints", () => {
            const settings = new HintSettingsBuilder().build();
            expect(settings).toStrictEqual(new HintSettings(true, HintQuantity.UNLIMITED));
        });

        it("Should set enabled to true when specified by no args are passed", () => {
            const settings = new HintSettingsBuilder().isEnabled().build();
            expect(settings.enabled).toBe(true);
        });

        it("Should set enabled to false when specified", () => {
            const settings = new HintSettingsBuilder().isEnabled(false).build();
            expect(settings.enabled).toBe(false);
        });

        it("Should set the hint quantity when specified", () => {
            const settings = new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.FIVE).build();
            expect(settings.quantity).toBe(HintQuantity.FIVE);
        });
    });
});