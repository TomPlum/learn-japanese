import katakana from "../../data/Katakana";
import each from "jest-each";
import { KanaData } from "../../data/DataTypes";
import { KanaColumn } from "../../domain/kana/KanaColumn";

describe("Katakana", () => {
    describe("Unicode Mappings", () => {
        describe("Vowels", () => {
            it("a", () => expect(getKatakana(["a"]).code).toEqual("ア"));
            it("i", () => expect(getKatakana(["i"]).code).toEqual("イ"));
            it("u", () => expect(getKatakana(["u"]).code).toEqual("ウ"));
            it("e", () => expect(getKatakana(["e"]).code).toEqual("エ"));
            it("o", () => expect(getKatakana(["o"]).code).toEqual("オ"));
        });

        describe("K Column", () => {
            it("ka", () => expect(getKatakana(["ka"]).code).toEqual("カ"));
            it("ki", () => expect(getKatakana(["ki"]).code).toEqual("キ"));
            it("ku", () => expect(getKatakana(["ku"]).code).toEqual("ク"));
            it("ke", () => expect(getKatakana(["ke"]).code).toEqual("ケ"));
            it("ko", () => expect(getKatakana(["ko"]).code).toEqual("コ"));
        });

        describe("K Column Diacritical (Dakuten)", () => {
            it("ga", () => expect(getKatakana(["ga"]).code).toEqual("ガ"));
            it("gi", () => expect(getKatakana(["gi"]).code).toEqual("ギ"));
            it("gu", () => expect(getKatakana(["gu"]).code).toEqual("グ"));
            it("ge", () => expect(getKatakana(["ge"]).code).toEqual("ゲ"));
            it("go", () => expect(getKatakana(["go"]).code).toEqual("ゴ"));
        });

        describe("S Column", () => {
            it("sa", () => expect(getKatakana(["sa"]).code).toEqual("サ"));
            it("shi", () => expect(getKatakana(["shi"]).code).toEqual("シ"));
            it("su", () => expect(getKatakana(["su"]).code).toEqual("ス"));
            it("se", () => expect(getKatakana(["se"]).code).toEqual("セ"));
            it("so", () => expect(getKatakana(["so"]).code).toEqual("ソ"));
        });

        describe("S Column Diacritical (Dakuten)", () => {
            it("za", () => expect(getKatakana(["za"]).code).toEqual("ザ"));
            it("ji", () => expect(getKatakana(["ji", "zi"]).code).toEqual("ジ"));
            it("zu", () => expect(getKatakana(["zu"]).code).toEqual("ズ"));
            it("ze", () => expect(getKatakana(["ze"]).code).toEqual("ゼ"));
            it("zo", () => expect(getKatakana(["zo"]).code).toEqual("ゾ"));
        });

        describe("T Column", () => {
            it("ta", () => expect(getKatakana(["ta"]).code).toEqual("タ"));
            it("chi", () => expect(getKatakana(["chi", "ti"]).code).toEqual("チ"));
            it("tsu", () => expect(getKatakana(["tsu"]).code).toEqual("ツ"));
            it("te", () => expect(getKatakana(["te"]).code).toEqual("テ"));
            it("to", () => expect(getKatakana(["to"]).code).toEqual("ト"));
        });

        describe("T Column Diacritical (Dakuten)", () => {
            it("da", () => expect(getKatakana(["da"]).code).toEqual("ダ"));
            it("di", () => expect(getKatakana(["di", "ji"]).code).toEqual("ヂ"));
            it("du", () => expect(getKatakana(["du", "zu"]).code).toEqual("ヅ"));
            it("de", () => expect(getKatakana(["de"]).code).toEqual("デ"));
            it("do", () => expect(getKatakana(["do"]).code).toEqual("ド"));
        });

        describe("N Column", () => {
            it("na", () => expect(getKatakana(["na"]).code).toEqual("ナ"));
            it("ni", () => expect(getKatakana(["ni"]).code).toEqual("ニ"));
            it("nu", () => expect(getKatakana(["nu"]).code).toEqual("ヌ"));
            it("ne", () => expect(getKatakana(["ne"]).code).toEqual("ネ"));
            it("no", () => expect(getKatakana(["no"]).code).toEqual("ノ"));
        });

        describe("H Column", () => {
            it("ha", () => expect(getKatakana(["ha"]).code).toEqual("ハ"));
            it("hi", () => expect(getKatakana(["hi"]).code).toEqual("ヒ"));
            it("hu", () => expect(getKatakana(["hu", "fu"]).code).toEqual("フ"));
            it("he", () => expect(getKatakana(["he", "e"]).code).toEqual("ヘ"));
            it("ho", () => expect(getKatakana(["ho"]).code).toEqual("ホ"));
        });

        describe("H Column Diacritical (Dakuten)", () => {
            it("ba", () => expect(getKatakana(["ba"]).code).toEqual("バ"));
            it("bi", () => expect(getKatakana(["bi"]).code).toEqual("ビ"));
            it("bu", () => expect(getKatakana(["bu"]).code).toEqual("ブ"));
            it("be", () => expect(getKatakana(["be"]).code).toEqual("ベ"));
            it("bo", () => expect(getKatakana(["bo"]).code).toEqual("ボ"));
        });

        describe("H Column Diacritical (Handakuten)", () => {
            it("pa", () => expect(getKatakana(["pa"]).code).toEqual("パ"));
            it("pi", () => expect(getKatakana(["pi"]).code).toEqual("ピ"));
            it("pu", () => expect(getKatakana(["pu"]).code).toEqual("プ"));
            it("pe", () => expect(getKatakana(["pe"]).code).toEqual("ペ"));
            it("po", () => expect(getKatakana(["po"]).code).toEqual("ポ"));
        });

        describe("M Column", () => {
            it("ma", () => expect(getKatakana(["ma"]).code).toEqual("マ"));
            it("mi", () => expect(getKatakana(["mi"]).code).toEqual("ミ"));
            it("mu", () => expect(getKatakana(["mu"]).code).toEqual("ム"));
            it("me", () => expect(getKatakana(["me"]).code).toEqual("メ"));
            it("mo", () => expect(getKatakana(["mo"]).code).toEqual("モ"));
        });

        describe("Y Column", () => {
            it("ya", () => expect(getKatakana(["ya"]).code).toEqual("ヤ"));
            it("yu", () => expect(getKatakana(["yu"]).code).toEqual("ユ"));
            it("yo", () => expect(getKatakana(["yo"]).code).toEqual("ヨ"));
        });

        describe("R Column", () => {
            it("ra", () => expect(getKatakana(["ra"]).code).toEqual("ラ"));
            it("ri", () => expect(getKatakana(["ri"]).code).toEqual("リ"));
            it("ru", () => expect(getKatakana(["ru"]).code).toEqual("ル"));
            it("re", () => expect(getKatakana(["re"]).code).toEqual("レ"));
            it("ro", () => expect(getKatakana(["ro"]).code).toEqual("ロ"));
        });

        describe("W Column", () => {
            it("wa", () => expect(getKatakana(["wa"]).code).toEqual("ワ"));
            it("wo", () => expect(getKatakana(["wo"]).code).toEqual("ヲ"));
        });

        it("n", () => expect(getKatakana(["n"]).code).toEqual("ン"));
    });

    describe("Column Mappings", () => {
        const vowels = getMultipleKatakana([["a"], ["i"], ["u"], ["e"], ["o"]]);
        each(vowels).it("Should return the vowel column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.VOWEL);
        });

        const k = getMultipleKatakana([
            ["ka"], ["ki"], ["ku"], ["ke"], ["ko"],
            ["ga"], ["gi"], ["gu"], ["ge"], ["go"],
            ["kya"], ["kyu"], ["kyo"],
            ["gya"], ["gyu"], ["gyo"]
        ]);
        each(k).it("Should return the k column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.K);
        });

        const s = getMultipleKatakana([
            ["sa"], ["shi"], ["su"], ["se"], ["so"],
            ["za"], ["ji", "zi"], ["zu"], ["ze"], ["zo"],
            ["sha"], ["shu"], ["sho"],
            ["ja", "zya"], ["ju", "zyu"], ["jo", "zyo"]
        ]);
        each(s).it("Should return the s column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.S);
        });

        const t = getMultipleKatakana([
            ["ta"], ["chi", "ti"], ["tsu"], ["te"], ["to"],
            ["da"], ["di", "ji"], ["du", "zu"], ["de"], ["do"],
            ["cha"], ["chu"], ["cho"], ["dya", "ja"],
            ["dyu", "ju"], ["dyo", "jo"]
        ]);
        each(t).it("Should return the t column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.T);
        });

        const n = getMultipleKatakana([["na"], ["ni"], ["nu"], ["ne"], ["no"], ["nya"], ["nyu"], ["nyo"]]);
        each(n).it("Should return the n column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.N);
        });

        const h = getMultipleKatakana([
            ["ha"], ["hi"], ["hu", "fu"], ["he", "e"], ["ho"],
            ["ba"], ["bi"], ["bu"], ["be"], ["bo"],
            ["pa"], ["pi"], ["pu"], ["pe"], ["po"],
            ["hya"], ["hyu"], ["hyo"],
            ["bya"], ["byu"], ["byo"],
            ["pya"], ["pyu"], ["pyo"]
        ]);
        each(h).it("Should return the h column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.H);
        });

        const m = getMultipleKatakana([["ma"], ["mi"], ["mu"], ["me"], ["mo"], ["mya"], ["myu"], ["myo"]]);
        each(m).it("Should return the m column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.M);
        });

        const y = getMultipleKatakana([["ya"], ["yu"], ["yo"]]);
        each(y).it("Should return the y column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.Y);
        });

        const r = getMultipleKatakana([["ra"], ["ri"], ["ru"], ["re"], ["ro"], ["rya"], ["ryu"], ["ryo"]]);
        each(r).it("Should return the r column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.R);
        });

        const w = getMultipleKatakana([["wa"], ["wo"]]);
        each(w).it("Should return the w column for '%s'", (kana: KanaData) => {
            expect(kana.column).toBe(KanaColumn.W);
        });

        it("Should return the other column for n", () => {
            expect(getKatakana(["n"]).column).toBe(KanaColumn.OTHER);
        });
    });

    describe("Diagraph Mappings", () => {
        it("kya", () => expect(getKatakana(["kya"]).code).toEqual("キャ"));
        it("kyu", () => expect(getKatakana(["kyu"]).code).toEqual("キュ"));
        it("kyo", () => expect(getKatakana(["kyo"]).code).toEqual("キョ"));

        it("sha", () => expect(getKatakana(["sha"]).code).toEqual("シャ"));
        it("shu", () => expect(getKatakana(["shu"]).code).toEqual("シュ"));
        it("sho", () => expect(getKatakana(["sho"]).code).toEqual("ショ"));

        it("cha", () => expect(getKatakana(["cha"]).code).toEqual("チャ"));
        it("chu", () => expect(getKatakana(["chu"]).code).toEqual("チュ"));
        it("cho", () => expect(getKatakana(["cho"]).code).toEqual("チョ"));

        it("dya", () => expect(getKatakana(["dya", "ja"]).code).toEqual("ヂャ"));
        it("dyu", () => expect(getKatakana(["dyu", "ju"]).code).toEqual("ヂュ"));
        it("dyo", () => expect(getKatakana(["dyo", "jo"]).code).toEqual("ヂョ"));

        it("nya", () => expect(getKatakana(["nya"]).code).toEqual("ニャ"));
        it("nyu", () => expect(getKatakana(["nyu"]).code).toEqual("ニュ"));
        it("nya", () => expect(getKatakana(["nyo"]).code).toEqual("ニョ"));

        it("hya", () => expect(getKatakana(["hya"]).code).toEqual("ヒャ"));
        it("hyu", () => expect(getKatakana(["hyu"]).code).toEqual("ヒュ"));
        it("hyo", () => expect(getKatakana(["hyo"]).code).toEqual("ヒョ"));

        it("mya", () => expect(getKatakana(["mya"]).code).toEqual("ミャ"));
        it("myu", () => expect(getKatakana(["myu"]).code).toEqual("ミュ"));
        it("myo", () => expect(getKatakana(["myo"]).code).toEqual("ミョ"));

        it("rya", () => expect(getKatakana(["rya"]).code).toEqual("リャ"));
        it("ryu", () => expect(getKatakana(["ryu"]).code).toEqual("リュ"));
        it("ryo", () => expect(getKatakana(["ryo"]).code).toEqual("リョ"));

        it("gya", () => expect(getKatakana(["gya"]).code).toEqual("ギャ"));
        it("gyu", () => expect(getKatakana(["gyu"]).code).toEqual("ギュ"));
        it("gyo", () => expect(getKatakana(["gyo"]).code).toEqual("ギョ"));

        it("ja", () => expect(getKatakana(["ja", "zya"]).code).toEqual("ジャ"));
        it("ju", () => expect(getKatakana(["ju", "zyu"]).code).toEqual("ジュ"));
        it("jo", () => expect(getKatakana(["jo", "zyo"]).code).toEqual("ジョ"));

        it("bya", () => expect(getKatakana(["bya"]).code).toEqual("ビャ"));
        it("byu", () => expect(getKatakana(["byu"]).code).toEqual("ビュ"));
        it("byo", () => expect(getKatakana(["byo"]).code).toEqual("ビョ"));

        it("pya", () => expect(getKatakana(["pya"]).code).toEqual("ピャ"));
        it("pyu", () => expect(getKatakana(["pyu"]).code).toEqual("ピュ"));
        it("pyo", () => expect(getKatakana(["pyo"]).code).toEqual("ピョ"));

        it("Should return a total of 36 diagraphs", () => {
            const diagraphs = katakana().filter(data => data.name.length === 2);
            expect(diagraphs).toHaveLength(36);
        });
    });

    describe("Is Diacritical", () => {
        const diacritical = getMultipleKatakana(
            [
                ["ga"], ["gi"], ["gu"], ["ge"], ["go"],
                ["za"], ["ji", "zi"], ["zu"], ["ze"], ["zo"],
                ["da"], ["di", "ji"], ["du", "zu"], ["de"], ["do"],
                ["ba"], ["bi"], ["bu"], ["be"], ["bo"],
                ["pa"], ["pi"], ["pu"], ["pe"], ["po"],
                ["ja", "zya"], ["ju", "zyu"], ["jo", "zyo"],
                ["dya", "ja"], ["dyu", "ju"], ["dyo", "jo"],
                ["bya"], ["byu"], ["byo"],
                ["pya"], ["pyu"], ["pyo"],
            ]
        );
        each(diacritical).it("it should have diacritical set to true", (kana) => {
            expect(kana.diacritical).toBe(true);
        });

        const regular = getMultipleKatakana([
            ["a"], ["i"], ["u"], ["e"], ["o"],
            ["ka"], ["ki"], ["ku"], ["ke"], ["ko"], ["kya"], ["kyu"], ["kyo"],
            ["sa"], ["shi"], ["su"], ["se"], ["so"], ["sha"], ["shu"], ["sho"],
            ["ta"], ["chi", "ti"], ["tsu"], ["te"], ["to"], ["cha"], ["chu"], ["cho"],
            ["na"], ["ni"], ["nu"], ["ne"], ["no"], ["nya"], ["nyu"], ["nyo"],
            ["ha"], ["hi"], ["hu", "fu"], ["he", "e"], ["ho"], ["hya"], ["hyu"], ["hyo"],
            ["ma"], ["mi"], ["mu"], ["me"], ["mo"], ["mya"], ["myu"], ["myo"],
            ["ya"], ["yu"], ["yo"],
            ["ra"], ["ri"], ["ru"], ["re"], ["ro"], ["rya"], ["ryu"], ["ryo"],
            ["wa"], ["wo"],
            ["n"]
        ]);
        each(regular).it("it should have diacritical set to false", (kana) => {
            expect(kana.diacritical).toBe(false);
        });

        it("Should return exactly 25 diacritical (non-diagraph) kana", () => {
            const diacriticals = katakana().filter(data => data.diacritical && data.code.length === 1);
            expect(diacriticals.length).toBe(25);
        });
    });

    function getMultipleKatakana(romaji: string[][]): KanaData[] {
        return romaji.map(array => getKatakana(array));
    }

    function getKatakana(romaji: string[]): KanaData {
        return katakana().filter(entry => JSON.stringify(entry.romaji) === JSON.stringify(romaji))[0];
    }
});
