import CommonData from "../../../domain/learn/CommonData"

describe("Common Data Object", () => {
    const data = new CommonData("1", ["いち"], "一", "Number", "1", { kana: "kana", english: "english" })

    it("Should return its kana", () => {
        expect(data.getKana()).toStrictEqual(["いち"])
    })

    it("Should return its only meaning in an array", () => {
        expect(data.getMeanings()).toStrictEqual(["1"])
    })

    it("Should return its title", () => {
        expect(data.getTitle()).toBe("Number")
    })

    it("Should return its kanji variation", () => {
        expect(data.getKanjiVariation()).toBe("一")
    })

    it("Should return its example", () => {
        expect(data.getExample()).toStrictEqual({ kana: "kana", english: "english" })
    })

    it("Should return its hint", () => {
        expect(data.getHint()).toBe("It starts with い")
    })

    it("Should return its unique id in the format of its meaning plus its kana", () => {
        expect(data.getUniqueID()).toBe("1-いち")
    })
})
