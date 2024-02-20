import KanjiSettings from "types/session/settings/data/KanjiSettings.ts";
import { PaginationRequest } from "rest/request/PaginationRequest.ts";
import { KanjiResponseModel } from "repository/KanjiRepository.ts";
import { Learnable } from "types/learn/Learnable.ts";

export interface GetKanjiPageArgs {
  settings: KanjiSettings,
  pagination: PaginationRequest
}

export interface KanjiByGradeRequest {
  grades: number[]
  quantity?: number
  paging: PaginationRequest
}

export interface PagedKanjiResponseModel {
  results: KanjiResponseModel[]
  pages: number
  total: number
}

export interface Paged<T extends Learnable> {
  results: T[]
  pages: number
  quantity: number
}