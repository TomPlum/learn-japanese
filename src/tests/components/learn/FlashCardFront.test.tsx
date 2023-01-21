import { fireEvent, render } from "@testing-library/react"
import FlashCardFront from "../../../components/learn/FlashCardFront"

const onClickHandler = jest.fn()

test("Should call the onClick event handler when clicking the card face", () => {
    const component = render(
        <FlashCardFront onClick={onClickHandler}>
            <p>Child</p>
        </FlashCardFront>
    )
    fireEvent.click(component.getByText("Child"))
    expect(onClickHandler).toHaveBeenCalled()
})

test("Should apply the given class to the container", () => {
    const { container } = render(
        <FlashCardFront onClick={onClickHandler} className="exampleClass">
            <p>Child</p>
        </FlashCardFront>
    )
    expect(container.firstChild).toHaveClass("exampleClass")
    expect(container.firstChild).toHaveClass("wrapper")
})
