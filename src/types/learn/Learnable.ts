export abstract class Learnable {
    abstract getQuestion(): string;
    abstract getTitle(): string;
}

export abstract class KanjiLearnable extends Learnable {

    abstract getKana(): string[];
    abstract getMeanings(): string[] | undefined;

    public getExample(): LearningExample | undefined {
        return undefined;
    }

    public getKanjiVariation(): string | undefined {
        return undefined;
    }
}

export interface ExceptionalLearnable extends Learnable {
    getAnswer(): string;
}

export interface LearningExample {
    english: string;
    kana: string;
}