import Topic from "../../../Topic"
import DataSettings from "./DataSettings"

/**
 * Settings used to by {@link CalendarRepository} to customise
 * the selection of definitions returned.
 * @see CalendarSettingsBuilder
 */
export default class CalendarSettings extends DataSettings {
  private readonly _days: boolean
  private readonly _months: boolean
  private readonly _seasons: boolean
  private readonly _nouns: boolean
  private readonly _phrases: boolean

  constructor(days: boolean, months: boolean, season: boolean, nouns: boolean, phrases: boolean, quantity?: number) {
    super(Topic.CALENDAR, quantity)
    this._days = days
    this._months = months
    this._seasons = season
    this._nouns = nouns
    this._phrases = phrases
  }

  get days(): boolean {
    return this._days
  }

  get months(): boolean {
    return this._months
  }

  get seasons(): boolean {
    return this._seasons
  }

  get nouns(): boolean {
    return this._nouns
  }

  get phrases(): boolean {
    return this._phrases
  }
}

export class CalendarSettingsBuilder {
  private _days = false
  private _months = false
  private _season = false
  private _nouns = false
  private _phrases = false
  private _quantity: number | undefined

  withDays(include = true): CalendarSettingsBuilder {
    this._days = include
    return this
  }

  withMonths(include = true): CalendarSettingsBuilder {
    this._months = include
    return this
  }

  withSeasons(include = true): CalendarSettingsBuilder {
    this._season = include
    return this
  }

  withTemporalNouns(include = true): CalendarSettingsBuilder {
    this._nouns = include
    return this
  }

  withPhrases(include = true): CalendarSettingsBuilder {
    this._phrases = include
    return this
  }

  withQuantity(quantity?: number): CalendarSettingsBuilder {
    this._quantity = quantity
    return this
  }

  build(): CalendarSettings {
    return new CalendarSettings(this._days, this._months, this._season, this._nouns, this._phrases, this._quantity)
  }
}
