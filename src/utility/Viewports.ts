export default class Viewports {
    public static fromWidth(width: number | null): Viewport {
        if (!width) return Viewport.PHONE;

        if (width < 768) {
            return Viewport.PHONE;
        } else if (width < 1024) {
            return Viewport.TABLET;
        } else {
            return Viewport.DESKTOP;
        }
    }

    public static fromFlashCardWidth(width: number | null): Viewport {
        if (!width) return Viewport.PHONE;

        if (width === 450) {
            return Viewport.PHONE;
        } else if (width === 550) {
            return Viewport.TABLET;
        } else if (width === 650) {
            return Viewport.DESKTOP;
        } else {
            return Viewport.PHONE;
        }
    }
}

export enum Viewport {
    PHONE,
    TABLET,
    DESKTOP
}