import { PaginationRequest } from "rest/request/PaginationRequest.ts";

export interface GetKanjiByTermArgs {
  search: string
  pagination: PaginationRequest
}