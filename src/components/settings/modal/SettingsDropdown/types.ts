import { CustomIcon } from "domain/Icon.ts";
import { Preference } from "domain/user/Preference.ts";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface SettingsDropdownOption {
  style?: object
  name: string
  value?: string
  icon?: CustomIcon
  className?: string
}

export interface SettingsDropdownProps {
  id: string
  loading?: boolean
  optionsKey?: string
  preference: Preference
  buttonIcon?: IconDefinition
  options?: SettingsDropdownOption[]
  onChange?: (value: string) => void
  onError?: (error: string) => void
}