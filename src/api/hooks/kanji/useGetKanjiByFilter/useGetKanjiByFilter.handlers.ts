import { http, HttpResponse, RequestHandler } from "msw";
import { useGetKanjiByFilterResponses } from "api/hooks/kanji/useGetKanjiByFilter/useGetKanjiByFilter.responses.ts";
import { KanjiSearchResponseModel } from "api/hooks/kanji/useGetKanjiByFilter/types.ts";

export const useGetKanjiByFilterHandlers: RequestHandler[] = [
  http.post('*/kanji/by-filter', () => {
    return HttpResponse.json(useGetKanjiByFilterResponses)
  })
]

export const useGetCustomKanjiByFilterHandlers = (response: KanjiSearchResponseModel): RequestHandler[] => {
  return [
    http.post('*/kanji/by-filter', () => {
      return HttpResponse.json(response)
    })
  ]
}