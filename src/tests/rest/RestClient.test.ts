import RestClient from "../../rest/RestClient";
import axios, { AxiosStatic } from "axios";
import { Environment } from "../../utility/Environment";
import { store } from "../../store";
import { setUser } from "../../slices/UserSlice";

interface AxiosMock extends AxiosStatic {
    mockResolvedValue: Function
    mockRejectedValue: Function
}

jest.mock('axios');
const mockedAxios = axios as AxiosMock;

interface ExampleResponse {
    value: string;
}

describe("Rest Client", () => {
    const environment = jest.fn();

    beforeEach(() => {
        Environment.variable = environment;
        environment.mockReturnValue("https://japanese.tomplumpton.me/learn-japanese");
        store.dispatch(setUser({
            username: "TomPlum42",
            nickname: "Tom",
            email: "tom@hotmail.com",
            creationDate: "2021-08-09T00:00",
            expired: false,
            locked: false,
            credentialsExpired: false,
            enabled: true,
            roles: ["user"],
            token: "TOKEN"
        }));
    });

    describe("GET", () => {
        it("Should map the response JSON to the specified type when the API call is successful", async () => {
            mockedAxios.mockResolvedValue({ data: { value: "test-value" }, status: 200 });

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").then(response => {
                expect(response).toStrictEqual({
                    status: 200,
                    error: undefined,
                    data: { value: "test-value" }
                });
            });
        });

        it("Should call axios with the correct URI and configuration", () => {
            mockedAxios.mockResolvedValue({ data: { value: "test-value" } });

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").then(() => {
                expect(mockedAxios).toHaveBeenLastCalledWith(
                    "https://japanese.tomplumpton.me/learn-japanese/kanji/by-character/人",
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json", },
                        data: undefined
                    }
                )
            });
        });

        it("Should return an error response when the promise is rejected and the error has a response", () => {
            mockedAxios.mockRejectedValue({ response: { data: "He's dead Jim.", status: 500 }});

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").catch(response => {
                expect(response).toStrictEqual({
                    data: "He's dead Jim.",
                    status: 500,
                    error: undefined
                });
            });
        });

        it("Should return an authentication error if the promise is rejected with a response and 401 status", () => {
            mockedAxios.mockRejectedValue({ response: { error: "Unauthorised.", status: 401 }});

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").catch(response => {
                expect(response).toStrictEqual({
                    data: undefined,
                    status: 401,
                    error: "User is not authenticated."
                });
            });
        });

        it("Should return an error response when the promise is rejected and the error has a request", () => {
            mockedAxios.mockRejectedValue({ request: { status: 500 }});

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").catch(response => {
                expect(response).toStrictEqual({
                    data: undefined,
                    status: 500,
                    error: "No response returned from the API"
                });
            });
        });

        it("Should return an error response when the promise is rejected and the error has not request or response", () => {
            mockedAxios.mockRejectedValue({});

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").catch(response => {
                expect(response).toStrictEqual({
                    data: undefined,
                    status: 400,
                    error: "Something went wrong while setting up the request."
                });
            });
        });

        it("Should throw an error if the endpoint is undefined", async () => {
            await expect(() => RestClient.get("")).rejects.toThrow("Endpoint is not defined!");
        });

        it("Should throw an error if the host is undefined", async () => {
            environment.mockReturnValueOnce(undefined);
            await expect(() => RestClient.get("")).rejects.toThrow("Host URI is not defined!");
        });
    });

    describe("POST", () => {
        it("Should call axios with the correct URI and configuration", () => {
            mockedAxios.mockResolvedValue({ data: { value: "test-value" } });

            return RestClient.post<ExampleResponse>("/kanji/by-character/人", { request: "Hello" }).then(() => {
                expect(mockedAxios).toHaveBeenLastCalledWith(
                    "https://japanese.tomplumpton.me/learn-japanese/kanji/by-character/人",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json", },
                        data: "{\"request\":\"Hello\"}"
                    }
                );
            });
        });

        it("Should throw an error if the endpoint is undefined", async () => {
            await expect(() => RestClient.post("", {})).rejects.toThrow("Endpoint is not defined!");
        });

        it("Should throw an error if the host is undefined", async () => {
            environment.mockReturnValueOnce(undefined);
            await expect(() => RestClient.post("", {})).rejects.toThrow("Host URI is not defined!");
        });
    });

    describe("PUT", () => {
        it("Should call axios with the correct URI and configuration", () => {
            mockedAxios.mockResolvedValue({ status: 201 });

            return RestClient.put<undefined>("/user/set-nickname/tom").then(() => {
                expect(mockedAxios).toHaveBeenLastCalledWith(
                    "https://japanese.tomplumpton.me/learn-japanese/user/set-nickname/tom",
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json", }
                    }
                );
            });
        });

        it("Should call axios with the correct the given request body if one is passed", () => {
            mockedAxios.mockResolvedValue({ status: 201 });

            return RestClient.put<undefined>("/user/set-nickname/tom", { key: "value" }).then(() => {
                expect(mockedAxios).toHaveBeenLastCalledWith(
                    "https://japanese.tomplumpton.me/learn-japanese/user/set-nickname/tom",
                    {
                        method: "PUT",
                        data: "{\"key\":\"value\"}",
                        headers: { "Content-Type": "application/json", }
                    }
                );
            });
        });

        it("Should throw an error if the endpoint is undefined", async () => {
            await expect(() => RestClient.put("", {})).rejects.toThrow("Endpoint is not defined!");
        });

        it("Should throw an error if the host is undefined", async () => {
            environment.mockReturnValueOnce(undefined);
            await expect(() => RestClient.put("", {})).rejects.toThrow("Host URI is not defined!");
        });
    });
});