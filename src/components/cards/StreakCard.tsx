import DashboardCard, { DashboardCardProps } from "../layout/card/DashboardCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faBirthdayCake, faCalendarTimes, faChevronLeft, faChevronRight, faClock, faFireAlt, faQuestionCircle, faTemperatureHigh, faTemperatureLow, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/StreakCard.module.scss";
import { useState } from "react";

enum StreakView {
    CUSTOM_DATE, ACCOUNT_CREATION, STREAK
}

const StreakCard = () => {

    const [view, setView] = useState(StreakView.CUSTOM_DATE);
    const streak = 321; // TODO: This will be pulled from API.

    const viewQuantity = Object.keys(StreakView).length / 2;

    const getDaysSinceStartDate = () => {
        const startDate = new Date("2021/01/30");
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();
        const days = diff / (1000 * 3600 * 24);
        return days.toFixed(0);
    }

    const cardProps: DashboardCardProps = {
        className: styles.card
    }

    const getMainContent = () => {
        switch (view) {
            case StreakView.STREAK: {
                return <span className={styles.streak}>{getDaysSinceStartDate()} Day Streak</span>
            }
            case StreakView.ACCOUNT_CREATION: {
                return <span className={styles.streak}>{getDaysSinceStartDate()} Days Old</span>
            }
            case StreakView.CUSTOM_DATE: {
                return <span className={styles.streak}>Day {getDaysSinceStartDate()}</span>
            }
            default: {
                return <span className={styles.streak}>N/A</span>
            }
        }
    }

    const getIcon = (): { icon: IconDefinition, className: string } => {
        switch (view) {
            case StreakView.STREAK: {
                // @ts-ignore
                const icon = streak === 0 ? faBan : streak < 10 ? faTemperatureLow : streak < 50 ? faTemperatureHigh : faFireAlt;
                return { icon: icon, className: styles.fire };
            }
            case StreakView.CUSTOM_DATE: return { icon: faClock, className: styles.clock };
            case StreakView.ACCOUNT_CREATION: return { icon: faBirthdayCake, className: styles.cake };
            default: return { icon: faQuestionCircle, className: styles.unknown };
        }
    }

    const handleRotateLeft = () => {
        console.log(view);
        console.log(viewQuantity);
        setView(view < viewQuantity - 1 ? view + 1 : 0)
    }

    const handleRotateRight = () => {
        setView(view > 0 ? view - 1 : viewQuantity - 1);
    }

    return (
        <DashboardCard {...cardProps}>
            <DashboardCard.Body className={styles.body}>
                <div className={styles.left} onClick={handleRotateLeft}>
                    <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                </div>

                <div className={styles.middle}>
                    <FontAwesomeIcon fixedWidth {...getIcon()}  />
                    {getMainContent()}
                </div>

                <div className={styles.right} onClick={handleRotateRight}>
                    <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default StreakCard;
