import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import DashboardCardSettingsMenu  from "./DashboardCardSettingsMenu"
import DashboardCardLink from "../../../../components/layout/card/DashboardCardLink"

test("Should render the child elements", async () => {
  const component = render(
    <DashboardCardSettingsMenu>
      <DashboardCardLink text="Test" />
    </DashboardCardSettingsMenu>
  )
  fireEvent.click(component.getByTestId("dashboard-settings-menu-button"))
  expect(await screen.findByText("Test")).toBeInTheDocument()
})

test("Clicking a child element link should stop rendering the menu", async () => {
  const component = render(
    <DashboardCardSettingsMenu>
      <DashboardCardLink text="Test" />
    </DashboardCardSettingsMenu>
  )
  fireEvent.click(component.getByTestId("dashboard-settings-menu-button"))
  const menu = await screen.findByTestId("card-settings-menu")
  expect(menu).toBeInTheDocument()

  fireEvent.mouseDown(screen.getByText("Test"))
  return waitForElementToBeRemoved(menu)
})

test("Clicking outside of the menu should stop rendering the menu", async () => {
  // Render menu
  const component = render(
    <DashboardCardSettingsMenu>
      <DashboardCardLink text="Test" />
    </DashboardCardSettingsMenu>
  )
  fireEvent.click(component.getByTestId("dashboard-settings-menu-button"))
  const menu = await screen.findByTestId("card-settings-menu")

  // Clicking outside should stop rendering the menu
  fireEvent.click(document.body)
  return waitForElementToBeRemoved(menu)
})
