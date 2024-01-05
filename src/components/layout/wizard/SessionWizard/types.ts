import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export interface SessionWizardProps {
  onClose: () => void
}

export interface StageDetails {
  icon: IconDefinition
  iconClass?: string
  name: string
  body: React.ReactElement
  intermediate?: boolean
  terminal?: boolean
}

export enum WizardStep {
  MODE = 0,
  TOPIC = 1,
  TYPE = 2,
  PRESET = 3,
  QUESTION = 4,
  HINT = 5,
  LIVES = 6,
  TIME = 7,
  DATA = 8,
  CONFIRM = 9
}