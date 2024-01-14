import { fireEvent } from "@testing-library/react"
import KanjiFlashCardFront  from "./KanjiFlashCardFront"
import { Kanji } from "types/kanji/Kanji"
import { KanjiReading } from "types/kanji/KanjiReading"
import { ReadingType } from "types/kanji/ReadingType"
import { KyoikuGrade } from "types/kanji/KyoikuGrade"
import { Example } from "types/kanji/Example"
import { render } from "__test-utils__"
import JLTPLevel from "types/learn/JLTPLevel"

const onClickHandler = vi.fn()

const kanji = new Kanji(
  "人",
  [new KanjiReading("jin", "じん", ReadingType.ON), new KanjiReading("hito", "ひと", ReadingType.KUN)],
  ["person"],
  KyoikuGrade.ONE,
  JLTPLevel.N5,
  "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
  [new Example("外国人", ["がいこくじん"], ["foreigner"])],
  1,
  []
)

test("Should call the onClick event handler when clicking the card", () => {
  const { component } = render(<KanjiFlashCardFront data={kanji} onClick={onClickHandler} />)
  fireEvent.click(component.getByText("人"))
  expect(onClickHandler).toHaveBeenCalled()
})
