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
