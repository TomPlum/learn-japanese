import UserService from "../../service/UserService";
import RestClient from "../../rest/RestClient";
import DataResponse from "../../rest/DataResponse";
import { UserPreferences } from "../../slices/UserSlice";

const restPut = jest.fn();
const restGet = jest.fn();
RestClient.put = restPut;
RestClient.get = restGet;

describe("User Service", () => {
    const service = new UserService();

    describe("Username Exists", () => {
        it("Should call the rest client with the correct endpoint", () => {
            restGet.mockResolvedValueOnce({});
            return service.usernameExists("TomPlum").then(() => {
                expect(restGet).toHaveBeenCalledWith("/user/exists?username=TomPlum");
            });
        });

        it("Should return exists true if the API returns true", () => {
            restGet.mockResolvedValueOnce({ data: { exists: true } });
            return service.usernameExists("TomPlum").then(response => {
                expect(response.exists).toBe(true);
            });
        });

        it("Should return exists false if the API returns false", () => {
            restGet.mockResolvedValueOnce({ data: { exists: false } });
            return service.usernameExists("TomPlum").then(response => {
                expect(response.exists).toBe(false);
            });
        });

        it("Should return exists false if the API does return an exists property", () => {
            restGet.mockResolvedValueOnce({ data: { error: "Oh no" } });
            return service.usernameExists("TomPlum").then(response => {
                expect(response.exists).toBe(false);
            });
        });

        it("Should return the error message if the API returns one", () => {
            restGet.mockResolvedValueOnce({ data: { error: "Oh no" } });
            return service.usernameExists("TomPlum").then(response => {
                expect(response.error).toBe("Oh no");
            });
        });

        it("Should return exists false if the API call is rejected", () => {
            restGet.mockRejectedValueOnce({ data: { error: "You must provide a valid query parameter" } });
            return service.usernameExists("TomPlum").then(response => {
                expect(response.exists).toBe(false);
            });
        });

        it("Should return the error message if the API call is rejected", () => {
            restGet.mockRejectedValueOnce({ data: { error: "You must provide a valid query parameter" } });
            return service.usernameExists("TomPlum").then(response => {
                expect(response.error).toBe("You must provide a valid query parameter");
            });
        });
    });

    describe("Email Exists", () => {
        it("Should call the rest client with the correct endpoint", () => {
            restGet.mockResolvedValueOnce({});
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then(() => {
                expect(restGet).toHaveBeenCalledWith("/user/exists?email=tomplum@hotmail.com");
            });
        });

        it("Should return exists true if the API returns true", () => {
            restGet.mockResolvedValueOnce({ data: { exists: true } });
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then(response => {
                expect(response.exists).toBe(true);
            });
        });

        it("Should return exists false if the API returns false", () => {
            restGet.mockResolvedValueOnce({ data: { exists: false } });
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then(response => {
                expect(response.exists).toBe(false);
            });
        });

        it("Should return exists false if the API does return an exists property", () => {
            restGet.mockResolvedValueOnce({ data: { error: "Oh no" } });
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then(response => {
                expect(response.exists).toBe(false);
            });
        });

        it("Should return the error message if the API returns one", () => {
            restGet.mockResolvedValueOnce({ data: { error: "Oh no" } });
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then(response => {
                expect(response.error).toBe("Oh no");
            });
        });

        it("Should return exists false if the API call is rejected", () => {
            restGet.mockRejectedValueOnce({ data: { error: "You must provide a valid query parameter" } });
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then(response => {
                expect(response.exists).toBe(false);
            });
        });

        it("Should return the error message if the API call is rejected", () => {
            restGet.mockRejectedValueOnce({ data: { error: "You must provide a valid query parameter" } });
            return service.emailAlreadyRegistered("tomplum@hotmail.com").then(response => {
                expect(response.error).toBe("You must provide a valid query parameter");
            });
        });
    });

    describe("Set Nickname", () => {
        it("Should call the rest client with the correct endpoint", () => {
            restPut.mockResolvedValueOnce({});
            return service.setNickname("tom").then(() => {
                expect(restPut).toHaveBeenCalledWith("/user/set-nickname/tom");
            });
        });

        it("Should call trim the nickname if it has leading or trailing spaces", () => {
            restPut.mockResolvedValueOnce({});
            return service.setNickname(" tom ").then(() => {
                expect(restPut).toHaveBeenCalledWith("/user/set-nickname/tom");
            });
        });

        it("Should return true if the API response resolves successfully", () => {
            restPut.mockResolvedValueOnce({});
            return service.setNickname("tom").then(response => {
                expect(response).toStrictEqual({ success: true });
            });
        });

        it("Should return true if the API response is rejected", () => {
            restPut.mockRejectedValueOnce({ error: "Internal Server Error" });
            return service.setNickname("tom").then(response => {
                expect(response).toStrictEqual({ success: false, error: "Internal Server Error" });
            });
        });
    });

    describe("Get Preferences", () => {
        const validPreferencesResponse = {
            defaultFont: "Gothic",
            theme: "Dark Mode",
            language: "English",
            highScores: "Ask Each Time",
            defaultMode: "Play",
            cardsPerDay: 10,
            confidenceMenuStyle: "Numbers 1 - 6"
        };

        it("Should call the rest client with the correct endpoint", () => {
            restGet.mockResolvedValueOnce({ data: validPreferencesResponse });
            return service.getPreferences().then(() => {
                expect(restGet).toHaveBeenCalledWith("/user/preferences");
            });
        });

        it("Should return the preferences if the API call is successful", () => {
            restGet.mockResolvedValueOnce({ data: validPreferencesResponse });
            return service.getPreferences().then((response: DataResponse<UserPreferences>) => {
                expect(response.data).toBe(validPreferencesResponse);
            });
        });

        it("Should return undefined data with an error message if the API call fails", () => {
            restGet.mockRejectedValueOnce({ error: "Internal Server Error" });
            return service.getPreferences().then((response: DataResponse<UserPreferences>) => {
                expect(response.data).toBeUndefined();
                expect(response.error).toBe("Internal Server Error");
            });
        });
    });

    describe("Update Preferences", () => {
        const request = {
            defaultFont: "Gothic",
            theme: "Dark Mode",
            language: "English",
            highScores: "Ask Each Time",
            defaultMode: "Play",
            cardsPerDay: 10,
            confidenceMenuStyle: "Numbers 1 - 6"
        };

        it("Should call the rest client with the correct endpoint and request body", () => {
            restPut.mockResolvedValueOnce({ });
            return service.updatePreferences(request).then(() => {
                expect(restPut).toHaveBeenCalledWith("/user/update-preferences", request);
            });
        });

        it("Should return true if the API call was successful", () => {
            restPut.mockResolvedValueOnce({ });
            return service.updatePreferences(request).then(response => {
                expect(response).toStrictEqual({ success: true });
            });
        });

        it("Should return false and an error message if the API call failed", () => {
            restPut.mockRejectedValueOnce({ error: "Internal Server Error" });
            return service.updatePreferences(request).then(response => {
                expect(response).toStrictEqual({ success: false, error: "Internal Server Error" });
            });
        });
    });
});
