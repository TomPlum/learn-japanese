import {
  faAppleAlt,
  faCalendarAlt,
  faFont,
  faPaintBrush,
  faSpellCheck,
  faYenSign,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons"
import { CardProps } from "../components/learn/FlashCard"
import KanaFlashCardFront from "../components/learn/kana/KanaFlashCardFront"
import KanaFlashCardBack from "../components/learn/kana/KanaFlashCardBack"
import KanjiFlashCardFront from "../components/learn/kanji/KanjiFlashCardFront"
import KanjiFlashCardBack from "../components/learn/kanji/KanjiFlashCardBack"
import BasicsFlashCardFront from "../components/learn/basics/BasicsFlashCardFront"
import BasicsFlashCardBack from "../components/learn/basics/BasicsFlashCardBack"
import NumbersFlashCardFront from "../components/learn/numbers/NumbersFlashCardFront"
import NumbersFlashCardBack from "../components/learn/numbers/NumbersFlashCardBack"
import SentenceStructureFlashCardFront from "../components/learn/sentence/SentenceStructureFlashCardFront"
import SentenceStructureFlashCardBack from "../components/learn/sentence/SentenceStructureFlashCardBack"
import React from "react"
import KanaSettingsForm from "../components/settings/data/KanaSettingsForm"
import KanjiSettingsForm from "../components/settings/data/KanjiSettingsForm"
import SentenceStructureForm from "../components/settings/data/SentenceStructureForm"
import { DataSettingsMenuProps } from "../components/settings/data/DataSettingsMenu"
import { DataSettingsStepFormProps } from "../components/layout/wizard/steps/DataSettingsStep"
import { GridItem } from "../components/layout/wizard/grid/GridItem"
import KanjiSettingsFormBody from "../components/settings/data/KanjiSettingsFormBody"
import KanaSettingsFormBody from "../components/settings/data/KanaSettingsFormBody"
import SentenceStructureFormBody from "../components/settings/data/SentenceStructureFormBody"
import NumbersSettingsForm from "../components/settings/data/NumbersSettingsForm"
import NumbersSettingsFormBody from "../components/settings/data/NumbersSettingsFormBody"

type ReactComponent =
  | React.FunctionComponent
  | React.ComponentClass<any>
  | ((props: DataSettingsMenuProps<any>) => JSX.Element)
  | ((props: DataSettingsStepFormProps<any>) => JSX.Element)
  | undefined

export default class Topic implements GridItem {
  private readonly _name: string
  private readonly _shortName: string
  private readonly _icon: IconDefinition
  private readonly _cards: CardProps
  private readonly _menu: ReactComponent
  private readonly _wizardDataMenu: ReactComponent

  public static KANA = new Topic(
    "Hiragana & Katakana",
    "Kana",
    faFont,
    { front: KanaFlashCardFront, back: KanaFlashCardBack },
    KanaSettingsForm,
    KanaSettingsFormBody
  )

  public static NUMBERS = new Topic(
    "Numbers & Counting",
    "Numbers",
    faYenSign,
    { front: NumbersFlashCardFront, back: NumbersFlashCardBack },
    NumbersSettingsForm,
    NumbersSettingsFormBody
  )

  public static KANJI = new Topic(
    "Jōyō Kanji",
    "Kanji",
    faPaintBrush,
    { front: KanjiFlashCardFront, back: KanjiFlashCardBack },
    KanjiSettingsForm,
    KanjiSettingsFormBody
  )

  public static BASICS = new Topic("Basics", "Basics", faAppleAlt, {
    front: BasicsFlashCardFront,
    back: BasicsFlashCardBack
  })

  public static CALENDAR = new Topic("Days & Months", "Calendar", faCalendarAlt, {
    front: SentenceStructureFlashCardFront,
    back: SentenceStructureFlashCardBack
  })

  public static GRAMMAR = new Topic(
    "Sentence Structure",
    "Grammar",
    faSpellCheck,
    { front: SentenceStructureFlashCardFront, back: SentenceStructureFlashCardBack },
    SentenceStructureForm,
    SentenceStructureFormBody
  )

  public static ALL: Topic[] = [Topic.KANA, Topic.NUMBERS, Topic.KANJI, Topic.BASICS, Topic.CALENDAR, Topic.GRAMMAR]

  public static fromName(name: string): Topic {
    switch (name) {
      case "Hiragana & Katakana":
        return Topic.KANA
      case "Numbers & Counting":
        return Topic.NUMBERS
      case "Jōyō Kanji":
        return Topic.KANJI
      case "Basics":
        return Topic.BASICS
      case "Days & Months":
        return Topic.CALENDAR
      case "Sentence Structure":
        return Topic.GRAMMAR
      default:
        throw new Error(`Invalid Topic [${name}]`)
    }
  }

  private constructor(
    name: string,
    shortName: string,
    icon: IconDefinition,
    cards: CardProps,
    menu: ReactComponent = undefined,
    wizardDataMenu: ReactComponent = undefined
  ) {
    this._name = name
    this._shortName = shortName
    this._icon = icon
    this._cards = cards
    this._menu = menu
    this._wizardDataMenu = wizardDataMenu
  }

  get name(): string {
    return this._name
  }

  get icon(): IconDefinition {
    return this._icon
  }

  get cards(): CardProps {
    return this._cards
  }

  get menu(): ReactComponent {
    return this._menu
  }

  get wizardDataMenu(): ReactComponent {
    return this._wizardDataMenu
  }

  getLongName(): string {
    return this._name
  }

  getShortName(): string {
    return this._shortName
  }
}
