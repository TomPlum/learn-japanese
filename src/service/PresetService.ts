import PresetRepository, { Presets } from "../repository/PresetRepository"
import LearnMode from "types/session/LearnMode"
import PlayMode from "types/session/PlayMode"
import SessionMode from "types/session/SessionMode"
import UpdateResponse from "../rest/response/UpdateResponse"
import { SessionSettings } from "types/session/settings/SessionSettings"
import { CustomIcon } from "types/Icon"

export interface LearnPlayPresets {
  learn: LearnMode[]
  play: PlayMode[]
  error?: string
}

class PresetService {
  private readonly repository = new PresetRepository()

  /**
   * Updates the users favourites with the given additions and removals.
   * @param add An array of preset to add to the favourites.
   * @param remove An array of favourite presets to remove.
   */
  public async updateFavourites(add: number[], remove: number[]): Promise<UpdateResponse> {
    return this.repository
      .updateFavouritePresets(add, remove)
      .then(() => {
        return { success: true }
      })
      .catch((response) => {
        return { success: false, error: response.error }
      })
  }
}

export default PresetService
