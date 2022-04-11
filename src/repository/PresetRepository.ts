import SessionMode from "../domain/session/SessionMode";
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

class PresetRepository {

    private readonly dataSettingsConverter = new DataSettingsConverter();
    private readonly gameSettingsConverter = new GameSettingsConverter();

    public getAllPresets(): Promise<SessionMode[]> {
        return RestClient.get<PresetsResponse>("/presets/all").then(response => {
            const data = response.data;
            if (data) {
                const learn = data.learn.map((preset: LearnPresetResponse) => {
                    const topic = Topic.fromName(preset.topic);
                    const dataSettings = this.dataSettingsConverter.convert(topic, preset.data);
                    return new LearnMode(preset.name, preset.colour, preset.icon, dataSettings, new LearnSettings(), undefined, false);
                });
                const play = data.play.map((preset: PlayPresetResponse) => {
                    const topic = Topic.fromName(preset.topic);
                    const dataSettings = this.dataSettingsConverter.convert(topic, preset.data);
                    const gameSettings = this.gameSettingsConverter.convert(preset.game);
                    return new PlayMode(preset.name, preset.colour, preset.icon, dataSettings, gameSettings, undefined, false);
                });

                return learn.concat(play);
            } else {
                return [];
            }
        });
    }
}

export default PresetRepository;
