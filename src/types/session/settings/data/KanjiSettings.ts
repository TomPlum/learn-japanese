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
    private readonly _onyomi: boolean;
    private readonly _kunyomi: boolean;
    private readonly _tags: string[]

    constructor(grades: KyoikuGrade[], joyo: boolean, tags: string[], onyomi: boolean, kunyomi: boolean, quantity?: number) {
        super(Topic.KANJI, quantity);
        this._grades = grades;
        this._joyo = joyo;
        this._onyomi = onyomi;
        this._kunyomi = kunyomi;
        this._tags = tags;
    }

    get grades(): KyoikuGrade[] {
        return this._grades;
    }

    get joyo(): boolean {
        return this._joyo;
    }

    get onyomi(): boolean {
        return this._onyomi;
    }

    get kunyomi(): boolean {
        return this._kunyomi;
    }

    get tags(): string[] {
        return this._tags;
    }
}

export class KanjiSettingsBuilder {
    private _grades: KyoikuGrade[] = [];
    private _joyo: boolean = false;
    private _onyomi: boolean = true;
    private _kunyomi: boolean = true;
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

    withOnyomiReadings(include: boolean = true): KanjiSettingsBuilder {
        this._onyomi = include;
        return this;
    }

    withKunyomiReadings(include: boolean = true): KanjiSettingsBuilder {
        this._kunyomi = include;
        return this;
    }

    withQuantity(quantity?: number): KanjiSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): KanjiSettings {
        return new KanjiSettings(this._grades, this._joyo, this._tags, this._onyomi, this._kunyomi, this._quantity);
    }
}