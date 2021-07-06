import BasicsRepository from "../../repository/BasicsRepository";
import BasicsSettings, { BasicsSettingsBuilder } from "../../types/session/settings/data/BasicsSettings";

describe("Basic Repository", () => {

    const repository = new BasicsRepository();

    it("Should return colours when the colours property is passed as true in the settings", () => {
        const settings: BasicsSettings = new BasicsSettingsBuilder().withColours().build();
        const response = repository.read(settings);
        expect(response).toHaveLength(26);
    });

    it("Should return an empty array when no settings are specified", () => {
        const settings = new BasicsSettingsBuilder().build();
        const response = repository.read(settings);
        expect(response).toHaveLength(0);
    });
});