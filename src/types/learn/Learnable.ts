export abstract class Learnable {
    abstract getQuestion(): string;
    abstract getTitle(): string;
}
//TODO: Make KanjiLearnable -> Learnable. Delete getQuestion() and replace w/meanings. Can instanceof in Search.tsx then
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

export interface LearningExample {
    english: string;
    kana: string;
}