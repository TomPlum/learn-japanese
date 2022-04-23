import PresetRepository, { Presets } from "../repository/PresetRepository";
import LearnMode from "../domain/session/LearnMode";
import PlayMode from "../domain/session/PlayMode";
import SessionMode from "../domain/session/SessionMode";
import UpdateResponse from "../rest/response/UpdateResponse";

export interface LearnPlayPresets {
    learn: LearnMode[];
    play: PlayMode[];
    error?: string;
}

class PresetService {

    private readonly repository = new PresetRepository();

    /**
     * Retrieves a list of all available presets.
     * @return Learn and play presets.
     */
    public async getAllPresets(): Promise<LearnPlayPresets> {
        return this.repository.getAllPresets().then((response: Presets) => {
            return { learn: response.learn, play: response.play };
        }).catch(response => {
            return { learn: [], play: [], error: response.error };
        });
    }

    /**
     * Retrieves a list of all favourite presets.
     * @return Favourite learn and play presets.
     */
    public async getFavouritePresets(): Promise<LearnPlayPresets> {
        return this.repository.getFavouritePresets().then((response: Presets) => {
            return { learn: response.learn, play: response.play, error: response.error };
        }).catch(response => {
            return { learn: [], play: [], error: response.error ?? response };
        });
    }

    /**
     * Removes the given preset from the users favourites.
     * @param preset The preset to remove.
     */
    public async removeFavouritePreset(preset: SessionMode): Promise<UpdateResponse> {
        return this.repository.deleteFavouritePreset(preset.id).then(response => {
            return { success: response.success, error: response.error };
        });
    }
}

export default PresetService;
