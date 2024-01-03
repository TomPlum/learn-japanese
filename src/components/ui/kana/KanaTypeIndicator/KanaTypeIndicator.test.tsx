import { render, screen } from "@testing-library/react"
import KanaTypeIndicator  from "./KanaTypeIndicator"

test("Should render icon with passed title", () => {
  render(<KanaTypeIndicator title="Hiragana" className="exampleClass" />)
  expect(screen.getByTitle("Hiragana")).toBeInTheDocument()
})

test("Passing the className property should add it to the icon", () => {
  const { container } = render(<KanaTypeIndicator title="Hiragana" className="exampleClass" />)
  expect(container.firstChild).toHaveClass("exampleClass")
})
