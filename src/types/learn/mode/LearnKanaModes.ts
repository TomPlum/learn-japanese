import { faVial } from "@fortawesome/free-solid-svg-icons";
import { LearnMenuModes } from "../../MenuModes";
import LearnMode from "../../session/LearnMode";
import LearnSettings from "../../session/settings/LearnSettings";
import { KanaSettingsBuilder } from "../../session/settings/data/KanaSettings";

export default class LearnKanaModes implements LearnMenuModes {
    getModes(): LearnMode[] {
        const defaultLearnSettings = new LearnSettings();

        return [
            new LearnMode("Hiragana", "#fdb40e", "あ",
                new KanaSettingsBuilder().withHiragana().build(),
                defaultLearnSettings
            ),
            new LearnMode("Katakana", "#ff7730", "ア",
                new KanaSettingsBuilder().withKatakana().build(),
                defaultLearnSettings
            ),
            new LearnMode("Diacriticals", "#1785e2", "ざ",
                new KanaSettingsBuilder()
                    .withHiragana()
                    .withKatakana()
                    .withDiacriticals()
                    .withDiagraphs(false)
                    .withRegularKana(false)
                    .withMaxQuantity()
                    .build(),
                defaultLearnSettings
            ),
            new LearnMode("Diagraphs", "#a01219", "きゃ",
                new KanaSettingsBuilder()
                    .withHiragana()
                    .withKatakana()
                    .withOnlyDiagraphs()
                    .withMaxQuantity()
                    .build(),
                defaultLearnSettings
            ),
            new LearnMode("All", "#fc3131", "あア",
                new KanaSettingsBuilder().withEverything().build(),
                defaultLearnSettings
            ),
            new LearnMode("Custom", "#41d085", faVial,
                new KanaSettingsBuilder().build(),
                defaultLearnSettings
            )
        ];
    }

    getTopic(): string {
        return "KANA"
    }
}