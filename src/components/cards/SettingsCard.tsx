import React, { useState } from "react";
import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import { faBell, faChess, faCog, faDesktop, faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import DashboardCardLink from "../layout/card/DashboardCardLink";
import { useUserSelector } from "../../hooks";
import styles from "../../styles/sass/components/cards/SettingsCard.module.scss";
import SettingsModal, { SettingsType } from "../settings/modal/SettingsModal";

const SettingsCard = () => {

    const [showModal, setShowModal] = useState(false);
    const [settingsType, setSettingsType] = useState(SettingsType.GENERAL);

    const user = useUserSelector(state => state.user.user);

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
                    Settings
                </DashboardCardHeader.Title>
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <DashboardCardLink
                    {...link}
                    icon={faCog}
                    text="General Settings"
                    onClick={() => handleClick(SettingsType.GENERAL)}
                />
                <DashboardCardLink
                    {...link}
                    text="Learn Settings"
                    icon={faGraduationCap}
                    onClick={() => handleClick(SettingsType.LEARN)}
                />
                <DashboardCardLink
                    {...link}
                    icon={faChess}
                    text="Play Settings"
                    onClick={() => handleClick(SettingsType.PLAY)}
                />
                <DashboardCardLink
                    {...link}
                    icon={faDesktop}
                    text="Interface Settings"
                    onClick={() => handleClick(SettingsType.INTERFACE)}
                />
                {user && (<>
                    <DashboardCardLink
                        {...link}
                        icon={faBell}
                        text="Notification Settings"
                        onClick={() => handleClick(SettingsType.NOTIFICATION)}
                    />
                    <DashboardCardLink
                        {...link}
                        icon={faUser}
                        text="User Settings"
                        onClick={() => handleClick(SettingsType.USER)}
                    />
                </>)}
            </DashboardCard.Body>

            {showModal && <SettingsModal type={settingsType} onClose={() => setShowModal(false)} />}
        </DashboardCard>
    );
}

export default SettingsCard;
