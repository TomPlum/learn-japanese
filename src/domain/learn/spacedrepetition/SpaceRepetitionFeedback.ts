import { Learnable } from "../Learnable";
import { Confidence } from "./Confidence";

class SpaceRepetitionFeedback {
    private readonly _question: Learnable;
    private readonly _confidence: Confidence;

    constructor(question: Learnable, confidence: Confidence) {
        this._question = question;
        this._confidence = confidence;
    }

    get question(): Learnable {
        return this._question;
    }

    get confidence(): Confidence {
        return this._confidence;
    }
}
