import CommonData from "../../../../domain/learn/CommonData"
import { fireEvent, render } from "@testing-library/react"
import NumbersFlashCardBack  from "./NumbersFlashCardBack"
import { getByTextWithMarkup } from "__test-utils__/Queries"

const onResetHandler = vi.fn()

const number = new CommonData("0", ["れい", "ゼロ", "マル"], "一", "Number", "0")

test("Clicking the reset button should call the onReset event handler", () => {
  const component = render(<NumbersFlashCardBack data={number} onClick={onResetHandler} />)
  fireEvent.click(component.getByTitle("Reset"))
  expect(onResetHandler).toHaveBeenCalled()
})

test("Should render the kanji", () => {
  const component = render(<NumbersFlashCardBack data={number} onClick={onResetHandler} />)
  expect(component.getByText("一")).toBeInTheDocument()
})

test("Should render the kana", () => {
  const component = render(<NumbersFlashCardBack data={number} onClick={onResetHandler} />)
  expect(component.getByText("れい or ゼロ or マル")).toBeInTheDocument()
})

test("Should render the romaji", () => {
  render(<NumbersFlashCardBack data={number} onClick={onResetHandler} />)
  expect(getByTextWithMarkup("(rei or zero or maru)")).toBeInTheDocument()
})
