import { faClock, faFillDrip, faPaintBrush, faSchool, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { KyoikuGrade } from "../../kanji/KyoikuGrade";
import CustomLearningMode from "../CustomLearningMode";
import { LearnMenuModes } from "../../MenuModes";
import LearnMode from "../../session/LearnMode";
import { KanjiSettingsBuilder } from "../../session/settings/data/KanjiSettings";
import LearnSettings from "../../session/settings/LearnSettings";

export default class LearnKanjiModes implements LearnMenuModes {
    getModes(): LearnMode[] {
        const defaultLearnSettings = new LearnSettings();
        return [
            new LearnMode("Kyōiku", "#fdb40e", faSchool, new KanjiSettingsBuilder().withGrades(KyoikuGrade.ALL).build(), defaultLearnSettings),
            new LearnMode("Jōyō", "#ff7730", faPaintBrush, new KanjiSettingsBuilder().withJoyoKanji(true).build(), defaultLearnSettings),
            new LearnMode("Numbers", "#1785e2", faYenSign, new KanjiSettingsBuilder().withTags(["number"]).build(), defaultLearnSettings),
            new LearnMode("Colours", "#a01219", faFillDrip, new KanjiSettingsBuilder().withTags(["colour"]).build(), defaultLearnSettings),
            new LearnMode("Time", "#fc3131", faClock, new KanjiSettingsBuilder().withTags(["time"]).build(), defaultLearnSettings),
            new CustomLearningMode()
        ];
    }

    getTopic(): string {
        return "KANJI"
    }
}
