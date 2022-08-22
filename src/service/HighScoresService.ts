import RestClient from "../rest/RestClient";
import UpdateResponse from "../rest/response/UpdateResponse";
import HighScoresRepository, { FindAllHighScoreEntries } from "../repository/HighScoresRepository";

export interface HighScoreEntry {
    user: {
        id: number;
        name: string;
    },
    presetId: number;
    score?: number;
    time?: string;
}

export interface HighScorePage {
    entries: HighScoreEntry[];
    pages: { quantity: number, total: number };
    error?: string;
}

class HighScoresService {

    private readonly _repository = new HighScoresRepository();

    /**
     * Retrieves a page of high-score entries.
     * @param page - The page number.
     * @param size - The size of the page.
     * @return entries - The page of entries.
     */
    public getAllEntriesPage(page: number, size: number): Promise<HighScorePage> {
        return this._repository.findAll({ page, size }).then((response: FindAllHighScoreEntries) => {
            return {
                entries: response.entries,
                error: response.error,
                pages: {
                    quantity: response.pages,
                    total: response.total
                }
            };
        }).catch(response => {
            return { entries: [], pages: { quantity: 0, total: 0 }, error: response.error };
        });
    }

    /**
     * Deletes all high-scores entries for the currently
     * logged-in user.
     */
    public delete() {
        return RestClient.delete<UpdateResponse>("/high-scores").then(response => {
            return { success: response.data?.success ?? false, error: response.error };
        }).catch(response => {
            return { success: false, error: response.error ?? "Failed to delete high-scores." };
        });
    }
}

export default HighScoresService;
