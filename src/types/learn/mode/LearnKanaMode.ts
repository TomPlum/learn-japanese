import LearningMode from "../LearningMode";
import LearnMenuModes from "./LearnMenuModes";
import { faVial } from "@fortawesome/free-solid-svg-icons";

export default class LearnKanaMode implements LearnMenuModes {
    getLearningTopics(): LearningMode[] {
        return [
            new LearningMode("Hiragana", "#fdb40e", "あ", { kana: { hiragana: true } }),
            new LearningMode("Katakana", "#ff7730", "ア", { kana: { katakana: true } }),
            new LearningMode("Diacriticals", "#1785e2", "ざ", { kana: { diacriticals: true } }),
            new LearningMode("Diagraphs", "#a01219", "きゃ", { kana: { diagraphs: true } }),
            new LearningMode("All", "#fc3131", "あア", { kana: { hiragana: true, katakana: true, diagraphs: true, diacriticals: true } }),
            new LearningMode("Custom", "#41d085", faVial, {})
        ];
    }

    getTopic(): string {
        return "KANA"
    }
}