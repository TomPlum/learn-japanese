import SentenceStructureRepository from "../../repository/SentenceStructureRepository";
import { LearnSentenceStructureSettings } from "../../types/learn/LearningSessionSettings";
import { AdjectiveData, AdverbData, ExpressionData, VerbData } from "../../data/DataTypes";
import { adjectives, adverbs, expressions, verbs } from "../../data/SentenceStructure";
import { AdjectiveType } from "../../types/sentence/AdjectiveType";
import Adjective from "../../types/sentence/Adjective";
import { VerbType } from "../../types/sentence/VerbType";
import Verb from "../../types/sentence/Verb";
import Definition from "../../types/sentence/Definition";

jest.mock("../../data/SentenceStructure");

describe("Sentence Structure Repository", () => {

    const mockAdjectives = adjectives as jest.MockedFunction<() => AdjectiveData[]>;
    const mockVerbs = verbs as jest.MockedFunction<() => VerbData[]>;
    const mockAdverbs = adverbs as jest.MockedFunction<() => AdverbData[]>;
    const mockExpressions = expressions as jest.MockedFunction<() => ExpressionData[]>;

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

        mockAdverbs.mockReturnValue([{
            meanings: ["not much"],
            kana: "あまり~",
            genkiLesson: 3
        }]);

        mockExpressions.mockReturnValue([{
            meanings: ["That's right", "Let me see"],
            kana: "そうですね",
            genkiLesson: 3
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

    it("Should return the adverbs when the adverbs property is passed as true", () => {
        const settings: LearnSentenceStructureSettings =  { adverbs: true };
        const response = repository.read(settings);
        expect(response).toStrictEqual([new Definition(["not much"], undefined, "あまり~", "Adverb")]);
    });

    it("Should return the expressions when the expressions property is passed as true", () => {
        const settings: LearnSentenceStructureSettings =  { expressions: true };
        const response = repository.read(settings);
        expect(response).toStrictEqual([new Definition(["That's right", "Let me see"], undefined, "そうですね", "Expression")]);
    });

    it("Should return an empty array if no settings are passed", () => {
        expect(repository.read({})).toHaveLength(0);
    });
});