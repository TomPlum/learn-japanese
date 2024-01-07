import LoadingScreen from "../../layout/LoadingScreen"
import MemoryGame from "../../game/MemoryGame"
import GameResultScreen from "../../results/GameResultScreen"
import GameResult from "../../../domain/game/GameResult"
import SessionID from "../../../domain/session/SessionID"
import LearningDataService from "../../../service/LearningDataService"
import { useEffect, useState } from "react"
import { Learnable } from "../../../domain/learn/Learnable"
import { useNavigate } from "react-router-dom"
import styles  from "./PlayPage.module.scss"
import { useSessionSettingsContext } from "context/SessionSettingsContext";
import HashLink from "components/layout/HashLink";

const PlayPage = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Learnable[]>([])
  const [inResultsScreen, setInResultsScreen] = useState(false)
  const [sessionKey, setSessionKey] = useState(new SessionID())
  const [gameResult, setGameResult] = useState<GameResult | undefined>(undefined)

  const navigate = useNavigate()

  const { gameSettings, dataSettings, preset, setGameSettings, setDataSettings } = useSessionSettingsContext()

  useEffect(() => {
    if (!!dataSettings && !!gameSettings) {
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
  }, [dataSettings, gameSettings])

  const onGameFinish = (result: GameResult) => {
    setGameResult(result)
    setInResultsScreen(true)
    setSessionKey(new SessionID())
  }

  const onGameResultMenuClose = () => {
    setInResultsScreen(false)
    setGameResult(undefined)
    setGameSettings(undefined)
    setDataSettings(undefined)
    navigate("/home")
  }

  return (
    <div className={styles.wrapper} data-testid='play-page'>
      <LoadingScreen key={`${loading}`} active={loading} />

      {(!gameSettings || !dataSettings) && (
        <span>
          <p className={styles.error}>It looks like your game settings are missing!</p>
          <p className={styles.message}>
            <span>{"Click"}</span>
            <HashLink path="/home" className={styles.link}>
              {" here "}
            </HashLink>
            <span>{"to go back home."}</span>
          </p>
        </span>
      )}

      {!inResultsScreen && data.length > 0 && gameSettings && (
        <MemoryGame
          data={data}
          key={sessionKey.value}
          onFinish={onGameFinish}
          settings={gameSettings}
          sessionKey={sessionKey.value}
        />
      )}

      {inResultsScreen && gameResult && (
        <GameResultScreen
          presetId={preset}
          result={gameResult}
          onClose={onGameResultMenuClose}
        />
      )}
    </div>
  )
}

export default PlayPage
