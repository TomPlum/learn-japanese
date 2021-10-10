import UserService from "../../service/UserService";
import RestClient from "../../rest/RestClient";

const restClient = jest.fn();
RestClient.put = restClient;

describe("User Service", () => {
    const service = new UserService();

    it("Should call the rest client with the correct endpoint", () => {
        restClient.mockResolvedValueOnce({});
        return service.setNickname("tom").then(() => {
            expect(restClient).toHaveBeenCalledWith("/user/set-nickname/tom");
        });
    });

    it("Should call trim the nickname if it has leading or trailing spaces", () => {
        restClient.mockResolvedValueOnce({});
        return service.setNickname(" tom ").then(() => {
            expect(restClient).toHaveBeenCalledWith("/user/set-nickname/tom");
        });
    });

    it("Should return true if the API response resolves successfully", () => {
        restClient.mockResolvedValueOnce({});
        return service.setNickname("tom").then(response => {
            expect(response).toStrictEqual({ success: true });
        });
    });

    it("Should return true if the API response is rejected", () => {
        restClient.mockRejectedValueOnce({ errors: [{ message: "Internal Server Error" }] });
        return service.setNickname("tom").then(response => {
            expect(response).toStrictEqual({ success: false, error: "Internal Server Error" });
        });
    });
});
