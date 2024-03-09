import { http, HttpResponse, RequestHandler } from "msw";
import { useGetRandomKanjiResponses } from "api/hooks/kanji/useGetRandomKanji/useGetRandomKanji.responses.ts";
import { KanjiResponseModel } from "api/hooks/kanji/types.ts";

export const useGetRandomKanjiHandlers: RequestHandler[] = [
  http.get('*/kanji/random', () => {
    return HttpResponse.json(useGetRandomKanjiResponses)
  })
]

export const useGetRandomKanjiErrorHandlers: RequestHandler[] = [
  http.get('*/kanji/random', () => {
    return HttpResponse.error()
  })
]

export const useGetCustomRandomKanjiHandlers = (response: KanjiResponseModel): RequestHandler[] => [
  http.get('*/kanji/random', () => {
    return HttpResponse.json(response)
  })
]