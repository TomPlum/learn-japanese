import RestClient from "../rest/RestClient";
import PaginatedResponse from "../rest/response/PaginatedResponse";
import { PaginationRequest } from "../rest/request/PaginationRequest";
import UpdateResponse from "../rest/response/UpdateResponse";

export interface HighScoresEntryResponse {
    user: {
        id: number;
        name: string;
    },
    presetId: number;
    score?: number;
    time?: string;
}

export type HighScoresResponse = PaginatedResponse<HighScoresEntryResponse[]>

export interface FindAllHighScoreEntries {
    entries: HighScoresEntryResponse[];
    total: number;
    pages: number;
    error?: string;
}

export interface HighScoreEntryRequest {
    preset: number;
    score?: number;
    time?: string;
}

export interface FindHighScoresRequest extends PaginationRequest {
    id: number;
    username?: string;
}

class HighScoresRepository {
    /**
     * Retrieves all the high-score entries.
     * @param request - Pagination details.
     * @return entries - A page of high-score entries.
     */
    public async findAll(request: FindHighScoresRequest): Promise<FindAllHighScoreEntries> {
        let endpoint = `/high-scores/entries/${request.id}?page=${request.page}&size=${request.size}`;

        if (request.username) {
            endpoint += `&user=${request.username}`;
        }

        return RestClient.get<HighScoresResponse>(endpoint).then(response => {
            const data = response.data;
            if (data) {
                return { entries: data.value, total: data.total, pages: data.pages };
            }
            return Promise.reject({ error: response.error });
        }).catch(response => {
            return { error: response.error, entries: [], total: 0, pages: 0 };
        });
    }

    /**
     * Saves a new high-score entry.
     * @param request Details of the high-score.
     */
    public async save(request: HighScoreEntryRequest): Promise<UpdateResponse> {
        return RestClient.post<UpdateResponse>("/high-scores/entry", request).then(response => {
            if (response.error) {
                return { success: false, error: response.error };
            }

            return { success: true };
        }).catch(response => {
            return { success: false, error: response.error };
        });
    }
}

export default HighScoresRepository;
