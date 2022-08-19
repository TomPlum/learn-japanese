import RestClient from "../../rest/RestClient";
import HighScoresService from "../../service/HighScoresService";

const mockDelete = jest.fn();
beforeEach(() => {
    RestClient.delete = mockDelete;
});

describe("High-scores Service", () => {

    const service = new HighScoresService();

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
