import { http, HttpResponse, RequestHandler } from "msw";

export const useSavePlayPresetHandlers: RequestHandler[] = [
  http.get('*/presets/all', () => {
    return new HttpResponse(null, { status: 201 })
  })
]