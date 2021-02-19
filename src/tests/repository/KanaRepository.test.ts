import {KanaRepository} from "../../repository/KanaRepository";
import {Kana} from "../../types/Kana";
import {KanaColumn} from "../../types/KanaColumn";
import KanaType from "../../types/KanaType";

describe("Kana Repository", () => {
    const repository = new KanaRepository();

    describe("Hiragana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                const response = repository.readHiragana();
                expect(response[0]).toEqual(new Kana("あ", "a", KanaType.HIRAGANA));
            });
        });
    });
});