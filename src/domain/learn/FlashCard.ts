import SpaceRepetitionDetails from "./spacedrepetition/SpaceRepetitionDetails";

export class FlashCard {
    private readonly _id: number;
    private readonly _details: SpaceRepetitionDetails;

    constructor(id: number, details: SpaceRepetitionDetails) {
        this._id = id;
        this._details = details;
    }

    get id(): number {
        return this._id;
    }

    get details(): SpaceRepetitionDetails {
        return this._details;
    }
}
