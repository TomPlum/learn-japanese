import { render } from "@testing-library/react"
import DashboardCardPreload  from "./DashboardCardPreload"

test("Should not render the loading animation if the active property is passed as false", () => {
  const component = render(<DashboardCardPreload active={false} />)
  expect(component.queryByTestId("dashboard-card-loader")).not.toBeInTheDocument()
})

test("Should render the loading animation if the active property is passed as true", () => {
  const component = render(<DashboardCardPreload active />)
  expect(component.getByTestId("dashboard-card-loader")).toBeInTheDocument()
})
