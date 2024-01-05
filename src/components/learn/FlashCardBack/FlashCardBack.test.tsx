import { fireEvent, render } from "@testing-library/react"
import FlashCardBack  from "./FlashCardBack"

const onResetHandler = vi.fn()

test("Should call the onClick event handler when clicking the reset button", () => {
  const component = render(<FlashCardBack title="Example Title" onReset={onResetHandler} />)
  fireEvent.click(component.getByTitle("Reset"))
  expect(onResetHandler).toHaveBeenCalled()
})

test("Should render title", () => {
  const component = render(<FlashCardBack title="Example Title" onReset={onResetHandler} />)
  expect(component.getByText("Example Title")).toBeInTheDocument()
})

test("Should apply the given class to the container", () => {
  const { container } = render(
    <FlashCardBack title="Example Title" onReset={onResetHandler} className="exampleClass">
      <p>Child</p>
    </FlashCardBack>
  )
  expect(container.firstChild).toHaveClass("exampleClass")
  expect(container.firstChild).toHaveClass("wrapper")
})
