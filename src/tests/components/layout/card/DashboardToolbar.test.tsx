import { render } from "@testing-library/react"
import DashboardToolbar from "../../../../components/layout/card/DashboardToolbar"

test("Should render the edit button", () => {
    const component = render(<DashboardToolbar />)
    expect(component.getByTestId("edit-dashboard-layout")).toBeInTheDocument()
})

test("Should render the settings button", () => {
    const component = render(<DashboardToolbar />)
    expect(component.getByTestId("edit-dashboard-settings")).toBeInTheDocument()
})

test("Should render the search button", () => {
    const component = render(<DashboardToolbar />)
    expect(component.getByTestId("search-dashboard")).toBeInTheDocument()
})

test("Should render the sync button", () => {
    const component = render(<DashboardToolbar />)
    expect(component.getByTestId("dashboard-sync-all")).toBeInTheDocument()
})
