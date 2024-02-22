import { http, HttpResponse, RequestHandler } from "msw";
import { useGetKanjiByTermResponses } from "api/hooks/kanji/useGetKanjiByTerm/useGetKanjiByTerm.responses.ts";

export const useGetKanjiByTermHandlers: RequestHandler[] = [
  http.post('*/kanji/by-term/*', () => {
    return HttpResponse.json(useGetKanjiByTermResponses)
  })
]