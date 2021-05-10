import RomajiGenerator from "../../utility/RomajiGenerator";

describe("Romaji Generator", () => {

    const generator = new RomajiGenerator();

    it("Should return the romaji for the given kana", () => {
        const kana = "ありがとう";
        const romaji = generator.generate(kana);
        expect(romaji).toBe("arigatō");
    });

    describe("Double Hiragana Consonant Replacement", () => {
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

        it("Should replace ii with ī", () => {
            const kana = "きい";
            const romaji = generator.generate(kana);
            expect(romaji).toBe("kī");
        });

        it("Should replace aa with ā", () => {
            const kana = "はあ";
            const romaji = generator.generate(kana);
            expect(romaji).toBe("hā");
        });

        it("Should replace ee with ē", () => {
            const kana = "へえ";
            const romaji = generator.generate(kana);
            expect(romaji).toBe("hē");
        });
    });

    describe("Katakana Chōonpu", () => {
        it("Should replace aー with ā", () => {
            const kana = "ハー";
            const romaji = generator.generate(kana);
            expect(romaji).toBe("hā");
        });

        it("Should replace uー with ū", () => {
            const kana = "ふう";
            const romaji = generator.generate(kana);
            expect(romaji).toBe("hū");
        });

        it("Should replace oー with ō", () => {
            const kana = "ホー";
            const romaji = generator.generate(kana);
            expect(romaji).toBe("hō");
        });

        it("Should replace iー with ī", () => {
            const kana = "ヒー";
            const romaji = generator.generate(kana);
            expect(romaji).toBe("hī");
        });

        it("Should replace eー with ē", () => {
            const kana = "ヘー";
            const romaji = generator.generate(kana);
            expect(romaji).toBe("hē");
        });
    });

    it("Should replace diagraphs with the correct romaji", () => {
        const kana = "しょ";
        const romaji = generator.generate(kana);
        expect(romaji).toBe("sho");
    });

    describe("Hiragana Sokuons", () => {
        it("Should replace Hiragana sokuon (っ) with the first character of the next kana", () => {
            const kana = "けっこうです";
            const romaji = generator.generate(kana);
            expect(romaji).toBe("kekkōdesu");
        });

        it("Should replace Hiragana sokuon (っ) with it precedes a ち", () => {
            const kana = "こっち";
            const romaji = generator.generate(kana);
            expect(romaji).toBe("kotchi");
        });
    });

   describe("Katakana Sokuons", () => {
       it("Should replace Katakana sokuon (ッ) with the first character of the next kana", () => {
           const kana = "ポッキー";
           const romaji = generator.generate(kana);
           expect(romaji).toBe("pokkī");
       });
   });

});