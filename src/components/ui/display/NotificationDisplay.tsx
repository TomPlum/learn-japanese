import { Notification } from "../../../slices/NotificationSlice";
import React from "react";
import styles from "../../../styles/sass/components/ui/display/NotificationDisplay.module.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";

export interface NotificationDisplayProps {
    id: string;
    className?: string;
    notification: Notification;
    onDismiss: (id: string) => void;
}

const NotificationDisplay = (props: NotificationDisplayProps) => {
    const { id, notification, className, onDismiss } = props;

    const handleDismiss = () => {
        onDismiss(id);
    }

    const getElapsedTime = (ms: number) => {
        const mins = dayjs(Date.now()).diff(ms, 'minute', false);
        const hours = Math.floor(mins / 60);
        const remainingMins = mins % 60;
        return mins > 0 ? hours > 0 ? `${hours}h ${remainingMins}m ago` : `${mins}m ago` : "Just now";
    }

    return (
        <div className={[className, styles.container].join(" ")}>
            <div>
                <p className={styles.title}>
                    <span>{notification.title}</span>
                    <span className={styles.time}>{getElapsedTime(notification.time)}</span>
                </p>
                <p className={styles.body}>{notification.body ?? ""}</p>
            </div>
            <div className={styles.rightWrapper}>
                <FontAwesomeIcon icon={faTimes} onClick={handleDismiss} className={styles.dismiss} />
            </div>
        </div>
    );
}

export default NotificationDisplay;
