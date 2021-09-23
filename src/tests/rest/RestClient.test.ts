import RestClient from "../../rest/RestClient";
import axios, { AxiosStatic } from "axios";
import { Environment } from "../../utility/Environment";

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
        environment.mockReturnValue("https://japanese.tomplumpton.me/learn-japanese")
    });

    describe("GET", () => {
        it("Should map the response JSON to the specified type when the API call is successful", async () => {
            mockedAxios.mockResolvedValue({ data: { value: "test-value" }, status: 200 });

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").then(response => {
                expect(response).toStrictEqual({
                    data: { value: "test-value" },
                    errors: [],
                    status: 200
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
                    data: undefined,
                    status: 500,
                    errors: [new Error("He's dead Jim.")]
                });
            });
        });

        it("Should return an error response when the promise is rejected and the error has a request", () => {
            mockedAxios.mockRejectedValue({ request: { status: 500 }});

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").catch(response => {
                expect(response).toStrictEqual({
                    data: undefined,
                    status: 500,
                    errors: [new Error("No response returned from the API")]
                });
            });
        });

        it("Should return an error response when the promise is rejected and the error has not request or response", () => {
            mockedAxios.mockRejectedValue({});

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").catch(response => {
                expect(response).toStrictEqual({
                    data: undefined,
                    status: 400,
                    errors: [new Error("Something went wrong while setting up the request.")]
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
});
