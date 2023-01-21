import { render } from "@testing-library/react"
import DashboardCardTitle from "../../../../components/layout/card/DashboardCardTitle"

test("Should render the children", () => {
  const component = render(
    <DashboardCardTitle>
      <span data-testid="example-child">Hello</span>
    </DashboardCardTitle>
  )
  expect(component.getByTestId("example-child")).toBeInTheDocument()
  expect(component.getByText("Hello")).toBeInTheDocument()
})

test("Should apply the class to the container if given", () => {
  const { container } = render(<DashboardCardTitle className="exampleClass" />)
  expect(container.firstChild).toHaveClass("exampleClass")
})
