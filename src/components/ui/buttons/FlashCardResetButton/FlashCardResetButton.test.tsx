import { fireEvent, render } from "@testing-library/react"
import FlashCardResetButton  from "./FlashCardResetButton"

const onClickHandler = vi.fn()

test("Should call the onClick event handler when clicking the button", () => {
  const component = render(<FlashCardResetButton onClick={onClickHandler} />)
  fireEvent.click(component.getByTitle("Reset"))
  expect(onClickHandler).toHaveBeenCalled()
})
