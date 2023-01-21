import LearnMode from "./session/LearnMode"
import PlayMode from "./session/PlayMode"

export interface MenuModes<T> {
  getTopic(): string
  getModes(): T[]
}

export type LearnMenuModes = MenuModes<LearnMode>

export type PlayMenuModes = MenuModes<PlayMode>
