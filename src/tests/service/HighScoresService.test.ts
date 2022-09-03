import RestClient from "../../rest/RestClient";
import HighScoresService from "../../service/HighScoresService";

const mockFindAll = jest.fn();
const mockSave = jest.fn();
jest.mock("../../repository/HighScoresRepository", () => {
    return function () {
        return { findAll: mockFindAll, save: mockSave }
    }
});

const mockDelete = jest.fn();
beforeEach(() => {
    RestClient.delete = mockDelete;
});

describe("High-scores Service", () => {

    const service = new HighScoresService();

    describe("Add Entry", () => {
        it("Should call the repository with the correct request details", () => {
            mockSave.mockResolvedValueOnce({ success: true });
            return service.addNewEntry({ presetId: 45, score: 951, time: "03:21" }).then(() => {
                expect(mockSave).toHaveBeenLastCalledWith({
                    preset: 45,
                    score: 951,
                    time: "03:21"
                });
            });
        });

        it("Should return the update response from the repository", () => {
            const updateResponse = { success: true };
            mockSave.mockResolvedValueOnce(updateResponse);
            return service.addNewEntry({ presetId: 45, score: 951, time: "03:21" }).then(response => {
                expect(response).toStrictEqual(updateResponse);
            });
        });
    });

    describe("Get All Entries Page", () => {
        it("Should call the repository with the pagination details", () => {
            mockFindAll.mockResolvedValueOnce({});
            return service.getAllEntriesPage(1, 10).then(() => {
                expect(mockFindAll).toHaveBeenCalledWith({ page: 1, size: 10 });
            });
        });

        it("Should return the correct response when the repository call resolves", () => {
            mockFindAll.mockResolvedValueOnce({
                entries: [{
                    user: { id: 1, name: "Tom" },
                    presetId: 1,
                    score: 9235,
                    time: "04:50"
                }],
                total: 120,
                pages: 5
            });

            return service.getAllEntriesPage(0, 10).then(response => {
                expect(response).toStrictEqual({
                    entries: [{
                        user: { id: 1, name: "Tom" },
                        presetId: 1,
                        score: 9235,
                        time: "04:50"
                    }],
                    pages: {
                        quantity: 120,
                        total: 5
                    },
                    error: undefined
                })
            });
        });

        it("Should return the correct response if the repository call is rejected", () => {
            mockFindAll.mockRejectedValueOnce({ error: "Failed to retrieve high-score entries" });
            return service.getAllEntriesPage(5, 15).then(response => {
                expect(response).toStrictEqual({
                    entries: [],
                    pages: {
                        quantity: 0,
                        total: 0
                    },
                    error: "Failed to retrieve high-score entries"
                });
            })
        });
    });

    describe("Delete", () => {
        it("Should call the rest client with the correct endpoint", () => {
            mockDelete.mockResolvedValueOnce({ data: { success: true } });
            return service.delete().then(() => {
                expect(mockDelete).toHaveBeenCalledWith("/high-scores");
            });
        });

        it("Should return success as true if the API call succeeded", () => {
            mockDelete.mockResolvedValueOnce({ data: { success: true } });
            return service.delete().then(response => {
                expect(response.success).toBe(true);
            });
        });

        it("Should return success as false if the API call fails", () => {
            mockDelete.mockResolvedValueOnce({ data: { success: false } });
            return service.delete().then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return success as false if the API call succeeds but has no data", () => {
            mockDelete.mockResolvedValueOnce({ data: undefined });
            return service.delete().then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return an undefined error message if the API call succeeds", () => {
            mockDelete.mockResolvedValueOnce({ data: { success: true } });
            return service.delete().then(response => {
                expect(response.error).toBeUndefined();
            });
        });

        it("Should return success as false if the promise is rejected", () => {
            mockDelete.mockRejectedValueOnce({ error: "Oh dear." });
            return service.delete().then(response => {
                expect(response.success).toBe(false);
            });
        });

        it("Should return the error if the promise is rejected with one", () => {
            mockDelete.mockRejectedValueOnce({ error: "Oh dear." });
            return service.delete().then(response => {
                expect(response.error).toBe("Oh dear.");
            });
        });

        it("Should return a generic error message if the API doesn't provide one when rejected", () => {
            mockDelete.mockRejectedValueOnce({ error: undefined });
            return service.delete().then(response => {
                expect(response.error).toBe("Failed to delete high-scores.");
            });
        });
    });
});
