import { FailureReason } from "./FailureReason";
import { Learnable } from "../learn/Learnable";

export default interface GameResult {
    reason?: FailureReason;
    success: boolean;
    duration?: string;
    livesRemaining: number;
    totalKanaOffered: number;
    correctAnswers: Set<Learnable>;
    wrongAnswers: Learnable[];
}