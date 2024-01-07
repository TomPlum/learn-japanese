import SessionMode from "domain/session/SessionMode.ts";

export interface LaunchPresetConfirmationModalProps {
  preset: SessionMode
  onDismiss: () => void
}