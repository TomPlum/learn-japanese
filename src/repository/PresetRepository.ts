import RestClient from "../rest/RestClient";
import LearnMode from "../domain/session/LearnMode";
import DataSettingsConverter from "../converter/DataSettingsConverter";
import Topic from "../domain/Topic";
import LearnSettings from "../domain/session/settings/LearnSettings";
import GameSettingsConverter from "../converter/GameSettingsConverter";
import PlayMode from "../domain/session/PlayMode";
import UpdateResponse from "../rest/response/UpdateResponse";
import PresetConverter from "../converter/PresetConverter";

export interface PresetRequest {
    name: string;
    icon: string;
    colour: string;
    topic: string;
    data: DataSettingsRequest;
}

export interface LearnPresetRequest extends PresetRequest {
    // Doesn't current expose anything else
}

export interface PlayPresetRequest extends PresetRequest {
    game: GameConfigRequest;
}

export interface DataSettingsRequest {
    quantity: number | undefined;
    config: DataConfigRequest;
}

export interface DataConfigRequest {}

export interface GameConfigRequest {
    hints: HintConfigRequest;
    lives: LivesConfigRequest;
    time: TimeConfigRequest;
    question: QuestionConfigRequest;
}

export interface HintConfigRequest {
    enabled: boolean;
    quantity: number;
    unlimited: boolean;
}

export interface LivesConfigRequest {
    enabled: boolean;
    quantity: number;
}

export interface TimeConfigRequest {
    timed: boolean;
    countdown: boolean;
    secondsPerQuestion: number | undefined;
}

interface QuestionConfigRequest {
    questionField: string;
    answerField: string;
    type: string;
    cards: number,
    quantity: number,
    score: boolean,
    answerFilter: number | undefined
}

export interface KanaDataSettingsRequest extends DataConfigRequest {
    hiragana: boolean;
    katakana: boolean;
    diagraphs: boolean;
    diacriticals: boolean;
    regular: boolean;
    onlyDiagraphs: boolean;
}

export interface KanjiDataSettingsRequest extends DataConfigRequest {
    grades: number[];
    tags: string[];
}

export interface NumbersDataSettingsRequest extends DataConfigRequest {
    numbers: boolean;
    counters: boolean;
    age: boolean;
    exceptions: boolean;
    units: boolean;
    sequence: boolean;
}

export interface SentenceStructureDataSettingsRequest extends DataConfigRequest {
    adverbs: boolean;
    particles: boolean;
    expressions: boolean;
    verbs: boolean;
    nouns: boolean;
    adjectives: boolean;
}

export interface CalenderDataSettingsRequest extends DataConfigRequest {
    days: boolean;
    months: boolean;
    seasons: boolean;
    nouns: boolean;
    phrases: boolean;
}

export interface BasicsDataSettingsRequest extends DataConfigRequest {
    colours: boolean;
    animals: boolean;
    directions: boolean;
    weather: boolean;
    family: boolean;
    body: boolean;
}

interface PresetResponse {
    id: number;
    name: string;
    icon: string;
    colour: string;
    topic: string;
    data: DataSettingsResponse;
}

interface FavouritePresetResponse<T extends PresetResponse> {
    id: number;
    preset: T;
}

export interface FavouriteLearnPresetResponse extends FavouritePresetResponse<LearnPresetResponse> {
    // Doesn't currently expose anything else
}

export interface FavouritePlayPresetResponse extends FavouritePresetResponse<PlayPresetResponse> {

}

export interface LearnPresetResponse extends PresetResponse {
    // Doesn't currently expose anything else
}

export interface PlayPresetResponse extends PresetResponse {
    game: GameConfigResponse;
}

export interface GameConfigResponse {
    hints: HintConfigResponse;
    lives: LivesConfigResponse;
    time: TimeConfigResponse;
    question: QuestionConfigResponse;
}

export interface HintConfigResponse {
    enabled: boolean;
    quantity: number;
    unlimited: boolean;
}

export interface LivesConfigResponse {
    enabled: boolean;
    quantity: number;
}

export interface TimeConfigResponse {
    timed: boolean;
    countdown: boolean;
    secondsPerQuestion: number | undefined;
}

interface QuestionConfigResponse {
    questionField: string;
    answerField: string;
    type: string;
    cards: number,
    quantity: number,
    score: boolean,
    answerFilter: number | undefined
}

export interface DataSettingsResponse {
    quantity: number | undefined;
    config: DataConfigResponse;
}

export interface DataConfigResponse {}

export interface KanaDataSettingsResponse extends DataConfigResponse {
    hiragana: boolean;
    katakana: boolean;
    diagraphs: boolean;
    diacriticals: boolean;
    regular: boolean;
    onlyDiagraphs: boolean;
}

export interface KanjiDataSettingsResponse extends DataConfigResponse {
    grades: number[];
    tags: string[];
}

export interface NumbersDataSettingsResponse extends DataConfigResponse {
    numbers: boolean;
    counters: boolean;
    age: boolean;
    exceptions: boolean;
    units: boolean;
    sequence: boolean;
}

export interface SentenceStructureDataSettingsResponse extends DataConfigResponse {
    adverbs: boolean;
    particles: boolean;
    expressions: boolean;
    verbs: boolean;
    nouns: boolean;
    adjectives: boolean;
}

export interface CalenderDataSettingsResponse extends DataConfigResponse {
    days: boolean;
    months: boolean;
    seasons: boolean;
    nouns: boolean;
    phrases: boolean;
}

