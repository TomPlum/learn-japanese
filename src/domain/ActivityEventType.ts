import { faBirthdayCake, faEraser, faFireAlt, faGraduationCap, faPlay, IconDefinition } from "@fortawesome/free-solid-svg-icons";

class ActivityEventType {

    public static LEARN = new ActivityEventType("Learning Session", faGraduationCap, "#ffe53c");
    public static PLAY = new ActivityEventType("Play Session", faPlay, "#2ec947");
    public static MISTAKES = new ActivityEventType("Mistakes Review", faEraser, "#dc7bde");
    public static POST_REGISTRATION = new ActivityEventType("Welcome!", faBirthdayCake, "#4d9af8");

    private readonly _name: string;
    private readonly _icon: IconDefinition;
    private readonly _colour: string;

    public static fromStreak(streak: number) {
        return new ActivityEventType(`You a reached a ${streak} day streak!`, faFireAlt, "#f3881b");
    }

    private constructor(name: string, icon: IconDefinition, colour: string) {
        this._name = name;
        this._icon = icon;
        this._colour = colour;
    }

    get name(): string {
        return this._name;
    }

    get icon(): IconDefinition {
        return this._icon;
    }

    get colour(): string {
        return this._colour;
    }
}

export default ActivityEventType;
