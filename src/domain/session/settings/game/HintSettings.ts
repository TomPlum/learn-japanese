export default class HintSettings {
    private readonly _enabled: boolean;
    private readonly _quantity: number;
    private readonly _unlimited: boolean;

    constructor(enabled: boolean, quantity: number, unlimited: boolean) {
        this._enabled = enabled;
        this._quantity = quantity;
        this._unlimited = unlimited;
    }

    get enabled(): boolean {
        return this._enabled;
    }

    get quantity(): number {
        return this._quantity;
    }

    get unlimited(): boolean {
        return this._unlimited;
    }
}

export class HintSettingsBuilder {
    private _enabled = true;
    private _quantity = 0;
    private _unlimited = false;

    isEnabled(enabled = true): HintSettingsBuilder {
        this._enabled = enabled;
        return this;
    }

    withQuantity(quantity: number): HintSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    areUnlimited(enabled = true): HintSettingsBuilder {
        this._unlimited = enabled;
        return this;
    }

    build(): HintSettings {
        return new HintSettings(this._enabled, this._quantity, this._unlimited);
    }
}