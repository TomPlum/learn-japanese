import Topic from "../../../Topic"
import DataSettings from "./DataSettings"

/**
 * Settings used to by {@link NumbersRepository} to customise
 * the selection of definitions returned.
 * @see NumbersSettingsBuilder
 */
export default class NumbersSettings extends DataSettings {
  private readonly _numbers: boolean
  private readonly _counters: boolean
  private readonly _age: boolean
  private readonly _exceptions: boolean
  private readonly _units: boolean
  private readonly _sequence: boolean

  constructor(
    numbers: boolean,
    counters: boolean,
    age: boolean,
    exceptions: boolean,
    units: boolean,
    sequence: boolean,
    quantity?: number
  ) {
    super(Topic.NUMBERS, quantity)
    this._numbers = numbers
    this._counters = counters
    this._age = age
    this._exceptions = exceptions
    this._units = units
    this._sequence = sequence
  }

  get numbers(): boolean {
    return this._numbers
  }

  get counters(): boolean {
    return this._counters
  }

  get age(): boolean {
    return this._age
  }

  get exceptions(): boolean {
    return this._exceptions
  }

  get units(): boolean {
    return this._units
  }

  get sequence(): boolean {
    return this._sequence
  }
}

export class NumbersSettingsBuilder {
  private _numbers = false
  private _counters = false
  private _age = false
  private _exceptions = false
  private _units = false
  private _sequence = false
  private _quantity: number | undefined

  withNumbers(include = true): NumbersSettingsBuilder {
    this._numbers = include
    return this
  }

  withCounters(include = true): NumbersSettingsBuilder {
    this._counters = include
    return this
  }

  withAge(include = true): NumbersSettingsBuilder {
    this._age = include
    return this
  }

  withExceptions(include = true): NumbersSettingsBuilder {
    this._exceptions = include
    return this
  }

  withUnits(include = true): NumbersSettingsBuilder {
    this._units = include
    return this
  }

  withSequence(include = true): NumbersSettingsBuilder {
    this._sequence = include
    return this
  }

  withQuantity(quantity?: number): NumbersSettingsBuilder {
    this._quantity = quantity
    return this
  }

  build(): NumbersSettings {
    return new NumbersSettings(
      this._numbers,
      this._counters,
      this._age,
      this._exceptions,
      this._units,
      this._sequence,
      this._quantity
    )
  }
}
