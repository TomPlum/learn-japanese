import { FailureReason } from "./FailureReason";
import { Learnable } from "../learn/Learnable";
import GameSettings from "../session/settings/game/GameSettings";

export default interface GameResult {
    settings: GameSettings;
    reason?: FailureReason;
    success: boolean;
    duration?: string;
    livesRemaining: number;
    hintsRemaining: number;
    correctAnswers: Set<Learnable>;
    wrongAnswers: Learnable[];
}
