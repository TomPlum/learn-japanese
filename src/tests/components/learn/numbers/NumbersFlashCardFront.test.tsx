import { fireEvent, render } from "@testing-library/react"
import NumbersFlashCardFront from "../../../../components/learn/numbers/NumbersFlashCardFront"
import CommonData from "../../../../domain/learn/CommonData"

const onClickHandler = jest.fn()

const number = new CommonData("1", ["いち"], "一", "Number", "1")

test("Clicking the card face should call the onClick event handler", () => {
  const component = render(<NumbersFlashCardFront data={number} onClick={onClickHandler} />)
  fireEvent.click(component.getByText("1"))
  expect(onClickHandler).toHaveBeenCalled()
})
