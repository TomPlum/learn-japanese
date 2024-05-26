import { http, HttpResponse, RequestHandler } from "msw";

export const useSavePlayPresetHandlers: RequestHandler[] = [
  http.post('*/presets/custom/play/save', () => {
    return new HttpResponse(null, { status: 201 })
  })
]

export const useSavePlayPresetHandlersError: RequestHandler[] = [
  http.post('*/presets/custom/play/save', () => {
    return HttpResponse.error()
  })
]