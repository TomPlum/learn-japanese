import Colour from "../../../types/colour/Colour";

describe("Colour", () => {

    const colour = new Colour("Red", "赤", "あか", "aka", "#ff0000");

    it("Should return the kanji for the answer", () => {
        expect(colour.getAnswer()).toBe("赤");
    });

    it("Should return the colour name in English for the question", () => {
        expect(colour.getQuestion()).toBe("Red");
    });

    it("Should return 'Colour' for the title", () => {
        expect(colour.getTitle()).toBe("Colour");
    });
});