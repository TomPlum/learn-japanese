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

    describe("Chunked", () => {
        it("Should chunk array when quantity is divisible exactly", () => {
            const array = [1, 2, 3, 4, 5, 6];
            const result = Arrays.chunked(array, 2);
            expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
        });
    });

    describe("Max", () => {
        it("Should return the maximum value", () => {
            const array = [1, 4, 10];
            const result = Arrays.max(array);
            expect(result).toBe(10);
        });

        it("Should return the maximum even if it appears twice", () => {
            const array = [10, 1, 4, 10];
            const result = Arrays.max(array);
            expect(result).toBe(10);
        });
    });

    describe("Distinct", () => {
        it("Should return only distinct elements", () => {
            const array = ["one", "two", "one", "three"];
            const result = Arrays.distinct(array);
            expect(result).toStrictEqual(["one", "two", "three"]);
        });
    });

    describe("Get Random Array Index", () => {
        it("Should return an index in the range of the array size", () => {
            const array = [1, 2, 3, 4, 5];
            const result = Arrays.getRandomArrayIndex(array);
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThanOrEqual(4);
        });
    });

    describe("Get Random Object", () => {
        it("Should retrieve a random object and return it with the remaining pool", () => {
            const array = [1, 4, 5, 2, 6];
            const [random, remaining] = Arrays.getRandomObject(array);
            expect(array).toContain(random);
            expect(remaining).toStrictEqual(array.filter(it => it !== random));
        });
    });

    describe("Get Random Objects", () => {
        it("Should retrieve the number specified of random objects and return it with the remaining pool", () => {
            const array = [1, 4, 5, 2, 6];
            const [random, remaining] = Arrays.getRandomObjects(array, 3);
            expect(remaining).toStrictEqual(array.filter(it => !random.includes(it)));
        });
    });

    describe("Take First", () => {
        it("Should return the first element", () => {
            const array = [1, 2, 3];
            const [remaining, first] = Arrays.takeFirst(array);
            expect(first).toBe(1);
        });

        it("Should return the remaining element", () => {
            const array = [1, 2, 3];
            const [remaining] = Arrays.takeFirst(array);
            expect(remaining).toStrictEqual([2, 3]);
        });

        it("Should return empty remaining if there is one element", () => {
            const array = [1];
            const [remaining] = Arrays.takeFirst(array);
            expect(remaining).toStrictEqual([]);
        });

        it("Should return an empty array if the passed array is empty", () => {
            const array: number[] = [];
            const [remaining] = Arrays.takeFirst(array);
            expect(remaining).toStrictEqual([]);
        });
    });

    describe("Range", () => {
        it("Should generate all the numbers in the given range, excluding the last", () => {
            const values = Arrays.range(3, 7);
            expect(values).toStrictEqual([3, 4, 5, 6]);
        });
    });
});
