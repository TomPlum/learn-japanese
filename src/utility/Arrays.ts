import { Numbers } from "./Numbers";

export default class Arrays {
    static intersect<T>(arr1: T[], arr2: T[]): T[] {
        if (arr1.length > arr2.length) {
            return arr1.filter(element => arr2.indexOf(element) < 0);
        } else {
            return arr2.filter(element => arr1.indexOf(element) < 0);
        }
    }

    /*static shuffle<T>(array: T[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }*/

    public static shuffle<T>(array: T[]): T[] {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    static remove<T>(array: T[], value: T): T[] {
        const index = array.indexOf(value);
        if (index !== -1) {
            array.splice(index, 1);
        }
        return array;
    }

    static getRandomElements<T>(array: T[], quantity: number): T[] {
        let elements = [];
        let copy = [...array];
        for (let i = 0; i < quantity; i++) {
            const index = Numbers.randomInt(0, copy.length - 1);
            const element = copy[index];
            copy = this.remove(copy, element)
            elements.push(element);
        }
        return elements;
    }
}