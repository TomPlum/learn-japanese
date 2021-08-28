import { Learnable } from "./Learnable";

export default interface LearningSessionResult {
    remembered: Learnable[];
    forgotten: Learnable[];
}