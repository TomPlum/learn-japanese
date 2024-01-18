import { SessionSettings } from "types/session/settings/SessionSettings.ts";
import { CustomPresetMeta } from "service/PresetService.ts";

export interface SaveLearnPresetMutationData {
  meta: CustomPresetMeta
  settings: SessionSettings
}