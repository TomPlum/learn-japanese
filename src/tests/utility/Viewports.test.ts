import Viewports, { Viewport } from "../../utility/Viewports"
import each from "jest-each"

describe("Viewports Utility", () => {
    describe("From Width", () => {
        each([767, 500, 120]).it("Should return PHONE when the viewport width is less than 768", (width) => {
            expect(Viewports.fromWidth(width)).toBe(Viewport.PHONE)
        })

        each([769, 950, 1023]).it(
            "Should return TABLET when the viewport width is greater than 768 but less than 1024",
            (width) => {
                expect(Viewports.fromWidth(width)).toBe(Viewport.TABLET)
            }
        )

        each([1025, 1200, 2000]).it("Should return DESKTOP when the viewport width is greater than 1024", (width) => {
            expect(Viewports.fromWidth(width)).toBe(Viewport.DESKTOP)
        })

        it("Should default to PHONE if the width is null", () => {
            expect(Viewports.fromWidth(null)).toBe(Viewport.PHONE)
        })
    })

    describe("From Flash Card Width", () => {
        it("Should return PHONE when the viewport width is than 450", () => {
            expect(Viewports.fromFlashCardWidth(450)).toBe(Viewport.PHONE)
        })

        it("Should return TABLET when the viewport width is 550", () => {
            expect(Viewports.fromFlashCardWidth(550)).toBe(Viewport.TABLET)
        })

        it("Should return DESKTOP when the viewport width 650", () => {
            expect(Viewports.fromFlashCardWidth(650)).toBe(Viewport.DESKTOP)
        })

        it("Should default to PHONE if the width is null", () => {
            expect(Viewports.fromFlashCardWidth(null)).toBe(Viewport.PHONE)
        })
    })
})
