import { render } from "@testing-library/react"
import DashboardCardError  from "./DashboardCardError"

test("Should not render the error state if the active property is passed as false", () => {
  const component = render(<DashboardCardError active={false} />)
  expect(component.queryByTestId("dashboard-card-error")).not.toBeInTheDocument()
})

test("Should render the error state if the active property is passed as true", () => {
  const component = render(<DashboardCardError active />)
  expect(component.getByTestId("dashboard-card-error")).toBeInTheDocument()
})

test("Should render the children", () => {
  const component = render(
    <DashboardCardError active>
      <span>Example Content</span>
    </DashboardCardError>
  )
  expect(component.getByText("Example Content")).toBeInTheDocument()
})
