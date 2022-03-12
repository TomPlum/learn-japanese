import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import { faAtom, faChalkboardTeacher, faCheckCircle, faLanguage, faPencilAlt, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/FavouritesCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";

const FavouritesCard = () => {

    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const classes = [styles.favourite];

    if (editing) {
        classes.push(styles.shake);
    }

    return (
        <DashboardCard className={styles.card} loading={loading}>
            <DashboardCard.Header>
                <DashboardCardHeader.Title>Favourites</DashboardCardHeader.Title>
                {!editing && <DashboardCardHeader.Icon icon={faPencilAlt} onClick={() => setEditing(true)} />}
                {editing && <DashboardCardHeader.Icon icon={faCheckCircle} onClick={() => setEditing(false)} />}
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <div className={styles.favourites}>
                    <div className={classes.join(" ")}>
                        {editing && <FontAwesomeIcon icon={faTimes} className={styles.delete} title="Delete" />}
                        <FontAwesomeIcon icon={faChalkboardTeacher} fixedWidth className={styles.icon} />
                        <span className={styles.name}>Kyoiku Kanji</span>
                    </div>
                    <div className={classes.join(" ")}>
                        {editing && <FontAwesomeIcon icon={faTimes} className={styles.delete} title="Delete" />}
                        <FontAwesomeIcon icon={faKickstarterK} fixedWidth className={styles.icon} />
                        <span className={styles.name}>Hardcode Kana</span>
                    </div>
                    <div className={classes.join(" ")}>
                        {editing && <FontAwesomeIcon icon={faTimes} className={styles.delete} title="Delete" />}
                        <FontAwesomeIcon icon={faLanguage} fixedWidth className={styles.icon} />
                        <span className={styles.name}>Kanji Speedrun</span>
                    </div>
                    <div className={classes.join(" ")}>
                        {editing && <FontAwesomeIcon icon={faTimes} className={styles.delete} title="Delete" />}
                        <FontAwesomeIcon icon={faAtom} fixedWidth className={styles.icon} />
                        <span className={styles.name}>Learn Particles</span>
                    </div>
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default FavouritesCard;
