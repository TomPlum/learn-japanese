import { fireEvent, screen } from "@testing-library/react"
import AppModeButton  from "./AppModeButton"
import { AppMode } from "../../../../domain/AppMode"
import { store } from "../../../../store"
import { setApplicationMode } from "../../../../slices/ModeSlice"
import { render } from "__test-utils__"

test("Clicking the button should change 'Learn' mode and display the 'Play' text and icon", () => {
  store.dispatch(setApplicationMode(AppMode.PLAY))
  const component = render(<AppModeButton disabled={false} />)
  fireEvent.click(component.getByText("Learn"))
  expect(screen.getByText("Play")).toBeInTheDocument()
})

test("Clicking the button should change 'Play' mode and display the 'Learn' text and icon", () => {
  store.dispatch(setApplicationMode(AppMode.LEARN))
  const component = render(<AppModeButton disabled={false} />)
  fireEvent.click(component.getByText("Play"))
  expect(screen.getByText("Learn")).toBeInTheDocument()
})

test("Passing disabled as true should disable the button", () => {
  const { container } = render(<AppModeButton disabled={true} />)
  const button = container.firstChild
  expect(button).toHaveAttribute("aria-disabled", "true")
})

test("Passing disabled as false should enable the button", () => {
  const { container } = render(<AppModeButton disabled={false} />)
  const button = container.firstChild
  expect(button).not.toHaveAttribute("aria-disabled")
})
