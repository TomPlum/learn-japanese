import Arrays from "../../utility/Arrays";

describe("Arrays Utility", () => {
    describe("Subtracting", () => {
        it("Should return the difference between two non-zero length arrays", () => {
            const arr1 = ["A", "B", "C"];
            const arr2 = ["A"];
            expect(Arrays.subtracting(arr1, arr2)).toEqual(["B", "C"]);
        });

        it("Should return the whole populated array between a non-zero length and empty array", () => {
            const arr1 = ["A", "B"];
            const arr2: string[] = [];
            expect(Arrays.subtracting(arr1, arr2)).toEqual(["A", "B"]);
        });

        it("Should return the difference between two non-zero length arrays when the parameter order is reversed", () => {
            const arr1 = ["A"];
            const arr2 = ["A", "B", "C"];
            expect(Arrays.subtracting(arr1, arr2)).toEqual(["B", "C"]);
        });

        it("Should return an empty array when both arrays contain the same elements", () => {
            const arr1 = ["A", "B", "C"];
            const arr2 = ["A", "B", "C"];
            expect(Arrays.subtracting(arr1, arr2)).toEqual([]);
        });

        it("Should return an empty array when both arrays contain the same elements in different orders", () => {
            const arr1 = ["C", "B", "A"];
            const arr2 = ["A", "C", "B"];
            expect(Arrays.subtracting(arr1, arr2)).toEqual([]);
        });
    });

    describe("Shuffle", () => {
        it("Should contain the same elements after shuffling", () => {
            const array = [1, 5, 10, 2];
            const result = Arrays.shuffle(array);
            expect(result.sort()).toEqual(array.sort());
        });
    });

    describe("Sum", () => {
        it("Should calculate the cumulative sum of all array elements", () => {
            const array = [4, 5, 1, 0, 9];
            const sum = Arrays.sum(array);
            expect(sum).toBe(19);
        });
    });

    describe("Sort", () => {
        it("Should return true if the strings are equal and in-order", () => {
            const a = ["a", "b", "c"];
            const b = ["a", "b", "c"];
            expect(Arrays.areEqual(a, b)).toBe(true);
        });

        it("Should return true if the strings are equal and not in-order", () => {
            const a = ["a", "b", "c"];
            const b = ["b", "a", "c"];
            expect(Arrays.areEqual(a, b)).toBe(true);
        });

        it("Should return false if the strings are not equal", () => {
            const a = ["a", "b", "c"];
            const b = ["b", "a", "d"];
            expect(Arrays.areEqual(a, b)).toBe(false);
        });
    });

    describe("Remove", () => {
        it("Should remove the given element from the array and return the mutated array", () => {
            const array = ["orange", "banana", "apple"];
            const result = Arrays.remove(array, "banana");
            expect(result).toEqual(["orange", "apple"]);
        });

        it("Should return the original array if the given element does not exist in the array", () => {
            const array = ["orange", "banana", "apple"];
            const result = Arrays.remove(array, "pear");
            expect(result).toEqual(["orange", "banana", "apple"]);
        });
    });

    describe("Get Random Elements", () => {
        it("Should return the given number of elements from the given array", () => {
            const array = [1, 2, 3, 4, 5, 6];
            const result = Arrays.getRandomElements(array, 2);
            expect(result.length).toBe(2);
        });
    });
});