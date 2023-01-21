import { fireEvent, render } from "@testing-library/react"
import Icon from "../../../../../components/ui/menu/icon/Icon"

const onClickEventHandler = jest.fn()

test("Should render the icon with a title equal to the name with the Fa prefix removed", () => {
  const component = render(<Icon value="FaAccessibleIcon" />)
  expect(component.getByTitle("AccessibleIcon")).toBeInTheDocument()
})

test("Should call the onClick event handler with clicking the icon", () => {
  const { container } = render(<Icon value="FaAccessibleIcon" onClick={onClickEventHandler} />)
  fireEvent.click(container.firstChild!)
  expect(onClickEventHandler).toHaveBeenCalled()
})

test("Should pass the given class name to the icon", () => {
  const { container } = render(<Icon value="FaAccessibleIcon" className="myTestClass" />)
  const icon = container.firstChild!
  expect(icon).toHaveClass("myTestClass")
})

test("Should render a question icon if the icon value is passed falsy", () => {
  const component = render(<Icon value="" />)
  expect(component.getByTestId("unknown-icon")).toBeInTheDocument()
})

test("Should render a string literal icon if it is not a recognised font awesome icon", () => {
  const component = render(<Icon value="を" />)
  expect(component.getByText("を")).toBeInTheDocument()
})

test("Should spread the given style object properties to the underlying icon element", () => {
  const { container } = render(<Icon value="FaAtom" style={{ color: "#F3F3F3" }} />)
  expect(container.firstChild).toHaveStyle({ color: "#F3F3F3" })
})
