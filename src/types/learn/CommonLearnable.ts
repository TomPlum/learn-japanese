import Learnable from "./Learnable";
import JapaneseWord from "./JapaneseWord";

export default interface CommonLearnable extends Learnable {
    getWords(): JapaneseWord[];
    getMeaning(): string | undefined;
}

export interface KanjiLearnable extends CommonLearnable {
    getKanji(): string;
}

export interface ExceptionalLearnable extends Learnable {
    getAnswer(): string;
}