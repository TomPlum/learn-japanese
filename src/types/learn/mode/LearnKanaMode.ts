import { faVial } from "@fortawesome/free-solid-svg-icons";
import SessionMode from "../../session/SessionMode";
import { MenuModes } from "../../MenuModes";

export default class LearnKanaMode implements MenuModes {
    getModes(): SessionMode[] {
        return [
            new SessionMode("Hiragana", "#fdb40e", "あ", { kana: { hiragana: true } }),
            new SessionMode("Katakana", "#ff7730", "ア", { kana: { katakana: true } }),
            new SessionMode("Diacriticals", "#1785e2", "ざ", { kana: { diacriticals: true } }),
            new SessionMode("Diagraphs", "#a01219", "きゃ", { kana: { diagraphs: true } }),
            new SessionMode("All", "#fc3131", "あア", { kana: { hiragana: true, katakana: true, diagraphs: true, diacriticals: true } }),
            new SessionMode("Custom", "#41d085", faVial, {})
        ];
    }

    getTopic(): string {
        return "KANA"
    }
}