import Learnable from "../learn/Learnable";

export default interface CalendarData extends Learnable {
    getRomaji(): string;
    getKana(): string;
    getMeaning(): string | undefined;
}