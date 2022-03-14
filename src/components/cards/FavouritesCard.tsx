import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import { faAtom, faChalkboardTeacher, faCheckCircle, faLanguage, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/FavouritesCard.module.scss";
import { useState } from "react";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";
import FavouriteButton from "../ui/buttons/FavouriteButton";

const FavouritesCard = () => {

    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {

    }

    const handleStart = () => {

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
                    <FavouriteButton
                        editing={editing}
                        name="Kyoiku Kanji"
                        onStart={handleStart}
                        onDelete={handleDelete}
                        icon={faChalkboardTeacher}
                    />
                    <FavouriteButton
                        editing={editing}
                        name="Hardcode Kana"
                        icon={faKickstarterK}
                        onStart={handleStart}
                        onDelete={handleDelete}
                    />
                    <FavouriteButton
                        editing={editing}
                        icon={faLanguage}
                        name="Kanji Speedrun"
                        onStart={handleStart}
                        onDelete={handleDelete}
                    />
                    <FavouriteButton
                        icon={faAtom}
                        editing={editing}
                        onStart={handleStart}
                        name="Learn Particles"
                        onDelete={handleDelete}
                    />
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default FavouritesCard;
