import { GameFinishReason } from "./GameFinishReason"
import { Learnable } from "../learn/Learnable"
import GameSettings from "../session/settings/game/GameSettings"

export default interface GameResult {
  settings: GameSettings
  reason: GameFinishReason
  success: boolean
  duration?: string
  score?: number
  livesRemaining: number
  hintsRemaining: number
  correctAnswers: Set<Learnable>
  wrongAnswers: Learnable[]
}
