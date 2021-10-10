import RestClient from "../../rest/RestClient";
import authentication from "../../service/AuthenticationService";
import { localStorageMock } from "../../setupTests";

describe("Authentication Service", () => {
    const restGet = jest.fn();
    const restPost = jest.fn();

    beforeEach(() => {
        RestClient.get = restGet;
        RestClient.post = restPost;
    });

    afterEach(() => {
        localStorageMock.clear();
    });

    describe("Login", () => {
        it("Login should call the correct endpoint and request body", async () => {
            restPost.mockResolvedValueOnce({ data: { token: "TOKEN" }});
            return authentication.login("TomPlum", "MyPassword").then(() => {
                expect(restPost).toHaveBeenLastCalledWith("/user/login", {
                    username: "TomPlum", password: "MyPassword"
                });
            });
        });

        it("Should set the user in local storage if the response has a token", async () => {
            const user = {
                username: "TomPlum42",
                email: "tom@hotmail.com",
                nickname: "Tom",
                roles: ["admin"],
                locked: false,
                expired: false,
                credentialsExpired: false,
                creationDate: "2021-10-15",
                enabled: true,
                token: "TOKEN"
            };

            restPost.mockResolvedValueOnce({ data: user });

            return authentication.login("TomPlum42", "MyPassword").then(() => {
                expect(localStorageMock.getItem("user")).toBe(JSON.stringify(user))
            });
        });

        it("Should reject with an error message if there is no JWT in the response", async () => {
            const user = {
                username: "TomPlum42",
                email: "tom@hotmail.com",
                nickname: "Tom",
                roles: ["admin"],
                locked: false,
                expired: false,
                credentialsExpired: false,
                enabled: true,
            };

            restPost.mockResolvedValueOnce({ data: user });

            return authentication.login("TomPlum42", "MyPassword").catch(e => {
                expect(e).toEqual("Unknown login error: An error occurred when trying to authenticate the user.");
            });
        });

        it("Should reject with AUTHENTICATION_ERROR if the API returns a 401", async () => {
            restPost.mockRejectedValueOnce({ status: 401 });
            return authentication.login("TomPlum42", "MyPassword").catch(e => {
                expect(e).toEqual("AUTHENTICATION_ERROR");
            });
        });

        it("Should reject with an unknown error if the API returns an unknown response status code", async () => {
            restPost.mockRejectedValueOnce({ status: 865, error: "Sad face" });
            return authentication.login("TomPlum42", "MyPassword").catch(e => {
                expect(e).toEqual("Unknown login error: Sad face");
            });
        });

        it("Should return the user details from the API if the call is successful", async () => {
            const user = {
                username: "TomPlum42", email: "tom@hotmail.com",
                nickname: "Tom", roles: ["admin"],
                locked: false, expired: false,
                credentialsExpired: false, enabled: true,
                token: "TOKEN"
            };

            restPost.mockResolvedValueOnce({ data: user });

            return authentication.login("TomPlum42", "MyPassword").then(response => {
                expect(response).toStrictEqual(user);
            });
        });
    });

    describe("Registration", () => {
        it("Should call the correct endpoint and request body", async () => {
            restPost.mockResolvedValueOnce({ data: { username: "TomPlum", email: "tom@hotmail.com" } });
            return authentication.register("TomPlum", "tom@hotmail.com", "MyPassword", "Tom").then(() => {
                expect(restPost).toHaveBeenLastCalledWith("/user/register", {
                    username: "TomPlum", password: "MyPassword", email: "tom@hotmail.com", nickname: "Tom"
                });
            });
        });

        it("Should throw an exception if there is no data in the response", async () => {
            restPost.mockResolvedValueOnce({ data: undefined });
            await expect(() => {
                return authentication.register("TomPlum", "tom@hotmail.com", "MyPassword", "Tom")
            }).rejects.toThrow("No data returned post user-registration.");
        });

        it("Should return the user details from the API if the call is successful", async () => {
            const user = { username: "TomPlum42", email: "tom@hotmail.com", nickname: "Tom" };
            restPost.mockResolvedValueOnce({ data: user });
            return authentication.register("TomPlum", "tom@hotmail.com", "MyPassword", "Tom").then(response => {
                expect(response).toStrictEqual(user);
            });
        });
    });

    describe("Logout", () => {
        it("Should clear the session from local storage", () => {
            const user = { username: "TomPlum42" };
            localStorageMock.setItem("user", JSON.stringify(user));
            expect(localStorageMock.getItem("user")).toBe(JSON.stringify(user));

            authentication.logout();

            expect(localStorageMock.getItem("user")).toBeUndefined();
        });
    });
});
