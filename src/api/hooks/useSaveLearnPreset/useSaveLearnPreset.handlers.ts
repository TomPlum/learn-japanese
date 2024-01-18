import { http, HttpResponse, RequestHandler } from "msw";

export const useSaveLearnPresetHandlers: RequestHandler[] = [
  http.post('*/presets/custom/learn/save', () => {
    return new HttpResponse(null, { status: 201 })
  })
]

export const useSavePlayPresetHandlersError: RequestHandler[] = [
  http.post('*/presets/custom/learn/save', () => {
    return HttpResponse.error()
  })
]