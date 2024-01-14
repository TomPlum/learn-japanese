import RestClient from "../rest/RestClient"
import LearnMode from "types/session/LearnMode"
import DataSettingsConverter from "../converter/DataSettingsConverter"
import Topic from "types/Topic"
import LearnSettings from "types/session/settings/LearnSettings"
import GameSettingsConverter from "../converter/GameSettingsConverter"
import PlayMode from "types/session/PlayMode"
import UpdateResponse from "../rest/response/UpdateResponse"
import PresetConverter from "../converter/PresetConverter"
import { SessionSettings } from "types/session/settings/SessionSettings"
import { CustomIcon } from "types/Icon"
import PresetBuilder from "types/session/PresetBuilder"

export interface PresetRequest {
  name: string
  icon: string
  colour: string
  topic: string
  data: DataSettingsRequest
}

export type LearnPresetRequest = PresetRequest

export interface PlayPresetRequest extends PresetRequest {
  game: GameConfigRequest
}

export interface DataSettingsRequest {
  quantity: number | undefined
  config: DataConfigRequest
}

export interface DataConfigRequest {}

export interface GameConfigRequest {
  hints: HintConfigRequest
  lives: LivesConfigRequest
  time: TimeConfigRequest
  question: QuestionConfigRequest
}

export interface HintConfigRequest {
  enabled: boolean
  quantity: number
  unlimited: boolean
}

export interface LivesConfigRequest {
  enabled: boolean
  quantity: number
}

export interface TimeConfigRequest {
  timed: boolean
  countdown: boolean
  secondsPerQuestion: number | undefined
}

interface QuestionConfigRequest {
  questionField: string
  answerField: string
  type: string
  cards: number
  quantity: number
  score: boolean
  answerFilter: number | undefined
}

export interface KanaDataSettingsRequest extends DataConfigRequest {
  hiragana: boolean
  katakana: boolean
  diagraphs: boolean
  diacriticals: boolean
  regular: boolean
  onlyDiagraphs: boolean
}

export interface KanjiDataSettingsRequest extends DataConfigRequest {
  grades: number[]
  tags: string[]
}

export interface NumbersDataSettingsRequest extends DataConfigRequest {
  numbers: boolean
  counters: boolean
  age: boolean
  exceptions: boolean
  units: boolean
  sequence: boolean
}

export interface SentenceStructureDataSettingsRequest extends DataConfigRequest {
  adverbs: boolean
  particles: boolean
  expressions: boolean
  verbs: boolean
  nouns: boolean
  adjectives: boolean
}

export interface CalenderDataSettingsRequest extends DataConfigRequest {
  days: boolean
  months: boolean
  seasons: boolean
  nouns: boolean
  phrases: boolean
}

export interface BasicsDataSettingsRequest extends DataConfigRequest {
  colours: boolean
  animals: boolean
  directions: boolean
  weather: boolean
  family: boolean
  body: boolean
}

export interface PresetResponse {
  id: number
  name: string
  description: string
  icon: string
  colour: string
  topic: string
  data: DataSettingsResponse
}

export type LearnPresetResponse = PresetResponse

export interface PlayPresetResponse extends PresetResponse {
  game: GameConfigResponse
}

export interface GameConfigResponse {
  hints: HintConfigResponse
  lives: LivesConfigResponse
  time: TimeConfigResponse
  question: QuestionConfigResponse
}

export interface HintConfigResponse {
  enabled: boolean
  quantity: number
  unlimited: boolean
}

export interface LivesConfigResponse {
  enabled: boolean
  quantity: number
}

export interface TimeConfigResponse {
  timed: boolean
  countdown: boolean
  secondsPerQuestion: number | undefined
}

interface QuestionConfigResponse {
  questionField: string
  answerField: string
  type: string
  cards: number
  quantity: number
  score: boolean
  answerFilter: number | undefined
}

export interface DataSettingsResponse {
  quantity: number | undefined
  config: DataConfigResponse
}

export interface DataConfigResponse {}

export interface KanaDataSettingsResponse extends DataConfigResponse {
  hiragana: boolean
  katakana: boolean
  diagraphs: boolean
  diacriticals: boolean
  regular: boolean
  onlyDiagraphs: boolean
}

export interface KanjiDataSettingsResponse extends DataConfigResponse {
  grades: number[]
  tags: string[]
}

export interface NumbersDataSettingsResponse extends DataConfigResponse {
  numbers: boolean
  counters: boolean
  age: boolean
  exceptions: boolean
  units: boolean
  sequence: boolean
}

export interface SentenceStructureDataSettingsResponse extends DataConfigResponse {
  adverbs: boolean
  particles: boolean
  expressions: boolean
  verbs: boolean
  nouns: boolean
  adjectives: boolean
}

export interface CalenderDataSettingsResponse extends DataConfigResponse {
  days: boolean
  months: boolean
  seasons: boolean
  nouns: boolean
  phrases: boolean
}

export interface BasicsDataSettingsResponse extends DataConfigResponse {
  colours: boolean
  animals: boolean
  directions: boolean
  weather: boolean
  family: boolean
  body: boolean
}

