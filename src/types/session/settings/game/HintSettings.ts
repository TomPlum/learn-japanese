import { HintQuantity } from "../../../game/HintQuantity";

export default class HintSettings {
    private readonly _enabled: boolean;
    private readonly _quantity: HintQuantity;

    constructor(enabled: boolean, quantity: HintQuantity) {
        this._enabled = enabled;
        this._quantity = quantity;
    }

    get enabled(): boolean {
        return this._enabled;
    }

    get quantity(): HintQuantity {
        return this._quantity;
    }
}

export class HintSettingsBuilder {
    private _enabled: boolean = true;
    private _quantity: HintQuantity = HintQuantity.UNLIMITED;

    isEnabled(enabled: boolean = true): HintSettingsBuilder {
        this._enabled = enabled;
        return this;
    }

    withQuantity(quantity: HintQuantity): HintSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): HintSettings {
        return new HintSettings(this._enabled, this._quantity);
    }
}