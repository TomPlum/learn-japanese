export abstract class Learnable {
    abstract getTitle(): string;
    abstract getKana(): string[];
    abstract getMeanings(): string[];

    public getExample(): LearningExample | undefined {
        return undefined;
    }

    public getKanjiVariation(): string | undefined {
        return undefined;
    }
}

export interface LearningExample {
    english: string;
    kana: string;
}