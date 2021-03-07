import { Reading } from "./Reading";
import JapaneseCharacter from "../JapaneseCharacter";
import { Example } from "./Example";

export class Kanji implements JapaneseCharacter {
    private readonly _character: string;
    private readonly _readings: Reading[];
    private readonly _meanings: string[];
    private readonly _grade: number;
    private readonly _source: string;
    private readonly _examples: Example[];

    constructor(character: string, readings: Reading[], meanings: string[], grade: number, source: string, examples: Example[]) {
        this._character = character;
        this._readings = readings;
        this._meanings = meanings;
        this._grade = grade;
        this._source = source;
        this._examples = examples;
    }

    get readings(): Reading[] {
        return this._readings;
    }

    get meanings(): string[] {
        return this._meanings;
    }

    get grade(): number {
        return this._grade;
    }

    get source(): string {
        return this._source;
    }

    public getValue(): string {
        return this._character;
    }

    get examples(): Example[] {
        return this._examples;
    }
}