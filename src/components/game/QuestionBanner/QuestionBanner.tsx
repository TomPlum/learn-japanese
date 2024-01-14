import { Alert, OverlayTrigger } from "react-bootstrap"
import React from "react"
import LearnableField from "types/learn/LearnableField"
import { Learnable } from "types/learn/Learnable"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import PopOver from "../../ui/PopOver"
import styles  from "./QuestionBanner.module.scss"
import { useTranslation } from "react-i18next"

export interface QuestionBannerProps {
  question: Learnable
  questionField: LearnableField
  answerField: LearnableField
  className?: string
}

const QuestionBanner = (props: QuestionBannerProps) => {
  const { answerField, className, questionField, question } = props

  const { t } = useTranslation()

  const getQuestionValues = (): [string[], string[]] => {
    const questionValues = question.getFieldValues(questionField).map((it) => it.toLowerCase())
    if (questionValues.length > 2) {
      return [questionValues.slice(0, 2), questionValues.slice(2)]
    } else if (questionValues.length > 0) {
      return [questionValues.slice(0, 2), []]
    } else {
      return [["N/A"], []]
    }
  }

  const getOverlay = (values: string[]) => {
    const text = values.map((it) => it.toLowerCase()).join(", ")
    return <PopOver title="Also Known As" text={text} />
  }

  const questionValues = getQuestionValues()
  const displayValues = questionValues[0]
  const extraValues = questionValues[1]

  return (
    <Alert variant="info" className={[className, styles.wrapper].join(" ")}>
      {"What is the "}
      <strong>{t(answerField.name).toLowerCase()}</strong>
      {" for "}

      {displayValues.map((questionValue: string, i: number) => {
        return (
          <React.Fragment key={`value-${i}`}>
            {'"'}
            <strong key={i}>{questionValue}</strong>
            {'"'}
            <span key={`or${i}`}>{i < displayValues.length - 1 ? " or " : ""}</span>
          </React.Fragment>
        )
      })}
      {" ?"}

      {extraValues.length > 0 && (
        <OverlayTrigger
          placement="bottom"
          rootClose={true}
          trigger={["click", "hover"]}
          overlay={getOverlay(extraValues)}
        >
          <FontAwesomeIcon fixedWidth data-testid="help" icon={faInfoCircle} className={styles.aka} />
        </OverlayTrigger>
      )}
    </Alert>
  )
}

export default QuestionBanner
