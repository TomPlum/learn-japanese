import Learnable from "./Learnable";
import JapaneseWord from "./JapaneseWord";

export default abstract class CommonLearnable implements Learnable {
    abstract getWords(): JapaneseWord[];

    abstract getQuestion(): string;

    abstract getTitle(): string;

    public getMeaning(): string | undefined {
        return undefined;
    }
}

export abstract class KanjiLearnable extends CommonLearnable {
    abstract getKanji(): string;

    public getMeaning(): string | undefined {
        return undefined;
    }
}

export interface ExceptionalLearnable extends Learnable {
    getAnswer(): string;
}

export interface SentenceStructureLearnable extends Learnable {
    getMeanings(): string[];
    getKana(): string;
    getKanjiVariation(): string | undefined;
}