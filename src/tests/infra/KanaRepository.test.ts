import {KanaRepository} from "../../infra/KanaRepository";
import {Kana} from "../../types/Kana";

describe("Kana Repository", () => {
    const repository = new KanaRepository();

    describe("Hiragana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                const response = repository.readHiragana();
                let expected = [new Kana("あ", "o"), new Kana("い", "i"), new Kana("う", "u"), new Kana("え", "e"), new Kana("お", "o")];
                expect(response).toEqual(expected);
            });
        });
    });
});