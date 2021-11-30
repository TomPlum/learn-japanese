import FlashCardRepository from "../../repository/FlashCardRepository";
import { FlashCard } from "../../domain/learn/FlashCard";
import SpaceRepetitionDetails from "../../domain/learn/spacedrepetition/SpaceRepetitionDetails";
import { Kanji } from "../../domain/kanji/Kanji";
import { KanjiReading } from "../../domain/kanji/KanjiReading";
import { ReadingType } from "../../domain/kanji/ReadingType";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import RestClient from "../../rest/RestClient";
import { Example } from "../../domain/kanji/Example";
import JLTPLevel from "../../domain/learn/JLTPLevel";

const mockMessageQueue = jest.fn();
jest.mock("../../rest/MessageQueue", () => {
    return { fromLocalStorage: jest.fn().mockImplementation(function() {
        return { enqueue: mockMessageQueue }
    })}
});

const mockRestClient = jest.fn();
RestClient.get = mockRestClient;

beforeEach(() => {
    jest.resetAllMocks();
});

describe("Flash Card Repository", () => {

    const repository = new FlashCardRepository();

    describe("Get Kanji Flash Cards", () => {
        it("Should call the rest client with the correct endpoint", () => {
            mockRestClient.mockResolvedValue({ data: [] });
            repository.getKanjiFlashCards();
            expect(mockRestClient).toHaveBeenCalledWith("/learn/flash-cards/kanji");
        });

        it("Should return an array of flash cards if the user has any outstanding", () => {
            mockRestClient.mockResolvedValue({
                data: [{
                    id: 10,
                    kanji: {
                        character: "一",
                        grade: 1,
                        strokes: 1,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
                        meanings: ["one"],
                        readings: [{ "value": "ひとつ", "type": "kun" }],
                        examples: [{ "value": "一つ", "kana": ["ひとつ"], "english": ["one"] }],
                        tags: ["number"]
                    },
                    dueDate: "2021-10-02",
                    easiness: 3.0,
                    repetition: 4,
                    interval: 2
                }]
            });

            return repository.getKanjiFlashCards().then(response => {
                expect(response).toStrictEqual([
                    new FlashCard(
                        10,
                        new Kanji(
                            "一",
                            [new KanjiReading("hitotsu", "ひとつ", ReadingType.KUN)],
                            ["one"],
                            KyoikuGrade.ONE,
                            JLTPLevel.N4,
                            "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
                            [new Example("一つ", ["ひとつ"], ["one"])],
                            ["number"]
                        ),
                        new SpaceRepetitionDetails(3.0, 2, 4, "2021-10-02")
                    )
                ]);
            });
        });

        it("Should return an empty array if the response has no data", () => {
            mockRestClient.mockResolvedValue({ data: undefined });
            return repository.getKanjiFlashCards().then(response => {
                expect(response).toStrictEqual([]);
            });
        });

        it("Should reject the promise with the response if the API call fails", () => {
            mockRestClient.mockRejectedValue({ error: "Internal Server Error (500)"});
            return repository.getKanjiFlashCards().catch(response => {
                expect(response).toStrictEqual({ error: "Internal Server Error (500)"});
            });
        });
    });

    describe("Update", () => {
        const kanji = new Kanji("一", [new KanjiReading("ichi", "いち", ReadingType.ON)], ["one"], KyoikuGrade.ONE, JLTPLevel.N5, "", [], ["number"]);

        it("Should call the message queue with the endpoint details and request", () => {
            const card = new FlashCard(10, kanji, new SpaceRepetitionDetails(2.5, 0, 0, "2020-10-21"));

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
