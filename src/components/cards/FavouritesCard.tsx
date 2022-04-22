import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import { faCheckCircle, faPencilAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/FavouritesCard.module.scss";
import { useEffect, useState } from "react";
import FavouriteButton from "../ui/buttons/FavouriteButton";
import PresetService from "../../service/PresetService";
import SessionMode from "../../domain/session/SessionMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdateResponse from "../../rest/response/UpdateResponse";
import LaunchPresetConfirmationModal from "../settings/LaunchPresetConfirmationModal";
import EditFavouritesModal from "../settings/EditFavouritesModal";
import PlayMode from "../../domain/session/PlayMode";
import LearnMode from "../../domain/session/LearnMode";

const FavouritesCard = () => {

    const [presets, setPresets] = useState<SessionMode[]>([]);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [confirm, setConfirm] = useState(false);
    const [selected, setSelected] = useState<SessionMode | undefined>(undefined);
    const [adding, setAdding] = useState(false);
    const [updating, setUpdating] = useState(false);

    const service = new PresetService();

    useEffect(() => {
        setLoading(true);
        loadPresets().finally(() => setLoading(false));
    }, []);

    const loadPresets = () => {
        return service.getFavouritePresets().then(response => {
            if (response.error) {
                setError(response.error);
            } else {
                const combinedPresets = response.learn.concat(response.play);
                setPresets(combinedPresets);
            }
        }).catch(response => {
            setError(response.error);
        });
    }

    const handleDelete = (preset: SessionMode) => {
        service.removeFavouritePreset(preset).then((response: UpdateResponse) => {
            if (response.success) {
                setPresets(existing => existing.filter(it => it.getUniqueID() !== preset.getUniqueID()));
            } else {
                setError(response.error);
            }
        }).catch((response: UpdateResponse) => {
            setError(response.error);
        });
    }

    const handleStart = (preset: SessionMode) => {
        setConfirm(true);
        setSelected(preset);
    }

    const handleFinishEditing = () => {
        setUpdating(true);
        loadPresets().finally(() => setUpdating(false));
        setAdding(false);
    }

    return (
        <DashboardCard className={styles.card} loading={loading} updating={updating} error={error}>
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
                        <p className={styles.emptyMessage} onClick={() => setAdding(true)}>
                            <FontAwesomeIcon title="Add" icon={faPlusCircle} className={styles.emptyAddButton} />
                            <span>You can track your favourite presets here</span>
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

                    {confirm && selected && (
                        <LaunchPresetConfirmationModal
                            preset={selected}
                            onDismiss={() => setConfirm(false)}
                        />
                    )}

                    {adding && (
                        <EditFavouritesModal
                            favourites={presets}
                            onSuccess={handleFinishEditing}
                            onDismiss={() => setEditing(false)}
                        />
                    )}
                </div>
            </DashboardCard.Body>
        </DashboardCard>
    );
}

export default FavouritesCard;
