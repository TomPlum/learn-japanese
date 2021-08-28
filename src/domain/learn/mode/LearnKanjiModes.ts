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
            new LearnMode("Kyōiku", "#fdb40e", faSchool, new KanjiSettingsBuilder().withGrades(ALL).build(), defaultLearnSettings),
            new LearnMode("High School", "#74d43f", faChalkboardTeacher,
                new KanjiSettingsBuilder()
                    .withGrades([SEVEN, EIGHT, NINE, TEN, ELEVEN, TWELVE])
                    .build(),
                defaultLearnSettings
            ),
            new LearnMode("Jōyō", "#ff7730", faPaintBrush, new KanjiSettingsBuilder().withJoyoKanji(true).build(), defaultLearnSettings),
            new LearnMode("Numbers", "#1785e2", faYenSign, new KanjiSettingsBuilder().withTags(["number"]).build(), defaultLearnSettings),
            new LearnMode("Colours", "#a01219", faFillDrip, new KanjiSettingsBuilder().withTags(["colour"]).build(), defaultLearnSettings),
            new LearnMode("Time", "#fc3131", faClock, new KanjiSettingsBuilder().withTags(["time"]).build(), defaultLearnSettings),
        ];
    }

    getTopic(): string {
        return "KANJI"
    }
}
