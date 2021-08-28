import { KyoikuGrade } from "../../../kanji/KyoikuGrade";
import Topic from "../../../Topic";
import DataSettings from "./DataSettings";

/**
 * Settings used by {@link KanjiRepository} to customise
 * the collection of {@link Kanji} returned.
 * @see KanjiSettingsBuilder
 */
export default class KanjiSettings extends DataSettings {
    private readonly _grades: KyoikuGrade[];
    private readonly _joyo: boolean;
    private readonly _tags: string[]

    constructor(grades: KyoikuGrade[], joyo: boolean, tags: string[], quantity?: number) {
        super(Topic.KANJI, quantity);
        this._grades = grades;
        this._joyo = joyo;
        this._tags = tags;
    }

    get grades(): KyoikuGrade[] {
        return this._grades;
    }

    get joyo(): boolean {
        return this._joyo;
    }

    get tags(): string[] {
        return this._tags;
    }
}

export class KanjiSettingsBuilder {
    private _grades: KyoikuGrade[] = [];
    private _joyo: boolean = false;
    private _tags: string[] = [];
    private _quantity: number | undefined;

    withGrades(grades: KyoikuGrade[]): KanjiSettingsBuilder {
        this._grades = grades;
        return this;
    }

    withJoyoKanji(include: boolean = true): KanjiSettingsBuilder {
        this._joyo = include;
        return this;
    }

    withTags(tags: string[]): KanjiSettingsBuilder {
        this._tags = tags;
        return this;
    }

    withQuantity(quantity?: number): KanjiSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): KanjiSettings {
        return new KanjiSettings(this._grades, this._joyo, this._tags, this._quantity);
    }
}