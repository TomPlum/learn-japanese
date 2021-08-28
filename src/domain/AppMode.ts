export enum AppMode {
    LEARN, PLAY
}

export function fromString(value: string): AppMode {
    return value === "learn" ? AppMode.LEARN : AppMode.PLAY
}