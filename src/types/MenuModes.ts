import SessionMode from "./SessionMode";

export interface MenuModes {
    getModes(): SessionMode[];
    getTopic(): string;
}