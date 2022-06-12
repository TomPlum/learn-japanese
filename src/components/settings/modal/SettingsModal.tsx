import { Fade, Modal } from "react-bootstrap";
import { ModalProps } from "react-bootstrap/Modal";
import styles from "../../../styles/sass/components/settings/modal/SettingsModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChessKing, faCog, faDesktop, faGraduationCap, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import SettingsTab from "./SettingsTab";

export enum SettingsType {
    GENERAL, LEARN, PLAY, INTERFACE, NOTIFICATION, USER
}

export interface SettingsModalProps {
    show: boolean;
    type: SettingsType;
    onClose: () => void;
}

const SettingsModal = (props: SettingsModalProps) => {

    const { show, type, onClose } = props;

    const [selected, setSelected] = useState(type);

    const { GENERAL, LEARN, PLAY, INTERFACE, NOTIFICATION, USER } = SettingsType;

    const handleSelectTab = (type: SettingsType) => {
        setSelected(type);
    }

    const modalProps: ModalProps = {
        show: show,
        size: "lg",
        centered: true,
        backdrop: "static",
        enforceFocus: false,
        dialogClassName: styles.dialog,
        contentClassName: styles.content,
        "data-testid": "settings"
    }

    return (
        <Modal {...modalProps}>
            <Modal.Body className={styles.modal}>
                <div className={styles.nav}>
                    <SettingsTab
                        icon={faCog}
                        type={GENERAL}
                        title="General"
                        selected={selected === GENERAL}
                        onClick={handleSelectTab}
                    />
                    <SettingsTab
                        type={LEARN}
                        title="Learn"
                        icon={faGraduationCap}
                        onClick={handleSelectTab}
                        selected={selected === LEARN}
                    />
                    <SettingsTab
                        type={PLAY}
                        title="Play"
                        icon={faChessKing}
                        onClick={handleSelectTab}
                        selected={selected === PLAY}
                    />
                    <SettingsTab
                        icon={faDesktop}
                        type={INTERFACE}
                        title="Interface"
                        onClick={handleSelectTab}
                        selected={selected === INTERFACE}
                    />
                    <SettingsTab
                        icon={faBell}
                        type={NOTIFICATION}
                        title="Notification"
                        onClick={handleSelectTab}
                        selected={selected === NOTIFICATION}
                    />
                    <SettingsTab
                        type={USER}
                        icon={faUser}
                        title="User"
                        onClick={handleSelectTab}
                        selected={selected === USER}
                    />
                </div>

                <div className={styles.header}>
                    <p className={styles.name}>
                        <FontAwesomeIcon icon={faCog} fixedWidth />
                        <span>General Settings</span>
                    </p>
                    <FontAwesomeIcon icon={faTimes} fixedWidth onClick={onClose} title="Close" className={styles.close} />
                </div>

                <Fade in appear>
                    <div className={styles.body}>

                    </div>
                </Fade>
            </Modal.Body>
        </Modal>
    );
}

export default SettingsModal;
