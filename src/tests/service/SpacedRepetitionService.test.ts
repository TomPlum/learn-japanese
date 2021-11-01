import SpacedRepetitionService from "../../service/SpacedRepetitionService";
import { mocked } from "ts-jest/utils";
import FlashCardRepository from "../../repository/FlashCardRepository";
import SpaceRepetitionFeedback from "../../domain/learn/spacedrepetition/SpaceRepetitionFeedback";
import Confidence from "../../domain/learn/spacedrepetition/Confidence";
import SpaceRepetitionDetails from "../../domain/learn/spacedrepetition/SpaceRepetitionDetails";
import { getValueLastCalledWith } from "../Queries";
import each from "jest-each";
import { FlashCard } from "../../domain/learn/FlashCard";
import Definition from "../../domain/sentence/Definition";

jest.mock("../../repository/FlashCardRepository");

describe("Spaced Repetition Service", () => {

    const learnable = new Definition(["interesting", "funny"], "面白い", "おもしろい", "い Adjective");
    const repository = mocked(new FlashCardRepository(), true);
    const service = new SpacedRepetitionService(repository);

    beforeEach(() => {
        //Set today's date as 4th September 2021 00:00:00
        Date.now = jest.fn(() => new Date(Date.UTC(2021, 8, 4, 0, 0, 0)).valueOf());
    });

    describe("Get Days Until", () => {
       it("Should return the interval based on the given feedback", () => {
           const feedback = new SpaceRepetitionFeedback(new FlashCard(1, learnable, new SpaceRepetitionDetails(2.5, 0, 0)), Confidence.BLACKOUT);
           const interval = service.getDaysTillNextReview(feedback);
           expect(interval).toBe(1);
       });
    });

    describe("Update", () => {
        it("Should update the easiness factor on a new question when the user has a blackout", () => {
            const feedback = new SpaceRepetitionFeedback(new FlashCard(1, learnable, new SpaceRepetitionDetails(2.5, 0, 0)), Confidence.BLACKOUT);
            service.update(feedback);
            expect(getValueLastCalledWith<FlashCard>(repository.update).details.efactor).toBe(1.7000000000000002);
        });

        it("Should update the due date for the next day on a new question when the user has a blackout", () => {
            const feedback = new SpaceRepetitionFeedback(new FlashCard(1, learnable, new SpaceRepetitionDetails(2.5, 0, 0)), Confidence.BLACKOUT);
            service.update(feedback);
            expect(getValueLastCalledWith<FlashCard>(repository.update).details.dueDate).toBe("2021-09-05T00:00:00.000Z");
        });

        it("Should update pass the ID of the card into the repository", () => {
            const feedback = new SpaceRepetitionFeedback(new FlashCard(1, learnable, new SpaceRepetitionDetails(2.5, 0, 0)), Confidence.BLACKOUT);
            service.update(feedback);
            expect(getValueLastCalledWith<FlashCard>(repository.update).id).toBe(1);
        });

        each([Confidence.BLACKOUT, Confidence.INCORRECT_BUT_REMEMBERED, Confidence.INCORRECT_OBVIOUS_AFTERWARDS])
            .it("Should not update the repetition value if the user answered incorrectly", (confidence: Confidence) => {
                const feedback = new SpaceRepetitionFeedback(new FlashCard(1, learnable, new SpaceRepetitionDetails(2.5, 0, 0)), confidence);
                service.update(feedback);
                expect(getValueLastCalledWith<FlashCard>(repository.update).details.repetition).toBe(0);
            });

        each([Confidence.CORRECT_DIFFICULT_MEMORY, Confidence.CORRECT_SMALL_HESITATION, Confidence.PERFECT])
            .it("Should update the repetition value by 1 if the user answered correctly", (confidence: Confidence) => {
                const feedback = new SpaceRepetitionFeedback(new FlashCard(1, learnable, new SpaceRepetitionDetails(2.5, 0, 0)), confidence);
                service.update(feedback);
                expect(getValueLastCalledWith<FlashCard>(repository.update).details.repetition).toBe(1);
            });

        it("Should return the updated interval as an integer in days", () => {
            const feedback = new SpaceRepetitionFeedback(new FlashCard(1, learnable, new SpaceRepetitionDetails(2.5, 0, 0)), Confidence.BLACKOUT);
            service.update(feedback);
            expect(getValueLastCalledWith<FlashCard>(repository.update).details.interval).toBe(1);
        });
    });
});
