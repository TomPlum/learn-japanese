import HighScoresService from "../../../service/HighScoresService"
import { HighScorePreference } from "../../../domain/HighScorePreference"
import { useTranslation } from "react-i18next"
import { Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useUserContext } from "context/UserContext";

export interface HighScoreSubmitButtonProps {
  presetId: number
  time?: string
  score?: number
}

const HighScoreSubmitButton = (props: HighScoreSubmitButtonProps) => {
  const { presetId, time, score } = props

  const [, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const service = new HighScoresService()
  const { t } = useTranslation("translation", { keyPrefix: "memory-game.results-screen" })
  const { user } = useUserContext()

  useEffect(() => {
    if (user?.preferences.highScoresBehaviour === HighScorePreference.AUTO_SUBMIT) {
      submit()
    }
  }, [])

  const submit = () => {
    setLoading(true)

    service
      .addNewEntry({ presetId: presetId, score: score, time: time })
      .then((response) => {
        setSuccess(response.success)
      })
      .catch(() => {
        setSuccess(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const renderButtonContent = () => {
    switch (user?.preferences.highScoresBehaviour) {
      case HighScorePreference.NEVER_SUBMIT: {
        return <span>{t("not-submitted")}</span>
      }
      case HighScorePreference.ASK_EACH_TIME: {
        return <Button onClick={submit}>{success ? "Submitted" : "Submit Score"}</Button>
      }
      case HighScorePreference.AUTO_SUBMIT: {
      }
    }
  }

  return <div>{renderButtonContent()}</div>
}

export default HighScoreSubmitButton
