import { http, HttpResponse, RequestHandler } from "msw";
import { useGetKanjiPageResponses } from "api/hooks/kanji/useGetKanjiPage/useGetKanjiPage.responses.ts";

export const useGetKanjiPageHandlers: RequestHandler[] = [
  http.post('*/kanji/by-grade', () => {
    return HttpResponse.json(useGetKanjiPageResponses)
  })
]