import { fireEvent, render, screen } from "@testing-library/react"
import HoverMessage from "../../../components/ui/HoverMessage"

test.todo("Write these")

test("Should render the message when hovering over the child subject", async () => {
    const component = render(
        <HoverMessage message="This is a test message">
            <span>Subject</span>
        </HoverMessage>
    )
    fireEvent.mouseEnter(component.getByTestId("hover-message"))
    expect(await screen.findByText("This is a test message")).toBeInTheDocument()
})
