import Colour from "../../../types/colour/Colour";

describe("Colour", () => {

    const colour = new Colour("Red", "赤", "あか", "aka", "#ff0000");

    it("Should return a single word for the words array", () => {
        expect(colour.getKana()).toStrictEqual(["あか"]);
    });

    it("Should return the colour name for the title", () => {
        expect(colour.getTitle()).toBe("Red");
    });

    it("Should return the Kanji character when the colour has one", () => {
        expect(colour.getKanjiVariation()).toBe("赤");
    });

    it("Should return the name when the colour has no Kanji character", () => {
        expect(new Colour("Red", undefined, "あか", "aka", "#ff0000").getKanjiVariation()).toBe("Red");
    });
});