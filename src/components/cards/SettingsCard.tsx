import React from "react";
import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import { faBell, faChess, faCog, faDesktop, faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import DashboardCardLink from "../layout/card/DashboardCardLink";
import { useUserSelector } from "../../hooks";
import styles from "../../styles/sass/components/cards/SettingsCard.module.scss";

const SettingsCard = () => {

    const user = useUserSelector(state => state.user.user);

    const link = {
        chevron: true,
        className: styles.link
    }

    return (
        <DashboardCard className={styles.card} id="settings-card">
            <DashboardCard.Header className={styles.header}>
                <DashboardCardHeader.Title>
                    Settings
                </DashboardCardHeader.Title>
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <DashboardCardLink icon={faCog} text="General Settings" {...link} />
                <DashboardCardLink icon={faGraduationCap} text="Learn Settings" {...link} />
                <DashboardCardLink icon={faChess} text="Play Settings" {...link} />
                <DashboardCardLink icon={faDesktop} text="Interface Settings" {...link} />
                {user && (<>
                    <DashboardCardLink icon={faBell} text="Notification Settings" {...link} />
                    <DashboardCardLink icon={faUser} text="User Settings" {...link} />
                </>)}
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default SettingsCard;
