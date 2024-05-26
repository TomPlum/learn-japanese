import { CustomIcon } from "types/Icon.ts";
import LearnMode from "types/session/LearnMode.ts";
import PlayMode from "types/session/PlayMode.ts";
import { SessionSettings } from "types/session/settings/SessionSettings.ts";

export interface CustomPresetMeta {
  name: string
  icon: CustomIcon
  colour: string
}

export interface PresetRequest {
  name: string
  icon: string
  colour: string
  description: string
  topic: string
  data: DataSettingsRequest
}

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

export interface DataSettingsRequest {
  quantity: number | undefined
  config: DataConfigRequest
}

export interface DataConfigRequest {}

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

export interface PresetsResponse {
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