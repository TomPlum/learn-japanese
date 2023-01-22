import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import DataSettings from "../domain/session/settings/data/DataSettings"
import DataSettingsConverter from "../converter/DataSettingsConverter"

export interface DataConfigState<T extends DataSettingsState> {
  settings?: T
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

const initialState: DataConfigState<any> = {
  settings: undefined
}

export const dataConfigState = createSlice({
  name: "data-config",
  initialState,
  reducers: {
    setDataSettings: (state, action: PayloadAction<DataSettings>) => {
      state.settings = new DataSettingsConverter().serialise(action.payload)
    },
    clearDataSettings: (state) => {
      state.settings = undefined
    }
  }
})

export const { setDataSettings, clearDataSettings } = dataConfigState.actions
export default dataConfigState.reducer
