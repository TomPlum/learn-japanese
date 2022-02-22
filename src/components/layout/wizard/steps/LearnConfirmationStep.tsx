import { SessionSettings } from "../../../../domain/session/settings/SessionSettings";
import { WizardStep } from "../play/PlayWizard";
import styles from "../../../../styles/sass/components/layout/wizard/steps/LearnConfirmationStep.module.scss";

export interface LearnConfirmationStepProps {
    settings: SessionSettings;
    onSelectStage: (stage: WizardStep) => void;
}

const LearnConfirmationStep = (props: LearnConfirmationStepProps) => {

    const { settings, onSelectStage } = props;

    const { TOPIC, MODE } = WizardStep;

    return (
        <div>
            <p className={styles.question}>
                <span>
                    <span>{"You'll be "}</span>
                    <span className={[styles.mode, styles.highlight].join(" ")} onClick={() => onSelectStage(MODE)}>
                        {"learning"}
                    </span>
                    <span>{" about"}</span>
                </span>
                <span className={[styles.topic, styles.highlight].join(" ")} onClick={() => onSelectStage(TOPIC)}>
                    {" "}{settings.dataSettings.topic.name}{" "}
                </span>
                <span>{" via flash cards."}</span>
            </p>
        </div>
    );
}

export default LearnConfirmationStep;
