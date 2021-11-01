import SpaceRepetitionFeedback from "../domain/learn/spacedrepetition/SpaceRepetitionFeedback";
import SpaceRepetitionDetails from "../domain/learn/spacedrepetition/SpaceRepetitionDetails";
import FlashCardRepository from "../repository/FlashCardRepository";
import { supermemo } from "supermemo";
import dayjs from 'dayjs';
import { FlashCard } from "../domain/learn/FlashCard";

class SpacedRepetitionService {

    private readonly repository: FlashCardRepository;

    constructor(repository = new FlashCardRepository()) {
        this.repository = repository;
    }

    public getDaysTillNextReview(feedback: SpaceRepetitionFeedback) {
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
