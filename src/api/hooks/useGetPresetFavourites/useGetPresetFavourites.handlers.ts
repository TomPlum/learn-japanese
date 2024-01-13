import { http, HttpResponse, RequestHandler } from "msw";
import { useGetPresetFavouritesResponses } from "api/hooks/useGetPresetFavourites/useGetPresetFavourites.responses.ts";

export const useGetPresetFavouritesHandlers: RequestHandler[] = [
  http.get('/presets/favourites', () => {
    return HttpResponse.json(useGetPresetFavouritesResponses)
  })
]

export const useGetPresetFavouritesHandlersFailure: RequestHandler[] = [
  http.get('/presets/favourites', () => {
    return HttpResponse.error()
  })
]