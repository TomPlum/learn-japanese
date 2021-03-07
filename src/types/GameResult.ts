import { Kana } from "./Kana";
import { FailureReason } from "./FailureReason";

export default interface GameResult {
    reason?: FailureReason;
    success: boolean;
    duration?: string;
    livesRemaining: number;
    totalKanaOffered: number;
    correctAnswers: Set<Kana>;
    wrongAnswers: Kana[];
}