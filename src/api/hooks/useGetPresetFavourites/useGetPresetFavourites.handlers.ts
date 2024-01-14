import { http, HttpResponse, RequestHandler } from "msw";
import {
  useGetPresetFavouritesResponses, useGetPresetFavouritesResponsesEmpty, useGetPresetFavouritesResponsesLearnOnly,
  useGetPresetFavouritesResponsesPlayOnly
} from "api/hooks/useGetPresetFavourites/useGetPresetFavourites.responses.ts";

export const useGetPresetFavouritesHandlers: RequestHandler[] = [
  http.get('*/presets/favourites', () => {
    return HttpResponse.json(useGetPresetFavouritesResponses)
  })
]

export const useGetPresetFavouritesHandlersError: RequestHandler[] = [
  http.get('*/presets/favourites', () => {
    return HttpResponse.error()
  })
]

export const useGetPresetFavouritesHandlersPlayOnly: RequestHandler[] = [
  http.get('*/presets/favourites', () => {
    return HttpResponse.json(useGetPresetFavouritesResponsesPlayOnly)
  })
]

export const useGetPresetFavouritesHandlersLearnOnly: RequestHandler[] = [
  http.get('*/presets/favourites', () => {
    return HttpResponse.json(useGetPresetFavouritesResponsesLearnOnly)
  })
]

export const useGetPresetFavouritesHandlersNoPresets: RequestHandler[] = [
  http.get('*/presets/favourites', () => {
    return HttpResponse.json(useGetPresetFavouritesResponsesEmpty)
  })
]