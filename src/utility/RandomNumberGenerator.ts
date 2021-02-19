import {Numbers} from "./Numbers";

export class RandomNumberGenerator {
    static getRandomArrayIndex<T>(array: T[]): number {
        return Numbers.randomInt(0, array.length - 1);
    }
}