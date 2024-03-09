import { http, HttpResponse, RequestHandler } from "msw";
import { useGetGenkiVocabResponses } from "api/hooks/genki/useGetGenkiVocab/useGetGenkiVocab.responses.ts";

export const useGetGenkiVocabHandlers: RequestHandler[] = [
  http.get('*/genki/all', () => {
    return HttpResponse.json(useGetGenkiVocabResponses)
  })
]

export const useGetEmptyGenkiVocabHandlers: RequestHandler[] = [
  http.get('*/genki/all', () => {
    return HttpResponse.json([])
  })
]