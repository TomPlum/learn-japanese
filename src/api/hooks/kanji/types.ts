import { ExampleResponseModel, ReadingResponseModel } from "repository/KanjiRepository.ts";

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