import CalendarSettings, { CalendarSettingsBuilder } from "../../../../../domain/session/settings/data/CalendarSettings";

describe("Calendar Settings", () => {
    describe("Builder", () => {
        it("Should default to all unselected with undefined quantity", () => {
            const settings = new CalendarSettingsBuilder().build();
            expect(settings).toStrictEqual(new CalendarSettings(false, false, false, false, false, undefined));
        });

        it("Should set days to true when specifying but not passing any arg", () => {
            const settings = new CalendarSettingsBuilder().withDays().build();
            expect(settings.days).toBe(true);
        });

        it("Should set days to false when specifying", () => {
            const settings = new CalendarSettingsBuilder().withDays(false).build();
            expect(settings.days).toBe(false);
        });

        it("Should set months to true when specifying but not passing any arg", () => {
            const settings = new CalendarSettingsBuilder().withMonths().build();
            expect(settings.months).toBe(true);
        });

        it("Should set months to false when specifying", () => {
            const settings = new CalendarSettingsBuilder().withMonths(false).build();
            expect(settings.months).toBe(false);
        });

        it("Should set seasons to true when specifying but not passing any arg", () => {
            const settings = new CalendarSettingsBuilder().withSeasons().build();
            expect(settings.seasons).toBe(true);
        });

        it("Should set seasons to false when specifying", () => {
            const settings = new CalendarSettingsBuilder().withSeasons(false).build();
            expect(settings.seasons).toBe(false);
        });

        it("Should set nouns to true when specifying but not passing any arg", () => {
            const settings = new CalendarSettingsBuilder().withTemporalNouns().build();
            expect(settings.nouns).toBe(true);
        });

        it("Should set nouns to false when specifying", () => {
            const settings = new CalendarSettingsBuilder().withTemporalNouns(false).build();
            expect(settings.nouns).toBe(false);
        });

        it("Should set phrases to true when specifying but not passing any arg", () => {
            const settings = new CalendarSettingsBuilder().withPhrases().build();
            expect(settings.phrases).toBe(true);
        });

        it("Should set phrases to false when specifying", () => {
            const settings = new CalendarSettingsBuilder().withPhrases(false).build();
            expect(settings.phrases).toBe(false);
        });

        it("Should set quantity to the specified number", () => {
            const settings = new CalendarSettingsBuilder().withQuantity(25).build();
            expect(settings.quantity).toBe(25);
        });
    });
});
