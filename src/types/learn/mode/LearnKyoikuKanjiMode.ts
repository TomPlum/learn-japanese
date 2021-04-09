import LearningMode from "../LearningMode";
import LearnMenuModes from "./LearnMenuModes";
import { faGraduationCap, faLeaf, faMountain, faPaintBrush, faSchool, faSun } from "@fortawesome/free-solid-svg-icons";
import { KyoikuGrade } from "../../kanji/KyoikuGrade";

export default class LearnKyoikuKanjiMode implements LearnMenuModes {
    getLearningTopics(): LearningMode[] {
        return [
            new LearningMode("Grade 1", "#fdb40e", faPaintBrush, { kanji: { grades: [KyoikuGrade.ONE] } }),
            new LearningMode("Grade 2", "#ff7730", faSchool, { kanji: { grades: [KyoikuGrade.TWO] } }),
            new LearningMode("Grade 3", "#1785e2", faLeaf, { kanji: { grades: [KyoikuGrade.THREE] } }),
            new LearningMode("Grade 4", "#a01219", faSun, { kanji: { grades: [KyoikuGrade.FOUR] } }),
            new LearningMode("Grade 5", "#fc3131", faMountain, { kanji: { grades: [KyoikuGrade.FIVE] } }),
            new LearningMode("Grade 6", "#41d085", faGraduationCap, { kanji: { grades: [KyoikuGrade.SIX] } }),
        ];
    }

    getTopic(): string {
        return "KANJI"
    }
}