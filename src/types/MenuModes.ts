import LearnMode from "./session/LearnMode";
import PlayMode from "./session/PlayMode";

export interface MenuModes<T> {
    getTopic(): string;
    getModes(): T[];
}

export interface LearnMenuModes extends MenuModes<LearnMode> { }

export interface PlayMenuModes extends MenuModes<PlayMode> { }
