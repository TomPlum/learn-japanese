import RomajiGenerator from "../../utility/RomajiGenerator";

describe("Romaji Generator", () => {

    const generator = new RomajiGenerator();

    it("Should return the romaji for the given kana", () => {
        const kana = "ありがとう";
        const romaji = generator.generate(kana);
        expect(romaji).toBe("arigatō");
    });

    it("Should replace double u's with ū", () => {
        const kana = "くう";
        const romaji = generator.generate(kana);
        expect(romaji).toBe("kū");
    });

    it("Should replace double o's with ō", () => {
        const kana = "とお";
        const romaji = generator.generate(kana);
        expect(romaji).toBe("tō");
    });

    it("Should replace ou with ō", () => {
        const kana = "しおう";
        const romaji = generator.generate(kana);
        expect(romaji).toBe("shiō");
    });

    it("Should replace diagraphs with the correct romaji", () => {
        const kana = "しょ";
        const romaji = generator.generate(kana);
        expect(romaji).toBe("sho");
    });
});