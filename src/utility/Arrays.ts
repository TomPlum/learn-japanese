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
        return elements;
    }
}