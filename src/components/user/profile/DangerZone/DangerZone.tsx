import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, Col, Row } from "react-bootstrap"
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import InfoButton from "../../../ui/buttons/InfoButton"
import PopOver from "../../../ui/PopOver"
import PasswordConfirmation from "./../PasswordConfirmation"
import styles  from "./DangerZone.module.scss"

const DangerZone = () => {
  const [locked, setLocked] = useState(true)
  const [confirmation, setConfirmation] = useState(false)

  const onToggleLock = () => {
    if (!confirmation) {
      setLocked(!locked)
    }
  }

  const localStoragePopover = (
    <PopOver
      title="Clear Local Storage"
      text="Deletes all locally stored data from your browser except for your user session. Does not permanently
        delete any saved data, but may increase loading times temporarily."
    />
  )

  const resetHighScorePopover = (
    <PopOver
      title="Reset Highscore Data"
      text="Resets all your saved scores across the app. Any ranks you currently hold on the high-scores will be lost."
    />
  )

  const resetStats = (
    <PopOver
      title="Reset Stats"
      text="Resets all your tracked statistics such as games played or won. This does not include flash card data."
    />
  )

  const resetFlashCard = (
    <PopOver title="Reset Flash Cards" text="Resets all your flash card data. Does not affect stats." />
  )

  const deleteAccountPopover = (
    <PopOver
      title="Delete Account"
      text="Delete your user account and all of your personal data. This is an irreversible operation.
         You'll need to provide your password for confirmation."
    />
  )

  const confirm = () => {
    setConfirmation(true)
  }

  return (
    <Card className={styles.card} border="danger">
      <Card.Body>
        <h2 className={styles.heading}>
          Danger Zone
          {locked ? (
            <FontAwesomeIcon
              size="sm"
              fixedWidth
              icon={faLock}
              title="Un-Lock"
              onClick={onToggleLock}
              className={[styles.unlock, styles.icon].join(" ")}
            />
          ) : (
            <FontAwesomeIcon
              size="sm"
              fixedWidth
              title="Lock"
              icon={faLockOpen}
              onClick={onToggleLock}
              className={[styles.unlock, confirmation ? styles.disabledIcon : styles.icon].join(" ")}
            />
          )}
        </h2>

        {confirmation ? (
          <PasswordConfirmation alertInfo={deleteAccountPopover} onDismiss={() => setConfirmation(false)} />
        ) : (
          <div className={locked ? styles.locked : styles.unlocked}>
            <Row className={styles.row}>
              <Col xs={5} className={styles.col}>
                <p className={styles.label}>Clear Local Storage</p>
              </Col>
              <Col xs={1} className={styles.col}>
                <InfoButton popover={localStoragePopover} className={styles.info} />
              </Col>
              <Col xs={6}>
                <Button variant="warning" className={styles.button} disabled={locked}>
                  Clear
                </Button>
              </Col>
            </Row>

            <Row className={styles.row}>
              <Col xs={5} className={styles.col}>
                <p className={styles.label}>Reset Highscores</p>
              </Col>
              <Col xs={1} className={styles.col}>
                <InfoButton popover={resetHighScorePopover} className={styles.info} />
              </Col>
              <Col xs={6}>
                <Button variant="danger" className={styles.button} disabled={locked}>
                  Reset
                </Button>
              </Col>
            </Row>

            <Row className={styles.row}>
              <Col xs={5} className={styles.col}>
                <p className={styles.label}>Reset Stats</p>
              </Col>
              <Col xs={1} className={styles.col}>
                <InfoButton popover={resetStats} className={styles.info} />
              </Col>
              <Col xs={6}>
                <Button variant="danger" className={styles.button} disabled={locked}>
                  Reset
                </Button>
              </Col>
            </Row>

            <Row className={styles.row}>
              <Col xs={5} className={styles.col}>
                <p className={styles.label}>Reset Flash Cards</p>
              </Col>
              <Col xs={1} className={styles.col}>
                <InfoButton popover={resetFlashCard} className={styles.info} />
              </Col>
              <Col xs={6}>
                <Button variant="danger" className={styles.button} disabled={locked}>
                  Reset
                </Button>
              </Col>
            </Row>

            <Row className={styles.row}>
              <Col xs={5} className={styles.col}>
                <p className={styles.label}>Delete Account</p>
              </Col>
              <Col xs={1} className={styles.col}>
                <InfoButton popover={deleteAccountPopover} className={styles.info} />
              </Col>
              <Col xs={6}>
                <Button variant="danger" className={styles.button} disabled={locked} onClick={confirm}>
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default DangerZone
