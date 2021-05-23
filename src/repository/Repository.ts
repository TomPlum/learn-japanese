import { Learnable } from "../types/learn/Learnable";
import { LearnSettings } from "../types/learn/LearningSessionSettings";

export default interface Repository<T extends Learnable> {
    read(settings: LearnSettings): T[]
}