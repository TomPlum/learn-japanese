import { http, HttpResponse, RequestHandler } from "msw";
import {
  useGetDefaultPresetsResponses,
  useGetDefaultPresetsResponsesEmpty,
  useGetDefaultPresetsResponsesLearnOnly,
  useGetDefaultPresetsResponsesMultiplePresets,
  useGetDefaultPresetsResponsesPlayOnly
} from "api/hooks/presets/useGetDefaultPresets/useGetDefaultPresets.responses.ts";

export const useGetDefaultPresetsHandlers: RequestHandler[] = [
  http.get('*/presets/default', () => {
    return HttpResponse.json(useGetDefaultPresetsResponses)
  })
]

export const useGetDefaultPresetsHandlersMultiplePresets: RequestHandler[] = [
  http.get('*/presets/default', () => {
    return HttpResponse.json(useGetDefaultPresetsResponsesMultiplePresets)
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

export const useGetDefaultPresetsHandlersEmpty: RequestHandler[] = [
  http.get('*/presets/default', () => {
    return HttpResponse.json(useGetDefaultPresetsResponsesEmpty)
  })
]