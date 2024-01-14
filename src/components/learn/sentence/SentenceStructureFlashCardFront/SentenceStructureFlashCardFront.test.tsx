import { fireEvent, render } from "@testing-library/react"
import SentenceStructureFlashCardFront  from "./SentenceStructureFlashCardFront"
import Definition from "types/sentence/Definition"

const onClickHandler = vi.fn()

const adjective = new Definition(["interesting", "funny"], "面白い", "おもしろい", "い Adjective")

test("Clicking the card face should call the onClick event handler", () => {
  const component = render(<SentenceStructureFlashCardFront data={adjective} onClick={onClickHandler} />)
  fireEvent.click(component.getByText("interesting"))
  expect(onClickHandler).toHaveBeenCalled()
})

test("Multiple meanings should all render with an or in between", () => {
  const component = render(<SentenceStructureFlashCardFront data={adjective} onClick={onClickHandler} />)
  expect(component.getByText("interesting")).toBeInTheDocument()
  expect(component.getByText("or")).toBeInTheDocument()
  expect(component.getByText("funny")).toBeInTheDocument()
})
