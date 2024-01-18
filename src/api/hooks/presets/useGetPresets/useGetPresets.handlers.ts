import { http, HttpResponse, RequestHandler } from "msw";
import {
  useGetPresetsResponses, useGetPresetsResponsesEmpty,
  useGetPresetsResponsesLearnOnly, useGetPresetsResponsesPlayOnly
} from "api/hooks/presets/useGetPresets/useGetPresets.responses.ts";

export const useGetPresetsHandlers: RequestHandler[] = [
  http.get('*/presets/all', () => {
    return HttpResponse.json(useGetPresetsResponses)
  })
]

export const useGetPresetsHandlersError: RequestHandler[] = [
  http.get('*/presets/all', () => {
    return HttpResponse.error()
  })
]

export const useGetPresetsHandlersLearnOnly: RequestHandler[] = [
  http.get('*/presets/all', () => {
    return HttpResponse.json(useGetPresetsResponsesLearnOnly)
  })
]

export const useGetPresetsHandlersPlayOnly: RequestHandler[] = [
  http.get('*/presets/all', () => {
    return HttpResponse.json(useGetPresetsResponsesPlayOnly)
  })
]

export const useGetPresetsHandlersEmpty: RequestHandler[] = [
  http.get('*/presets/all', () => {
    return HttpResponse.json(useGetPresetsResponsesEmpty)
  })
]