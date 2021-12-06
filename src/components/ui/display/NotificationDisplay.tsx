import { Notification } from "../../../slices/NotificationSlice";
import React from "react";
import styles from "../../../styles/sass/components/ui/display/NotificationDisplay.module.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface NotificationDisplayProps {
    id: string;
    notification: Notification;
    onDismiss: (id: string) => void;
}

const NotificationDisplay = (props: NotificationDisplayProps) => {
    const { id, notification, onDismiss } = props;

    const handleDismiss = () => {
        onDismiss(id);
    }

    return (
        <div className={styles.notification}>
            <FontAwesomeIcon icon={faTimes} onClick={handleDismiss} className={styles.dismiss} />
            <p className={styles.title}>{notification.title}</p>
            <p className={styles.body}>{notification.body ?? ""}</p>
        </div>
    );
}

export default NotificationDisplay;
