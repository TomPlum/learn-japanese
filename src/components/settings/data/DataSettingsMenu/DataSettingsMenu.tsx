import { Component, PropsWithChildren } from "react";
import ScrollableContainer from "../../../ui/ScrollableContainer"
import { Button, Card, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faCheck, faUndo, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import DataSettings from "../../../../domain/session/settings/data/DataSettings"
import styles  from "./DataSettingsMenu.module.scss"

export interface DataSettingsMenuProps<T extends DataSettings> {
  title: string
  icon: IconDefinition
  onQuit: () => void
  onReset: () => void
  isValid?: () => boolean
  onConfirm: (settings: T) => void
}

class DataSettingsMenu extends Component<PropsWithChildren<DataSettingsMenuProps<any>>> {
  render() {
    const { title, icon, children, onQuit, onReset, onConfirm, isValid } = this.props

    return (
      <div className={styles.wrapper}>
        <Card bg="dark" className={[styles.card, "mb-2"].join(" ")}>
          <p className={styles.title}>
            <FontAwesomeIcon icon={icon} className={styles.icon} fixedWidth />
            <span>{title} Settings</span>
          </p>

          <ScrollableContainer className={styles.scrollable}>{children}</ScrollableContainer>

          {/*TODO: Pull this out into component?*/}
          <Card.Footer className={styles.footer}>
            <Row>
              <Col className={styles.noGuttersLeft}>
                <Button variant="danger" onClick={onQuit} className={styles.button}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span className={styles.buttonText}> Back</span>
                </Button>
              </Col>

              <Col className={[styles.noGuttersLeft, styles.noGuttersRight].join(" ")}>
                <Button variant="warning" onClick={onReset} className={styles.button}>
                  <FontAwesomeIcon icon={faUndo} />
                  <span className={styles.buttonText}> Reset</span>
                </Button>
              </Col>

              <Col className={styles.noGuttersRight}>
                <Button
                  variant="success"
                  onClick={onConfirm}
                  className={styles.button}
                  disabled={isValid ? !isValid() : false}
                >
                  <FontAwesomeIcon icon={faCheck} />
                  <span className={styles.buttonText}> Confirm</span>
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </div>
    )
  }
}

export default DataSettingsMenu
