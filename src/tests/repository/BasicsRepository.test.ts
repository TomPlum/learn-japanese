import BasicsRepository from "../../repository/BasicsRepository";
import { LearnBasicsSettings } from "../../types/learn/LearningSessionSettings";

describe("Basic Repository", () => {

    const repository = new BasicsRepository();

    it("Should return colours when the colours property is passed as true in the settings", () => {
        const settings: LearnBasicsSettings = { colours: true };
        const response = repository.read(settings);
        expect(response).toHaveLength(26);
    });

    it("Should return an empty array when no settings are specified", () => {
        expect(repository.read({})).toHaveLength(0);
    });
});