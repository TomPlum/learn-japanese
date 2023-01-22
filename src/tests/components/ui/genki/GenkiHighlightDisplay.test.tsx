import { render } from "@testing-library/react"
import GenkiHighlightDisplay from "../../../../components/ui/genki/GenkiHighlightDisplay"

test("Should render the given text", () => {
  const component = render(<GenkiHighlightDisplay text="Test" description="This is a test display" chapter={1} />)
  const text = component.getByText("Test")
  expect(text).toBeInTheDocument()
})

test("Should render the given description", () => {
  const component = render(<GenkiHighlightDisplay text="Test" description="This is a test display" chapter={1} />)
  const text = component.getByText("This is a test display")
  expect(text).toBeInTheDocument()
})

test("Should the text with the genkiOne class if the chapter is less than or equal to 12", () => {
  const { container } = render(<GenkiHighlightDisplay text="Test" description="This is a test display" chapter={12} />)
  const text = container.firstChild?.firstChild
  expect(text).toHaveClass("genkiOne")
})

test("Should the text with the genkiTwo class if the chapter is greater than 12", () => {
  const { container } = render(<GenkiHighlightDisplay text="Test" description="This is a test display" chapter={17} />)
  const text = container.firstChild?.firstChild
  expect(text).toHaveClass("genkiTwo")
})
