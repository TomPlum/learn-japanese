import { fireEvent, render, screen } from "@testing-library/react"
import KanaFlashCardBack  from "./KanaFlashCardBack"
import { Kana } from "types/kana/Kana"
import KanaType from "types/kana/KanaType"
import { KanaColumn } from "types/kana/KanaColumn"

const onClickHandler = vi.fn()

const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)

test("Should call the onClick event handler when clicking the reset button", () => {
  const component = render(<KanaFlashCardBack data={kana} onClick={onClickHandler} />)
  fireEvent.click(component.getByTitle("Reset"))
  expect(onClickHandler).toHaveBeenCalled()
})

test("Should render the kana type", () => {
  render(<KanaFlashCardBack data={kana} onClick={onClickHandler} />)
  expect(screen.getByText("Hiragana")).toBeInTheDocument()
})

test("Should render the romaji", () => {
  render(<KanaFlashCardBack data={kana} onClick={onClickHandler} />)
  expect(screen.getByText("a")).toBeInTheDocument()
})
