import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import styles from "../../styles/sass/components/cards/SettingsCard.module.scss";
import React from "react";
import { faBell, faChess, faCog, faDesktop, faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import DashboardCardLink from "../layout/card/DashboardCardLink";

const SettingsCard = () => {

    return (
        <DashboardCard size="sm" className={styles.card}>
            <DashboardCard.Header className={styles.header}>
                <DashboardCardHeader.Title>
                    Settings
                </DashboardCardHeader.Title>
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <DashboardCardLink chevron icon={faCog} text="General Settings" className={styles.link} />
                <DashboardCardLink chevron icon={faGraduationCap} text="Learn Settings" className={styles.link} />
                <DashboardCardLink chevron icon={faChess} text="Play Settings" className={styles.link} />
                <DashboardCardLink chevron icon={faDesktop} text="Interface Settings" className={styles.link} />
                <DashboardCardLink chevron icon={faBell} text="Notification Settings" className={styles.link} />
                <DashboardCardLink chevron icon={faUser} text="User Settings" className={styles.link} />
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default SettingsCard;
