import katakana from "../../data/Katakana";

describe("Katakana", () => {
    describe("Vowels", () => {
        it("a", () => expect(getKatakana("a")).toEqual("ア"));
        it("i", () => expect(getKatakana("i")).toEqual("イ"));
        it("u", () => expect(getKatakana("u")).toEqual("ウ"));
        it("e", () => expect(getKatakana("e")).toEqual("エ"));
        it("o", () => expect(getKatakana("o")).toEqual("オ"));
    });

    describe("K Column", () => {
        it("ka", () => expect(getKatakana("ka")).toEqual("カ"));
        it("ki", () => expect(getKatakana("ki")).toEqual("キ"));
        it("ku", () => expect(getKatakana("ku")).toEqual("ク"));
        it("ke", () => expect(getKatakana("ke")).toEqual("ケ"));
        it("ko", () => expect(getKatakana("ko")).toEqual("コ"));
    });

    describe("K Column Diacritical (Dakuten)", () => {
        it("ga", () => expect(getKatakana("ga")).toEqual("ガ"));
        it("gi", () => expect(getKatakana("gi")).toEqual("ギ"));
        it("gu", () => expect(getKatakana("gu")).toEqual("グ"));
        it("ge", () => expect(getKatakana("ge")).toEqual("ゲ"));
        it("go", () => expect(getKatakana("go")).toEqual("ゴ"));
    });

    describe("S Column", () => {
        it("sa", () => expect(getKatakana("sa")).toEqual("サ"));
        it("shi", () => expect(getKatakana("shi")).toEqual("シ"));
        it("su", () => expect(getKatakana("su")).toEqual("ス"));
        it("se", () => expect(getKatakana("se")).toEqual("セ"));
        it("so", () => expect(getKatakana("so")).toEqual("ソ"));
    });

    describe("S Column Diacritical (Dakuten)", () => {
        it("za", () => expect(getKatakana("za")).toEqual("ザ"));
        it("ji", () => expect(getKatakana("ji")).toEqual("ジ"));
        it("zu", () => expect(getKatakana("zu")).toEqual("ズ"));
        it("ze", () => expect(getKatakana("ze")).toEqual("ゼ"));
        it("zo", () => expect(getKatakana("zo")).toEqual("ゾ"));
    });

    describe("T Column", () => {
        it("ta", () => expect(getKatakana("ta")).toEqual("タ"));
        it("chi", () => expect(getKatakana("chi")).toEqual("チ"));
        it("tsu", () => expect(getKatakana("tsu")).toEqual("ツ"));
        it("te", () => expect(getKatakana("te")).toEqual("テ"));
        it("to", () => expect(getKatakana("to")).toEqual("ト"));
    });

    describe("T Column Diacritical (Dakuten)", () => {
        it("da", () => expect(getKatakana("da")).toEqual("ダ"));
        it("di", () => expect(getKatakana("di")).toEqual("ヂ"));
        it("du", () => expect(getKatakana("du")).toEqual("ヅ"));
        it("de", () => expect(getKatakana("de")).toEqual("デ"));
        it("do", () => expect(getKatakana("do")).toEqual("ド"));
    });

    describe("N Column", () => {
        it("na", () => expect(getKatakana("na")).toEqual("ナ"));
        it("ni", () => expect(getKatakana("ni")).toEqual("ニ"));
        it("nu", () => expect(getKatakana("nu")).toEqual("ヌ"));
        it("ne", () => expect(getKatakana("ne")).toEqual("ネ"));
        it("no", () => expect(getKatakana("no")).toEqual("ノ"));
    });

    describe("H Column", () => {
        it("ha", () => expect(getKatakana("ha")).toEqual("ハ"));
        it("hi", () => expect(getKatakana("hi")).toEqual("ヒ"));
        it("hu", () => expect(getKatakana("hu")).toEqual("フ"));
        it("he", () => expect(getKatakana("he")).toEqual("ヘ"));
        it("ho", () => expect(getKatakana("ho")).toEqual("ホ"));
    });

    describe("H Column Diacritical (Dakuten)", () => {
        it("ba", () => expect(getKatakana("ba")).toEqual("バ"));
        it("bi", () => expect(getKatakana("bi")).toEqual("ビ"));
        it("bu", () => expect(getKatakana("bu")).toEqual("ブ"));
        it("be", () => expect(getKatakana("be")).toEqual("ベ"));
        it("bo", () => expect(getKatakana("bo")).toEqual("ボ"));
    });

    describe("H Column Diacritical (Handakuten)", () => {
        it("pa", () => expect(getKatakana("pa")).toEqual("パ"));
        it("pi", () => expect(getKatakana("pi")).toEqual("ピ"));
        it("pu", () => expect(getKatakana("pu")).toEqual("プ"));
        it("pe", () => expect(getKatakana("pe")).toEqual("ペ"));
        it("po", () => expect(getKatakana("po")).toEqual("ポ"));
    });

    describe("M Column", () => {
        it("ma", () => expect(getKatakana("ma")).toEqual("マ"));
        it("mi", () => expect(getKatakana("mi")).toEqual("ミ"));
        it("mu", () => expect(getKatakana("mu")).toEqual("ム"));
        it("me", () => expect(getKatakana("me")).toEqual("メ"));
        it("mo", () => expect(getKatakana("mo")).toEqual("モ"));
    });

    describe("Y Column", () => {
        it("ya", () => expect(getKatakana("ya")).toEqual("ヤ"));
        it("yu", () => expect(getKatakana("yu")).toEqual("ユ"));
        it("yo", () => expect(getKatakana("yo")).toEqual("ヨ"));
    });

    describe("R Column", () => {
        it("ra", () => expect(getKatakana("ra")).toEqual("ラ"));
        it("ri", () => expect(getKatakana("ri")).toEqual("リ"));
        it("ru", () => expect(getKatakana("ru")).toEqual("ル"));
        it("re", () => expect(getKatakana("re")).toEqual("レ"));
        it("ro", () => expect(getKatakana("ro")).toEqual("ロ"));
    });

    describe("W Column", () => {
        it("wa", () => expect(getKatakana("wa")).toEqual("ワ"));
        it("wo", () => expect(getKatakana("wo")).toEqual("ヲ"));
    });

    it("n", () => expect(getKatakana("n")).toEqual("ン"));

    function getKatakana(name: string): string {
        return katakana.filter(entry => entry.name === name)[0].code;
    }
});