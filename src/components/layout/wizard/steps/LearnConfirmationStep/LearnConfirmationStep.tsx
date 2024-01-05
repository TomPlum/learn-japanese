import { SessionSettings } from "../../../../../domain/session/settings/SessionSettings"
import { WizardStep } from "../../SessionWizard/types.ts"
import LearnSessionSettingsSummary from "../../../../settings/LearnSessionSettingsSummary"

export interface LearnConfirmationStepProps {
  settings: SessionSettings
  onSelectStage: (stage: WizardStep) => void
}

const LearnConfirmationStep = (props: LearnConfirmationStepProps) => {
  const { settings, onSelectStage } = props

  return (
    <div>
      <LearnSessionSettingsSummary settings={settings} onSelectStage={onSelectStage} />
    </div>
  )
}

export default LearnConfirmationStep
