import styles from "../../styles/sass/components/cards/PlayCard.module.scss";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faPlay, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import SessionWizard from "../layout/wizard/SessionWizard";
import DashboardCard, { DashboardCardProps } from "../layout/card/DashboardCard";
import DashboardCardLink from "../layout/card/DashboardCardLink";
import { useSessionSettingsSelector } from "../../hooks";
import LaunchPresetConfirmationModal from "../settings/LaunchPresetConfirmationModal";
import PresetConverter from "../../converter/PresetConverter";
import SessionMode from "../../domain/session/SessionMode";
import { SessionSettingsState } from "../../slices/SessionSettingsSlice";
import { useTranslation } from "react-i18next";

const PlayCard = () => {

    const sessions = useSessionSettingsSelector(state => state.sessionSettings);
    const presetConverter = new PresetConverter();
    const lastPlaySession = sessions.lastPlaySession;
    const lastLearnSession = sessions.lastLearnSession;

    const { t } = useTranslation();
    const prefix = "dashboard.card.play";
    const [preset, setPreset] = useState<SessionMode | undefined>(undefined);
    const [customising, setCustomising] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirming, setConfirming] = useState(false);

    const handleStart = () => {
        setCustomising(true);
    }

    const props: DashboardCardProps = {
        error: error,
        id: "play-card",
        loading: loading,
        className: styles.card,
    }

    const handleStartLastSession = (session?: SessionSettingsState) => {
        const preset = presetConverter.convertSessionSettings(session!);
        setPreset(preset);
        setConfirming(true);
    }

    const playTitle = !!lastPlaySession ? lastPlaySession.name ?? t(`${prefix}.default-title`) : t(`${prefix}.play-title`);
    const learnTitle = !!lastLearnSession ? lastLearnSession.name ?? t(`${prefix}.default-title`) : t(`${prefix}.learn-title`);

    return (
        <DashboardCard {...props}>
            <DashboardCard.Body className={styles.body}>
                <Row>
                    <Col xs={12}>
                        <div onClick={handleStart} className={styles.start} data-testid="launch-wizard">
                            <FontAwesomeIcon icon={faPlay} fixedWidth size="sm" />
                            <span>{t(`${prefix}.start`)}</span>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className={styles.left}>
                        <DashboardCardLink
                            icon={faGamepad}
                            title={playTitle}
                            className={styles.last}
                            disabled={!lastPlaySession}
                            text={t(`${prefix}.last-play`)}
                            onClick={() => handleStartLastSession(lastPlaySession)}
                        />
                    </Col>
                    <Col className={styles.right}>
                        <DashboardCardLink
                            title={learnTitle}
                            icon={faUserGraduate}
                            className={styles.last}
                            disabled={!lastLearnSession}
                            text={t(`${prefix}.last-learn`)}
                            onClick={() => handleStartLastSession(lastLearnSession)}
                        />
                    </Col>
                </Row>
            </DashboardCard.Body>

            {customising && <SessionWizard onClose={() => setCustomising(false)} />}

            {confirming && preset && (
                <LaunchPresetConfirmationModal
                    preset={preset}
                    onDismiss={() => setConfirming(false)}
                />
            )}
        </DashboardCard>
    )
}

export default PlayCard;
