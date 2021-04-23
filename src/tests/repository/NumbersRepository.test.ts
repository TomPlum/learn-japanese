import NumbersRepository from "../../repository/NumbersRepository";
import { LearnNumbersSettings } from "../../types/learn/LearningSessionSettings";
import { NumbersData } from "../../data/DataTypes";
import numbers from "../../data/Numbers";
import CommonData from "../../types/learn/CommonData";
import JapaneseWord from "../../types/learn/JapaneseWord";

jest.mock("../../data/Numbers");

describe("Numbers Repository", function () {

    const mockHiragana = numbers as jest.MockedFunction<() => NumbersData[]>;

    beforeEach(() => {
        mockHiragana.mockReturnValue([ { name: "1", kanji: "一", kana: ["いち"], romaji: ["ichi"] }]);
    });

    const repository = new NumbersRepository();

    it("Should return numbers as CommonData objects when the 'numbers' boolean is passed as true", () => {
        const settings: LearnNumbersSettings = { numbers: true };
        const response = repository.read(settings);
        expect(response).toStrictEqual([new CommonData("1", [new JapaneseWord("いち", "ichi")], "一", "Number")]);
    });

    it("Should return an empty array when no settings are specified", () => {
        expect(repository.read({})).toHaveLength(0);
    });

    it("Should set the Kanji as an empty string if it is not present in the data object", () => {
        mockHiragana.mockReturnValueOnce([ { name: "1", kana: ["いち"], romaji: ["ichi"] }]);
        const settings: LearnNumbersSettings = { numbers: true };
        const response = repository.read(settings);
        expect(response).toStrictEqual([new CommonData("1", [new JapaneseWord("いち", "ichi")], "", "Number")]);
    });
});