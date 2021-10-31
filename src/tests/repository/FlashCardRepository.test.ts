import FlashCardRepository from "../../repository/FlashCardRepository";
import { FlashCard } from "../../domain/learn/FlashCard";
import SpaceRepetitionDetails from "../../domain/learn/spacedrepetition/SpaceRepetitionDetails";

const mockMessageQueue = jest.fn();
jest.mock("../../rest/MessageQueue", () => {
    return {
        fromLocalStorage: jest.fn().mockImplementation(function() {
            return {
                enqueue: mockMessageQueue
            }
        })
    }
});

beforeEach(() => {
    jest.resetAllMocks();
})

describe("Flash Card Repository", () => {

    const repository = new FlashCardRepository();

    describe("Update", () => {
        it("Should call the message queue with the endpoint details and request", () => {
            const card = new FlashCard(10, new SpaceRepetitionDetails(2.5, 0, 0, "2020-10-21"));

            repository.update(card);

            expect(mockMessageQueue).toHaveBeenCalledWith({
                method: "POST",
                endpoint: "/flash-cards/kanji/update",
                body: {
                    id: 10,
                    easiness: 2.5,
                    interval: 0,
                    repetition: 0,
                    dueDate: "2020-10-21"
                }
            });
        });
    });
});
