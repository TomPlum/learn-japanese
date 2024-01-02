import TimeSettingsForm from "../../../settings/game/TimeSettingsForm"
import TimeSettings from "../../../../domain/session/settings/game/TimeSettings"

export interface TimeSettingsStepProps {
  onSelect: (settings: TimeSettings) => void
}

const TimeSettingsStep = (props: TimeSettingsStepProps) => {
  const { onSelect } = props

  return (
    <div>
      <TimeSettingsForm onChange={onSelect} />
    </div>
  )
}

export default TimeSettingsStep
