import { http, HttpResponse, RequestHandler } from "msw";
import { useGetRandomKanjiResponses } from "api/hooks/kanji/useGetRandomKanji/useGetRandomKanji.responses.ts";

export const useGetRandomKanjiHandlers: RequestHandler[] = [
  http.get('*/kanji/random', () => {
    return HttpResponse.json(useGetRandomKanjiResponses)
  })
]