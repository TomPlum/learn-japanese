import {Arrays} from "../../utility/Arrays";

describe("Arrays Utility", () => {
    describe("Intersect", () => {
        it("Should return the difference between two non-zero length arrays", () => {
            const arr1 = ["A", "B", "C"];
            const arr2 = ["A"];
            expect(Arrays.intersect(arr1, arr2)).toEqual(["B", "C"]);
        });

        it("Should return the whole populated array between a non-zero length and empty array", () => {
           const arr1 = ["A", "B"];
           const arr2: string[] = [];
           expect(Arrays.intersect(arr1, arr2)).toEqual(["A", "B"]);
        });

        it("Should return the difference between two non-zero length arrays when the parameter order is reversed", () => {
            const arr1 = ["A"];
            const arr2 = ["A", "B", "C"];
            expect(Arrays.intersect(arr1, arr2)).toEqual(["B", "C"]);
        });

        it("Should return an empty array when both arrays contain the same elements", () => {
            const arr1 = ["A", "B", "C"];
            const arr2 = ["A", "B", "C"];
            expect(Arrays.intersect(arr1, arr2)).toEqual([]);
        });

        it("Should return an empty array when both arrays contain the same elements in different orders", () => {
            const arr1 = ["C", "B", "A"];
            const arr2 = ["A", "C", "B"];
            expect(Arrays.intersect(arr1, arr2)).toEqual([]);
        });
    });
});