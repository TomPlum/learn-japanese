import { LearnPresetResponse, PlayPresetResponse } from "repository/PresetRepository.ts";

export interface UseGetPresetsProps {
  enabled?: boolean
}

export interface PresetsResponse {
  learn: LearnPresetResponse[]
  play: PlayPresetResponse[]
}