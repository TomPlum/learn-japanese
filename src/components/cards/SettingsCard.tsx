import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import styles from "../../styles/sass/components/cards/SettingsCard.module.scss";
import React from "react";
import { faBell, faChess, faCog, faDesktop, faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import DashboardCardLink from "../layout/card/DashboardCardLink";

const SettingsCard = () => {

    const link = {
        chevron: true,
        className: styles.link
    }

    return (
        <DashboardCard size="sm" className={styles.card}>
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
                <DashboardCardLink icon={faBell} text="Notification Settings" {...link} />
                <DashboardCardLink icon={faUser} text="User Settings" {...link} />
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default SettingsCard;
