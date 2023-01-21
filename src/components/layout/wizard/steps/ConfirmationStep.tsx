import { SessionSettings } from "../../../../domain/session/settings/SessionSettings"
import { Accordion, Button } from "react-bootstrap"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import CustomPresetForm from "../form/CustomPresetForm"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { WizardStep } from "../SessionWizard"
import SessionSettingsSummary from "../../../settings/SessionSettingsSummary"
import { useUserSelector } from "../../../../hooks"
import HoverMessage from "../../../ui/HoverMessage"
import { useTranslation } from "react-i18next"

export interface ConfirmationStepProps {
    settings: SessionSettings
    onSelectStage?: (stage: WizardStep) => void
}

const ConfirmationStep = (props: ConfirmationStepProps) => {
    const { settings, onSelectStage } = props

    const user = useUserSelector((state) => state.user.user)

    const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.confirmation" })
    const [inSavePresetForm, setInSavePresetForm] = useState(false)
    const [showSave, setShowSave] = useState(true)

    const handleClickSave = () => {
        setShowSave(false)
        setInSavePresetForm(true)
    }

    const handleCancelSave = () => {
        setShowSave(true)
        setInSavePresetForm(false)
    }

    return (
        <div>
            <SessionSettingsSummary settings={settings} onSelectStage={onSelectStage} />

            <Accordion>
                {showSave && (
                    <HoverMessage message={t("login-message")} show={!user} id="save-preset-hover">
                        <Accordion.Button
                            eventKey="save"
                            as={Button}
                            onClick={handleClickSave}
                            variant="info"
                            disabled={!user}
                        >
                            <FontAwesomeIcon icon={faDownload} fixedWidth />
                            <span>{t("save-preset")}</span>
                        </Accordion.Button>
                    </HoverMessage>
                )}

                <Accordion.Collapse eventKey="save" in={inSavePresetForm} data-testid="confirmation-step-accordion">
                    <CustomPresetForm
                        settings={settings}
                        onCancel={handleCancelSave}
                        onSuccess={() => setInSavePresetForm(false)}
                    />
                </Accordion.Collapse>
            </Accordion>
        </div>
    )
}

export default ConfirmationStep
