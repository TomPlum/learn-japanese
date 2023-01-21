import PageNumber from "../../../domain/learn/PageNumber"

describe("Page Number", () => {
    it("Should output a single number when using the 'from' static factory constructor", () => {
        expect(PageNumber.from(12).toString()).toBe("Page 12")
    })

    it("Should output a value range when using the 'of' static factory constructor", () => {
        expect(PageNumber.of(5, 8).toString()).toBe("Pages 5 - 8")
    })
})
