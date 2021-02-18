import {KanaRepository} from "../../infra/KanaRepository";
import {Kana} from "../../types/Kana";

describe("Kana Repository", () => {
    const repository = new KanaRepository();

    describe("Hiragana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                const response = repository.readHiragana();
                let expected = [new Kana("あ"), new Kana("い"), new Kana("う"), new Kana("え"), new Kana("お")];
                expect(response).toEqual(expected);
            });
        });
    });
});