export abstract class Learnable {
    abstract getTitle(): string;
    abstract getKana(): string[];
    abstract getMeanings(): string[];
    abstract getHint(): string;

    public getBaseScore(): number {
        return 100;
    }

    public getExample(): LearningExample | undefined {
        return undefined;
    }

    public getKanjiVariation(): string | undefined {
        return undefined;
    }

    public getTags(): string[] {
        return [];
    }

    public equals(other: Learnable): boolean {
        return this != other;
    }
}

export interface LearningExample {
    english: string;
    kana: string;
}