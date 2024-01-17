import { http, HttpResponse, RequestHandler } from "msw";
import {
  useGetDefaultPresetsResponses,
  useGetDefaultPresetsResponsesLearnOnly, useGetDefaultPresetsResponsesPlayOnly
} from "api/hooks/useGetDefaultPresets/useGetDefaultPresets.responses.ts";

export const useGetDefaultPresetsHandlers: RequestHandler[] = [
  http.get('*/presets/default', () => {
    return HttpResponse.json(useGetDefaultPresetsResponses)
  })
]

export const useGetDefaultPresetsHandlersError: RequestHandler[] = [
  http.get('*/presets/default', () => {
    return HttpResponse.error()
  })
]

export const useGetDefaultPresetsHandlersLearnOnly: RequestHandler[] = [
  http.get('*/presets/default', () => {
    return HttpResponse.json(useGetDefaultPresetsResponsesLearnOnly)
  })
]

export const useGetDefaultPresetsHandlersPlayOnly: RequestHandler[] = [
  http.get('*/presets/default', () => {
    return HttpResponse.json(useGetDefaultPresetsResponsesPlayOnly)
  })
]