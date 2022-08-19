import DashboardCard from "../layout/card/DashboardCard";
import DashboardCardHeader from "../layout/card/DashboardCardHeader";
import { faPencilAlt, faPlusCircle, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/cards/FavouritesCard.module.scss";
import { useEffect, useState } from "react";
import FavouriteButton from "../ui/buttons/favourite/FavouriteButton";
import PresetService from "../../service/PresetService";
import SessionMode from "../../domain/session/SessionMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LaunchPresetConfirmationModal from "../settings/LaunchPresetConfirmationModal";
import EditFavouritesModal from "../settings/EditFavouritesModal";
import DashboardCardLink from "../layout/card/DashboardCardLink";
import ScrollableContainer from "../ui/ScrollableContainer";
import { useTranslation } from "react-i18next";

const FavouritesCard = () => {

    const { t, ready } = useTranslation("translation", { keyPrefix: "dashboard.card.favourites" });
    const actions = useTranslation("translation", { keyPrefix: "action" }).t;
    const [presets, setPresets] = useState<SessionMode[]>([]);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [confirm, setConfirm] = useState(false);
    const [selected, setSelected] = useState<SessionMode | undefined>(undefined);
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
                setPresets(response.learn.concat(response.play));
            }
        }).catch(response => {
            setError(response.error);
        });
    }

    const handleStart = (preset: SessionMode) => {
        setConfirm(true);
        setSelected(preset);
    }

    const handleFinishEditing = () => {
        reload();
        setEditing(false);
    }

    const reload = () => {
        setUpdating(true);
        setError(undefined);
        loadPresets().finally(() => setUpdating(false));
    }

    const handleDismissConfirmation = () => {
        setConfirm(false);
        setSelected(undefined);
    }

    return (
        <DashboardCard className={styles.card} loading={loading && !ready} updating={updating} error={error}>
            <DashboardCard.Header onReload={reload}>
                <DashboardCardHeader.Title>{t("title")}</DashboardCardHeader.Title>

                <DashboardCardHeader.SettingsMenu>
                    <DashboardCardLink text={actions("edit")} icon={faPencilAlt} onClick={() => setEditing(true)}  />
                    <DashboardCardLink text={actions("refresh")} icon={faSyncAlt} onClick={reload} />
                </DashboardCardHeader.SettingsMenu>
            </DashboardCard.Header>

            <DashboardCard.Body className={styles.body}>
                <div className={styles.favourites}>
                    {presets.length === 0 && !error && (
                        <p className={styles.emptyMessage} onClick={() => setEditing(true)}>
                            <FontAwesomeIcon title="Add" icon={faPlusCircle} className={styles.emptyAddButton} />
                            <span>You can track your favourite presets here</span>
                        </p>
                    )}

                    <ScrollableContainer maxHeight={300} className={styles.favourites}>
                        {presets.map((preset: SessionMode) => (
                            <FavouriteButton
                                key={preset.id}
                                preset={preset}
                                onStart={handleStart}
                                className={styles.favourite}
                                selected={selected?.id === preset.id}
                            />
                        ))}
                    </ScrollableContainer>

                    {confirm && selected && (
                        <LaunchPresetConfirmationModal
                            preset={selected}
                            onDismiss={handleDismissConfirmation}
                        />
                    )}

                    {editing && (
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
