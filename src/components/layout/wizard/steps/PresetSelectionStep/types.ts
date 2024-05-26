import { AppMode } from "types/AppMode.ts";
import Topic from "types/Topic.ts";
import SessionMode from "types/session/SessionMode.ts";

export interface PresetSelectionStepProps {
  mode: AppMode
  topic: Topic
  preset?: SessionMode
  isValid: (valid: boolean) => void
  onSelect: (preset: SessionMode) => void
  onChangeTopic: (topic: Topic) => void
}