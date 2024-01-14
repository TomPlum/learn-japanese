import { LearnPresetResponse, PlayPresetResponse } from "repository/PresetRepository.ts";

export interface PresetsResponse {
  learn: LearnPresetResponse[]
  play: PlayPresetResponse[]
}