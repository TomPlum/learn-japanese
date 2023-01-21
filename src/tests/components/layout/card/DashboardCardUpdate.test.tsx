import { render } from "@testing-library/react"
import DashboardCardUpdate from "../../../../components/layout/card/DashboardCardUpdate"

test("Should render nothing if the active property is passed as false", () => {
    const component = render(<DashboardCardUpdate active={false} />)
    expect(component.queryByTestId("dashboard-card-update")).not.toBeInTheDocument()
})

test("Should render the updating animation if the active property is passed as true", () => {
    const component = render(<DashboardCardUpdate active />)
    expect(component.getByTestId("dashboard-card-update")).toBeInTheDocument()
})
