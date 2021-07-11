export default class TimeSettings {
    private readonly _timed: boolean;
    private readonly _countdown: boolean;
    private readonly _secondsPerQuestion: number;

    constructor(timed: boolean, countdown: boolean, secondsPerQuestion: number) {
        this._timed = timed;
        this._countdown = countdown;
        this._secondsPerQuestion = secondsPerQuestion;
    }

    get timed(): boolean {
        return this._timed;
    }

    get countdown(): boolean {
        return this._countdown;
    }

    get secondsPerQuestion(): number {
        return this._secondsPerQuestion;
    }
}

export class TimeSettingsBuilder {
    private _timed: boolean = true;
    private _countdown: boolean = false;
    private _secondsPerQuestion: number = 0;

    isTimed(enabled: boolean = true): TimeSettingsBuilder {
        this._timed = enabled;
        return this;
    }

    isCountDown(enabled: boolean = true): TimeSettingsBuilder {
        this._countdown = enabled;
        return this;
    }

    withSecondsPerQuestion(seconds: number): TimeSettingsBuilder {
        this._secondsPerQuestion = seconds;
        return this;
    }

    build(): TimeSettings {
        return new TimeSettings(this._timed, this._countdown, this._secondsPerQuestion);
    }
}