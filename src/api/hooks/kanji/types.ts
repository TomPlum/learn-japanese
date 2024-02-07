import { ExampleResponseModel, ReadingResponseModel } from "repository/KanjiRepository.ts";
import { Kanji } from "types/kanji/Kanji.ts";

export interface KanjiResponseModel {
  character: string
  grade?: number
  strokes?: number
  jlpt?: number
  source?: string
  meanings: string[]
  readings: ReadingResponseModel[]
  examples: ExampleResponseModel[]
  tags: string[]
}

export interface KanjiResult {
  value: Kanji
  field?: string
}