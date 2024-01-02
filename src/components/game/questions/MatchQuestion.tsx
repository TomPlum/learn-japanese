import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { GameQuestionProps, MemoryGameQuestion } from "../MemoryGame";
import { Col, Container, Row } from "react-bootstrap"
import AnswerChoiceDisplay from "../../ui/display/AnswerChoiceDisplay"
import LineTo from "react-lineto"
import Maps from "../../../utility/Maps"
import styles from "../../../styles/sass/components/game/questions/MatchQuestion.module.scss"

export interface MatchQuestionProps extends GameQuestionProps {
  data: Map<string, string>
}

const MatchQuestion = React.forwardRef(({ data, isValid }: MatchQuestionProps, ref: React.Ref<MemoryGameQuestion>) => {
  const container = React.createRef<HTMLDivElement>()
  const values = useRef<Map<string, string>>(Maps.shuffle(data))

  const [xCursor, setXCursor] = useState<number>(0)
  const [yCursor, setYCursor] = useState<number>(0)
  const [selected, setSelected] = useState<string>()
  const [hoveredAnswer, setHoveredAnswer] = useState<string>()
  const [answer, setAnswer] = useState<Map<string, string>>(new Map())
  const [displays, setDisplays] = useState<Map<string, React.RefObject<AnswerChoiceDisplay>>>(new Map())

  useEffect(() => {
    const keyValues = [...data.keys()].concat([...data.values()])
    keyValues.forEach((value: string) => {
      setDisplays(current => {
        current.set(value, React.createRef<AnswerChoiceDisplay>())
        return current
      })
    })

    container?.current?.addEventListener("mousemove", handleCursorMove)
    container?.current?.addEventListener("touchmove", handleTouchMove)

    return () => {
      container?.current?.removeEventListener("mousemove", handleCursorMove)
      container?.current?.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  useImperativeHandle(ref, () => ({
    isCorrect:(): boolean => {
      const isCorrect = Maps.areEqual(data, answer)

      if (!isCorrect) {
        displays.forEach((ref: React.RefObject<AnswerChoiceDisplay>) => ref.current?.notifyIncorrect())
        setSelected(undefined)
        setHoveredAnswer(undefined)
        setAnswer(new Map())
      }

      return isCorrect
    }
  }))

  const handleAnswerAttempt = (selectedAnswer: string) => {
    const selectedAnswers = [...answer.values()]

    if (selected && !selectedAnswers.includes(selectedAnswer)) {
      answer.set(selected, selectedAnswer)
      setAnswer(answer)
      setSelected(undefined)
    }

    isValid(data.size === answer.size)
  }

  const getQuestionValueClassName = (value: string): string => {
    if (answer.has(value)) {
      return styles.matched
    } else if (selected === value) {
      return styles.selected
    } else {
      return styles.question
    }
  }

  const getAnswerValueClassName = (value: string): string => {
    if ([...answer.values()].includes(value)) {
      return styles.matched
    } else if (selected && hoveredAnswer === value) {
      return styles.selected
    } else {
      return styles.answer
    }
  }

  const handleQuestionSelection = (value: string) => {
    if (!answer.has(value)) {
      setSelected(value)
    }
  }

  const resetSelected = () => {
    setSelected(undefined)
  }

  const resetHoveredAnswer = () => {
    setHoveredAnswer(undefined)
  }

  const handleCursorMove = (e: MouseEvent) => {
    setXCursor(e.pageX)
    setYCursor(e.pageY)
  }

  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0]
    setXCursor(touch.pageX)
    setYCursor(touch.pageY)
  }

  const handleAnswerChange = (selectedAnswer: string) => {
    const answers = [...answer.values()]
    if (answers.includes(selectedAnswer)) {
      //Reverse mapping - gets the question for the selected answer
      const question = [...answer.entries()].filter((entry) => entry[1] === selectedAnswer)[0][0]
      answer.delete(question)
      setSelected(question)
      setAnswer(answer)
    }
  }

  const getConnectorTarget = (question: string): string => {
    if (answer.has(question)) {
      return answer.get(question)!
    }
    return styles.cursor
  }

  const getConnectorRenderCondition = (question: string): boolean => {
    const questionIsSelected = question === selected
    const questionHasMatchedAnswer = answer.has(question)
    return questionIsSelected || questionHasMatchedAnswer
  }

  const getConnectorStyle = (question: string): string => {
    return answer.has(question) ? "solid" : "dashed"
  }

  const getConnectorColour = (question: string) => {
    return answer.has(question) ? "#7a7a7a" : "#4594e9"
  }

  return (
    <Container className={styles.wrapper} ref={container} onMouseUp={resetSelected}>
      <div style={{ left: xCursor, top: yCursor }} className={styles.cursor} />

      {[...values.current.keys()].map((question: string, i: number) => {
        const answer = values.current.get(question)!

        return (
          <Row className={[styles.row, "justify-content-around"].join(" ")} key={`row-${i}`}>
            <Col xs={5} md={4}>
              <AnswerChoiceDisplay
                value={question}
                ref={displays.get(question)}
                onMouseUp={resetSelected}
                onTouchEnd={resetSelected}
                onMouseDown={handleQuestionSelection}
                onTouchStart={handleQuestionSelection}
                style={{
                  container: [question, styles.display],
                  character: { className: getQuestionValueClassName(question) }
                }}
              />
            </Col>

            <Col xs={2} md={4} />

            <Col xs={5} md={4}>
              <AnswerChoiceDisplay
                value={answer}
                ref={displays.get(answer)}
                onMouseOut={resetHoveredAnswer}
                onMouseUp={handleAnswerAttempt}
                onTouchEnd={handleAnswerAttempt}
                onMouseDown={handleAnswerChange}
                onTouchStart={handleAnswerChange}
                onMouseOver={(value: string) => setHoveredAnswer(value)}
                style={{
                  container: [answer, styles.display],
                  character: { className: getAnswerValueClassName(answer) }
                }}
              />
            </Col>

            {getConnectorRenderCondition(question) && (
              <LineTo
                delay={0}
                toAnchor="left"
                from={question}
                borderWidth={5}
                fromAnchor="right"
                className={styles.connector}
                to={getConnectorTarget(question)}
                data-testid={question + "-connector"}
                borderStyle={getConnectorStyle(question)}
                borderColor={getConnectorColour(question)}
              />
            )}
          </Row>
        )
      })}
    </Container>
  )
})

MatchQuestion.displayName = 'MatchQuestion'

export default MatchQuestion
