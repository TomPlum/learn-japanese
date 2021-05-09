import { Numbers } from "./Numbers";

export default class Arrays {
    /**
     * Calculates the difference between two arrays.
     * @return An array of all element deltas.
     */
    static subtracting<T>(arr1: T[], arr2: T[]): T[] {
        if (arr1.length > arr2.length) {
            return arr1.filter(element => arr2.indexOf(element) < 0);
        } else {
            return arr2.filter(element => arr1.indexOf(element) < 0);
        }
    }

    static sum(array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }
    /**
     * Creates a new array by spreading all the elements into another.
     * @return a copy of the given array.
     */
    public static copy<T>(array: T[]): T[] {
        return [...array];
    }

    /**
     * Checks if the two arrays are equals.
     * Only works with array of primitive types.
     * @return true if both arrays contain the same elements, else false.
     */
    public static areEqual(a: any[], b: any[]): boolean {
        return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
    }

    /**
     * Shuffles the order of the elements in the given array.
     * @return A copy of the array with shuffled elements.
     */
    public static shuffle<T>(array: T[]): T[] {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    /**
     * Returns the largest value in the given array.
     * @param array An array of numbers.
     * @return The largest value.
     */
    public static max<T extends number>(array: T[]): T {
        return array.reduce((a: T, b: T) => a > b ? a : b);
    }

    /**
     * Removes an element from an array.
     * @param array The array to remove from.
     * @param value The value of the element to remove.
     * @return The mutated array.
     */
    static remove<T>(array: T[], value: T): T[] {
        const index = array.indexOf(value);
        if (index !== -1) {
            array.splice(index, 1);
        }
        return array;
    }

    /**
     * Generates n random elements from an array.
     * @param array The array to pick from.
     * @param quantity The number of elements to return.
     * @return An array of all randomly selected elements.
     */
    static getRandomElements<T>(array: T[], quantity: number): T[] {
        let elements = [];
        let copy = this.copy(array);
        for (let i = 0; i < quantity; i++) {
            const index = Numbers.randomInt(0, copy.length - 1);
            const element = copy[index];
            copy = this.remove(copy, element)
            elements.push(element);
        }
        return elements.filter(it => !!it);
    }

    /**
     * Generates a 2-Dimensional array of arrays of the specified length;
     * @param array The array to split.
     * @param quantity The size of the arrays.
     */
    static chunked<T>(array: T[], quantity: number): T[][] {
        return array.reduce((resultArray: T[][], item: T, index: number) => {
            const chunkIndex = Math.floor(index/quantity)

            if(!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }

            resultArray[chunkIndex].push(item)

            return resultArray
        }, []);
    }
}