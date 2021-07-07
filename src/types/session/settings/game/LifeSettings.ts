import { LifeQuantity } from "../../../game/LifeQuantity";

export default class LifeSettings {
    private readonly _enabled: boolean;
    private readonly _quantity: LifeQuantity;

    constructor(enabled: boolean, quantity: LifeQuantity) {
        this._enabled = enabled;
        this._quantity = quantity;
    }

    get enabled(): boolean {
        return this._enabled;
    }

    get quantity(): LifeQuantity {
        return this._quantity;
    }
}

export class LifeSettingsBuilder {
    private _enabled: boolean = true;
    private _quantity: LifeQuantity = LifeQuantity.FIVE;

    isEnabled(enabled: boolean = true): LifeSettingsBuilder {
        this._enabled = enabled;
        if (!enabled) {
            this._quantity = LifeQuantity.ZERO;
        }
        return this;
    }

    withQuantity(quantity: LifeQuantity): LifeSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): LifeSettings {
        return new LifeSettings(this._enabled, this._quantity);
    }
}