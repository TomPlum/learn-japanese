import Topic from "../../../Topic";
import DataSettings from "./DataSettings";

/**
 * Settings used to by {@link BasicsRepository} to customise
 * the selection of definitions returned.
 * @see BasicsSettingsBuilder
 */
export default class BasicsSettings extends DataSettings {
    private readonly _colours: boolean;
    private readonly _animals: boolean;
    private readonly _directions: boolean;
    private readonly _weather: boolean;
    private readonly _family: boolean;
    private readonly _body: boolean;

    constructor(colours: boolean, animals: boolean, directions: boolean, weather: boolean, family: boolean, body: boolean, quantity?: number) {
        super(Topic.BASICS, quantity);
        this._colours = colours;
        this._animals = animals;
        this._directions = directions;
        this._weather = weather;
        this._family = family;
        this._body = body;
    }

    get colours(): boolean {
        return this._colours;
    }

    get animals(): boolean {
        return this._animals;
    }

    get directions(): boolean {
        return this._directions;
    }

    get weather(): boolean {
        return this._weather;
    }

    get family(): boolean {
        return this._family;
    }

    get body(): boolean {
        return this._body;
    }
}

export class BasicsSettingsBuilder {
    private _colours: boolean = false;
    private _animals: boolean = false;
    private _directions: boolean = false;
    private _weather: boolean = false;
    private _family: boolean = false;
    private _body: boolean = false;
    private _quantity: number | undefined;

    withColours(include: boolean = true): BasicsSettingsBuilder {
        this._colours = include;
        return this;
    }

    withAnimals(include: boolean = true): BasicsSettingsBuilder {
        this._animals = include;
        return this;
    }

    withDirections(include: boolean = true): BasicsSettingsBuilder {
        this._directions = include;
        return this;
    }

    withWeather(include: boolean = true): BasicsSettingsBuilder {
        this._weather = include;
        return this;
    }

    withFamily(include: boolean = true): BasicsSettingsBuilder {
        this._family = include;
        return this;
    }

    withBody(include: boolean = true): BasicsSettingsBuilder {
        this._body = include;
        return this;
    }

    withQuantity(quantity?: number): BasicsSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): BasicsSettings {
        return new BasicsSettings(this._colours, this._animals, this._directions, this._weather, this._family, this._body, this._quantity);
    }
}
