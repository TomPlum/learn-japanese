import { Fade, Modal } from "react-bootstrap";
import { ModalProps } from "react-bootstrap/Modal";
import styles from "../../../styles/sass/components/settings/modal/SettingsModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChessKing, faCog, faDesktop, faGraduationCap, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import SettingsTab from "./SettingsTab";

export interface SettingsModalProps {
    show: boolean;
    onClose: () => void;
}

const SettingsModal = (props: SettingsModalProps) => {

    const { show, onClose } = props;

    const [selected, setSelected] = useState(0);

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
                    <SettingsTab icon={faCog} title="General" />
                    <SettingsTab icon={faGraduationCap} title="Learn" />
                    <SettingsTab icon={faChessKing} title="Play" />
                    <SettingsTab icon={faDesktop} title="Interface" />
                    <SettingsTab icon={faBell} title="Notification"/>
                    <SettingsTab icon={faUser} title="User" />
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
