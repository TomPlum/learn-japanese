import KanjiService from "../../service/KanjiService";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import { KanjiSettingsBuilder } from "../../domain/session/settings/data/KanjiSettings";
import { PaginationRequest } from "../../rest/request/PaginationRequest";
import { Kanji } from "../../domain/kanji/Kanji";
import { KanjiReading } from "../../domain/kanji/KanjiReading";
import { ReadingType } from "../../domain/kanji/ReadingType";

//Mock Kanji Repository
const mockKanjiRepository = jest.fn();
jest.mock("../../repository/KanjiRepository", () => {
    return function () { return { read: mockKanjiRepository } }
});

describe("Kanji Service", () => {
    const service = new KanjiService();

    describe("Get Kanji Page", () => {

        const kanji = new Kanji("魚", [new KanjiReading("sakana", "さかな", ReadingType.KUN)], ["fish"], KyoikuGrade.TWO, "", [], []);

        it("Should call the repository with the given pagination details and grades", () => {
            mockKanjiRepository.mockResolvedValueOnce([]);
            const grades = [KyoikuGrade.ONE, KyoikuGrade.TWO];
            return service.getKanjiPage(0, 10, grades).then(() => {
                const expectedSettings = new KanjiSettingsBuilder().withGrades(grades).build();
                const expectedPagination: PaginationRequest = { page: 0, size: 10 };
                expect(mockKanjiRepository).toHaveBeenLastCalledWith(expectedSettings, expectedPagination);
            });
        });

        it("Should call the repository with all grades if they are omitted", () => {
            mockKanjiRepository.mockResolvedValueOnce([]);
            return service.getKanjiPage(0, 10).then(() => {
                const expectedSettings = new KanjiSettingsBuilder().withGrades(KyoikuGrade.ALL).build();
                const expectedPagination: PaginationRequest = { page: 0, size: 10 };
                expect(mockKanjiRepository).toHaveBeenLastCalledWith(expectedSettings, expectedPagination);
            });
        });

        it("Should return the kanji characters if the repository call is successful", () => {
            mockKanjiRepository.mockResolvedValueOnce([kanji]);
            return service.getKanjiPage(0, 10).then(response => {
                expect(response.value).toStrictEqual([kanji]);
            });
        });

        it("Should return an undefined error if the repository call is successful", () => {
           mockKanjiRepository.mockResolvedValueOnce([kanji]);
           return service.getKanjiPage(0, 10).then(response => {
               expect(response.error).toBeUndefined();
           });
        });

        it("Should return the an empty kanji array if the repository call fails", () => {
            mockKanjiRepository.mockRejectedValueOnce({ error: "Oh No!" });
            return service.getKanjiPage(0, 10).then(response => {
                expect(response.value).toStrictEqual([]);
            });
        });

        it("Should return the error if the repository call fails and it returns one", () => {
           mockKanjiRepository.mockRejectedValueOnce({ error: "Oh dear :(" });
           return service.getKanjiPage(0, 10).then(response => {
               expect(response.error).toBe("Oh dear :(");
           });
        });

        it("Should return a default error message if the repository call fails but returns no error", () => {
           mockKanjiRepository.mockRejectedValueOnce({ error: undefined });
           return service.getKanjiPage(0, 10).then(response => {
               expect(response.error).toBe("An unknown error has occurred.");
           });
        });
    });
});
