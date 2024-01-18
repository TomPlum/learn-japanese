import { http, HttpResponse, RequestHandler } from "msw"

export const useUpdatePresetFavouritesHandlers: RequestHandler[] = [
  http.patch("*/presets/favourites/update", () => {
    return new HttpResponse(null, { status: 200 })
  })
]

export const useUpdatePresetFavouritesHandlersError: RequestHandler[] = [
  http.patch("*/presets/favourites/update", () => {
    return HttpResponse.error()
  })
]
