import SpaceRepetitionFeedback from "../domain/learn/spacedrepetition/SpaceRepetitionFeedback";
import SpaceRepetitionDetails from "../domain/learn/spacedrepetition/SpaceRepetitionDetails";
import SpaceRepetitionRepository from "../repository/SpaceRepetitionRepository";
import { supermemo } from "supermemo";
import dayjs from 'dayjs';

class SpacedRepetitionService {

    private readonly repository: SpaceRepetitionRepository;

    constructor(repository = new SpaceRepetitionRepository()) {
        this.repository = repository;
    }

    public update(feedback: SpaceRepetitionFeedback) {
        const { interval, repetition, efactor } = supermemo(feedback.details, feedback.confidence.value);
        const dueDate = dayjs(Date.now()).add(interval, 'day').toISOString();
        const updatedDetails = new SpaceRepetitionDetails(efactor, interval, repetition, dueDate);
        this.repository.update(updatedDetails);
    }
}

export default SpacedRepetitionService;