export interface BasicsDataSettingsResponse extends DataConfigResponse {
    colours: boolean;
    animals: boolean;
    directions: boolean;
    weather: boolean;
    family: boolean;
    body: boolean;
}

interface PresetsResponse {
    learn: LearnPresetResponse[];
    play: PlayPresetResponse[];
}

interface FavouritePresetsResponse {
    learn: FavouriteLearnPresetResponse[];
    play: FavouritePlayPresetResponse[];
}

export interface Presets {
    learn: LearnMode[];
    play: PlayMode[];
    error?: string;
}

class PresetRepository {

    private readonly presetConverter = new PresetConverter();
    private readonly dataSettingsConverter = new DataSettingsConverter();
    private readonly gameSettingsConverter = new GameSettingsConverter();

    /**
     * Saves a custom play preset for the current user.
     * @param preset The custom preset.
     */
    public async savePlayPreset(preset: PlayMode): Promise<UpdateResponse> {
        const request = this.presetConverter.convertRequest(preset);
        return RestClient.post("/presets/custom/play/save", request).then(() => {
            return { success: true };
        }).catch(response => {
            return { success: false, error: response.error };
        });
    }

    /**
     * Saves a custom learn preset for the current user.
     * @param preset The custom preset.
     */
    public async saveLearnPreset(preset: LearnMode): Promise<UpdateResponse> {
        const request = this.presetConverter.convertRequest(preset);
        return RestClient.post("/presets/custom/learn/save", request).then(() => {
            return { success: true };
        }).catch(response => {
            return { success: false, error: response.error };
        });
    }

    /**
     * Retrieves a list of all presets from the API.
     * Includes play, learn, and custom.
     * @return A list of learn and play presets.
     */
    public async getAllPresets(): Promise<Presets> {
        return RestClient.get<PresetsResponse>("/presets/all").then(response => {
            const data = response.data;
            if (data) {
                const learn = this.convertLearnPresets(data.learn);
                const play = this.convertPlayPresets(data.play);
                return { learn: learn, play: play };
            } else {
                return Promise.reject("Failed to retrieve presets.");
            }
        }).catch(response => {
            return { learn: [], play: [], error: response.error ?? response };
        });
    }

    /**
     * Retrieves a list of learn and play presets
     * that have been favourite by the current user.
     * @return an array of favourite presets.
     */
    public async getFavouritePresets(): Promise<Presets> {
        return RestClient.get<FavouritePresetsResponse>("/presets/favourites").then(response => {
            const data = response.data;
            if (data) {
                const learn = this.convertFavouriteLearnPresets(data.learn);
                const play = this.convertFavouritePlayPresets(data.play);
                return { learn: learn, play: play };
            } else {
                return Promise.reject("Failed to retrieve favourites.");
            }
        }).catch(response => {
            return { learn: [], play: [], error: response.error ?? response };
        });
    }

    /**
     * Removes the play preset with the given ID from the users' favourites.
     * @param id The ID of the preset to remove.
     */
    public async deleteFavouritePlayPreset(id: number): Promise<UpdateResponse> {
        return RestClient.delete(`/presets/favourites/play/delete?=${id}`).then(() => {
            return { success: true };
        }).catch(error => {
            return { success: false, error: error };
        });
    }

    /**
     * Removes the learn preset with the given ID from the users' favourites.
     * @param id The ID of the preset to remove.
     */
    public async deleteFavouriteLearnPreset(id: number): Promise<UpdateResponse> {
        return RestClient.delete(`/presets/favourites/learn/delete?=${id}`).then(() => {
            return { success: true };
        }).catch(error => {
            return { success: false, error: error };
        });
    }

    private convertFavouriteLearnPresets(data: FavouriteLearnPresetResponse[]): LearnMode[] {
        return data.map((favourite: FavouriteLearnPresetResponse) => {
            const preset = favourite.preset;
            const topic = Topic.fromName(preset.topic);
            const dataSettings = this.dataSettingsConverter.convert(topic, preset.data);
            return new LearnMode(preset.id, preset.name, preset.colour, preset.icon, dataSettings, new LearnSettings(), undefined, false, favourite.id);
        });
    }

    private convertFavouritePlayPresets(data: FavouritePlayPresetResponse[]): LearnMode[] {
        return data.map((favourite: FavouritePlayPresetResponse) => {
            const preset = favourite.preset;
            const topic = Topic.fromName(preset.topic);
            const dataSettings = this.dataSettingsConverter.convert(topic, preset.data);
            const gameSettings = this.gameSettingsConverter.convert(preset.game);
            return new PlayMode(preset.id, preset.name, preset.colour, preset.icon, dataSettings, gameSettings, undefined, false, favourite.id);
        });
    }

    //TODO: Move these to the PresetConverter class
    private convertLearnPresets(data: LearnPresetResponse[]): LearnMode[] {
        return data.map((preset: LearnPresetResponse) => {
            const topic = Topic.fromName(preset.topic);
            const dataSettings = this.dataSettingsConverter.convert(topic, preset.data);
            return new LearnMode(preset.id, preset.name, preset.colour, preset.icon, dataSettings, new LearnSettings(), undefined, false);
        });
    }

    private convertPlayPresets(data: PlayPresetResponse[]): PlayMode[] {
        return data.map((preset: PlayPresetResponse) => {
            const topic = Topic.fromName(preset.topic);
            const dataSettings = this.dataSettingsConverter.convert(topic, preset.data);
            const gameSettings = this.gameSettingsConverter.convert(preset.game);
            return new PlayMode(preset.id, preset.name, preset.colour, preset.icon, dataSettings, gameSettings, undefined, false);
        });
    }
}

export default PresetRepository;
