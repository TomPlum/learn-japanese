import {KanaRepository} from "../../repository/KanaRepository";
import {Kana} from "../../types/Kana";
import KanaType from "../../types/KanaType";
import {KanaColumn} from "../../types/KanaColumn";

describe("Kana Repository", () => {
    const repository = new KanaRepository();

    describe("Hiragana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                const response = repository.readHiragana();
                expect(response[0]).toEqual(new Kana("あ", "a", KanaType.HIRAGANA, KanaColumn.VOWEL));
            });
        });
    });

    describe("Katakana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                const response = repository.readKatakana();
                expect(response[0]).toEqual(new Kana("ア", "a", KanaType.KATAKANA, KanaColumn.VOWEL));
            });
        });
    });
});