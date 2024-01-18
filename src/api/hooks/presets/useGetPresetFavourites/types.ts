import { LearnPresetResponse, PlayPresetResponse, PresetResponse } from "../types.ts";

export interface FavouritePresetsResponse {
  learn: FavouriteLearnPresetResponse[]
  play: FavouritePlayPresetResponse[]
}

interface FavouritePresetResponse<T extends PresetResponse> {
  id: number
  preset: T
}

export type FavouriteLearnPresetResponse = FavouritePresetResponse<LearnPresetResponse>

export type FavouritePlayPresetResponse = FavouritePresetResponse<PlayPresetResponse>