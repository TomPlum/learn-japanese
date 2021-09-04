import { Learnable } from "../Learnable";
import { Confidence } from "./Confidence";
import SpaceRepetitionDetails from "./SpaceRepetitionDetails";

class SpaceRepetitionFeedback {
    private readonly _question: Learnable;
    private readonly _confidence: Confidence;
    private readonly _details: SpaceRepetitionDetails;

    constructor(question: Learnable, confidence: Confidence, item: SpaceRepetitionDetails) {
        this._question = question;
        this._confidence = confidence;
        this._details = item;
    }

    get question(): Learnable {
        return this._question;
    }

    get confidence(): Confidence {
        return this._confidence;
    }

    get details(): SpaceRepetitionDetails {
        return this._details;
    }
}

export default SpaceRepetitionFeedback;
