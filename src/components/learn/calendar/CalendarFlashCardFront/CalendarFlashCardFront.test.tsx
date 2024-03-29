import { fireEvent, render } from "@testing-library/react"
import CalendarFlashCardFront  from "./CalendarFlashCardFront"
import Definition from "../../../../domain/sentence/Definition"

const onClickHandler = vi.fn()

const day = new Definition(["Monday"], "月曜日", "げつようび", "Day of the Week")

test("Should call the onClick event handler when clicking the card", () => {
  const component = render(<CalendarFlashCardFront data={day} onClick={onClickHandler} />)
  fireEvent.click(component.getByText("Monday"))
  expect(onClickHandler).toHaveBeenCalled()
})
