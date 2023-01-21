import { Fade, Modal } from "react-bootstrap"
import { ModalProps } from "react-bootstrap/Modal"
import styles from "../../../styles/sass/components/settings/modal/SettingsModal.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faChess, faCog, faDesktop, faGraduationCap, faTimes, faUser } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import SettingsTab from "./SettingsTab"
import InterfaceSettingsTab from "./InterfaceSettingsTab"
import ScrollableContainer from "../../ui/ScrollableContainer"
import GeneralSettingsTab from "./GeneralSettingsTab"
import LearnSettingsTab from "./LearnSettingsTab"
import PlaySettingsTab from "./PlaySettingsTab"
import NotificationsSettingsTab from "./NotificationsSettingsTab"
import UserSettingsTab from "./UserSettingsTab"
import DashboardLayoutEditor from "../../layout/editor/DashboardLayoutEditor"

export enum SettingsType {
  GENERAL,
  LEARN,
  PLAY,
  INTERFACE,
  NOTIFICATION,
  USER
}

export interface SettingsModalProps {
  type: SettingsType
  onClose: () => void
}

const SettingsModal = (props: SettingsModalProps) => {
  const { type, onClose } = props

  const [selected, setSelected] = useState(type)
  const [editingLayout, setEditingLayout] = useState(false)

  const { GENERAL, LEARN, PLAY, INTERFACE, NOTIFICATION, USER } = SettingsType

  const handleSelectTab = (type: SettingsType) => {
    setSelected(type)
  }

  const getTabContents = () => {
    if (editingLayout) {
      return <DashboardLayoutEditor onClose={() => setEditingLayout(false)} />
    }

    switch (selected) {
      case SettingsType.GENERAL: {
        return <GeneralSettingsTab />
      }
      case SettingsType.LEARN: {
        return <LearnSettingsTab />
      }
      case SettingsType.PLAY: {
        return <PlaySettingsTab />
      }
      case SettingsType.INTERFACE: {
        return <InterfaceSettingsTab onEditDashboardLayout={() => setEditingLayout(true)} />
      }
      case SettingsType.NOTIFICATION: {
        return <NotificationsSettingsTab />
      }
      case SettingsType.USER: {
        return <UserSettingsTab />
      }
    }
  }

  const modalProps: ModalProps = {
    show: true,
    size: "lg",
    centered: true,
    backdrop: "static",
    enforceFocus: false,
    dialogClassName: styles.dialog,
    contentClassName: styles.content,
    "data-testid": "settings-modal"
  }

  return (
    <Modal {...modalProps}>
      <Modal.Body className={styles.modal}>
        {!editingLayout && (
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
            <FontAwesomeIcon fixedWidth title="Close" icon={faTimes} onClick={onClose} className={styles.close} />
          </div>
        )}

        <Fade in appear>
          <ScrollableContainer className={styles.body}>{getTabContents()}</ScrollableContainer>
        </Fade>
      </Modal.Body>
    </Modal>
  )
}

export default SettingsModal