interface PresetsResponse {
  learn: LearnPresetResponse[]
  play: PlayPresetResponse[]
}

export interface Presets {
  learn: LearnMode[]
  play: PlayMode[]
}

export interface CustomPresetDetails {
  name: string
  icon: CustomIcon
  colour: string
  settings: SessionSettings
}

class PresetRepository {
  private readonly presetConverter = new PresetConverter()
  private readonly dataSettingsConverter = new DataSettingsConverter()
  private readonly gameSettingsConverter = new GameSettingsConverter()

  /**
   * Saves a custom play preset for the current user.
   * @param details The custom preset settings.
   */
  public async savePlayPreset(details: CustomPresetDetails): Promise<UpdateResponse> {
    const request = this.presetConverter.convertRequest(details)
    return RestClient.post<PresetRequest>("/presets/custom/play/save", request)
      .then(() => {
        return { success: true }
      })
      .catch((response) => {
        return { success: false, error: response.error }
      })
  }

  /**
   * Saves a custom learn preset for the current user.
   * @param details The custom preset.
   */
  public async saveLearnPreset(details: CustomPresetDetails): Promise<UpdateResponse> {
    const request = this.presetConverter.convertRequest(details)
    return RestClient.post("/presets/custom/learn/save", request)
      .then(() => {
        return { success: true }
      })
      .catch((response) => {
        return { success: false, error: response.error }
      })
  }

  /**
   * Retrieves a list of all presets from the API.
   * Includes play, learn, and custom.
   * @return A list of learn and play presets.
   */
  public async getAllPresets(): Promise<Presets> {
    return RestClient.get<PresetsResponse>("/presets/all")
      .then((response) => {
        const data = response.data
        if (data) {
          const learn = this.convertLearnPresets(data.learn)
          const play = this.convertPlayPresets(data.play)
          return { learn: learn, play: play }
        } else {
          return Promise.reject({ error: "Failed to retrieve presets." })
        }
      })
      .catch((response) => {
        return { learn: [], play: [], error: response.error ?? "Failed to retrieve presets." }
      })
  }

  /**
   * Retrieves a list of all default presets from the API.
   * Default presets are ones defined by the application and so
   * are not custom created by a user.
   * @return A list of all default learn and play presets.
   */
  public async getDefaultPresets(): Promise<Presets> {
    return RestClient.get<PresetsResponse>("/presets/default")
      .then((response) => {
        const data = response.data
        if (data) {
          const learn = this.convertLearnPresets(data.learn)
          const play = this.convertPlayPresets(data.play)
          return { learn: learn, play: play }
        } else {
          return Promise.reject({ error: "Failed to retrieve presets." })
        }
      })
      .catch((response) => {
        return { learn: [], play: [], error: response.error ?? "Failed to retrieve presets." }
      })
  }

  /**
   * Removes the favourite with the given ID from the users' favourites.
   * @param id The ID of the preset to remove.
   */
  public async deleteFavouritePreset(id: number): Promise<UpdateResponse> {
    return RestClient.delete(`/presets/favourites/delete?=${id}`)
      .then(() => {
        return { success: true }
      })
      .catch((error) => {
        return { success: false, error: error }
      })
  }

  /**
   * Updates the users' favourites with the given additions and removals.
   * @param add Preset IDs to add to favourites.
   * @param remove Favourite IDs to remove.
   */
  public async updateFavouritePresets(add: number[], remove: number[]): Promise<UpdateResponse> {
    return RestClient.patch("/presets/favourites/update", { add: add, remove: remove })
      .then(() => {
        return { success: true }
      })
      .catch((response) => {
        return { success: false, error: response.error ?? response }
      })
  }

  //TODO: Move these to the PresetConverter class
  private convertLearnPresets(data: LearnPresetResponse[]): LearnMode[] {
    return data.map((preset: LearnPresetResponse) => {
      const topic = Topic.fromName(preset.topic)
      const dataSettings = this.dataSettingsConverter.convert(topic, preset.data)

      return new PresetBuilder()
        .withID(preset.id)
        .withDisplayName(preset.name)
        .withDescription(preset.description)
        .withColour(preset.colour)
        .withIcon(preset.icon)
        .withDataSettings(dataSettings)
        .withLearnSettings(new LearnSettings())
        .withTopicName(preset.topic)
        .build()
    })
  }

  private convertPlayPresets(data: PlayPresetResponse[]): PlayMode[] {
    return data.map((preset: PlayPresetResponse) => {
      const topic = Topic.fromName(preset.topic)
      const dataSettings = this.dataSettingsConverter.convert(topic, preset.data)
      const gameSettings = this.gameSettingsConverter.convert(preset.game)

      return new PresetBuilder()
        .withID(preset.id)
        .withDisplayName(preset.name)
        .withDescription(preset.description)
        .withColour(preset.colour)
        .withIcon(preset.icon)
        .withDataSettings(dataSettings)
        .withGameSettings(gameSettings)
        .withTopicName(preset.topic)
        .build()
    })
  }
}

export default PresetRepository
