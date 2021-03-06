import NumbersRepository from "../../repository/NumbersRepository";
import { CounterData, NumbersData } from "../../data/DataTypes";
import numbers, { counters } from "../../data/Numbers";
import CommonData from "../../types/learn/CommonData";
import { CounterGroup } from "../../types/numbers/CounterGroup";
import { NumbersSettingsBuilder } from "../../types/session/settings/data/NumbersSettings";

jest.mock("../../data/Numbers");

describe("Numbers Repository", function () {

    const mockNumbers = numbers as jest.MockedFunction<() => NumbersData[]>;
    const mockCounters = counters as jest.MockedFunction<() => CounterData[]>;

    beforeEach(() => {
        mockNumbers.mockReturnValue([{ name: "1", kanji: "一", kana: ["いち"], romaji: ["ichi"] }]);
        mockCounters.mockReturnValue([{
            name: "Flat",
            kanji: "枚",
            kana: ["まい"],
            romaji: ["mai"],
            group: CounterGroup.MUST_KNOW,
            example: { kana: "100枚の折り紙が必要です", english: "I need 100 pieces of origami paper." }
        }]);
    });

    const repository = new NumbersRepository();

    it("Should return numbers as CommonData objects when the 'numbers' boolean is passed as true", () => {
        const settings = new NumbersSettingsBuilder().withNumbers().build();
        const response = repository.read(settings);
        expect(response).toStrictEqual([new CommonData("1", ["いち"], "一", "Number", "1")]);
    });

    it("Should return counters as CommonData objects when the 'counters' boolean is passed as true", () => {
        const settings = new NumbersSettingsBuilder().withCounters().build();
        const response = repository.read(settings);
        expect(response).toStrictEqual(
            [new CommonData(
                "Flat",
                ["まい"],
                "枚",
                "Counter - Must Know",
                "Flat",
                { english: "I need 100 pieces of origami paper.", kana: "100枚の折り紙が必要です"}
            )]
        );
    });


    it("Should return an empty array when no settings are specified", () => {
        const settings = new NumbersSettingsBuilder().build();
        const response = repository.read(settings);
        expect(response).toHaveLength(0);
    });

    it("Should set the Kanji as an empty string if it is not present in the data object", () => {
        mockNumbers.mockReturnValueOnce([ { name: "1", kana: ["いち"], romaji: ["ichi"] }]);
        const settings = new NumbersSettingsBuilder().withNumbers().build();
        const response = repository.read(settings);
        expect(response).toStrictEqual([new CommonData("1", ["いち"], "", "Number", "1")]);
    });
});