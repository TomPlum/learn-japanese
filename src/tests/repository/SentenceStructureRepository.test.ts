import SentenceStructureRepository from "../../repository/SentenceStructureRepository";
import { LearnSentenceStructureSettings } from "../../types/learn/LearningSessionSettings";
import { AdjectiveData, VerbData } from "../../data/DataTypes";
import { adjectives, verbs } from "../../data/SentenceStructure";
import { AdjectiveType } from "../../types/sentence/AdjectiveType";
import Adjective from "../../types/sentence/Adjective";
import { VerbType } from "../../types/sentence/VerbType";
import Verb from "../../types/sentence/Verb";

jest.mock("../../data/SentenceStructure");

describe("Sentence Structure Repository", () => {

    const mockAdjectives = adjectives as jest.MockedFunction<() => AdjectiveData[]>;
    const mockVerbs = verbs as jest.MockedFunction<() => VerbData[]>;

    beforeEach(() => {
        mockAdjectives.mockReturnValue([{
            meanings: ["small"],
            kana: "ちいさい",
            kanjiForm: "小さい",
            type: AdjectiveType.I
        }]);

        mockVerbs.mockReturnValue([{
            meanings: ["to use"],
            kana: "つかう",
            kanjiForm: "使う",
            type: VerbType.U,
        }]);
    });

    const repository = new SentenceStructureRepository();

    it("Should return the adjectives when the adjectives property is passed as true", () => {
        const settings: LearnSentenceStructureSettings = { adjectives: true };
        const response = repository.read(settings);
        expect(response).toStrictEqual([new Adjective(["small"], "小さい", AdjectiveType.I, "ちいさい")]);
    });

    it("Should return the verbs when the verbs property is passed as true", () => {
        const settings: LearnSentenceStructureSettings =  { verbs: true };
        const response = repository.read(settings);
        expect(response).toStrictEqual([new Verb(["to use"], "使う", VerbType.U, "つかう")]);
    });

    it("Should return an empty array if no settings are passed", () => {
        expect(repository.read({})).toHaveLength(0);
    });
});