import RestClient from "../../rest/RestClient";
import axios, { AxiosStatic } from "axios";

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
    describe("GET", () => {
        it("Should map the response JSON to the specified type when the API call is successful", async () => {
            mockedAxios.mockResolvedValue({ data: { value: "test-value" } });

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").then(response => {
                expect(response).toStrictEqual({
                    data: { value: "test-value" },
                    errors: []
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

        it("Should return an error response when the API doesn't return any data", () => {
            mockedAxios.mockResolvedValue({ data: undefined, statusText: "Oh No" });

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").then(response => {
                expect(response).toStrictEqual({
                    data: undefined,
                    errors: [new Error("Oh No")]
                });
            });
        });

        it("Should return an error response when the promise is rejected", () => {
            mockedAxios.mockRejectedValue("He's dead Jim.");

            return RestClient.get<ExampleResponse>("/kanji/by-character/人").then(response => {
                expect(response).toStrictEqual({
                    data: undefined,
                    errors: [new Error("He's dead Jim.")]
                });
            });
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
                )
            });
        });
    });
});
