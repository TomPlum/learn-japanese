import { Col, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import SpacedRepetitionService, { FlashCardsResponse } from "../../../service/SpacedRepetitionService"
import { FlashCard } from "../../../domain/learn/FlashCard"
import styles  from "./KanjiFlashCardsCard.module.scss"
import { faGraduationCap, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import DashboardCard, { DashboardCardProps } from "../../layout/card/DashboardCard"
import DashboardCardHeader from "../../layout/card/DashboardCardHeader"
import DashboardCardLink from "../../layout/card/DashboardCardLink"
import { useTranslation } from "react-i18next"

const KanjiFlashCardsCard = () => {
  const service = new SpacedRepetitionService()

  const navigate = useNavigate()
  const { t, ready } = useTranslation("translation", { keyPrefix: "dashboard.card.flash-cards" })
  const actions = useTranslation("translation", { keyPrefix: "action" }).t

  const [cards, setCards] = useState<FlashCard[]>([])
  const [loading, setLoading] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    setLoading(true)
    setError(undefined)
    loadKanjiFlashCards().finally(() => setLoading(false))
  }, [])

  const loadKanjiFlashCards = () => {
    return service
      .getKanjiFlashCards()
      .then((response: FlashCardsResponse) => {
        if (response.cards) {
          setCards(response.cards)
        } else {
          setError(response.error ?? "Error loading cards.")
        }
      })
      .catch((response) => {
        setError(response.error ?? "Error loading cards.")
      })
  }

  const onRefreshCards = async () => {
    setUpdating(true)
    loadKanjiFlashCards().finally(() => setUpdating(false))
  }

  const onReview = () => {
    navigate("/learn/kanji")
  }

  const props: DashboardCardProps = {
    loading: !ready,
    id: "flash-cards-card",
    className: styles.card
  }

  return (
    <DashboardCard {...props} error={error} updating={updating} loading={loading}>
      <DashboardCard.Header>
        <DashboardCardHeader.Title>{t("title")}</DashboardCardHeader.Title>
        <DashboardCardHeader.SettingsMenu>
          <DashboardCardLink text={actions("sync")} icon={faSyncAlt} onClick={onRefreshCards} />
        </DashboardCardHeader.SettingsMenu>
      </DashboardCard.Header>

      <DashboardCard.Body>
        <Row className={error ? styles.blur : undefined}>
          <Col>
            <div className={styles.numbers}>
              <div className={styles.quantity}>
                <p className={styles.review}>{cards.length}</p>
                <p className={styles.label}>{t("review")}</p>
              </div>
              <div className={styles.quantity}>
                <p className={styles.learning}>0</p>
                <p className={styles.label}>{t("learning")}</p>
              </div>
              <div className={styles.quantity}>
                <p className={styles.new}>10</p>
                <p className={styles.label}>{t("new")}</p>
              </div>
            </div>
            <DashboardCardLink
              text={t("start")}
              onClick={onReview}
              icon={faGraduationCap}
              className={styles.button}
              disabled={cards.length === 0}
            />
          </Col>
          <Col></Col>
        </Row>
      </DashboardCard.Body>
    </DashboardCard>
  )
}

export default KanjiFlashCardsCard
