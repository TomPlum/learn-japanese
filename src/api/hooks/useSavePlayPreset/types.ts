import { SessionSettings } from "types/session/settings/SessionSettings.ts";
import { CustomIcon } from "types/Icon.ts";

export interface CustomPresetMeta {
  name: string
  icon: CustomIcon
  colour: string
}

export interface SavePlayPresetMutationData {
  meta: CustomPresetMeta
  settings: SessionSettings
}