import { fireEvent, render } from "@testing-library/react"
import KanaQuantityButton from "../../../../components/ui/buttons/KanaQuantityButton"

const onClickHandler = vi.fn()

test("Clicking the button should call the onClick event handler with the kana quantity", () => {
  const component = render(<KanaQuantityButton cards={2} selected={2} onClick={onClickHandler} />)
  fireEvent.click(component.getByText("2"))
  expect(onClickHandler).toHaveBeenCalledWith(2)
})

test("Should set the button class name to 'selected' when the selected prop equals the quantity", () => {
  const { container } = render(<KanaQuantityButton cards={2} selected={2} onClick={onClickHandler} />)
  expect(container.firstChild).toHaveClass("selected")
})

test("Should set the button class name to 'notSelected' when the selected prop does not equal the quantity", () => {
  const { container } = render(<KanaQuantityButton cards={2} selected={4} onClick={onClickHandler} />)
  expect(container.firstChild).toHaveClass("notSelected")
})
