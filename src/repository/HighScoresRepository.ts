import RestClient from "../rest/RestClient";
import PaginatedResponse from "../rest/response/PaginatedResponse";
import { PaginationRequest } from "../rest/request/PaginationRequest";

export interface HighScoresEntryResponse {
    user: {
        id: number;
        name: string;
    },
    presetId: number;
    score?: number;
    time?: string;
}

export interface HighScoresResponse extends PaginatedResponse<HighScoresEntryResponse[]>{}

export interface FindAllHighScoreEntries {
    entries: HighScoresEntryResponse[];
    total: number;
    pages: number;
    error?: string;
}

export class HighScoresRepository {
    /**
     * Retrieves all the high-score entries.
     * @param paging - Pagination details.
     * @return entries - A page of high-score entries.
     */
    public async findAll(paging: PaginationRequest): Promise<FindAllHighScoreEntries> {
        const endpoint = `/high-scores/entries?page=${paging.page}&size=${paging.size}`;

        return RestClient.get<HighScoresResponse>(endpoint).then(response => {
            const data = response.data;
            if (data) {
                return { entries: data.value, total: data.total, pages: data.pages };
            }
            throw new Error(response.error);
        }).catch(response => {
            return { error: response.message, entries: [], total: 0, pages: 0 };
        });
    }
}
