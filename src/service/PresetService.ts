import PresetRepository, { Presets } from "../repository/PresetRepository"
import LearnMode from "../domain/session/LearnMode"
import PlayMode from "../domain/session/PlayMode"
import SessionMode from "../domain/session/SessionMode"
import UpdateResponse from "../rest/response/UpdateResponse"
import { SessionSettings } from "../domain/session/settings/SessionSettings"
import { CustomIcon } from "../domain/Icon"

export interface LearnPlayPresets {
  learn: LearnMode[]
  play: PlayMode[]
  error?: string
}

export interface CustomPresetMeta {
  name: string
  icon: CustomIcon
  colour: string
}

class PresetService {
  private readonly repository = new PresetRepository()

  /**
   * Retrieves a list of all available presets.
   * @return Learn and play presets.
   */
  public async getAllPresets(): Promise<LearnPlayPresets> {
    return this.repository
      .getAllPresets()
      .then((response: Presets) => {
        return { learn: response.learn, play: response.play, error: '' }
      })
      .catch((response) => {
        return { learn: [], play: [], error: response.error }
      })
  }

  /**
   * Retrieves a list of all default (non-custom) presets.
   * @return Default learn and play presets.
   */
  public async getDefaultPresets(): Promise<LearnPlayPresets> {
    return this.repository
      .getDefaultPresets()
      .then((response: Presets) => {
        return { learn: response.learn, play: response.play, error: '' }
      })
      .catch((response) => {
        return { learn: [], play: [], error: response.error }
      })
  }

  /**
   * Retrieves a list of default play presets.
   * @return presets - a list of play presets.
   */
  public async getPlayPresets(): Promise<PlayMode[]> {
    return this.repository.getDefaultPresets().then((response: Presets) => {
      return response.play
    })
  }

  /**
   * Removes the given preset from the users favourites.
   * @param preset The preset to remove.
   */
  public async removeFavouritePreset(preset: SessionMode): Promise<UpdateResponse> {
    return this.repository.deleteFavouritePreset(preset.id).then((response) => {
      return { success: response.success, error: response.error }
    })
  }

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

  /**
   * Saves a new preset against the current user with the given details.
   * @param meta Metadata for the custom preset.
   * @param settings The session settings for the preset configuration.
   */
  public async saveCustomPreset(meta: CustomPresetMeta, settings: SessionSettings): Promise<UpdateResponse> {
    const details = { name: meta.name, icon: meta.icon, colour: meta.colour, settings: settings }
    if (settings.gameSettings) {
      return this.repository
        .savePlayPreset(details)
        .then(() => {
          return { success: true }
        })
        .catch((response) => {
          return { success: false, error: response.error }
        })
    } else {
      return this.repository
        .saveLearnPreset(details)
        .then(() => {
          return { success: true }
        })
        .catch((response) => {
          return { success: false, error: response.error }
        })
    }
  }
}

export default PresetService
