import React, { useState } from "react"
import KanjiFlashCards from "./KanjiFlashCards"
import { OnlineLearningSessionResult } from "../../domain/learn/LearningSessionResult"

export interface LearnOnlineProps {}

const LearnOnline = (props: LearnOnlineProps) => {
    const [result, setResult] = useState<OnlineLearningSessionResult | undefined>(undefined)
    const [inResultsScreen, setInResultsScreen] = useState(false)

    return (
        <div style={{ width: "100%" }}>
            <KanjiFlashCards onFinish={(result) => setResult(result)} />
        </div>
    )
}

export default LearnOnline
