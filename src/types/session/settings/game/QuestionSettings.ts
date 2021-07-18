import { QuestionType } from "../../../game/QuestionType";
import LearnableField from "../../../learn/LearnableField";
import FilterChain from "../../../../filters/FilterChain";
import { Learnable } from "../../../learn/Learnable";

export default class QuestionSettings {
    private readonly _questionField: LearnableField;
    private readonly _answerField: LearnableField;
    private readonly _type: QuestionType;
    private readonly _cards: number;
    private readonly _answerFilter: (data: any) => FilterChain<any>;
    private readonly _score: boolean;

    constructor(questionField: LearnableField, answerField: LearnableField, type: QuestionType, cards: number,
                answerFilter: (data: any) => FilterChain<any>, score: boolean) {
        this._questionField = questionField;
        this._answerField = answerField;
        this._type = type;
        this._cards = cards;
        this._answerFilter = answerFilter;
        this._score = score;
    }

    get questionField(): LearnableField {
        return this._questionField;
    }

    get answerField(): LearnableField {
        return this._answerField;
    }

    get type(): QuestionType {
        return this._type;
    }

    get cards(): number {
        return this._cards;
    }

    get answerFilter(): (data: any) => FilterChain<any> {
        return this._answerFilter;
    }

    get score(): boolean {
        return this._score;
    }
}

export class QuestionSettingsBuilder {
    private _questionField: LearnableField = LearnableField.KANA;
    private _answerField: LearnableField = LearnableField.ROMAJI;
    private _type: QuestionType = QuestionType.TEXT;
    private _cards: number = 1;
    private _wrongOptionsFilterChain: (data: any) => FilterChain<any> = () => new FilterChain(); //TODO: Can't satisfy TS compiler with explicit type here
    private _score: boolean = false;

    fromExisting(settings: QuestionSettings): QuestionSettingsBuilder {
        this._questionField = settings.questionField;
        this._answerField = settings.answerField;
        this._type = settings.type;
        this._cards  =settings.cards;
        this._wrongOptionsFilterChain = settings.answerFilter;
        this._score = settings.score;

        return this;
    }

    withFields(question: LearnableField, answer: LearnableField): QuestionSettingsBuilder {
        this._questionField = question;
        this._answerField = answer;
        return this;
    }

    withType(type: QuestionType): QuestionSettingsBuilder {
        this._type = type;
        return this;
    }

    withCardQuantity(cards: number): QuestionSettingsBuilder {
        this._cards = cards;
        return this;
    }

    withWrongOptionsFilterChain<T extends Learnable>(filter: (data: T) => FilterChain<T>): QuestionSettingsBuilder {
        this._wrongOptionsFilterChain = filter;
        return this;
    }

    withScoreTracking(enable: boolean = true): QuestionSettingsBuilder {
        this._score = enable;
        return this;
    }

    build(): QuestionSettings {
        return new QuestionSettings(this._questionField, this._answerField, this._type, this._cards,
            this._wrongOptionsFilterChain, this._score
        );
    }
}