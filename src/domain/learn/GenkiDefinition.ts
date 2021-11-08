import { Learnable } from "./Learnable";

class GenkiDefinition extends Learnable {

    private readonly _lesson: number;
    private readonly _meaning: string;
    private readonly _kana: string;
    private readonly _kanji?: string;

    constructor(lesson: number, meaning: string, kana: string, kanji?: string) {
        super();
        this._lesson = lesson;
        this._meaning = meaning;
        this._kana = kana;
        this._kanji = kanji;
    }

    getLesson(): number {
        return this._lesson;
    }

    getHint(): string {
        return "There is no hint for Genki definitions yet.";
    }

    getKana(): string[] {
        return [this._kana];
    }

    getMeanings(): string[] {
        return [this._meaning];
    }

    getKanjiVariation(): string | undefined {
        return this._kanji;
    }

    getTitle(): string {
        return "Genki Lesson " + this._lesson;
    }

}

export default GenkiDefinition;
