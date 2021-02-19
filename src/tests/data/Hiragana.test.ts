import hiragana from "../../data/Hiragana";
import each from "jest-each";
import {KanaColumn} from "../../types/KanaColumn";
import {KanaData} from "../../data/DataTypes";

describe("Hiragana", () => {
    describe("Unicode Mappings", () => {
        describe("Vowels", () => {
            it("a", () => expect(getHiragana("a").code).toEqual("あ"));
            it("i", () => expect(getHiragana("i").code).toEqual("い"));
            it("u", () => expect(getHiragana("u").code).toEqual("う"));
            it("e", () => expect(getHiragana("e").code).toEqual("え"));
            it("o", () => expect(getHiragana("o").code).toEqual("お"));
        });

        describe("K Column", () => {
            it("ka", () => expect(getHiragana("ka").code).toEqual("か"));
            it("ki", () => expect(getHiragana("ki").code).toEqual("き"));
            it("ku", () => expect(getHiragana("ku").code).toEqual("く"));
            it("ke", () => expect(getHiragana("ke").code).toEqual("け"));
            it("ko", () => expect(getHiragana("ko").code).toEqual("こ"));
        });

        describe("K Column Diacritical (Dakuten)", () => {
            it("ga", () => expect(getHiragana("ga").code).toEqual("が"));
            it("gi", () => expect(getHiragana("gi").code).toEqual("ぎ"));
            it("gu", () => expect(getHiragana("gu").code).toEqual("ぐ"));
            it("ge", () => expect(getHiragana("ge").code).toEqual("げ"));
            it("go", () => expect(getHiragana("go").code).toEqual("ご"));
        });

        describe("S Column", () => {
            it("sa", () => expect(getHiragana("sa").code).toEqual("さ"));
            it("shi", () => expect(getHiragana("shi").code).toEqual("し"));
            it("su", () => expect(getHiragana("su").code).toEqual("す"));
            it("se", () => expect(getHiragana("se").code).toEqual("せ"));
            it("so", () => expect(getHiragana("so").code).toEqual("そ"));
        });

        describe("S Column Diacritical (Dakuten)", () => {
            it("za", () => expect(getHiragana("za").code).toEqual("ざ"));
            it("ji", () => expect(getHiragana("ji").code).toEqual("じ"));
            it("zu", () => expect(getHiragana("zu").code).toEqual("ず"));
            it("ze", () => expect(getHiragana("ze").code).toEqual("ぜ"));
            it("zo", () => expect(getHiragana("zo").code).toEqual("ぞ"));
        });

        describe("T Column", () => {
            it("ta", () => expect(getHiragana("ta").code).toEqual("た"));
            it("chi", () => expect(getHiragana("chi").code).toEqual("ち"));
            it("tsu", () => expect(getHiragana("tsu").code).toEqual("つ"));
            it("te", () => expect(getHiragana("te").code).toEqual("て"));
            it("to", () => expect(getHiragana("to").code).toEqual("と"));
        });

        describe("T Column Diacritical (Dakuten)", () => {
            it("da", () => expect(getHiragana("da").code).toEqual("だ"));
            it("di", () => expect(getHiragana("di").code).toEqual("ぢ"));
            it("du", () => expect(getHiragana("du").code).toEqual("づ"));
            it("de", () => expect(getHiragana("de").code).toEqual("で"));
            it("do", () => expect(getHiragana("do").code).toEqual("ど"));
        });

        describe("N Column", () => {
            it("na", () => expect(getHiragana("na").code).toEqual("な"));
            it("ni", () => expect(getHiragana("ni").code).toEqual("に"));
            it("nu", () => expect(getHiragana("nu").code).toEqual("ぬ"));
            it("ne", () => expect(getHiragana("ne").code).toEqual("ね"));
            it("no", () => expect(getHiragana("no").code).toEqual("の"));
        });

        describe("H Column", () => {
            it("ha", () => expect(getHiragana("ha").code).toEqual("は"));
            it("hi", () => expect(getHiragana("hi").code).toEqual("ひ"));
            it("hu", () => expect(getHiragana("hu").code).toEqual("ふ"));
            it("he", () => expect(getHiragana("he").code).toEqual("へ"));
            it("ho", () => expect(getHiragana("ho").code).toEqual("ほ"));
        });

        describe("H Column Diacritical (Dakuten)", () => {
            it("ba", () => expect(getHiragana("ba").code).toEqual("ば"));
            it("bi", () => expect(getHiragana("bi").code).toEqual("び"));
            it("bu", () => expect(getHiragana("bu").code).toEqual("ぶ"));
            it("be", () => expect(getHiragana("be").code).toEqual("べ"));
            it("bo", () => expect(getHiragana("bo").code).toEqual("ぼ"));
        });

        describe("H Column Diacritical (Handakuten)", () => {
            it("pa", () => expect(getHiragana("pa").code).toEqual("ぱ"));
            it("pi", () => expect(getHiragana("pi").code).toEqual("ぴ"));
            it("pu", () => expect(getHiragana("pu").code).toEqual("ぷ"));
            it("pe", () => expect(getHiragana("pe").code).toEqual("ぺ"));
            it("po", () => expect(getHiragana("po").code).toEqual("ぽ"));
        });

        describe("M Column", () => {
            it("ma", () => expect(getHiragana("ma").code).toEqual("ま"));
            it("mi", () => expect(getHiragana("mi").code).toEqual("み"));
            it("mu", () => expect(getHiragana("mu").code).toEqual("む"));
            it("me", () => expect(getHiragana("me").code).toEqual("め"));
            it("mo", () => expect(getHiragana("mo").code).toEqual("も"));
        });

        describe("Y Column", () => {
            it("ya", () => expect(getHiragana("ya").code).toEqual("や"));
            it("yu", () => expect(getHiragana("yu").code).toEqual("ゆ"));
            it("yo", () => expect(getHiragana("yo").code).toEqual("よ"));
        });

        describe("R Column", () => {
            it("ra", () => expect(getHiragana("ra").code).toEqual("ら"));
            it("ri", () => expect(getHiragana("ri").code).toEqual("り"));
            it("ru", () => expect(getHiragana("ru").code).toEqual("る"));
            it("re", () => expect(getHiragana("re").code).toEqual("れ"));
            it("ro", () => expect(getHiragana("ro").code).toEqual("ろ"));
        });

        describe("W Column", () => {
            it("wa", () => expect(getHiragana("wa").code).toEqual("わ"));
            it("wo", () => expect(getHiragana("wo").code).toEqual("を"));
        });

        it("n", () => expect(getHiragana("n").code).toEqual("ん"));
    });

    describe("Column Mappings", () => {
        const vowels = getMultipleHiragana(["a", "i", "u", "e", "o"]);
        each(vowels).it("Should return the vowel column for '%s'", (kana: KanaData) => {
           expect(kana.column).toBe(KanaColumn.VOWEL); 
        });

        const k = getMultipleHiragana(["ka", "ki", "ku", "ke", "ko"]);
        each(k).it("Should return the k column for '%s'", (kana: KanaData) => {
           expect(kana.column).toBe(KanaColumn.K); 
        });

        const s = getMultipleHiragana(["sa", "shi", "su", "se", "so"]);
        each(s).it("Should return the s column for '%s'", (kana: KanaData) => {
           expect(kana.column).toBe(KanaColumn.S); 
        });

        const t = getMultipleHiragana(["ta", "chi", "tsu", "te", "to"]);
        each(t).it("Should return the t column for '%s'", (kana: KanaData) => {
           expect(kana.column).toBe(KanaColumn.T); 
        });

        const n = getMultipleHiragana(["na", "ni", "nu", "ne", "no"]);
        each(n).it("Should return the n column for '%s'", (kana: KanaData) => {
           expect(kana.column).toBe(KanaColumn.N); 
        });

        const h = getMultipleHiragana(["ha", "hi", "hu", "he", "ho"]);
        each(h).it("Should return the h column for '%s'", (kana: KanaData) => {
           expect(kana.column).toBe(KanaColumn.H); 
        });

        const m = getMultipleHiragana(["ma", "mi", "mu", "me", "mo"]);
        each(m).it("Should return the m column for '%s'", (kana: KanaData) => {
           expect(kana.column).toBe(KanaColumn.M); 
        });

        const y = getMultipleHiragana(["ya", "yu", "yo"]);
        each(y).it("Should return the y column for '%s'", (kana: KanaData) => {
           expect(kana.column).toBe(KanaColumn.Y); 
        });

        const r = getMultipleHiragana(["ra", "ri", "ru", "re", "ro"]);
        each(r).it("Should return the r column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.R);
        });

        const w = getMultipleHiragana(["wa", "wo"]);
        each(w).it("Should return the w column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.W);
        });

        it("Should return the other column for n", () => {
           expect(getHiragana("n").column).toBe(KanaColumn.OTHER);
        });
    });

    function getMultipleHiragana(names: string[]): KanaData[] {
        return names.map(name => getHiragana(name));
    }

    function getHiragana(name: string): KanaData {
        return hiragana.filter(entry => entry.name === name)[0];
    }
});