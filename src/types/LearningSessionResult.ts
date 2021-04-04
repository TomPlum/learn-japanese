import { Kana } from "./Kana";

export default interface LearningSessionResult {
    remembered: Kana[];
    forgotten: Kana[];
}