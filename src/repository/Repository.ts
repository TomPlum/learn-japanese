import { Learnable } from "types/learn/Learnable"
import DataSettings from "types/session/settings/data/DataSettings"
import { Paged } from "./KanjiRepository"

export default interface Repository<T extends Learnable> {
  read(settings: DataSettings): Promise<T[]> | Promise<Paged<T>>
}
