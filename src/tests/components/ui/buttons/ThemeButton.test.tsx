import { fireEvent, render } from "@testing-library/react"
import ThemeButton from "../../../../components/ui/buttons/ThemeButton"

const setup = () => {
    const component = render(<ThemeButton />)
    return {
        button: component.getByTestId("theme-button"),
        ...component
    }
}

test("The button should default to dark mode and therefore show the light mode icon", () => {
    const { button } = setup()
    expect(button).toHaveAttribute("data-icon", "lightbulb")
})

test("Clicking the button in dark mode should change to light mode and display the dark mode text and icon", () => {
    const { button } = setup()
    fireEvent.click(button)
    expect(button).toHaveAttribute("data-icon", "moon")
})

test("Clicking the button in light mode should change to dark mode and display the light mode text and icon", () => {
    const { button } = setup()
    fireEvent.click(button)
    fireEvent.click(button)
    expect(button).toHaveAttribute("data-icon", "lightbulb")
})
