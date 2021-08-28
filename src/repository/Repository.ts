import { Learnable } from "../domain/learn/Learnable";
import DataSettings from "../domain/session/settings/data/DataSettings";

export default interface Repository<T extends Learnable> {
    read(settings: DataSettings): Promise<T[]>
}
