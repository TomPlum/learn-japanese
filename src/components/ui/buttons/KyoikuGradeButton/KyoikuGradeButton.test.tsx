import { fireEvent, render } from "@testing-library/react"
import KyoikuGradeButton  from "./KyoikuGradeButton"
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade"

const onClickHandler = vi.fn()

test("Clicking the button should call the onClick event handler", () => {
  const component = render(<KyoikuGradeButton grade={KyoikuGrade.ONE} isSelected={false} onClick={onClickHandler} />)
  fireEvent.click(component.getByText("Grade 1"))
  expect(onClickHandler).toHaveBeenCalled()
})

test("Should render the grade", () => {
  const component = render(<KyoikuGradeButton grade={KyoikuGrade.ONE} isSelected={false} onClick={onClickHandler} />)
  expect(component.getByText("Grade 1")).toBeInTheDocument()
})
