import DashboardCard, { DashboardCardProps } from "../layout/card/DashboardCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBan,
  faBirthdayCake,
  faChevronLeft,
  faChevronRight,
  faClock,
  faFireAlt,
  faQuestionCircle,
  faTemperatureHigh,
  faTemperatureLow,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons"
import styles from "../../styles/sass/components/cards/StreakCard.module.scss"
import { useEffect, useState } from "react"
import UserService from "../../service/UserService"
import { useTranslation } from "react-i18next"

enum StreakView {
  CUSTOM_DATE,
  ACCOUNT_CREATION,
  STREAK
}

const StreakCard = () => {
  const { t, ready } = useTranslation("translation", { keyPrefix: "dashboard.card.streak" })
  const [view, setView] = useState(StreakView.CUSTOM_DATE)
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    new UserService().getActivityStreak().then((response) => {
      setStreak(response)
    })
  }, [])

  const viewQuantity = Object.keys(StreakView).length / 2

  const cardProps: DashboardCardProps = {
    loading: !ready,
    className: styles.card
  }

  const getMainContent = () => {
    switch (view) {
      case StreakView.STREAK: {
        return <span className={styles.streak}>{t("streak-template", { streak })}</span>
      }
      case StreakView.ACCOUNT_CREATION: {
        return <span className={styles.streak}>{t("account-template", { days: streak })}</span>
      }
      case StreakView.CUSTOM_DATE: {
        return <span className={styles.streak}>{t("custom-template", { day: streak })}</span>
      }
      default: {
        return <span className={styles.streak}>N/A</span>
      }
    }
  }

  const getIcon = (): { icon: IconDefinition; className: string } => {
    switch (view) {
      case StreakView.STREAK: {
        const icon = streak === 0 ? faBan : streak < 10 ? faTemperatureLow : streak < 50 ? faTemperatureHigh : faFireAlt
        return { icon: icon, className: styles.fire }
      }
      case StreakView.CUSTOM_DATE:
        return { icon: faClock, className: styles.clock }
      case StreakView.ACCOUNT_CREATION:
        return { icon: faBirthdayCake, className: styles.cake }
      default:
        return { icon: faQuestionCircle, className: styles.unknown }
    }
  }

  const nextLeft = view < viewQuantity - 1 ? view + 1 : 0
  const handleRotateLeft = () => {
    setView(nextLeft)
  }

  const nextRight = view > 0 ? view - 1 : viewQuantity - 1
  const handleRotateRight = () => {
    setView(nextRight)
  }

  const getViewTitle = (next: number): string => {
    switch (next) {
      case StreakView.STREAK:
        return t("streak")
      case StreakView.ACCOUNT_CREATION:
        return t("account-creation")
      case StreakView.CUSTOM_DATE:
        return t("custom-date")
      default:
        return ""
    }
  }

  return (
    <DashboardCard {...cardProps}>
      <DashboardCard.Body className={styles.body}>
        <div className={styles.left} onClick={handleRotateLeft} title={getViewTitle(nextLeft)}>
          <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
        </div>

        <div className={styles.middle}>
          <FontAwesomeIcon fixedWidth {...getIcon()} />
          {getMainContent()}
        </div>

        <div className={styles.right} onClick={handleRotateRight} title={getViewTitle(nextRight)}>
          <FontAwesomeIcon icon={faChevronRight} fixedWidth />
        </div>
      </DashboardCard.Body>
    </DashboardCard>
  )
}

export default StreakCard
