import { http, HttpResponse, RequestHandler } from "msw";
import {
  useGetKanjiByCharacterResponses
} from "api/hooks/kanji/useGetKanjiByCharacter/useGetKanjiByCharacter.responses.ts";

export const useGetKanjiByCharacterHandlers: RequestHandler[] = [
  http.get('*/kanji/by-character/*', () => {
    return HttpResponse.json(useGetKanjiByCharacterResponses)
  })
]