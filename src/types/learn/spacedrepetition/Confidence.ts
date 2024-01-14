import {
  faGrinBeam,
  faMeh,
  faSadCry,
  faSadTear,
  faSmile,
  faSmileWink,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons"
import { SuperMemoGrade } from "supermemo/src/supermemo"

/**
 * A rating between 0 and 6 that describes how confident a user was in
 * answering a memory question. The value is consumed by the SM2 algorithm
 * to determine when a question should next be asked to that user.
 */
export default class Confidence {
  private readonly _value: SuperMemoGrade
  private readonly _name: string
  private readonly _description: string
  private readonly _icon: IconDefinition

  private constructor(value: SuperMemoGrade, name: string, description: string, icon: IconDefinition) {
    this._value = value
    this._name = name
    this._description = description
    this._icon = icon
  }

  /**
   * A complete blackout. The user had absolutely no idea.
   */
  public static BLACKOUT = new Confidence(0, "Blackout", "A complete blackout. You had absolutely no idea.", faSadCry)

  /**
   * The user gave an incorrect response but they realised they did know it
   * after revealing the answer.
   */
  public static INCORRECT_BUT_REMEMBERED = new Confidence(
    1,
    "Incorrect, but knew",
    "You gave an incorrect answer, but you realised you knew it afterwards.",
    faSadTear
  )

  /**
   * The user gave an incorrect response but they kicked themselves afterwards
   * because it seems so obvious after revealing the answer.
   */
  public static INCORRECT_OBVIOUS_AFTERWARDS = new Confidence(
    2,
    "Incorrect, but was obvious",
    "You gave an incorrect answer, but it was obvious to you afterwards.",
    faMeh
  )

  /**
   * The user gave a correct response but had serious difficulty remembering
   * the answer.
   */
  public static CORRECT_DIFFICULT_MEMORY = new Confidence(
    3,
    "Correct, but difficult to remember",
    "You gave the correct answer, but had serious trouble remembering.",
    faSmile
  )

  /**
   * The user gave a correct response after some hesitation.
   */
  public static CORRECT_SMALL_HESITATION = new Confidence(
    4,
    "Correct, small hesitation",
    "You gave the correct answer after some hesitation.",
    faSmileWink
  )

  /**
   * The user gave a correct response.
   * Everything was remembered perfectly without hesitation.
   */
  public static PERFECT = new Confidence(
    5,
    "Perfect",
    "You gave the correct answer with no hesitation at all.",
    faGrinBeam
  )

  get value(): SuperMemoGrade {
    return this._value
  }

  get name(): string {
    return this._name
  }

  get description(): string {
    return this._description
  }

  get icon(): IconDefinition {
    return this._icon
  }
}
