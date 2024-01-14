import { fireEvent, render, screen } from "@testing-library/react"
import FlashCard  from "./FlashCard"
import { Kana } from "types/kana/Kana"
import { KanaColumn } from "types/kana/KanaColumn"
import KanaType from "types/kana/KanaType"
import KanaFlashCardFront from "../../../components/learn/kana/KanaFlashCardFront"
import KanaFlashCardBack from "../../../components/learn/kana/KanaFlashCardBack"

const onFlipHandler = vi.fn()

const setup = () => {
  const component = render(
    <FlashCard
      data={new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)}
      onFlip={onFlipHandler}
      front={KanaFlashCardFront}
      back={KanaFlashCardBack}
      showRomaji={false}
    />
  )
  return {
    card: component.getByText("あ"),
    ...component
  }
}

test("Clicking the card should call the onFlip event handler with 1 flip count", () => {
  const { card } = setup()
  fireEvent.click(card)
  expect(onFlipHandler).toHaveBeenCalledWith(1)
})

test("Flipping a card twice should call the onFlip handler with a flip count of 2", () => {
  const { card } = setup()
  fireEvent.click(card)
  fireEvent.click(screen.getByText("a"))
  fireEvent.click(card)
  expect(onFlipHandler).toHaveBeenCalledWith(2)
})
