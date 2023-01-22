import { fireEvent, render } from "@testing-library/react"
import Colour from "../../../../domain/colour/Colour"
import BasicsFlashCardBack from "../../../../components/learn/basics/BasicsFlashCardBack"

const onClickHandler = jest.fn()

const colour = new Colour("Red", "赤", "あか", "aka", "#ff0000")

test("Should call the onClick event handler when clicking the reset button", () => {
  const component = render(<BasicsFlashCardBack data={colour} onClick={onClickHandler} />)
  fireEvent.click(component.getByTitle("Reset"))
  expect(onClickHandler).toHaveBeenCalled()
})

test("Should render the kanji", () => {
  const component = render(<BasicsFlashCardBack data={colour} onClick={onClickHandler} />)
  expect(component.getByText("赤")).toBeInTheDocument()
})

test("Should render the colour name as the title title", () => {
  const component = render(<BasicsFlashCardBack data={colour} onClick={onClickHandler} />)
  expect(component.getByText("Red")).toBeInTheDocument()
})

test("Should render the kana", () => {
  const component = render(<BasicsFlashCardBack data={colour} onClick={onClickHandler} />)
  expect(component.getByText("あか")).toBeInTheDocument()
})

test("Should render the romaji", () => {
  const component = render(<BasicsFlashCardBack data={colour} onClick={onClickHandler} />)
  expect(component.getByText("(aka)")).toBeInTheDocument()
})
