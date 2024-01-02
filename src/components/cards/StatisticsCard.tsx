import DashboardCard from "../layout/card/DashboardCard"
import DashboardCardHeader from "../layout/card/DashboardCardHeader"
import styles from "../../styles/sass/components/cards/StatisticsCard.module.scss"
import { faChevronLeft, faChevronRight, faGamepad, faSadCry, faTrophy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Cell, Pie, PieChart } from "recharts"
import { useTranslation } from "react-i18next"

const dummyKanjiData = [
  { grade: 1, value: 80, fill: "#4189ff" },
  { grade: 2, value: 160, fill: "#5dca41" },
  { grade: 3, value: 200, fill: "#f59037" },
  { grade: 4, value: 150, fill: "#8f46ea" },
  { grade: 5, value: 78, fill: "#d952d9" },
  { grade: 6, value: 12, fill: "#d73939" }
]

const dummyKanaData = [
  { type: "Hiragana", value: 120, fill: "#3167c6" },
  { type: "Katakana", value: 78, fill: "#5cce3d" }
]

/*const dummyOtherData = [
  { type: "Verbs", value: 10, fill: "#4189ff" },
  { type: "Adjectives", value: 50, fill: "#5dca41" },
  { type: "Adverbs", value: 22, fill: "#f59037" },
  { type: "Nouns", value: 67, fill: "#8f46ea" },
  { type: "Counters", value: 12, fill: "#d952d9" }
]*/

enum StatView {
  PLAY,
  LEARN,
  KANJI,
  KANA,
  OTHER
}

const StatisticsCard = () => {
  const { t, ready } = useTranslation("translation", { keyPrefix: "dashboard.card.stats" })
  const [view, setView] = useState(StatView.KANA)

  const getMainContent = () => {
    switch (view) {
      case StatView.PLAY: {
        return (
          <>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faGamepad} fixedWidth />
                <span>112</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faTrophy} fixedWidth />
                <span>64</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faSadCry} fixedWidth />
                <span>48</span>
              </div>
            </div>
          </>
        )
      }
      case StatView.LEARN: {
        return (
          <>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faGamepad} fixedWidth />
                <span>112</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faTrophy} fixedWidth />
                <span>64</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faSadCry} fixedWidth />
                <span>48</span>
              </div>
            </div>
          </>
        )
      }
      case StatView.KANJI: {
        return (
          <>
            <div className={styles.visual}>
              <p className={styles.label}>{t("kanji")}</p>
              <PieChart width={125} height={125}>
                <Pie dataKey="value" nameKey="grade" animationBegin={0} innerRadius={15} data={dummyKanjiData}>
                  {dummyKanjiData.map((datum) => {
                    return <Cell key={`cell-${datum.grade}`} fill={datum.fill} />
                  })}
                </Pie>
              </PieChart>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faGamepad} fixedWidth />
                <span>112</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faTrophy} fixedWidth />
                <span>64</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faSadCry} fixedWidth />
                <span>48</span>
              </div>
            </div>
          </>
        )
      }
      case StatView.KANA: {
        return (
          <>
            <div className={styles.visual}>
              <p className={styles.label}>{t("kana")}</p>
              <PieChart width={125} height={125}>
                <Pie
                  nameKey="type"
                  dataKey="value"
                  paddingAngle={4}
                  innerRadius={30}
                  outerRadius={50}
                  animationBegin={0}
                  data={dummyKanaData}
                >
                  {dummyKanaData.map((datum) => {
                    return <Cell key={`cell-${datum.type}`} fill={datum.fill} stroke="none" />
                  })}
                </Pie>
              </PieChart>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faGamepad} fixedWidth />
                <span>112</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faTrophy} fixedWidth />
                <span>64</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faSadCry} fixedWidth />
                <span>48</span>
              </div>
            </div>
          </>
        )
      }
      case StatView.OTHER: {
        return (
          <>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faGamepad} fixedWidth />
                <span>112</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faTrophy} fixedWidth />
                <span>64</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faSadCry} fixedWidth />
                <span>48</span>
              </div>
            </div>
          </>
        )
      }
    }
  }

  return (
    <DashboardCard size="sm" className={styles.card} loading={!ready}>
      <DashboardCard.Header>
        <DashboardCardHeader.Title>{t("title")}</DashboardCardHeader.Title>
      </DashboardCard.Header>

      <DashboardCard.Body className={styles.body}>
        <div className={styles.left} onClick={() => setView(view < 4 ? view + 1 : 0)}>
          <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
        </div>

        <div className={styles.middle}>{getMainContent()}</div>

        <div className={styles.right} onClick={() => setView(view > 0 ? view - 1 : 4)}>
          <FontAwesomeIcon icon={faChevronRight} fixedWidth />
        </div>
      </DashboardCard.Body>
    </DashboardCard>
  )
}

export default StatisticsCard
