import styles from "../../styles/sass/components/settings/LearnSessionSettingsSummary.module.scss";
import { SessionSettings } from "../../domain/session/settings/SessionSettings";
import { WizardStep } from "../layout/wizard/SessionWizard";
import DataSettingsSummary from "./DataSettingsSummary";

export interface LearnSessionSettingsSummaryProps {
    settings: SessionSettings;
    onSelectStage?: (stage: WizardStep) => void;
}

const LearnSessionSettingsSummary = (props: LearnSessionSettingsSummaryProps) => {

    const { settings, onSelectStage } = props;

    const { TOPIC, MODE } = WizardStep;

    return (
        <p className={styles.question} data-testid="learn-session-settings-summary">
            <span>
                <span>{"You'll be "}</span>
                <span className={[styles.mode, styles.highlight].join(" ")} onClick={() => onSelectStage?.(MODE)}>
                    {"learning"}
                </span>
                <span>{" about "}</span>
            </span>
            <DataSettingsSummary settings={settings.dataSettings} />
            <span>{" from "}</span>
            <span className={[styles.topic, styles.highlight].join(" ")} onClick={() => onSelectStage?.(TOPIC)}>
                {" "}{settings.dataSettings.topic.name}{" "}
            </span>
            <span>{" via flash cards."}</span>
        </p>
    )
}

export default LearnSessionSettingsSummary;
