import React, { useState } from "react";
import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import { faBell, faChess, faCog, faDesktop, faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import DashboardCardLink from "../layout/card/DashboardCardLink";
import { useUserSelector } from "../../hooks";
import styles from "../../styles/sass/components/cards/SettingsCard.module.scss";
import SettingsModal, { SettingsType } from "../settings/modal/SettingsModal";
import { useTranslation } from "react-i18next";

const SettingsCard = () => {

    const [showModal, setShowModal] = useState(false);
    const [settingsType, setSettingsType] = useState(SettingsType.GENERAL);

    const user = useUserSelector(state => state.user.user);
    const { t } = useTranslation();
    const prefix = "dashboard.card.settings"

    const link = {
        chevron: true,
        className: styles.link
    }

    const handleClick = (type: SettingsType) => {
        setShowModal(true);
        setSettingsType(type);
    }

    return (
        <DashboardCard className={styles.card} id="settings-card">
            <DashboardCard.Header className={styles.header}>
                <DashboardCardHeader.Title>
                    {t(`${prefix}.title`)}
                </DashboardCardHeader.Title>
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <DashboardCardLink
                    {...link}
                    icon={faCog}
                    text={t(`${prefix}.general`)}
                    onClick={() => handleClick(SettingsType.GENERAL)}
                />
                <DashboardCardLink
                    {...link}
                    icon={faGraduationCap}
                    text={t(`${prefix}.learn`)}
                    onClick={() => handleClick(SettingsType.LEARN)}
                />
                <DashboardCardLink
                    {...link}
                    icon={faChess}
                    text={t(`${prefix}.play`)}
                    onClick={() => handleClick(SettingsType.PLAY)}
                />
                <DashboardCardLink
                    {...link}
                    icon={faDesktop}
                    text={t(`${prefix}.interface`)}
                    onClick={() => handleClick(SettingsType.INTERFACE)}
                />
                {user && (<>
                    <DashboardCardLink
                        {...link}
                        icon={faBell}
                        text={t(`${prefix}.notification`)}
                        onClick={() => handleClick(SettingsType.NOTIFICATION)}
                    />
                    <DashboardCardLink
                        {...link}
                        icon={faUser}
                        text={t(`${prefix}.user`)}
                        onClick={() => handleClick(SettingsType.USER)}
                    />
                </>)}
            </DashboardCard.Body>

            {showModal && <SettingsModal type={settingsType} onClose={() => setShowModal(false)} />}
        </DashboardCard>
    );
}

export default SettingsCard;
