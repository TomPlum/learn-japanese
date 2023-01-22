import React, { forwardRef, Ref, useImperativeHandle, useRef, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { GameQuestionProps, MemoryGameQuestion } from "../MemoryGame"
import QuestionDisplay, { QuestionDisplayHandler } from "../../ui/display/QuestionDisplay"
import AnswerInputField from "../../ui/fields/AnswerInputField"
import LearnableField from "../../../domain/learn/LearnableField"
import styles from "../../../styles/sass/components/game/questions/TextQuestion.module.scss"
import { useTranslation } from "react-i18next"

export interface TextQuestionProps extends GameQuestionProps {
  question: string
  answerField: LearnableField
  answers: string[]
  className?: string
}

const TextQuestion = forwardRef((props: TextQuestionProps, ref: Ref<MemoryGameQuestion>) => {
  const { answers, question, hidden, className, answerField, isValid } = props

  const display = useRef<QuestionDisplayHandler>(null)

  const [answer, setAnswer] = useState("")
  const { t } = useTranslation()

  useImperativeHandle(ref, () => ({
    isCorrect: () => {
      setAnswer("")

      if (answers.includes(answer.toLowerCase())) {
        return true
      } else {
        display.current?.notifyIncorrect()
        return false
      }
    }
  }))

  const handleInputChange = (value: string) => {
    isValid(!!value)
    setAnswer(value)
  }

  return (
    <div className={[className, styles.wrapper].join(" ")}>
      <QuestionDisplay blur={hidden} key={question} ref={display} question={question} />

      <Form>
        <Form.Group controlId="answer">
          <Row>
            <Col xs={12}>
              <AnswerInputField
                value={answer}
                field={answerField}
                disabled={!question || hidden}
                onChange={handleInputChange}
                className={styles.input}
                placeholder={hidden ? "Paused" : t(answerField.name)}
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  )
})

export default TextQuestion
