import RestClient from "../rest/RestClient"
import UpdateResponse from "../rest/response/UpdateResponse"

class StatisticsService {
  /**
   * Resets all the recorded statistics for the
   * currently logged-in user.
   */
  public resetStats() {
    return RestClient.delete<UpdateResponse>("/statistics")
      .then((response) => {
        return { success: response.data?.success ?? false, error: response.error }
      })
      .catch((response) => {
        return { success: false, error: response.error ?? "Failed to delete user statistics." }
      })
  }
}

export default StatisticsService
