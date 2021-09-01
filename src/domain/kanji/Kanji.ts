import { KanjiReading } from "./KanjiReading";
import { Example } from "./Example";
import { KyoikuGrade } from "./KyoikuGrade";
import { Learnable } from "../learn/Learnable";
import { ReadingType } from "./ReadingType";

export class Kanji extends Learnable {

    private readonly _character: string;
    private readonly _readings: KanjiReading[];
    private readonly _meanings: string[];
    private readonly _grade: KyoikuGrade;
    private readonly _source: string;
    private readonly _examples: Example[];
    private readonly _tags: string[];

    constructor(character: string, readings: KanjiReading[], meanings: string[], grade: KyoikuGrade, source: string, examples: Example[], tags: string[]) {
        super();
        this._character = character;
        this._readings = readings;
        this._meanings = meanings;
        this._grade = grade;
        this._source = source;
        this._examples = examples;
        this._tags = tags;
    }

    get readings(): KanjiReading[] {
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
        const on = this.getOnyomiReadings();
        const kun = this.getKunyomiReadings();

        let response = [];

        if (on.length > 0) {
            response.push(on[0].kana);
        }

        if (kun.length > 0) {
            response.push(kun[0].kana);
        }

        return response;
    }

    getMeanings(): string[] {
        return this._meanings;
    }

    getKanjiVariation(): string | undefined {
        return this._character;
    }

    getOnyomiReadings(): KanjiReading[] {
        return this._readings.filter((reading: KanjiReading) => reading.type === ReadingType.ON)
    }

    getKunyomiReadings(): KanjiReading[] {
        return this._readings.filter((reading: KanjiReading) => reading.type === ReadingType.KUN)
    }

    getTags(): string[] {
        return this._tags;
    }

    getHint(): string {
        return "It's Grade " + this.grade.value + " and starts with " + this.getKana()[0][0] + ".";
    }

    getUniqueID(): string {
        return this._character;
    }

    equals(other: Learnable): boolean {
        return this.getKanjiVariation() === other.getKanjiVariation();
    }
}