import { LearnPresetResponse, PlayPresetResponse } from "api/hooks/presets/types.ts";

export interface DefaultPresetsResponse {
  learn: LearnPresetResponse[]
  play: PlayPresetResponse[]
}