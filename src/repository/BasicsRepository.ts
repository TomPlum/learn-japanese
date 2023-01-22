import { Learnable } from "../domain/learn/Learnable"
import { colours } from "../data/Colours"
import { ColourData } from "../data/DataTypes"
import Colour from "../domain/colour/Colour"
import Repository from "./Repository"
import BasicsSettings from "../domain/session/settings/data/BasicsSettings"

export default class BasicsRepository implements Repository<Learnable> {
  public read(settings: BasicsSettings): Promise<Learnable[]> {
    if (settings.colours) {
      return Promise.all(
        colours().map((it: ColourData) => new Colour(it.name, it.kanji, it.kana, it.romaji, it.colour))
      )
    }

    return Promise.resolve([])
  }
}
