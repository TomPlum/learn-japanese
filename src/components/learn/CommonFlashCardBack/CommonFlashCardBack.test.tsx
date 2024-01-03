import { fireEvent, render } from "@testing-library/react"
import CommonFlashCardBack  from "./CommonFlashCardBack"

const onClickHandler = vi.fn()

const kana = ["れい", "ゼロ", "マル"]
const title = "Example Title"

test("Should render the answer", () => {
  const component = render(<CommonFlashCardBack answer={"一"} kana={kana} title={title} onClick={onClickHandler} />)
  expect(component.getByText("一")).toBeInTheDocument()
})

test("Should render the title", () => {
  const component = render(<CommonFlashCardBack answer={"一"} kana={kana} title={title} onClick={onClickHandler} />)
  expect(component.getByText("Example Title")).toBeInTheDocument()
})

test("Should render the words", () => {
  const component = render(<CommonFlashCardBack answer={"一"} kana={kana} title={title} onClick={onClickHandler} />)
  expect(component.getByText("れい or ゼロ or マル")).toBeInTheDocument()
  expect(component.getByText("(rei or zero or maru)")).toBeInTheDocument()
})

test("Should render the example if one is passed in", () => {
  const component = render(
    <CommonFlashCardBack
      answer={"一"}
      kana={kana}
      title={title}
      onClick={onClickHandler}
      example={{ kana: "100枚の折り紙が必要です", english: "I need 100 pieces of origami paper." }}
    />
  )
  expect(component.getByText("I need 100 pieces of origami paper.")).toBeInTheDocument()
  expect(component.getByText("100枚の折り紙が必要です")).toBeInTheDocument()
})

test("Clicking the reset button should call the onClick event handler", () => {
  const component = render(<CommonFlashCardBack answer={"一"} kana={kana} title={title} onClick={onClickHandler} />)
  fireEvent.click(component.getByTitle("Reset"))
  expect(onClickHandler).toHaveBeenCalled()
})
