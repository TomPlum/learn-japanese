import Arrays from "../../utility/Arrays"
import { useEffect, useState } from "react"
import { FlashCard as FlashCardDomain } from "../../domain/learn/FlashCard"
import Confidence from "../../domain/learn/spacedrepetition/Confidence"
import styles from "../../styles/sass/components/learn/Learn.module.scss"
import { Alert, Button, Col, Container, Row } from "react-bootstrap"
import ConfirmModal from "../ui/ConfirmModal"
import QuitButton from "../ui/buttons/QuitButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import SessionProgressBar from "../ui/SessionProgressBar"
import FlashCard from "./FlashCard"
import ConfidenceSelector from "./ConfidenceSelector"
import SpaceRepetitionFeedback from "../../domain/learn/spacedrepetition/SpaceRepetitionFeedback"
import { OnlineLearningSessionResult } from "../../domain/learn/LearningSessionResult"
import SpacedRepetitionService from "../../service/SpacedRepetitionService"
import KanjiFlashCardFront from "./kanji/KanjiFlashCardFront"
import KanjiFlashCardBack from "./kanji/KanjiFlashCardBack"
import LoadingSpinner from "../ui/loading/LoadingSpinner"

export interface KanjiFlashCardsProps {
  onFinish: (result: OnlineLearningSessionResult) => void
}

const KanjiFlashCards = (props: KanjiFlashCardsProps) => {
  const service = new SpacedRepetitionService()

  const [current, setCurrent] = useState<FlashCardDomain | undefined>(undefined)
  const [remaining, setRemaining] = useState<FlashCardDomain[]>([])

  const [showRomaji, setShowRomaji] = useState(false)
  const [confidence, setConfidence] = useState<Confidence | undefined>(undefined)
  const [hasPeeked, setHasPeeked] = useState(false)

  const [hasRemembered, setHasRemembered] = useState(false)
  const [hasForgotten, setHasForgotten] = useState(false)
  const [remembered, setRemembered] = useState<FlashCardDomain[]>([])
  const [forgotten, setForgotten] = useState<FlashCardDomain[]>([])

  const [paused, setPaused] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    setError("")

    service
      .getKanjiFlashCards()
      .then((response) => {
        if (response.cards) {
          setCurrent(response.cards[0])
          setRemaining(response.cards.slice(1))
        } else {
          setError(response.error ?? "An unknown error has occurred.")
        }
      })
      .catch((response) => {
        setError(response.error ?? "An unknown error has occurred.")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const onNext = () => {
    service.update(new SpaceRepetitionFeedback(current!, confidence!))

    const [nextRemaining, next] = Arrays.takeFirst(remaining)

    setCurrent(next)
    setRemaining(nextRemaining)
    setHasPeeked(false)
    setHasRemembered(false)
    setHasForgotten(false)

    if (hasRemembered) {
      setRemembered(remembered.concat(current!))
    }

    if (hasForgotten) {
      setForgotten(forgotten.concat(current!))
    }
  }

  const onFinish = () => {
    const newRemembered = hasRemembered ? remembered.concat(current!) : remembered
    const newForgotten = hasForgotten ? forgotten.concat(current!) : forgotten
    props.onFinish({ remembered: newRemembered, forgotten: newForgotten })
  }

  const onQuit = () => setPaused(true)

  const onFlip = (flips: number) => setHasPeeked(flips > 0)

  const onSelectConfidenceRating = (confidence: Confidence) => {
    setConfidence(confidence)

    if (confidence.value < 3) {
      setHasForgotten(true)
      setHasRemembered(false)
    } else {
      setHasRemembered(true)
      setHasForgotten(false)
    }
  }

  const hasCardsRemaining = remaining.length > 0

  return (
    <div className={styles.wrapper} data-testid="learn">
      <LoadingSpinner active={loading} />
      {!!error && <Alert variant="danger">{error}</Alert>}

      {current && !loading && (
        <Container className={styles.innerWrapper}>
          {paused && (
            <ConfirmModal
              onConfirm={onFinish}
              onDismiss={() => setPaused(false)}
              title={"Are you sure you want to quit?"}
              body={"You'll lose your progress, but you'll see the results of your session thus far."}
            />
          )}

          <Row className={styles.header}>
            <Col md={4} xs={2} className={styles.col}>
              <QuitButton onClick={onQuit} className={styles.quit} />
            </Col>

            <Col md={2} xs={3} className={styles.col}>
              <FontAwesomeIcon className={styles.forgottenIcon} icon={faThumbsDown} fixedWidth />
              <span className={styles.forgotten} title="Forgotten">
                {forgotten.length}
              </span>
            </Col>

            <Col md={2} xs={3} className={styles.col}>
              <FontAwesomeIcon className={styles.rememberedIcon} icon={faThumbsUp} fixedWidth />
              <span className={styles.remembered} title="Remembered">
                {remembered.length}
              </span>
            </Col>

            <Col xs={4} className={styles.col}>
              <Button variant="warning" className={styles.showRomaji} onClick={() => setShowRomaji(!showRomaji)}>
                {showRomaji ? "Hide" : "Show"} Rōmaji
              </Button>
            </Col>
          </Row>

          <Row className={styles.header}>
            <Col className={styles.col}>
              <SessionProgressBar
                className={styles.progress}
                remaining={remaining.length}
                inProgress={hasCardsRemaining && !paused}
                quantity={remaining.length + remembered.length + forgotten.length + 1}
              />
            </Col>
          </Row>

          <Row className={styles.cardWrapper}>
            <Col className={styles.col}>
              <FlashCard
                onFlip={onFlip}
                key={current.id}
                data={current.value}
                showRomaji={showRomaji}
                back={KanjiFlashCardBack}
                front={KanjiFlashCardFront}
              />
            </Col>
          </Row>

          <Row className={styles.buttonWrapper}>
            <ConfidenceSelector
              key={current.id}
              disabled={!hasPeeked}
              onSelect={onSelectConfidenceRating}
              feedback={new SpaceRepetitionFeedback(current, confidence!)}
            />

            <Col xs={12} className={styles.col}>
              <Button
                className={styles.next}
                onClick={hasCardsRemaining ? onNext : onFinish}
                disabled={!hasPeeked || (!hasForgotten && !hasRemembered)}
                variant={!hasCardsRemaining && hasPeeked ? "info" : "primary"}
              >
                {!hasCardsRemaining && hasPeeked ? "Finish" : "Next"}
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  )
}

export default KanjiFlashCards
