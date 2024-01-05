import styles  from "./SessionSettingsSummary.module.scss"
import { WizardStep } from "../../layout/wizard/SessionWizard/types.ts"
import QuestionType from "../../../domain/game/QuestionType"
import { SessionSettings } from "../../../domain/session/settings/SessionSettings"
import { useTranslation } from "react-i18next"

export interface SessionSettingsSummaryProps {
  settings: SessionSettings
  onSelectStage?: (stage: WizardStep) => void
}

const SessionSettingsSummary = (props: SessionSettingsSummaryProps) => {
  const { settings, onSelectStage } = props

  const { t } = useTranslation()

  const gameSettings = settings.gameSettings
  const dataSettings = settings.dataSettings

  if (!gameSettings) {
    return <span>Your game settings could not be found. Please reload and try again.</span>
  }

  const time = gameSettings.time
  const hints = gameSettings.hints.quantity
  const hasUnlimitedHints = gameSettings.hints.unlimited

  const questionType = gameSettings?.question.type
  const cards = gameSettings.question.cards
  const lives = gameSettings.lives.quantity

  const getQuestionTypeWord = (): string => {
    switch (questionType) {
      case QuestionType.TEXT:
        return "type"
      case QuestionType.MATCH:
        return "match"
      case QuestionType.CHOICE:
        return `pick from ${cards} cards`
      case QuestionType.AUDIO:
        return "listen to"
      default:
        return "answer"
    }
  }

  const getTimeWords = () => {
    if (time?.timed) {
      return (
        <span>
          {"your session will be "}
          <span className={[styles.time, styles.highlight].join(" ")}>{"timed"}</span>
        </span>
      )
    }

    if (time?.countdown) {
      return (
        <span>
          {"you'll have "}
          <span className={[styles.time, styles.highlight].join(" ")}>
            {time?.secondsPerQuestion}
            {" seconds per question"}
          </span>
        </span>
      )
    }

    return (
      <span>
        {"you'll have "}
        <span className={styles.time}>no time restrictions</span>
      </span>
    )
  }

  const getScoreWords = (): string => {
    if (gameSettings?.question.score) {
      return "your score will be tracked"
    } else {
      return "scoring will be disabled"
    }
  }

  const answerField = gameSettings?.question.answerField.name
  const questionField = gameSettings?.question.questionField.name
  const livesDisplay = lives > 0 ? lives : "unlimited"
  const hintsDisplay = hasUnlimitedHints ? "unlimited" : hints > 0 ? hints : "no"

  const { TOPIC, QUESTION, LIVES, HINT, TIME, DATA } = WizardStep

  return (
    <p className={styles.question} data-testid="session-settings-summary">
      <span>{"You'll be given the "}</span>
      <span className={[styles.field, styles.highlight].join(" ")} onClick={() => onSelectStage?.(QUESTION)}>
        {t(questionField)}
      </span>
      <span>{" and must "}</span>
      <span className={[styles.type, styles.highlight].join(" ")} onClick={() => onSelectStage?.(QUESTION)}>
        {getQuestionTypeWord()}
      </span>
      <span>{" the "}</span>
      <span className={[styles.field, styles.highlight].join(" ")} onClick={() => onSelectStage?.(QUESTION)}>
        {t(answerField)}
      </span>
      <span>{" for "}</span>
      <span className={[styles.quantity, styles.highlight].join(" ")} onClick={() => onSelectStage?.(DATA)}>
        {dataSettings?.quantity}
      </span>
      <span>{" questions about "}</span>
      <span className={[styles.topic, styles.highlight].join(" ")} onClick={() => onSelectStage?.(TOPIC)}>
        {dataSettings?.topic.name}
      </span>
      <span>{". "}</span>
      <span>{"You'll have "}</span>
      <span className={[styles.lives, styles.highlight].join(" ")} onClick={() => onSelectStage?.(LIVES)}>
        {livesDisplay}
        {" lives"}
      </span>
      <span>{", "}</span>
      <span className={[styles.hint, styles.highlight].join(" ")} onClick={() => onSelectStage?.(HINT)}>
        {hintsDisplay}
        {" hints"}
      </span>
      <span>{", "}</span>
      <span onClick={() => onSelectStage?.(TIME)}>{getTimeWords()}</span>
      <span>{" and "}</span>
      <span className={[styles.score, styles.highlight].join(" ")} onClick={() => onSelectStage?.(QUESTION)}>
        {getScoreWords()}
      </span>
      <span>{"."}</span>
    </p>
  )
}

export default SessionSettingsSummary
