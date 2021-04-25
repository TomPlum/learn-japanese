import SentenceStructureRepository from "../../repository/SentenceStructureRepository";
import { LearnSentenceStructureSettings } from "../../types/learn/LearningSessionSettings";
import { AdjectiveData } from "../../data/DataTypes";
import { adjectives } from "../../data/SentenceStructure";
import { AdjectiveType } from "../../types/kana/AdjectiveType";
import Adjective from "../../types/sentence/Adjective";

jest.mock("../../data/SentenceStructure");

describe("Sentence Structure Repository", () => {

    const mockAdjectives = adjectives as jest.MockedFunction<() => AdjectiveData[]>;

    beforeEach(() => {
        mockAdjectives.mockReturnValue([{
            meanings: ["small"],
            kana: "ちいさい",
            kanjiForm: "小さい",
            type: AdjectiveType.I
        }]);
    });

    const repository = new SentenceStructureRepository();

    it("Should return the adjectives when the adjectives property is passed as true", () => {
        const settings: LearnSentenceStructureSettings = { adjectives: true };
        const response = repository.read(settings);
        expect(response).toStrictEqual([new Adjective(["small"], "小さい", AdjectiveType.I, "ちいさい")]);
    });

    it("Should return an empty array if no settings are passed", () => {
        expect(repository.read({})).toHaveLength(0);
    });
});