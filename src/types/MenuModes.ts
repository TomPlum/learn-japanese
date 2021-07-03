import SessionMode from "./session/SessionMode";

export interface MenuModes {
    getModes(): SessionMode[];
    getTopic(): string;
}