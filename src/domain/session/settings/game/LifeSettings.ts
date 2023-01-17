
export default class LifeSettings {
    private readonly _enabled: boolean;
    private readonly _quantity: number;

    constructor(enabled: boolean, quantity: number) {
        this._enabled = enabled;
        this._quantity = quantity;
    }

    get enabled(): boolean {
        return this._enabled;
    }

    get quantity(): number {
        return this._quantity;
    }
}

export class LifeSettingsBuilder {
    private _enabled = true;
    private _quantity = 5;

    isEnabled(enabled = true): LifeSettingsBuilder {
        this._enabled = enabled;
        if (!enabled) {
            this._quantity = 0;
        }
        return this;
    }

    withQuantity(quantity: number): LifeSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): LifeSettings {
        return new LifeSettings(this._enabled, this._quantity);
    }
}
