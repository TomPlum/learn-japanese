import HintSettingsForm from "../../../settings/game/HintSettingsForm"
import HintSettings from "../../../../domain/session/settings/game/HintSettings"

export interface HintSettingsStepProps {
  onSelect: (settings: HintSettings) => void
}

const HintSettingsStep = (props: HintSettingsStepProps) => {
  const { onSelect } = props

  return (
    <div>
      <HintSettingsForm onChange={onSelect} />
    </div>
  )
}

export default HintSettingsStep
