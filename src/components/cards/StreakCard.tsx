import DashboardCard, { DashboardCardProps } from "../layout/card/DashboardCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faFireAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/StreakCard.module.scss";
import { useState } from "react";

enum StreakView {
    CUSTOM_DATE, ACCOUNT_CREATION, STREAK
}

const StreakCard = () => {

    const [view, setView] = useState(StreakView.CUSTOM_DATE);

    const viewQuantity = Object.keys(StreakView).length;

    const getDaysSinceStartDate = () => {
        const startDate = new Date("2021/01/30");
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();
        const days = diff / (1000 * 3600 * 24);
        return `Day ${days.toFixed(0)}`;
    }

    const cardProps: DashboardCardProps = {
        className: styles.card
    }

    const getMainContent = () => {
        switch (view) {
            case StreakView.STREAK: {
                return <div></div>
            }
            case StreakView.ACCOUNT_CREATION: {
                return <div></div>
            }
            case StreakView.CUSTOM_DATE: {
                return (
                    <>
                        <FontAwesomeIcon icon={faFireAlt} fixedWidth className={styles.fire} />
                        <span className={styles.streak}>{getDaysSinceStartDate()}</span>
                    </>
                )
            }
        }
    }

    return (
        <DashboardCard {...cardProps}>
            <DashboardCard.Body className={styles.body}>
                <div className={styles.left} onClick={() => setView(view < viewQuantity ? view + 1 : 0)}>
                    <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                </div>

                <div className={styles.middle}>
                    {getMainContent()}
                </div>

                <div className={styles.right} onClick={() => setView(view > 0 ? view - 1 : viewQuantity)}>
                    <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default StreakCard;
