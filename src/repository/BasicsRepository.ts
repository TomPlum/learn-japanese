import Learnable from "../types/learn/Learnable";
import { LearnBasicsSettings } from "../types/learn/LearningSessionSettings";
import { colours } from "../data/Colours";
import { ColourData } from "../data/DataTypes";
import Colour from "../types/colour/Colour";
import Repository from "./Repository";

export default class BasicsRepository implements Repository<Learnable> {
    public read(settings: LearnBasicsSettings): Learnable[] {
        if (settings.colours) {
            return colours().map((it: ColourData) => new Colour(it.name, it.kanji, it.kana, it.romaji, it.colour));
        }

        return [];
    }
}