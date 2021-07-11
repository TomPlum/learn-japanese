import { faFire, faFont, faGraduationCap, faStopwatch, faVial } from "@fortawesome/free-solid-svg-icons";
import { faKickstarterK } from "@fortawesome/free-brands-svg-icons";
import { HARDCORE, KANA, RELAXED, ROMAJI, TIME_ATTACK } from "../../../data/GameModePresets";
import { PlayMenuModes } from "../../MenuModes";
import PlayMode from "../../session/PlayMode";
import KanaGameSettingsMenu from "../../../components/settings/KanaGameSettingsMenu";
import { KanaSettingsBuilder } from "../../session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";

export default class PlayKanaModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        const defaultKanaSettings = new KanaSettingsBuilder().withEverything().build();

        return [
            new PlayMode("Relaxed", "#fdb40e", faGraduationCap, defaultKanaSettings, RELAXED),
            new PlayMode("Time Attack", "#ff7730", faStopwatch, defaultKanaSettings, TIME_ATTACK),
            new PlayMode("Rōmaji", "#1785e2", faFont, defaultKanaSettings, ROMAJI),
            new PlayMode("Kana", "#a01219", faKickstarterK, defaultKanaSettings, KANA),
            new PlayMode("Hardcore", "#fc3131", faFire, new KanaSettingsBuilder().withEverything().withMaxQuantity().build(), HARDCORE),
            new PlayMode("Custom", "#41d085", faVial, defaultKanaSettings, new GameSettingsBuilder().build(), true, KanaGameSettingsMenu)
        ];
    }

    getTopic(): string {
        return "KANA";
    }
}