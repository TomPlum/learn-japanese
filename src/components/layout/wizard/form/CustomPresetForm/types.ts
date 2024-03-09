import { SessionSettings } from "types/session/settings/SessionSettings.ts";

export interface CustomPresetFormProps {
  settings: SessionSettings
  onSuccess: () => void
  onCancel: () => void
}