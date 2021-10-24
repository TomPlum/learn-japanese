import SpacedRepetitionService from "../../service/SpacedRepetitionService";
import { mocked } from "ts-jest/utils";
import SpaceRepetitionRepository from "../../repository/SpaceRepetitionRepository";
import SpaceRepetitionFeedback from "../../domain/learn/spacedrepetition/SpaceRepetitionFeedback";
import Definition from "../../domain/sentence/Definition";
import Confidence from "../../domain/learn/spacedrepetition/Confidence";
import SpaceRepetitionDetails from "../../domain/learn/spacedrepetition/SpaceRepetitionDetails";
import { getValueLastCalledWith } from "../Queries";
import each from "jest-each";

jest.mock("../../repository/SpaceRepetitionRepository");

describe("Space Repetition Service", () => {

    const question = new Definition(["interesting", "funny"], "面白い", "おもしろい", "い Adjective");
    const repository = mocked(new SpaceRepetitionRepository(), true);
    const service = new SpacedRepetitionService(repository);

    beforeEach(() => {
        //Set today's date as 4th September 2021 00:00:00
        Date.now = jest.fn(() => new Date(Date.UTC(2021, 8, 4, 0, 0, 0)).valueOf());
    });

    describe("Get Days Until", () => {
       it("Should return the interval based on the given feedback", () => {
           const feedback = new SpaceRepetitionFeedback(question, Confidence.BLACKOUT, new SpaceRepetitionDetails(2.5, 0, 0));
           const interval = service.getDaysTillNextReview(feedback);
           expect(interval).toBe(1);
       });
    });

    describe("Update", () => {
        it("Should update the easiness factor on a new question when the user has a blackout", () => {
            const feedback = new SpaceRepetitionFeedback(question, Confidence.BLACKOUT, new SpaceRepetitionDetails(2.5, 0, 0));
            service.update(feedback);
            expect(getValueLastCalledWith<SpaceRepetitionDetails>(repository.update).efactor).toBe(1.7000000000000002);
        });

        it("Should update the due date for the next day on a new question when the user has a blackout", () => {
            const feedback = new SpaceRepetitionFeedback(question, Confidence.BLACKOUT, new SpaceRepetitionDetails(2.5, 0, 0));
            service.update(feedback);
            expect(getValueLastCalledWith<SpaceRepetitionDetails>(repository.update).dueDate).toBe("2021-09-05T00:00:00.000Z");
        });

        each([Confidence.BLACKOUT, Confidence.INCORRECT_BUT_REMEMBERED, Confidence.INCORRECT_OBVIOUS_AFTERWARDS])
            .it("Should not update the repetition value if the user answered incorrectly", (confidence: Confidence) => {
                const feedback = new SpaceRepetitionFeedback(question, confidence, new SpaceRepetitionDetails(2.5, 0, 0));
                service.update(feedback);
                expect(getValueLastCalledWith<SpaceRepetitionDetails>(repository.update).repetition).toBe(0);
            });

        each([Confidence.CORRECT_DIFFICULT_MEMORY, Confidence.CORRECT_SMALL_HESITATION, Confidence.PERFECT])
            .it("Should update the repetition value by 1 if the user answered correctly", (confidence: Confidence) => {
                const feedback = new SpaceRepetitionFeedback(question, confidence, new SpaceRepetitionDetails(2.5, 0, 0));
                service.update(feedback);
                expect(getValueLastCalledWith<SpaceRepetitionDetails>(repository.update).repetition).toBe(1);
            });

        it("Should return the updated interval as an integer in days", () => {
            const feedback = new SpaceRepetitionFeedback(question, Confidence.BLACKOUT, new SpaceRepetitionDetails(2.5, 0, 0));
            service.update(feedback);
            expect(getValueLastCalledWith<SpaceRepetitionDetails>(repository.update).interval).toBe(1);
        });
    });
});
