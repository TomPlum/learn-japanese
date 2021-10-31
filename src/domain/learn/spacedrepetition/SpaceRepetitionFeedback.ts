import Confidence from "./Confidence";
import { FlashCard } from "../FlashCard";

class SpaceRepetitionFeedback {
    private readonly _confidence: Confidence;
    private readonly _card: FlashCard;

    constructor(card: FlashCard, confidence: Confidence) {
        this._confidence = confidence;
        this._card = card;
    }

    get confidence(): Confidence {
        return this._confidence;
    }

    get card(): FlashCard {
        return this._card;
    }
}

export default SpaceRepetitionFeedback;
