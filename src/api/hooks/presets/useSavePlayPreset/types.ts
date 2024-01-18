import { SessionSettings } from "types/session/settings/SessionSettings.ts";
import { CustomPresetMeta } from "api/hooks/presets/types.ts";

export interface SavePlayPresetMutationData {
  meta: CustomPresetMeta
  settings: SessionSettings
}