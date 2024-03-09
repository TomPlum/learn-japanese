import SessionMode from "types/session/SessionMode.ts";

export interface LaunchPresetConfirmationModalProps {
  preset: SessionMode
  onDismiss: () => void
}