import { Kana } from "../kana/Kana";

export default interface LearningSessionResult {
    remembered: Kana[];
    forgotten: Kana[];
}