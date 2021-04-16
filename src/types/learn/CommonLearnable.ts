import Learnable from "./Learnable";

//TODO: If this is used for all data as standard, remove this and put in Learnable
export default interface CommonLearnable extends Learnable {
    getRomaji(): string;
    getKana(): string;
    getMeaning(): string | undefined;
}