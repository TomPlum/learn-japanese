import { SuperMemoItem } from "supermemo"

/**
 * Details of a single item to be memorised.
 * Consumed by the SM2 (SuperMemo2) algorithm.
 */
class SpaceRepetitionDetails implements SuperMemoItem {
  /**
   * The e-factor is the "easiness-factor" of a given {@link SpaceRepetitionDetails}.
   * It is an arbitrary value used by the algorithm to determine the distribution of
   * items when memorising them. The initial value should default to 2.5.
   */
  private readonly _efactor: number

  /**
   * Represents the interval (in days) between repetitions of a
   * given {@link SpaceRepetitionDetails}. The initial value should default to 0.
   */
  private readonly _interval: number

  /**
   * The number of consecutive correct responses for the given {@link SpaceRepetitionDetails}.
   * The initial value should default to 0.
   */
  private readonly _repetition: number

  /**
   * The date in which a given item should next be shown to the user.
   * Formatted as an ISO string by datejs (e.g. 2021-08-30T13:29:07.119Z).
   */
  private readonly _dueDate: string | undefined

  constructor(efactor: number, interval: number, repetition: number, dueDate?: string) {
    this._efactor = efactor
    this._interval = interval
    this._repetition = repetition
    this._dueDate = dueDate
  }

  get efactor(): number {
    return this._efactor
  }

  get interval(): number {
    return this._interval
  }

  get repetition(): number {
    return this._repetition
  }

  get dueDate(): string | undefined {
    return this._dueDate
  }
}

export default SpaceRepetitionDetails
