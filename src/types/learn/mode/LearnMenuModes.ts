import LearningMode from "../LearningMode";

export default abstract class LearnMenuModes {
    abstract getLearningTopics(): LearningMode[];
    abstract getTopic(): string;

    protected isCustomisable(): boolean {
        return false;
    }
}