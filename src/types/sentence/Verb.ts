import { VerbType } from "./VerbType";
import { Learnable } from "../learn/Learnable";

export default class Verb extends Learnable {

    private readonly meanings: string[];
    private readonly kanjiVariant: string | undefined;
    private readonly type: VerbType;
    private readonly kana: string;

    constructor(meanings: string[], kanjiVariant: string | undefined, type: VerbType, kana: string) {
        super();
        this.meanings = meanings;
        this.kanjiVariant = kanjiVariant;
        this.type = type;
        this.kana = kana;
    }

    getTitle(): string {
        return this.type + " Verb";
    }

    getKana(): string[] {
        return [this.kana];
    }

    getKanjiVariation(): string | undefined {
        return this.kanjiVariant;
    }

    getMeanings(): string[] {
        return this.meanings;
    }
}