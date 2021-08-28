import Topic from "../../../Topic";
import DataSettings from "./DataSettings";

/**
 * Settings used to by {@link KanaRepository} to customise
 * the selection of {@link Kana} returned.
 * @see KanaSettingsBuilder
 */
export default class KanaSettings extends DataSettings {
    private readonly _hiragana: boolean;
    private readonly _katakana: boolean;
    private readonly _diagraphs: boolean;
    private readonly _diacriticals: boolean;
    private readonly _regular: boolean;
    private readonly _onlyDiagraphs: boolean;

    constructor(hiragana: boolean, katakana: boolean, diagraphs: boolean, diacriticals: boolean, regular: boolean,
                onlyDiagraphs: boolean, quantity?: number) {
        super(Topic.KANA, quantity)
        this._hiragana = hiragana;
        this._katakana = katakana;
        this._diagraphs = diagraphs;
        this._diacriticals = diacriticals;
        this._regular = regular;
        this._onlyDiagraphs = onlyDiagraphs;
    }

    get hiragana(): boolean {
        return this._hiragana;
    }

    get katakana(): boolean {
        return this._katakana;
    }

    get diagraphs(): boolean {
        return this._diagraphs;
    }

    get diacriticals(): boolean {
        return this._diacriticals;
    }

    get regular(): boolean {
        return this._regular;
    }

    get onlyDiagraphs(): boolean {
        return this._onlyDiagraphs;
    }
}

export class KanaSettingsBuilder {
    private _hiragana: boolean = false;
    private _katakana: boolean = false;
    private _regular: boolean = true;
    private _diagraphs: boolean = false;
    private _onlyDiagraphs: boolean = false;
    private _diacriticals: boolean = false;
    private _quantity: number | undefined;

    withHiragana(include: boolean = true): KanaSettingsBuilder {
        this._hiragana = include;
        return this;
    }

    withKatakana(include: boolean = true): KanaSettingsBuilder {
        this._katakana = include;
        return this;
    }

    withRegularKana(include: boolean = true): KanaSettingsBuilder {
        this._regular = include;
        return this;
    }

    withDiagraphs(include: boolean = true): KanaSettingsBuilder {
        this._diagraphs = include;
        return this;
    }

    withOnlyDiagraphs(include: boolean = true): KanaSettingsBuilder {
        this._onlyDiagraphs = include;
        return this;
    }

    withDiacriticals(include: boolean = true): KanaSettingsBuilder {
        this._diacriticals = include;
        return this;
    }

    withQuantity(quantity?: number): KanaSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    withMaxQuantity(): KanaSettingsBuilder {
        this._quantity = undefined;
        return this;
    }

    withEverything(): KanaSettingsBuilder {
        this._hiragana = true;
        this._katakana = true;
        this._diacriticals = true;
        this._diagraphs = true;
        return this;
    }

    build(): KanaSettings {
        return new KanaSettings(
            this._hiragana, this._katakana, this._diagraphs, this._diacriticals,
            this._regular, this._onlyDiagraphs, this._quantity
        );
    }
}