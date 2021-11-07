import SpaceRepetitionFeedback from "../domain/learn/spacedrepetition/SpaceRepetitionFeedback";
import SpaceRepetitionDetails from "../domain/learn/spacedrepetition/SpaceRepetitionDetails";
import FlashCardRepository from "../repository/FlashCardRepository";
import { supermemo } from "supermemo";
import dayjs from 'dayjs';
import { FlashCard } from "../domain/learn/FlashCard";

export interface FlashCardsResponse {
    cards?: FlashCard[];
    error?: string;
}

class SpacedRepetitionService {

    private readonly repository = new FlashCardRepository();

    public getKanjiFlashCards(): Promise<FlashCardsResponse> {
        return this.repository.getKanjiFlashCards().then(response => {
            return { cards: response };
        }).catch(response => {
            return { cards: undefined, error: response.error };
        });
    }

    public getDaysTillNextReview(feedback: SpaceRepetitionFeedback): number {
        return supermemo(feedback.card.details, feedback.confidence.value).interval;
    }

    public update(feedback: SpaceRepetitionFeedback) {
        const { interval, repetition, efactor } = supermemo(feedback.card.details, feedback.confidence.value);
        const dueDate = dayjs(Date.now()).add(interval, 'day').toISOString();
        const updatedDetails = new SpaceRepetitionDetails(efactor, interval, repetition, dueDate);
        const card = new FlashCard(feedback.card.id, feedback.card.value, updatedDetails)
        this.repository.update(card);
    }
}

export default SpacedRepetitionService;
