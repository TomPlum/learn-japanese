import LifeSettings, { LifeSettingsBuilder } from "../../../../../types/session/settings/game/LifeSettings";
import { LifeQuantity } from "../../../../../types/game/LifeQuantity";

describe("Life Settings", () => {
    describe("Builder", () => {
        it("Should default to enabled with 5 lives", () => {
            const settings = new LifeSettingsBuilder().build();
            expect(settings).toStrictEqual(new LifeSettings(true, LifeQuantity.FIVE));
        });

        describe("Is Enabled", () => {
            it("Should set enabled to true when not specifying", () => {
                const settings = new LifeSettingsBuilder().isEnabled().build();
                const isEnabled = settings.enabled;
                expect(isEnabled).toBe(true);
            });

            it("Should set enabled to true when passing in true", () => {
                const settings = new LifeSettingsBuilder().isEnabled(true).build();
                const isEnabled = settings.enabled;
                expect(isEnabled).toBe(true);
            });

            it("Should set enabled to false when passing in false", () => {
                const settings = new LifeSettingsBuilder().isEnabled(false).build();
                const isEnabled = settings.enabled;
                expect(isEnabled).toBe(false);
            });

            it("Should set life quantity to 0 when passing enabled as false", () => {
                const settings = new LifeSettingsBuilder().isEnabled(false).build();
                const lifeQuantity = settings.quantity;
                expect(lifeQuantity).toBe(LifeQuantity.ZERO);
            });
        });

        describe("Quantity", () => {
            it("Should set the quantity to the given quantity when passed", () => {
                const settings = new LifeSettingsBuilder().withQuantity(LifeQuantity.TEN).build();
                const lifeQuantity = settings.quantity;
                expect(lifeQuantity).toBe(10);
            });
        });
    });
});