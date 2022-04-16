import RestClient from "../rest/RestClient";
import LearnMode from "../domain/session/LearnMode";
import DataSettingsConverter from "../converter/DataSettingsConverter";
import Topic from "../domain/Topic";
import LearnSettings from "../domain/session/settings/LearnSettings";
import GameSettingsConverter from "../converter/GameSettingsConverter";
import PlayMode from "../domain/session/PlayMode";

interface PresetResponse {
    id: number;
    name: string;
    icon: string;
    colour: string;
    topic: string;
    data: DataSettingsResponse;
}

export interface LearnPresetResponse extends PresetResponse {

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

export interface Presets {
    learn: LearnMode[];
    play: PlayMode[];
}

class PresetRepository {

    private readonly dataSettingsConverter = new DataSettingsConverter();
    private readonly gameSettingsConverter = new GameSettingsConverter();

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
                return { learn: [], play: [] };
            }
        }).catch(response => {
            return { learn: [], play: [], error: response.error };
        });
    }

    /**
     * Retrieves a list of learn and play presets
     * that have been favourite by the current user.
     * @return an array of favourite presets.
     */
    public async getFavouritePresets(): Promise<Presets> {
        return RestClient.get<PresetsResponse>("/presets/favourites").then(response => {
            const data = response.data;
            if (data) {
                const learn = this.convertLearnPresets(data.learn);
                const play = this.convertPlayPresets(data.play);
                return { learn: learn, play: play };
            } else {
                return { learn: [], play: [] };
            }
        }).catch(response => {
            return { learn: [], play: [], error: response.error ?? response };
        });
    }

    private convertLearnPresets(data: LearnPresetResponse[]): LearnMode[] {
        return data.map((preset: LearnPresetResponse) => {
            const topic = Topic.fromName(preset.topic);
            const dataSettings = this.dataSettingsConverter.convert(topic, preset.data);
            return new LearnMode(preset.name, preset.colour, preset.icon, dataSettings, new LearnSettings(), undefined, false);
        });
    }

    private convertPlayPresets(data: PlayPresetResponse[]): PlayMode[] {
        return data.map((preset: PlayPresetResponse) => {
            const topic = Topic.fromName(preset.topic);
            const dataSettings = this.dataSettingsConverter.convert(topic, preset.data);
            const gameSettings = this.gameSettingsConverter.convert(preset.game);
            return new PlayMode(preset.name, preset.colour, preset.icon, dataSettings, gameSettings, undefined, false);
        });
    }
}

export default PresetRepository;
