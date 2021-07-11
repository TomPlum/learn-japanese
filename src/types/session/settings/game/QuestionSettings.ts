import { QuestionType } from "../../../game/QuestionType";

export default class QuestionSettings {
    private readonly _type: QuestionType;
    private readonly _cards: number;
    private readonly _score: boolean;

    constructor(type: QuestionType, cards: number, score: boolean) {
        this._type = type;
        this._cards = cards;
        this._score = score;
    }

    get type(): QuestionType {
        return this._type;
    }

    get cards(): number {
        return this._cards;
    }

    get score(): boolean {
        return this._score;
    }
}

export class QuestionSettingsBuilder {
    private _type: QuestionType = QuestionType.ROMAJI;
    private _cards: number = 1;
    private _score: boolean = false;

    withType(type: QuestionType): QuestionSettingsBuilder {
        this._type = type;
        return this;
    }

    withCardQuantity(cards: number): QuestionSettingsBuilder {
        this._cards = cards;
        return this;
    }

    withScoreTracking(enable: boolean = true): QuestionSettingsBuilder {
        this._score = enable;
        return this;
    }

    build(): QuestionSettings {
        return new QuestionSettings(this._type, this._cards, this._score);
    }
}