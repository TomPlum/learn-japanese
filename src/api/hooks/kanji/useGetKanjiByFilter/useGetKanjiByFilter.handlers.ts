import { http, HttpResponse, RequestHandler } from "msw";
import { useGetKanjiByFilterResponses } from "api/hooks/kanji/useGetKanjiByFilter/useGetKanjiByFilter.responses.ts";

export const useGetKanjiByFilterHandlers: RequestHandler[] = [
  http.post('*/kanji/by-filter', () => {
    return HttpResponse.json(useGetKanjiByFilterResponses)
  })
]