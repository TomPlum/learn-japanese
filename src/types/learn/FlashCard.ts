import SpaceRepetitionDetails from "./spacedrepetition/SpaceRepetitionDetails"
import { Learnable } from "./Learnable"

export class FlashCard {
  private readonly _id: number
  private readonly _value: Learnable
  private readonly _details: SpaceRepetitionDetails

  constructor(id: number, value: Learnable, details: SpaceRepetitionDetails) {
    this._id = id
    this._value = value
    this._details = details
  }

  get id(): number {
    return this._id
  }

  get value(): Learnable {
    return this._value
  }

  get details(): SpaceRepetitionDetails {
    return this._details
  }
}
