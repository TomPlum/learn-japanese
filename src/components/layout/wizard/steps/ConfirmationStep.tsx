import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";
import { Accordion, Button } from "react-bootstrap";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CustomPresetForm from "../form/CustomPresetForm";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WizardStep } from "../SessionWizard";
import SessionSettingsSummary from "../../../settings/SessionSettingsSummary";

export interface ConfirmationStepProps {
    settings: SessionSettings;
    onSelectStage?: (stage: WizardStep) => void;
}

const ConfirmationStep = (props: ConfirmationStepProps) => {
    const { settings, onSelectStage } = props;

    const [inSavePresetForm, setInSavePresetForm] = useState(false);
    const [showSave, setShowSave] = useState(true);

    const handleClickSave = () => {
        setShowSave(false);
        setInSavePresetForm(true);
    }

    const handleCancelSave = () => {
        setShowSave(true);
        setInSavePresetForm(false);
    }

    return (
        <div>
           <SessionSettingsSummary settings={settings} onSelectStage={onSelectStage} />

            <Accordion>
                {showSave && (
                    <Accordion.Toggle eventKey="save" as={Button} onClick={handleClickSave} variant="info">
                        <FontAwesomeIcon icon={faDownload} fixedWidth />
                        <span>Save Preset</span>
                    </Accordion.Toggle>
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
    );
}

export default ConfirmationStep;
