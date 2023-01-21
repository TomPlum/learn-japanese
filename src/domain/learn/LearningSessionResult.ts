import { Learnable } from "./Learnable"
import { FlashCard } from "./FlashCard"

export default interface LearningSessionResult {
  remembered: Learnable[]
  forgotten: Learnable[]
}

export interface OnlineLearningSessionResult {
  remembered: FlashCard[]
  forgotten: FlashCard[]
}
