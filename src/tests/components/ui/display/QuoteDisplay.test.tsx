import { render } from "@testing-library/react"
import QuoteDisplay from "../../../../components/ui/display/QuoteDisplay"
import { getByTextWithMarkup } from "../../../Queries"

test("It should render the given text wrapped in quotation marks", () => {
    render(<QuoteDisplay chapter={1}>Tom is awesome.</QuoteDisplay>)
    const text = getByTextWithMarkup('"Tom is awesome."')
    expect(text).toBeInTheDocument()
})

test("It should render the wrapper with genkiOne class if the chapter is less than 12", () => {
    const { container } = render(<QuoteDisplay chapter={1}>Tom is awesome.</QuoteDisplay>)
    expect(container.firstChild).toHaveClass("genkiOne")
})

test("It should render the wrapper with genkiTwo class if the chapter is greater than 12", () => {
    const { container } = render(<QuoteDisplay chapter={15}>Tom is awesome.</QuoteDisplay>)
    expect(container.firstChild).toHaveClass("genkiTwo")
})

test("It should render the wrapper with an X icon if the quote is incorrect", () => {
    const component = render(
        <QuoteDisplay chapter={15} incorrect>
            Tom is un-cool.
        </QuoteDisplay>
    )
    const xIcon = component.getByTitle("Incorrect")
    expect(xIcon).toBeInTheDocument()
})

test("It should render the wrapper with the incorrect class if the property is passed as true", () => {
    const { container } = render(
        <QuoteDisplay chapter={15} incorrect>
            Tom is un-cool.
        </QuoteDisplay>
    )
    expect(container.firstChild).toHaveClass("incorrect")
})
