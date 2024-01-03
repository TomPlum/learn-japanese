import { render } from "@testing-library/react"
import DashboardCardFooter  from "./DashboardCardFooter"

test("Should render the children", () => {
  const component = render(
    <DashboardCardFooter>
      <span>Example Content</span>
    </DashboardCardFooter>
  )
  expect(component.getByText("Example Content")).toBeInTheDocument()
})

test("Should pass the given class name to the container", () => {
  const { container } = render(<DashboardCardFooter className="myTestClassName" />)
  expect(container.firstChild).toHaveClass("myTestClassName")
})
