import styles  from "./ModeSelectionStep.module.scss"
import { useEffect } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faPlay } from "@fortawesome/free-solid-svg-icons"
import { AppMode } from "types/AppMode"
import { useTranslation } from "react-i18next"

export interface ModeSelectionStepProps {
  mode: AppMode
  onSelect: (mode: AppMode) => void
}

const ModeSelectionStep = (props: ModeSelectionStepProps) => {
  const { mode, onSelect } = props

  const { t } = useTranslation("translation", { keyPrefix: "wizard.steps.mode" })

  const playButtonClass = mode === AppMode.PLAY ? styles.selected : styles.button
  const learnButtonClass = mode === AppMode.LEARN ? styles.selected : styles.button

  const playIconClass = [styles.icon, styles.play].join(" ")
  const learnIconClass = [styles.icon, styles.learn].join(" ")

  useEffect(() => {
    onSelect(mode)
  }, [mode])

  return (
    <div className={styles.wrapper} data-testid="wizard-mode-step">
      <Container fluid className={styles.container}>
        <Row>
          <Col>
            <Button onClick={() => onSelect(AppMode.PLAY)} className={playButtonClass}>
              <FontAwesomeIcon icon={faPlay} fixedWidth className={playIconClass} />
              <p className={styles.text}>{t("play")}</p>
            </Button>
          </Col>
          <Col>
            <Button onClick={() => onSelect(AppMode.LEARN)} className={learnButtonClass}>
              <FontAwesomeIcon icon={faGraduationCap} fixedWidth className={learnIconClass} />
              <p className={styles.text}>{t("learn")}</p>
            </Button>
          </Col>
          <Col xs={12}>
            <p className={styles.desc}>{t(`${mode.toLowerCase()}-desc`)}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ModeSelectionStep
