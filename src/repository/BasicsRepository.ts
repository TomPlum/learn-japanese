import Learnable from "../types/learn/Learnable";
import { LearnBasicsSettings } from "../types/learn/LearnSettings";
import { colours } from "../data/Colours";
import { ColourData } from "../data/DataTypes";
import Colour from "../types/colour/Colour";

export default class BasicsRepository {
    public read(settings: LearnBasicsSettings): Learnable[] {
        if (settings.colours) {
            return colours().map((it: ColourData) => new Colour(it.name, it.kanji, it.kana, it.romaji, it.colour));
        }

        return [];
    }
}