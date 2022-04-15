import PresetRepository, { Presets } from "../repository/PresetRepository";
import LearnMode from "../domain/session/LearnMode";
import PlayMode from "../domain/session/PlayMode";

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
    public getAllPresets(): Promise<LearnPlayPresets> {
        return this.repository.getAllPresets().then((response: Presets) => {
            return { learn: response.learn, play: response.play };
        }).catch(response => {
            return { learn: [], play: [], error: response.error };
        });
    }
}

export default PresetService;
