import { fireEvent, render } from "@testing-library/react"
import KyoikuGradeButton from "../../../../components/ui/buttons/KyoikuGradeButton"
import { KyoikuGrade } from "../../../../domain/kanji/KyoikuGrade"

const onClickHandler = jest.fn()

test("Clicking the button should call the onClick event handler", () => {
    const component = render(<KyoikuGradeButton grade={KyoikuGrade.ONE} isSelected={false} onClick={onClickHandler} />)
    fireEvent.click(component.getByText("Grade 1"))
    expect(onClickHandler).toHaveBeenCalled()
})

test("Should render the grade", () => {
    const component = render(<KyoikuGradeButton grade={KyoikuGrade.ONE} isSelected={false} onClick={onClickHandler} />)
    expect(component.getByText("Grade 1")).toBeInTheDocument()
})
