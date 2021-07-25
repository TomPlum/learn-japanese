import Maps from "../../utility/Maps";

describe("Maps Utility", () => {
    describe("Are Equal", () => {
        it("Should return false if the two maps have different lengths", () => {
            const first = new Map([['1', 'one']]);
            const second = new Map([['1', 'one'], ['2', 'two']]);
            expect(Maps.areEqual(first, second)).toBe(false);
        });

        it("Should return false if the two maps have different values", () => {
            const first = new Map([['1', 'one']]);
            const second = new Map([['1', 'two']]);
            expect(Maps.areEqual(first, second)).toBe(false);
        });

        it("Should return false if the two maps have different keys", () => {
            const first = new Map([['1', 'one']]);
            const second = new Map([['2', 'one']]);
            expect(Maps.areEqual(first, second)).toBe(false);
        });

        it("Should return false if the two maps have different keys and values", () => {
            const first = new Map([['1', 'one']]);
            const second = new Map([['2', 'two']]);
            expect(Maps.areEqual(first, second)).toBe(false);
        });

        it("Should return true if the two maps have same keys and values", () => {
            const first = new Map([['1', 'one'], ['2', 'two']]);
            const second = new Map([['1', 'one'], ['2', 'two']]);
            expect(Maps.areEqual(first, second)).toBe(true);
        });
    });
});
