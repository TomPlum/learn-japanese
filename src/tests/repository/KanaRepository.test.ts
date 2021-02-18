import {KanaRepository} from "../../infra/KanaRepository";
import {Kana} from "../../types/Kana";

describe("Kana Repository", () => {
    const repository = new KanaRepository();

    describe("Hiragana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                const response = repository.readHiragana();
                expect(response[0]).toEqual(new Kana("あ", "a"));
            });
        });
    });
});