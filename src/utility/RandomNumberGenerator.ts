import {Numbers} from "./Numbers";
import { Kana } from "../types/Kana";

export class RandomNumberGenerator {
    static getRandomArrayIndex<T>(array: T[]): number {
        return Numbers.randomInt(0, array.length - 1);
    }

    /**
     * Picks a random object from the given pool and removes it.
     * @param pool The array of objects to choose from.
     * @returns A two-element tuple containing the randomly chosen object and the trimmed pool.
     */
    static getRandomObject = <T>(pool: T[]): [T, T[]] => {
        const objects = [...pool];
        const randomIndex = RandomNumberGenerator.getRandomArrayIndex(objects);
        const firstKana = objects[randomIndex];
        objects.splice(randomIndex, 1);
        return [firstKana, objects];
    };
}