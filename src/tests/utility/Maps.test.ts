import Maps from "../../utility/Maps";
import Arrays from "../../utility/Arrays";

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

    describe("Shuffle", () => {
        const shuffle = jest.fn();
        Arrays.shuffle = shuffle;

        it("Should shuffle the keys and values", () => {
            const map = new Map([["k1", "v1"], ["k2", "v2"], ["k3", "v3"]]);
            shuffle.mockReturnValueOnce(["k3", "k1", "k2"]);
            shuffle.mockReturnValueOnce(["v2", "v3", "v1"]);
            expect(Maps.shuffle(map)).toStrictEqual(new Map([["k3", "v2"], ["k1", "v3"], ["k2", "v1"]]));
        });
    });
});
