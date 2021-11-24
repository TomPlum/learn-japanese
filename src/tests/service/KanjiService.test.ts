import KanjiService from "../../service/KanjiService";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import { KanjiSettingsBuilder } from "../../domain/session/settings/data/KanjiSettings";
import { PaginationRequest } from "../../rest/request/PaginationRequest";
import { Kanji } from "../../domain/kanji/Kanji";
import { KanjiReading } from "../../domain/kanji/KanjiReading";
import { ReadingType } from "../../domain/kanji/ReadingType";
import { JLTPLevel } from "../../domain/learn/JLTPLevel";

//Mock Kanji Repository
const mockRepoRead = jest.fn();
const mockRepoGetBySearchTerm = jest.fn();
jest.mock("../../repository/KanjiRepository", () => {
    return function () { return { read: mockRepoRead, getBySearchTerm: mockRepoGetBySearchTerm } }
});

const kanji = new Kanji("魚", [new KanjiReading("sakana", "さかな", ReadingType.KUN)], ["fish"], KyoikuGrade.TWO, JLTPLevel.N5, "", [], []);

describe("Kanji Service", () => {
    const service = new KanjiService();

    describe("Get Kanji Page", () => {
        it("Should call the repository with the given pagination details and grades", () => {
            mockRepoRead.mockResolvedValueOnce([]);
            const grades = [KyoikuGrade.ONE, KyoikuGrade.TWO];
            return service.getKanjiPage(0, 10, grades).then(() => {
                const expectedSettings = new KanjiSettingsBuilder().withGrades(grades).build();
                const expectedPagination: PaginationRequest = { page: 0, size: 10 };
                expect(mockRepoRead).toHaveBeenLastCalledWith(expectedSettings, expectedPagination);
            });
        });

        it("Should call the repository with all grades if they are omitted", () => {
            mockRepoRead.mockResolvedValueOnce([]);
            return service.getKanjiPage(0, 10).then(() => {
                const expectedSettings = new KanjiSettingsBuilder().withGrades(KyoikuGrade.ALL).build();
                const expectedPagination: PaginationRequest = { page: 0, size: 10 };
                expect(mockRepoRead).toHaveBeenLastCalledWith(expectedSettings, expectedPagination);
            });
        });

        it("Should return the kanji characters if the repository call is successful", () => {
            mockRepoRead.mockResolvedValueOnce([kanji]);
            return service.getKanjiPage(0, 10).then(response => {
                expect(response.kanji[0].value).toStrictEqual(kanji);
            });
        });

        it("Should return an undefined field", () => {
            mockRepoRead.mockResolvedValueOnce([kanji]);
            return service.getKanjiPage(0, 10).then(response => {
                expect(response.kanji[0].field).toBeUndefined();
            });
        });

        it("Should return an undefined error if the repository call is successful", () => {
           mockRepoRead.mockResolvedValueOnce([kanji]);
           return service.getKanjiPage(0, 10).then(response => {
               expect(response.error).toBeUndefined();
           });
        });

        it("Should return the an empty kanji array if the repository call fails", () => {
            mockRepoRead.mockRejectedValueOnce({ error: "Oh No!" });
            return service.getKanjiPage(0, 10).then(response => {
                expect(response.kanji).toStrictEqual([]);
            });
        });

        it("Should return the error if the repository call fails and it returns one", () => {
           mockRepoRead.mockRejectedValueOnce({ error: "Oh dear :(" });
           return service.getKanjiPage(0, 10).then(response => {
               expect(response.error).toBe("Oh dear :(");
           });
        });

        it("Should return a default error message if the repository call fails but returns no error", () => {
           mockRepoRead.mockRejectedValueOnce({ error: undefined });
           return service.getKanjiPage(0, 10).then(response => {
               expect(response.error).toBe("An unknown error has occurred.");
           });
        });
    });

    describe("Get Kanji By Search Term", () => {
        it("Should call the repository with the search term", () => {
            mockRepoGetBySearchTerm.mockResolvedValueOnce({ results: [{ field: "meaning", value: kanji }] });
            return service.search("student").then(() => {
                expect(mockRepoGetBySearchTerm).toHaveBeenLastCalledWith("student");
            });
        });

        it("Should return an array of results if there is data in the repository response", () => {
            mockRepoGetBySearchTerm.mockResolvedValueOnce({ results: [{ field: "meaning", value: kanji }] });
            return service.search("student").then(response => {
                expect(response.kanji).toStrictEqual([{ field: "meaning", value: kanji }]);
            });
        });

        it("Should return an undefined error if there is data in the repository response", () => {
            mockRepoGetBySearchTerm.mockResolvedValueOnce({ results: [{ field: "meaning", value: kanji }] });
            return service.search("student").then(response => {
                expect(response.error).toBeUndefined();
            });
        });

        it("Should return an empty array of results if there is no data in the repository response", () => {
            mockRepoGetBySearchTerm.mockResolvedValueOnce({ results: [] });
            return service.search("student").then(response => {
                expect(response.kanji).toStrictEqual([]);
            });
        });

        it("Should return the response error if there is no data in the repository response", () => {
            mockRepoGetBySearchTerm.mockResolvedValueOnce({ results: [], error: "Something went wrong." });
            return service.search("student").then(response => {
                expect(response.error).toBe("Something went wrong.");
            });
        });

        it("Should return an empty array of results if the repository call is rejected", () => {
            mockRepoGetBySearchTerm.mockRejectedValueOnce({ results: [], error: "Something went wrong." });
            return service.search("student").catch(response => {
                expect(response.kanji).toStrictEqual([]);
            });
        });

        it("Should return the error message if the repository call is rejected", () => {
            mockRepoGetBySearchTerm.mockRejectedValueOnce({ results: [], error: "Something went wrong." });
            return service.search("student").catch(response => {
                expect(response.error).toBe("Something went wrong.");
            });
        });
    });
});
