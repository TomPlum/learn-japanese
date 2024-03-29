import PlaySettingsTab  from "./PlaySettingsTab"
import { fireEvent, screen } from "@testing-library/react"
import { render } from "__test-utils__"

test("Should render the high scores preference dropdown", async () => {
  const { component } = render(<PlaySettingsTab />)

  fireEvent.click(component.getByTestId("play-settings-high-score-selector"))

  // Should render correct options
  expect(await screen.findByText("Ask Each Time"))
  expect(await screen.findByText("Always Submit"))
  expect(await screen.findByText("Never Submit"))
})
