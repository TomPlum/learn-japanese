import QuestionSettingsForm from "../../../../settings/game/QuestionSettingsForm"
import QuestionSettings from "types/session/settings/game/QuestionSettings"

export interface QuestionSettingsStepProps {
  settings?: QuestionSettings
  onSelect: (settings: QuestionSettings) => void
}

const QuestionSettingsStep = (props: QuestionSettingsStepProps) => {
  const { onSelect } = props

  return <QuestionSettingsForm onChange={onSelect} />
}

export default QuestionSettingsStep
