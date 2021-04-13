import BasicsRepository from "../../repository/BasicsRepository";
import { LearnBasicsSettings } from "../../types/learn/LearnSettings";

describe("Basic Repository", () => {

    const repository = new BasicsRepository();

    it("Should return colours when the colours property is passed as true in the settings", () => {
        const settings: LearnBasicsSettings = { colours: true };
        const response = repository.read(settings);
        expect(response).toHaveLength(26);
    });
});