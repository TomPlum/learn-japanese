import { SessionSettings } from "types/session/settings/SessionSettings.ts";
import { CustomPresetMeta } from "../useSavePlayPreset"

export interface SaveLearnPresetMutationData {
  meta: CustomPresetMeta
  settings: SessionSettings
}