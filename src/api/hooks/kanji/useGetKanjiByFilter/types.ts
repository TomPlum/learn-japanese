import { Kanji } from "types/kanji/Kanji.ts";
import { PaginationRequest } from "rest/request/PaginationRequest.ts";
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts";
import JLTPLevel from "types/learn/JLTPLevel.ts";
import { KanjiResponseModel } from "repository/KanjiRepository.ts";

export interface KanjiSearchResults {
  results: { field: string; value: Kanji }[]
  pages: number
  quantity: number
  error?: string
}

export interface KanjiByFilterProps {
  search?: string
  grades?: KyoikuGrade[]
  levels?: JLTPLevel[]
  strokes?: number
  paging: PaginationRequest
}

export interface KanjiByFilterRequest {
  search?: string
  grades?: number[]
  levels?: number[]
  strokes?: number
  paging: PaginationRequest
}

export interface KanjiSearchResponseModel {
  results: { field: string; value: KanjiResponseModel }[]
  pages: number
  total: number
}