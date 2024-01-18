import { SessionSettings } from "types/session/settings/SessionSettings.ts";
import { CustomPresetMeta, PresetRequest } from "api/hooks/presets/types.ts";
import { GameConfigRequest } from "converter/GameSettingsConverter.ts";

export interface SavePlayPresetMutationData {
  meta: CustomPresetMeta
  settings: SessionSettings
}

export interface PlayPresetRequest extends PresetRequest {
  game: GameConfigRequest
}