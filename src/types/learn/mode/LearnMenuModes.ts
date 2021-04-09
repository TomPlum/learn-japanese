import LearningMode from "../LearningMode";

export default interface LearnMenuModes {
    getLearningTopics(): LearningMode[];
    getTopic(): string;
}