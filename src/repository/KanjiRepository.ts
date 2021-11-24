import Repository from "./Repository";
import KanjiSettings from "../domain/session/settings/data/KanjiSettings";
import { Kanji } from "../domain/kanji/Kanji";
import RestClient from "../rest/RestClient";
import KanjiConverter from "../converter/KanjiConverter";
import { PaginationRequest } from "../rest/request/PaginationRequest";

export interface KanjiResponseModel {
    character: string;
    grade?: number;
    strokes?: number;
    jlpt?: number;
    source?: string;
    meanings: string[];
    readings: ReadingResponseModel[];
    examples: ExampleResponseModel[];
    tags: string[]
}

export interface ReadingResponseModel {
    value: string;
    type: "kun" | "on";
}

export interface ExampleResponseModel {
    value: string;
    kana: string[];
    english: string[];
}

interface KanjiByGradeRequest {
    grades: number[];
    quantity?: number;
    paging: PaginationRequest;
}

interface KanjiSearchResponseModel {
    results: { field: string, value: KanjiResponseModel }[];
}

interface KanjiSearchResults {
    results: { field: string, value: Kanji }[];
    error?: string;
}

export default class KanjiRepository implements Repository<Kanji> {

    private readonly converter = new KanjiConverter()

    /**
     * Retrieves kanji based on the given settings.
     * @param settings Rules governing which kanji to return.
     * @param pagination Pagination information.
     * @return kanji An array of matched kanji. Empty if none matched.
     */
    public async read(settings: KanjiSettings, pagination: PaginationRequest = { page: 0, size: 9999 }): Promise<Kanji[]> {
        const request: KanjiByGradeRequest = {
            grades: settings.grades.map(grade => grade.value),
            quantity: settings.quantity,
            paging: pagination
        };

        return RestClient.post<KanjiResponseModel[]>("/kanji/by-grade", request).then(response => {
            if (response.data) {
                return this.converter.convert(response.data)
            }
            return Promise.resolve([]);
        }).catch(response => {
            return Promise.reject(response);
        });
    }

    /**
     * Retrieves all the kanji that match the given search term.
     * @param search The term to search by.
     * @return results A collection of matching kanji and the field that it was matched on.
     */
    public async getBySearchTerm(search: string): Promise<KanjiSearchResults> {
        return RestClient.get<KanjiSearchResponseModel>("/kanji/by-term/" + search).then(response => {
            const data = response.data;

            if (data) {
                return {
                    results: data.results.map(result => {
                        return {
                            field: result.field,
                            value: this.converter.convert([result.value])[0]
                        }
                    })
                }
            }

            return Promise.resolve({ results: [], error: "No data in response"});
        }).catch(response => {
            return Promise.reject({ results: [], error: response.error });
        });
    }

    /**
     * Gets a single kanji by the given character.
     * @param value The kanji character to retrieve.
     * @return kanji The associated information for the request kanji or undefined if it doesn't exist.
     */
    public async getByValue(value: string): Promise<Kanji | undefined> {
        return RestClient.get<KanjiResponseModel>(`/kanji/by-character/${value}`).then(response => {
            return response.data ? this.converter.convert([response.data])[0] : undefined;
        }).catch(response => {
            return Promise.reject(response);
        });
    }
}
