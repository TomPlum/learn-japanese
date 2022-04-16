import { faChalkboardTeacher, faClock, faFillDrip, faPaintBrush, faSchool, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { KyoikuGrade } from "../../kanji/KyoikuGrade";
import { LearnMenuModes } from "../../MenuModes";
import LearnMode from "../../session/LearnMode";
import { KanjiSettingsBuilder } from "../../session/settings/data/KanjiSettings";
import LearnSettings from "../../session/settings/LearnSettings";

export default class LearnKanjiModes implements LearnMenuModes {
    getModes(): LearnMode[] {
        const defaultLearnSettings = new LearnSettings();
        const { TEN, SEVEN, EIGHT, ALL, ELEVEN, NINE, TWELVE } = KyoikuGrade;

        return [
            new LearnMode(1, "Kyōiku", "#fdb40e", faSchool, new KanjiSettingsBuilder().withGrades(ALL).build(), defaultLearnSettings),
            new LearnMode(1, "High School", "#74d43f", faChalkboardTeacher,
                new KanjiSettingsBuilder()
                    .withGrades([SEVEN, EIGHT, NINE, TEN, ELEVEN, TWELVE])
                    .build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Jōyō", "#ff7730", faPaintBrush, new KanjiSettingsBuilder().withJoyoKanji(true).build(), defaultLearnSettings),
            new LearnMode(1, "Numbers", "#1785e2", faYenSign, new KanjiSettingsBuilder().withTags(["number"]).build(), defaultLearnSettings),
            new LearnMode(1, "Colours", "#a01219", faFillDrip, new KanjiSettingsBuilder().withTags(["colour"]).build(), defaultLearnSettings),
            new LearnMode(1, "Time", "#fc3131", faClock, new KanjiSettingsBuilder().withTags(["time"]).build(), defaultLearnSettings),
        ];
    }

    getTopic(): string {
        return "KANJI"
    }
}
