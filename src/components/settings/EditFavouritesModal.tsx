import { ModalProps } from "react-bootstrap/Modal";
import styles from "../../styles/sass/components/settings/EditFavouritesModal.module.scss";
import { Alert, Button, Fade, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faCircleNotch, faGraduationCap, faPlay, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import PresetService from "../../service/PresetService";
import SessionMode from "../../domain/session/SessionMode";
import LoadingSpinner from "../ui/loading/LoadingSpinner";
import ScrollableContainer from "../ui/ScrollableContainer";
import PlayMode from "../../domain/session/PlayMode";
import LearnMode from "../../domain/session/LearnMode";
import EditFavouriteButton from "../ui/buttons/favourite/EditFavouriteButton";
import ConfirmModal from "../ui/ConfirmModal";
import ExistingFavouriteButton from "../ui/buttons/favourite/ExistingFavouriteButton";

export interface EditFavouritesModalProps {
    favourites: SessionMode[];
    onSuccess: () => void;
    onDismiss: () => void;
}

const EditFavouritesModal = (props: EditFavouritesModalProps) => {
    const { favourites, onSuccess, onDismiss } = props;

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<SessionMode[]>([]);
    const [filtered, setFiltered] = useState<SessionMode[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);
    const [add, setAdd] = useState<number[]>([]);
    const [remove, setRemove] = useState<number[]>([]);
    const [saving, setSaving] = useState(false);
    const [showPlay, setShowPlay] = useState(true);
    const [showLearn, setShowLearn] = useState(true);
    const [confirm, setConfirm] = useState(false);

    const service = new PresetService();
    const presetsRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        setLoading(true);
        service.getAllPresets().then(response => {
            if (response.error) {
                setError(response.error);
            } else {
                const favouritePlayIds = favourites.filter(it => it instanceof PlayMode).map(it => it.id);
                const favouriteLearnIds = favourites.filter(it => it instanceof LearnMode).map(it => it.id);
                const notFavouritePlay = response.play.filter(it => !favouritePlayIds.includes(it.id));
                const notFavouriteLearn = response.learn.filter(it => !favouriteLearnIds.includes(it.id));
                const notFavourite: SessionMode[] = notFavouriteLearn.concat(notFavouritePlay);
                setData(notFavourite);
                setFiltered(notFavourite);
            }
        }).catch(response => {
            setError(response.error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (showPlay) {
            setFiltered(filtered.concat(data.filter(it => it instanceof PlayMode)));
        } else {
            setFiltered(filtered.filter(it => !(it instanceof PlayMode)));
        }
    }, [showPlay]);

    useEffect(() => {
        if (showLearn) {
            setFiltered(filtered.concat(data.filter(it => it instanceof LearnMode)));
        } else {
            setFiltered(filtered.filter(it => !(it instanceof LearnMode)));
        }
    }, [showLearn]);

    const modalProps: ModalProps = {
        show: true,
        size: "lg",
        centered: true,
        backdrop: "static",
        enforceFocus: false,
        dialogClassName: styles.dialog,
        contentClassName: styles.content,
        "data-testid": "edit-favourites"
    }

    const handleSave = () => {
        setSaving(true);
        service.updateFavourites(add, remove).then(response => {
            if (response.success) {
                onSuccess();
            } else {
                setSaving(false);
                setError(response.error);
            }
        });
    }

    const handleDismiss = () => {
        if (add.length > 0 || remove.length > 0) {
            setConfirm(true);
        } else {
            onDismiss();
        }
    }

    const handleAddPresets = () => {
        presetsRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Modal {...modalProps}>
            <Modal.Body className={[styles.modal, confirm ? styles.blur : ""].join(" ")}>
                {confirm && <ConfirmModal
                    onConfirm={onDismiss}
                    onDismiss={() => setConfirm(false)}
                    title="Are you sure you want to quit?"
                    body="You have unsaved changes to your favourites."
                />}

                <div className={styles.header}>
                    {!loading && <FontAwesomeIcon icon={faStar} fixedWidth className={styles.icon} />}
                    <LoadingSpinner active={loading} variant="warning" className={styles.loading} />
                    <span className={styles.name}>Edit Favourites</span>
                    <FontAwesomeIcon
                        fixedWidth
                        title="Close"
                        icon={faTimes}
                        onClick={handleDismiss}
                        className={styles.close}
                    />
                </div>

                <Fade in appear>
                    <div className={styles.body}>
                        {error && <Alert variant="danger">{error}</Alert>}

                        {!loading && !error && <ScrollableContainer maxHeight={500} className={styles.scrollable}>
                            <p className={styles.heading}>Existing Favourites</p>
                            <div className={styles.favourites}>
                                {favourites.map((preset: SessionMode) => (
                                    <ExistingFavouriteButton
                                        key={preset.id}
                                        icon={preset.icon}
                                        name={preset.displayName}
                                        id={preset.favourite_id!}
                                        className={styles.favourite}
                                        selected={remove.includes(preset.favourite_id!)}
                                        onRemove={(id: number) => setRemove(existing => existing.concat(id))}
                                        onCancel={(id: number) => setRemove(existing => existing.filter(it => it !== id))}
                                    />
                                ))}
                                {favourites.length === 0 && (
                                    <p className={styles.empty} onClick={handleAddPresets}>
                                        <FontAwesomeIcon icon={faArrowAltCircleDown} fixedWidth />
                                        You can select favourites below
                                    </p>
                                )}
                            </div>

                            <p className={styles.heading} ref={presetsRef}>Available Presets</p>
                            <div className={styles.favourites}>
                                {filtered.map((preset: SessionMode) => (
                                    <EditFavouriteButton
                                        id={preset.id}
                                        key={preset.id}
                                        icon={preset.icon}
                                        name={preset.displayName}
                                        className={styles.favourite}
                                        selected={add.includes(preset.id)}
                                        onAdd={(id: number) => setAdd(existing => existing.concat(id))}
                                        onCancel={(id: number) => setAdd(existing => existing.filter(it => it !== id))}
                                    />
                                ))}
                            </div>

                            {!loading && filtered.length === 0 && (
                                <span className={styles.empty}>There's nothing that matches your filters.</span>
                            )}
                        </ScrollableContainer>}
                    </div>
                </Fade>

                <div className={styles.footer}>
                    <Button
                        onClick={() => setShowPlay(!showPlay)}
                        title={showPlay ? "Hide Play" : "Show Play"}
                        className={[styles.play, !showPlay ? styles.disabled : ""].join(" ")}
                    >
                        <FontAwesomeIcon icon={faPlay} fixedWidth />
                    </Button>

                    <Button
                        onClick={() => setShowLearn(!showLearn)}
                        title={showLearn ? "Hide Learn" : "Show Learn"}
                        className={[styles.learn, !showLearn ? styles.disabled : ""].join(" ")}
                    >
                        <FontAwesomeIcon icon={faGraduationCap} fixedWidth />
                    </Button>

                    <Button variant="success" onClick={handleSave} disabled={loading || saving} className={styles.save}>
                        {saving ? <FontAwesomeIcon icon={faCircleNotch} fixedWidth spin /> : "Save"}
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default EditFavouritesModal;
