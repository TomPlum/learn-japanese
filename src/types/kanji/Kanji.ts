import { Reading } from "./Reading";
import { Example } from "./Example";
import { KyoikuGrade } from "./KyoikuGrade";
import { Learnable } from "../learn/Learnable";

export class Kanji extends Learnable {

    private readonly _character: string;
    private readonly _readings: Reading[];
    private readonly _meanings: string[];
    private readonly _grade: KyoikuGrade;
    private readonly _source: string;
    private readonly _examples: Example[];

    constructor(character: string, readings: Reading[], meanings: string[], grade: KyoikuGrade, source: string, examples: Example[]) {
        super();
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

    get grade(): KyoikuGrade {
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

    getTitle(): string {
        return "Grade " + this.grade.value;
    }

    getKana(): string[] {
        throw new Error("Method not implemented.");
    }

    getMeanings(): string[] {
        return this._meanings;
    }
}