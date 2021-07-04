import { faCircle, faPaintBrush, faRandom, faSchool, faStar } from "@fortawesome/free-solid-svg-icons";
import { PlayMenuModes } from "../../MenuModes";
import CustomLearningMode from "../../learn/CustomLearningMode";
import KanjiSettingsMenu from "../../../components/learn/kanji/KanjiSettingsMenu";
import { GameSettingsBuilder } from "../../session/GameSettings";
import { DisplayType } from "../DisplayType";
import PlayMode from "../../session/PlayMode";
import { KanjiSettingsBuilder } from "../../session/DataSettings";

export default class PlayKanjiModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        const defaultKanjiSettings = new KanjiSettingsBuilder().withJoyoKanji().build();

        return [
            new PlayMode("Kanji", "#6857ee", faPaintBrush,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withDisplaySettings({ type: DisplayType.KANJI, score: true, cards: 4 })
                    .build()
            ),
            new PlayMode(
                "Meaning", "#65cd3a", faSchool,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withDisplaySettings({ type: DisplayType.MEANING, score: true, cards: 4 })
                    .build()
            ),
            new PlayMode("On'yomi", "#eacd35", faStar,
                defaultKanjiSettings,
                new GameSettingsBuilder().build()
            ),
            new PlayMode("Kun'yomi", "#e21717", faCircle,
                defaultKanjiSettings,
                new GameSettingsBuilder().build()
            ),
            new PlayMode("Random", "#3cabca", faRandom,
                defaultKanjiSettings,
                new GameSettingsBuilder()
                    .withDisplaySettings({ type: DisplayType.RANDOM, score: true, cards: 4 })
                    .build()
            ),
            new CustomLearningMode(KanjiSettingsMenu)
        ];
    }

    getTopic(): string {
        return "KANJI";
    }
}