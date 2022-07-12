import RestClient from "../rest/RestClient";
import UpdateResponse from "../rest/response/UpdateResponse";

class HighScoresService {
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
