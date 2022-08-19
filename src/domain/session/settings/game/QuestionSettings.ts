import QuestionType from "../../../game/QuestionType";
import LearnableField from "../../../learn/LearnableField";

export default class QuestionSettings {
    /**
     * The field whose value will be presented to the user in the form of a question.
     * E.g. A {@link Kanji} object with {@link LearnableField.ONYOMI_READING} might ask the user;
     * "Which is the {@link _answerField name} for {@link _questionField value}?".
     */
    private readonly _questionField: LearnableField;

    /**
     * The field whose value the user will need input to get the question correct.
     * E.g. A {@link Kana} object with {@link LearnableField.KANA} might ask the user;
     * "What is the {@link _answerField} for the {@link _questionField value}?".
     */
    private readonly _answerField: LearnableField;

    /**
     * The type of question they want to be asked during the game.
     */
    private readonly _type: QuestionType;

    /**
     * The number of options they want to be displayed on screen per question.
     * Applies only to {@link QuestionType.CHOICE}.
     */
    private readonly _cards: number;

    /**
     * The number of question-answer pairs they want to be asked in any given question.
     * This applies only to {@link QuestionType.MATCH} as the user can be given several questions
     * and they must match the chosen data fields with that of their respective answers.
     */
    private readonly _quantity: number;

    /**
     * An ID referencing a function that produces a {@link FilterChain} that is used to remove unwanted answers
     * from the pool of wrong answers that is display on a {@link QuestionType.CHOICE} question.
     *
     * E.g: You have a multiple chose {@link Kana} question and the question value is a diagraph like "gyo".
     * You wouldn't want to show non-diagraph kana as it's obvious that they are wrong answers. So you might
     * add a filter chain with a {@link DiagraphFilter} so the user is present only diagraph options.
     *
     * @see AnswerFilterRegistry
     */
    private readonly _answerFilterId: number;

    /**
     * Whether or not the current game session will track the players score.
     */
    private readonly _score: boolean;

    constructor(questionField: LearnableField, answerField: LearnableField, type: QuestionType, cards: number,
                quantity: number, answerFilterId: number, score: boolean) {
        this._questionField = questionField;
        this._answerField = answerField;
        this._type = type;
        this._cards = cards;
        this._answerFilterId = answerFilterId;
        this._score = score;
        this._quantity = quantity;
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

    get answerFilterId(): number {
        return this._answerFilterId;
    }

    get score(): boolean {
        return this._score;
    }

    get quantity(): number {
        return this._quantity;
    }
}

export class QuestionSettingsBuilder {
    private _questionField: LearnableField = LearnableField.KANA;
    private _answerField: LearnableField = LearnableField.ROMAJI;
    private _type: QuestionType = QuestionType.TEXT;
    private _cards: number = 1;
    private _quantity: number = 1;
    private _wrongOptionsFilterID = -1;
    private _score: boolean = false;

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

    withAnswerFilterChainID(id: number): QuestionSettingsBuilder {
        this._wrongOptionsFilterID = id;
        return this;
    }

    withScoreTracking(enable: boolean = true): QuestionSettingsBuilder {
        this._score = enable;
        return this;
    }

    withQuantity(quantity: number): QuestionSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): QuestionSettings {
        return new QuestionSettings(this._questionField, this._answerField, this._type, this._cards,
            this._quantity, this._wrongOptionsFilterID, this._score
        );
    }
}
