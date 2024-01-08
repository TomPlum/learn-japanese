import LearnMode from "domain/session/LearnMode.ts"
import PlayMode from "domain/session/PlayMode.ts"
import DataSettings from "domain/session/settings/data/DataSettings.ts"
import LearnSettings from "domain/session/settings/LearnSettings.ts"
import GameSettings from "domain/session/settings/game/GameSettings.ts"

export interface SessionSettingsContextProviderProps {
  gameSettings?: GameSettings
  dataSettings?: DataSettings
  lastPlayPreset?: PlayMode
  lastLearnPreset?: LearnMode
}

export interface SessionSettingsBag {
  preset?: number;

  setPreset: (id: number) => void
  gameSettings?: GameSettings
  setGameSettings: (settings?: GameSettings) => void

  learnSettings?: LearnSettings
  setLearnSettings: (settings?: LearnSettings) => void

  dataSettings?: DataSettings
  setDataSettings: (settings?: DataSettings) => void

  lastPlaySession?: SessionSettingsState
  setLastPlaySession: (settings: PlayMode) => void

  lastLearnSession?: SessionSettingsState
  setLastLearnSession: (settings: LearnMode) => void
}

export interface SessionSettingsState {
  isPreset: boolean
  topic?: string
  id?: number
  name?: string
  icon?: string
  colour?: string
  game?: GameSettingState
  data: DataSettingsState
}

export interface GameSettingState {
  hints: {
    enabled: boolean
    quantity: number
    unlimited: boolean
  }
  lives: {
    enabled: boolean
    quantity: number
  }
  time: {
    timed: boolean
    countdown: boolean
    secondsPerQuestion: number
  }
  question: {
    questionField: string
    answerField: string
    type: string
    cards: number
    quantity: number
    score: boolean
    answerFilter: number
  }
}

export interface DataSettingsState {
  topic: string
  quantity?: number
}

export interface KanaDataSettingsState extends DataSettingsState {
  hiragana: boolean
  katakana: boolean
  diagraphs: boolean
  diacriticals: boolean
  regular: boolean
  onlyDiagraphs: boolean
}

export interface KanjiDataSettingsState extends DataSettingsState {
  grades: number[]
  tags: string[]
}

export interface NumbersDataSettingsState extends DataSettingsState {
  numbers: boolean
  counters: boolean
  age: boolean
  exceptions: boolean
  units: boolean
  sequence: boolean
}

export interface SentenceStructureDataSettingsState extends DataSettingsState {
  adverbs: boolean
  particles: boolean
  expressions: boolean
  verbs: boolean
  nouns: boolean
  adjectives: boolean
}

export interface CalenderDataSettingsState extends DataSettingsState {
  days: boolean
  months: boolean
  seasons: boolean
  nouns: boolean
  phrases: boolean
}

export interface BasicsDataSettingsState extends DataSettingsState {
  colours: boolean
  animals: boolean
  directions: boolean
  weather: boolean
  family: boolean
  body: boolean
}