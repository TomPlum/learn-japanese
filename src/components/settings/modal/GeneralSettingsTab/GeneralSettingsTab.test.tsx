import GeneralSettingsTab  from "./GeneralSettingsTab"
import { fireEvent, screen } from "@testing-library/react"
import { render } from "__test-utils__"

test("Should render the activity feed quantity settings dropdown", async () => {
  const { component } = render(<GeneralSettingsTab />)

  fireEvent.click(component.getByTestId("general-settings-activity-selector"))

  // Should render the correct options
  expect(await screen.findByText("3")).toBeInTheDocument()
  expect(await screen.findByText("5")).toBeInTheDocument()
  expect(await screen.findByText("8")).toBeInTheDocument()
})
