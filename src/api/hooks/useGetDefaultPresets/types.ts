import { LearnPresetResponse, PlayPresetResponse } from "repository/PresetRepository.ts";

export interface DefaultPresetsResponse {
  learn: LearnPresetResponse[]
  play: PlayPresetResponse[]
}