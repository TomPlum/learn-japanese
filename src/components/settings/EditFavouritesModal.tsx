import { ModalProps } from "react-bootstrap/Modal";
import styles from "../../styles/sass/components/settings/AddFavouritesModal.module.scss";
import { Alert, Button, Fade, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faGraduationCap, faPlay, faSpinner, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import PresetService from "../../service/PresetService";
import SessionMode from "../../domain/session/SessionMode";
import FavouriteButton from "../ui/buttons/FavouriteButton";
import LoadingSpinner from "../ui/LoadingSpinner";
import ScrollableContainer from "../ui/ScrollableContainer";
import PlayMode from "../../domain/session/PlayMode";
import LearnMode from "../../domain/session/LearnMode";

export interface EditFavouritesModalProps {
    favouritePlay: number[];
    favouriteLearn: number[];
    onSuccess: () => void;
    onDismiss: () => void;
}

const EditFavouritesModal = (props: EditFavouritesModalProps) => {
    const { favouritePlay, favouriteLearn, onSuccess, onDismiss } = props;

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<SessionMode[]>([]);
    const [filtered, setFiltered] = useState<SessionMode[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);
    const [add, setAdd] = useState<number[]>([]);
    const [remove, setRemove] = useState<number[]>([]);
    const [saving, setSaving] = useState(false);
    const [showPlay, setShowPlay] = useState(true);
    const [showLearn, setShowLearn] = useState(true);

    const service = new PresetService();

    useEffect(() => {
        setLoading(true);
        service.getAllPresets().then(response => {
            if (response.error) {
                setError(response.error);
            } else {
                const notFavouritePlay = response.play.filter(it => !favouritePlay.includes(it.id));
                const notFavouriteLearn = response.learn.filter(it => !favouriteLearn.includes(it.id));
                const notFavourite = notFavouriteLearn.concat(notFavouritePlay);
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
        // Handle updates, then finally onSuccess();
        //onSuccess();
    }

    return (
        <Modal {...modalProps}>
            <Modal.Body className={styles.modal}>
                <div className={styles.header}>
                    {!loading && <FontAwesomeIcon icon={faStar} fixedWidth className={styles.icon} />}
                    <LoadingSpinner active={loading} variant="warning" className={styles.loading} />
                    <span className={styles.name}>Edit Favourites</span>
                    <FontAwesomeIcon
                        fixedWidth
                        title="Close"
                        icon={faTimes}
                        onClick={onDismiss}
                        className={styles.close}
                    />
                </div>

                <Fade in appear>
                    <div className={styles.body}>
                        {error && <Alert variant="danger">{error}</Alert>}

                        <ScrollableContainer maxHeight={500} className={styles.favourites}>
                            {!loading && filtered.map((preset: SessionMode) => (
                                <FavouriteButton preset={preset} editing={false} className={styles.favourite} />
                            ))}
                        </ScrollableContainer>
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
