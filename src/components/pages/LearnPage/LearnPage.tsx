import LearningSessionResult from "../../../domain/learn/LearningSessionResult"
import SessionID from "../../../domain/session/SessionID"
import LoadingScreen from "../../layout/LoadingScreen"
import Learn from "../../learn/Learn"
import LearningResultScreen from "../../results/LearningResultScreen"
import { useEffect, useState } from "react"
import { Learnable } from "../../../domain/learn/Learnable"
import Arrays from "../../../utility/Arrays"
import LearningDataService from "../../../service/LearningDataService"
import styles  from "./LearnPage.module.scss"
import { useNavigate } from "react-router-dom"
import { useSessionSettingsContext } from "context/SessionSettingsContext";

const LearnPage = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Learnable[]>([])
  const [showResults, setShowResults] = useState(false)
  const [sessionKey, setSessionKey] = useState(new SessionID())
  const [result, setResult] = useState<LearningSessionResult | undefined>(undefined)

  const navigate = useNavigate()

  const { dataSettings, setDataSettings } = useSessionSettingsContext()

  useEffect(() => {
    if (dataSettings) {
      setLoading(true)
      new LearningDataService()
        .read(dataSettings)
        .then((data) => {
          setData(data)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [dataSettings])

  const handleDismissResultsScreen = () => {
    setDataSettings(undefined)
    navigate("/home")
  }

  const handleSessionCompletion = (result: LearningSessionResult) => {
    const userViewedAnyCards = result.forgotten.length + result.remembered.length > 0

    if (userViewedAnyCards) {
      setResult(result)
      setShowResults(true)
    } else {
      handleDismissResultsScreen()
    }

    setSessionKey(new SessionID())
  }

  const handlePractice = (mistakes: Learnable[]) => {
    setShowResults(false)
    setData(Arrays.copy(mistakes))
  }

  return (
    <div className={styles.wrapper} data-testid='learn-page'>
      <LoadingScreen
        key={`${loading}`}
        active={!!dataSettings && loading}
      />

      {!dataSettings && (
        <span>
          <p className={styles.error}>
            Your session settings have gone walk-abouts!
          </p>

          <p className={styles.message}>
            <span>{"Click"}</span>

            <a href="/home" className={styles.link}>
              {" here "}
            </a>

            <span>{"to go back home."}</span>
          </p>
        </span>
      )}

      {!showResults && data.length > 0 && dataSettings && (
        <Learn
          data={data}
          key={sessionKey.value}
          card={dataSettings.topic.cards}
          onFinish={handleSessionCompletion}
        />
      )}

      {result && showResults && (
        <LearningResultScreen
          result={result}
          onPractice={handlePractice}
          onDismiss={handleDismissResultsScreen}
        />
      )}
    </div>
  )
}

export default LearnPage
