import Colour from "../../../types/colour/Colour";
import JapaneseWord from "../../../types/learn/JapaneseWord";

describe("Colour", () => {

    const colour = new Colour("Red", "赤", "あか", "aka", "#ff0000");

    it("Should return a single word for the words array", () => {
        expect(colour.getWords()).toStrictEqual([new JapaneseWord("あか", "aka")]);
    });

    it("Should return the colour name in English for the question", () => {
        expect(colour.getQuestion()).toBe("Red");
    });

    it("Should return the colour name for the title", () => {
        expect(colour.getTitle()).toBe("Red");
    });
});