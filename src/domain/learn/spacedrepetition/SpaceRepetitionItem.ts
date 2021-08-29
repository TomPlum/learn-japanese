import { SuperMemoItem } from "supermemo";

class SpaceRepetitionItem implements SuperMemoItem {
    private readonly _efactor: number;
    private readonly _interval: number;
    private readonly _repetition: number;

    constructor(efactor: number, interval: number, repetition: number) {
        this._efactor = efactor;
        this._interval = interval;
        this._repetition = repetition;
    }

    get efactor(): number {
        return this._efactor;
    }

    get interval(): number {
        return this._interval;
    }

    get repetition(): number {
        return this._repetition;
    }
}

export default SpaceRepetitionItem;
