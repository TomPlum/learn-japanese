import { Fade, Modal } from "react-bootstrap";
import { ModalProps } from "react-bootstrap/Modal";
import styles from "../../../styles/sass/components/settings/modal/SettingsModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChess, faCog, faDesktop, faGraduationCap, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import SettingsTab from "./SettingsTab";
import InterfaceSettingsTab from "./InterfaceSettingsTab";
import ScrollableContainer from "../../ui/ScrollableContainer";

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

    const getTabContents = () => {
        switch (selected) {
            case SettingsType.INTERFACE: {
                return <InterfaceSettingsTab />;
            }
        }
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
                        icon={faChess}
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
                    <FontAwesomeIcon
                        fixedWidth
                        title="Close"
                        icon={faTimes}
                        onClick={onClose}
                        className={styles.close}
                    />
                </div>

                <Fade in appear>
                    <ScrollableContainer className={styles.body}>
                        {getTabContents()}
                    </ScrollableContainer>
                </Fade>
            </Modal.Body>
        </Modal>
    );
}

export default SettingsModal;
