import HighScoresRepository, { FindAllHighScoreEntries, HighScoresResponse } from "../../repository/HighScoresRepository";
import RestClient from "../../rest/RestClient";

const mockGet = jest.fn();

describe("High-Scores Repository", () => {
    const repository = new HighScoresRepository();

    beforeEach(() => {
        RestClient.get = mockGet;
    });

    describe("Find All Entries Page", () => {
        it("Should call the rest client with the correct endpoint and query parameters", () => {
            mockGet.mockResolvedValueOnce({});
            return repository.findAll({ page: 1, size: 10 }).then(() => {
                expect(mockGet).toHaveBeenLastCalledWith("/high-scores/entries?page=1&size=10");
            });
        });

        it("Should return the page response if there is truthy data", () => {
            mockGet.mockResolvedValueOnce({
                data: {
                    pages: 5,
                    total: 120,
                    value: [{
                        user: { id: 1, name: "Tom" },
                        presetId: 1,
                        score: 9235,
                        time: "04:50"
                    }]
                }
            });

            return repository.findAll({ page: 3, size: 10 }).then((response: FindAllHighScoreEntries) => {
                expect(response).toStrictEqual({
                    entries: [{
                        user: { id: 1, name: "Tom" },
                        presetId: 1,
                        score: 9235,
                        time: "04:50"
                    }],
                    total: 120,
                    pages: 5
                });
            });
        });

        it("Should return an error if the promise resolves with falsy data", () => {
            mockGet.mockResolvedValueOnce({ data: undefined, error: "Something went wrong." });
            return repository.findAll({ page: 3, size: 10 }).then((response: FindAllHighScoreEntries) => {
                expect(response).toStrictEqual({
                    entries: [],
                    total: 0,
                    pages: 0,
                    error: "Something went wrong."
                });
            });
        });

        it("Should return an error if the promise is rejected", () => {
            mockGet.mockResolvedValueOnce({ error: "Something went wrong." });
            return repository.findAll({ page: 3, size: 10 }).then((response: FindAllHighScoreEntries) => {
                expect(response).toStrictEqual({
                    entries: [],
                    total: 0,
                    pages: 0,
                    error: "Something went wrong."
                });
            });
        });
    });
});
