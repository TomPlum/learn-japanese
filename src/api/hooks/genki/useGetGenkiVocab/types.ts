import GenkiDefinition from "types/learn/GenkiDefinition.ts";

export interface GenkiDefinitions {
  definitions?: GenkiDefinition[]
  error?: string
}

export interface GenkiResponseData {
  lesson: number
  meaning: string
  kana: string
  kanji?: string
}