import { fireEvent, render } from "@testing-library/react"
import FlashCardResetButton from "../../../../components/ui/buttons/FlashCardResetButton"

const onClickHandler = jest.fn()

test("Should call the onClick event handler when clicking the button", () => {
  const component = render(<FlashCardResetButton onClick={onClickHandler} />)
  fireEvent.click(component.getByTitle("Reset"))
  expect(onClickHandler).toHaveBeenCalled()
})
