import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import { faCheckCircle, faPencilAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/FavouritesCard.module.scss";
import { useEffect, useState } from "react";
import FavouriteButton from "../ui/buttons/FavouriteButton";
import PresetService from "../../service/PresetService";
import SessionMode from "../../domain/session/SessionMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FavouritesCard = () => {

    const [presets, setPresets] = useState<SessionMode[]>([]);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const service = new PresetService();

    useEffect(() => {
        setLoading(true);
        service.getFavouritePresets().then(response => {
            if (response.error) {
                setError(response.error);
            } else {
                const combinedPresets = response.learn.concat(response.play);
                setPresets(combinedPresets);
            }
        }).catch(response => {
            setError(response.error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const handleDelete = () => {

    }

    const handleStart = () => {

    }

    return (
        <DashboardCard className={styles.card} loading={loading} error={error}>
            <DashboardCard.Header>
                <DashboardCardHeader.Title>Favourites</DashboardCardHeader.Title>
                {!editing && presets.length > 0 && (
                    <DashboardCardHeader.Icon icon={faPencilAlt} onClick={() => setEditing(true)} />
                )}

                {editing && (
                    <DashboardCardHeader.Icon icon={faCheckCircle} onClick={() => setEditing(false)} />
                )}
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <div className={styles.favourites}>
                    {presets.length === 0 && !error && (
                        <p className={styles.emptyMessage}>
                            <FontAwesomeIcon icon={faPlusCircle} className={styles.emptyAddButton} title="Add" />
                            <span>You can track your favourite presets here.</span>
                        </p>
                    )}

                    {presets.map((preset: SessionMode) => (
                        <FavouriteButton
                            preset={preset}
                            editing={editing}
                            onStart={handleStart}
                            onDelete={handleDelete}
                            key={preset.getUniqueID()}
                        />
                    ))}
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default FavouritesCard;
