import { Learnable } from "../types/learn/Learnable";
import DataSettings from "../types/session/DataSettings";

export default interface Repository<T extends Learnable> {
    read(settings: DataSettings): T[]
}