import { useState } from "react"
import KanjiFlashCards from "./../KanjiFlashCards"
import { OnlineLearningSessionResult } from "../../../domain/learn/LearningSessionResult"

export interface LearnOnlineProps {}

const LearnOnline = (_props: LearnOnlineProps) => {
  const [, setResult] = useState<OnlineLearningSessionResult | undefined>(undefined)

  return (
    <div style={{ width: "100%" }} data-testid='learn-online-page'>
      <KanjiFlashCards onFinish={(result) => setResult(result)} />
    </div>
  )
}

export default LearnOnline
