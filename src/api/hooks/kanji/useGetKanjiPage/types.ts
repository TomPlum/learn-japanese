import { PaginationRequest } from "rest/request/PaginationRequest.ts";
import { KanjiResponseModel } from "repository/KanjiRepository.ts";
import { Learnable } from "types/learn/Learnable.ts";
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts";

export interface GetKanjiPageArgs {
  grades?: KyoikuGrade[],
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