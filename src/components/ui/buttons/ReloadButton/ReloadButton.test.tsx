import { fireEvent, render, screen } from "@testing-library/react"
import ReloadButton  from "./ReloadButton"

const onClickHandler = vi.fn()

test("Clicking the button should call the onClick event handler", () => {
  render(<ReloadButton loading={false} onClick={onClickHandler} />)
  fireEvent.click(screen.getByTitle("Refresh"))
  expect(onClickHandler).toHaveBeenCalled()
})

test("Passing the loading property as false should render the refresh icon", () => {
  render(<ReloadButton loading={false} onClick={onClickHandler} />)
  expect(screen.getByTitle("Refresh")).toBeInTheDocument()
})

test("Passing the loading property as true should render the loading icon", () => {
  render(<ReloadButton loading={true} onClick={onClickHandler} />)
  expect(screen.getByTitle("Loading...")).toBeInTheDocument()
})
