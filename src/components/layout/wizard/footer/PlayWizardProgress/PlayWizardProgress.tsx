import {
  faCheckCircle,
  faChevronCircleRight,
  faDatabase,
  faHeartbeat,
  faLightbulb,
  faProjectDiagram,
  faQuestionCircle,
  faStopwatch,
  faSwatchbook,
  faTools
} from "@fortawesome/free-solid-svg-icons"
import WizardProgressStep from "./../WizardProgressStep"
import styles  from "./PlayWizardProgress.module.scss"
import { AppMode } from "../../../../../domain/AppMode"

export interface PlayWizardProgressProps {
  stage: number
  mode: AppMode
  valid: boolean
  custom: boolean
  onSelectStage: (stage: number) => void
}

const PlayWizardProgress = (props: PlayWizardProgressProps) => {
  const { stage, mode, custom, valid, onSelectStage } = props

  const handleSelectStage = (stage: number) => {
    onSelectStage(stage)
  }

  return (
    <div>
      <WizardProgressStep
        stage={0}
        title="Play or Learn"
        currentStage={stage}
        className={styles.step}
        icon={faChevronCircleRight}
        onClick={handleSelectStage}
      />

      <WizardProgressStep
        stage={1}
        title="Topic"
        icon={faSwatchbook}
        currentStage={stage}
        className={styles.step}
        onClick={handleSelectStage}
      />

      <WizardProgressStep
        stage={2}
        icon={faTools}
        currentStage={stage}
        className={styles.step}
        title="Preset or Custom"
        onClick={handleSelectStage}
      />

      {stage === 2 && !custom && (
        <WizardProgressStep
          stage={3}
          title="Preset"
          currentStage={stage}
          className={styles.step}
          icon={faProjectDiagram}
          onClick={handleSelectStage}
        />
      )}

      {custom && (
        <>
          {mode === AppMode.PLAY && (
            <>
              <WizardProgressStep
                stage={4}
                currentStage={stage}
                className={styles.step}
                icon={faQuestionCircle}
                title="Question Settings"
                onClick={handleSelectStage}
              />

              <WizardProgressStep
                stage={5}
                icon={faLightbulb}
                currentStage={stage}
                title="Hint Settings"
                className={styles.step}
                onClick={handleSelectStage}
              />

              <WizardProgressStep
                stage={6}
                icon={faHeartbeat}
                currentStage={stage}
                title="Life Settings"
                className={styles.step}
                onClick={handleSelectStage}
              />

              <WizardProgressStep
                stage={7}
                icon={faStopwatch}
                currentStage={stage}
                title="Time Settings"
                className={styles.step}
                onClick={handleSelectStage}
              />
            </>
          )}

          <WizardProgressStep
            stage={8}
            icon={faDatabase}
            currentStage={stage}
            title="Data Settings"
            className={styles.step}
            onClick={handleSelectStage}
          />

          <WizardProgressStep
            stage={9}
            disabled={!valid}
            title="Confirmation"
            icon={faCheckCircle}
            currentStage={stage}
            className={styles.step}
            onClick={handleSelectStage}
          />
        </>
      )}
    </div>
  )
}

export default PlayWizardProgress
