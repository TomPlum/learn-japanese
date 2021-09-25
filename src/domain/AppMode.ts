export enum AppMode {
    LEARN = "Learn",
    PLAY = "Play"
}

export function fromString(value: string): AppMode {
    return value === "learn" ? AppMode.LEARN : AppMode.PLAY
}
