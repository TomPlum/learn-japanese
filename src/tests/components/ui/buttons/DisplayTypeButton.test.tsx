import { fireEvent } from "@testing-library/react"
import DisplayTypeButton, { DisplayTypeButtonProps } from "../../../../components/ui/buttons/DisplayTypeButton"
import QuestionType from "../../../../domain/game/QuestionType"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import renderWithTranslation from "../../../renderWithTranslation"

const onClickHandler = jest.fn()

let props: DisplayTypeButtonProps

beforeEach(() => {
    props = {
        type: QuestionType.CHOICE,
        selected: QuestionType.CHOICE,
        icon: faCircle,
        onClick: onClickHandler
    }
})

const setup = () => {
    const component = renderWithTranslation(<DisplayTypeButton {...props} />)
    return {
        button: component.getByText("Multiple Choice"),
        ...component
    }
}

test("Clicking the button should call the onClick event handler", () => {
    const { button } = setup()
    fireEvent.click(button)
    expect(onClickHandler).toHaveBeenCalled()
})

test("Passing selected the same as type should append the selected class", () => {
    const { container } = setup()
    expect(container.firstChild).toHaveClass("selected")
})

test("Passing selected different from type should append the notSelected class", () => {
    props.selected = QuestionType.TEXT
    const { container } = setup()
    expect(container.firstChild).toHaveClass("notSelected")
})
