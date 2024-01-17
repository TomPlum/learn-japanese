import { http, HttpResponse, RequestHandler } from "msw"

export const useDeleteFavouritePresetHandlers: RequestHandler[] = [
  http.delete("*/presets/favourites/delete", () => {
    return new HttpResponse(null, { status: 200 })
  })
]
