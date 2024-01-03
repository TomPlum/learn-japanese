import { fireEvent, render } from "@testing-library/react"
import DashboardCardLink  from "./DashboardCardLink"
import { faApple } from "@fortawesome/free-brands-svg-icons"

const onClickHandler = vi.fn()
const onMouseDownHandler = vi.fn()

test("Should render the given text", () => {
  const component = render(<DashboardCardLink text="Example Text" />)
  const text = component.getByText("Example Text")
  expect(text).toBeInTheDocument()
})

test("Should render a chevron icon if the property is passed", () => {
  const component = render(<DashboardCardLink text="Example Text" chevron />)
  const chevron = component.getByTestId("dashboard-card-link-chevron")
  expect(chevron).toBeInTheDocument()
})

test("Should NOT render a chevron icon if the property is passed as false", () => {
  const component = render(<DashboardCardLink text="Example Text" chevron={false} />)
  const chevron = component.queryByTestId("dashboard-card-link-chevron")
  expect(chevron).not.toBeInTheDocument()
})

test("Should render the anchor with the given href if provided", () => {
  const { container } = render(<DashboardCardLink text="Example Text" href="/example-resource" />)
  const anchor = container.firstChild
  expect(anchor).toHaveAttribute("href", "/example-resource")
})

test("Should pass the given className to the anchor element", () => {
  const { container } = render(<DashboardCardLink text="Example Text" className="exampleClass" />)
  const anchor = container.firstChild
  expect(anchor).toHaveClass("exampleClass")
})

test("Should call the onClick event handler when clicking on the link", () => {
  const component = render(<DashboardCardLink text="Example Text" onClick={onClickHandler} />)
  fireEvent.click(component.getByText("Example Text"))
  expect(onClickHandler).toHaveBeenCalled()
})

test("Should call the onMouseDown event handler when mousing down on the link", () => {
  const component = render(<DashboardCardLink text="Example Text" onMouseDown={onMouseDownHandler} />)
  fireEvent.mouseDown(component.getByText("Example Text"))
  expect(onMouseDownHandler).toHaveBeenCalled()
})

test("Should render the main icon if the property is passed", () => {
  const component = render(<DashboardCardLink text="Example Text" icon={faApple} />)
  const anchor = component.getByTestId("dashboard-card-link-icon")
  expect(anchor).toBeInTheDocument()
})

test("Should NOT render the main icon if the property is omitted", () => {
  const component = render(<DashboardCardLink text="Example Text" />)
  const anchor = component.queryByTestId("dashboard-card-link-icon")
  expect(anchor).not.toBeInTheDocument()
})

test("Should render the anchor with the given title", () => {
  const component = render(<DashboardCardLink text="Example Text" title="MyLink" />)
  const anchor = component.getByTitle("MyLink")
  expect(anchor).toBeInTheDocument()
})

test("Should render the anchor with the disabled class if the prop is passed as true", () => {
  const { container } = render(<DashboardCardLink text="Example Text" disabled />)
  const anchor = container.firstChild
  expect(anchor).toHaveClass("disabled")
})
