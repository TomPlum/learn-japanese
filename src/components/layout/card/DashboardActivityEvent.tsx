import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren } from "react";
import styles from "../../../styles/sass/components/layout/card/DashboardActivityEvent.module.scss";
import ActivityEvent from "../../../domain/ActivityEvent";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export interface DashboardActivityEventProps {
    event: ActivityEvent;
    className?: string
    onClick?: () => void;
    onDismiss?: () => void;
}

const DashboardActivityEvent = (props: PropsWithChildren<DashboardActivityEventProps>) => {

    const { event, className, onClick, onDismiss, children } = props;

    const { name, icon, colour } = event.type;

    const getElapsedTime = (ms: number) => {
        dayjs.extend(relativeTime);
        dayjs.extend(updateLocale);
        dayjs.updateLocale('en', {
            relativeTime: {
                future: "in %s", past: "%s",
                s: 'Just now',
                m: "A minute ago", mm: "%dm ago",
                h: "An hour ago", hh: "%dh ago",
                d: "A day ago", dd: "%ddago",
                M: "A month ago", MM: "%dmo ago",
                y: "A year ago", yy: "%dy ago"
            }
        });
        return dayjs(ms).fromNow()
    }

    return (
        <div className={[className, styles.wrapper].join(" ")} onClick={onClick}>
            <div className={styles.header}>
                <FontAwesomeIcon icon={icon} fixedWidth className={styles.icon} style={{ color: colour }} />
                <span>{name}</span>
                <span className={styles.time}>{getElapsedTime(event.time)}</span>
                <FontAwesomeIcon icon={faTimes} className={styles.dismiss} onClick={onDismiss} title="Dismiss" />
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default DashboardActivityEvent;
