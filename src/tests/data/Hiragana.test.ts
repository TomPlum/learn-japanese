import hiragana from "../../data/hiragana";

describe("Hiragana", () => {
    describe("Vowels", () => {
        it("a", () => expect(getHiragana("a")).toEqual("あ"));
        it("i", () => expect(getHiragana("i")).toEqual("い"));
        it("u", () => expect(getHiragana("u")).toEqual("う"));
        it("e", () => expect(getHiragana("e")).toEqual("え"));
        it("o", () => expect(getHiragana("o")).toEqual("お"));
    });

    describe("K Column", () => {
        it("ka", () => expect(getHiragana("ka")).toEqual("か"));
        it("ki", () => expect(getHiragana("ki")).toEqual("き"));
        it("ku", () => expect(getHiragana("ku")).toEqual("く"));
        it("ke", () => expect(getHiragana("ke")).toEqual("け"));
        it("ko", () => expect(getHiragana("ko")).toEqual("こ"));
    });

    describe("S Column", () => {
        it("sa", () => expect(getHiragana("sa")).toEqual("さ"));
        it("shi", () => expect(getHiragana("shi")).toEqual("し"));
        it("su", () => expect(getHiragana("su")).toEqual("す"));
        it("se", () => expect(getHiragana("se")).toEqual("せ"));
        it("so", () => expect(getHiragana("so")).toEqual("そ"));
    });

    describe("T Column", () => {
        it("ta", () => expect(getHiragana("ta")).toEqual("た"));
        it("chi", () => expect(getHiragana("chi")).toEqual("ち"));
        it("tsu", () => expect(getHiragana("tsu")).toEqual("つ"));
        it("te", () => expect(getHiragana("te")).toEqual("て"));
        it("to", () => expect(getHiragana("to")).toEqual("と"));
    });

    describe("N Column", () => {
        it("na", () => expect(getHiragana("na")).toEqual("な"));
        it("ni", () => expect(getHiragana("ni")).toEqual("に"));
        it("nu", () => expect(getHiragana("nu")).toEqual("ぬ"));
        it("ne", () => expect(getHiragana("ne")).toEqual("ね"));
        it("no", () => expect(getHiragana("no")).toEqual("の"));
    });

    describe("H Column", () => {
        it("ha", () => expect(getHiragana("ha")).toEqual("は"));
        it("hi", () => expect(getHiragana("hi")).toEqual("ひ"));
        it("hu", () => expect(getHiragana("hu")).toEqual("ふ"));
        it("he", () => expect(getHiragana("he")).toEqual("へ"));
        it("ho", () => expect(getHiragana("ho")).toEqual("ほ"));
    });

    describe("M Column", () => {
        it("ma", () => expect(getHiragana("ma")).toEqual("ま"));
        it("mi", () => expect(getHiragana("mi")).toEqual("み"));
        it("mu", () => expect(getHiragana("mu")).toEqual("む"));
        it("me", () => expect(getHiragana("me")).toEqual("め"));
        it("mo", () => expect(getHiragana("mo")).toEqual("も"));
    });

    describe("Y Column", () => {
        it("ya", () => expect(getHiragana("ya")).toEqual("や"));
        it("yu", () => expect(getHiragana("yu")).toEqual("ゆ"));
        it("yo", () => expect(getHiragana("yo")).toEqual("よ"));
    });

    describe("R Column", () => {
        it("ra", () => expect(getHiragana("ra")).toEqual("ら"));
        it("ri", () => expect(getHiragana("ri")).toEqual("り"));
        it("ru", () => expect(getHiragana("ru")).toEqual("る"));
        it("re", () => expect(getHiragana("re")).toEqual("れ"));
        it("ro", () => expect(getHiragana("ro")).toEqual("ろ"));
    });

    describe("W Column", () => {
        it("wa", () => expect(getHiragana("wa")).toEqual("わ"));
        it("wo", () => expect(getHiragana("wo")).toEqual("を"));
    });

    it("n", () => expect(getHiragana("n")).toEqual("ん"));

    function getHiragana(name: string): string {
        return hiragana.filter(entry => entry.name === name)[0].code;
    }
});