import SettingsCard  from "./SettingsCard"
import { testUser } from "../../../setupTests"
import { fireEvent, screen } from "@testing-library/react"
import { render } from "__test-utils__"
import { User } from "context/UserContext";

const setup = (user?: User) => {
  const { component } = render(<SettingsCard />, { user })
  return {
    general: component.getByText("General Settings"),
    learn: component.getByText("Learn Settings"),
    play: component.getByText("Play Settings"),
    ui: component.getByText("Interface Settings"),
    notification: component.queryByText("Notification Settings"),
    user: component.queryByText("User Settings"),
    ...component
  }
}

test("Should render the correct settings sub-menu links when a user is logged in", () => {
  const { general, learn, play, ui, notification, user } = setup(testUser)

  expect(general).toBeInTheDocument()
  expect(learn).toBeInTheDocument()
  expect(play).toBeInTheDocument()
  expect(ui).toBeInTheDocument()
  expect(notification).toBeInTheDocument()
  expect(user).toBeInTheDocument()
})

test("Should render the correct settings sub-menu links when a user is not logged in", () => {
  const { general, learn, play, ui, notification, user } = setup()

  expect(general).toBeInTheDocument()
  expect(learn).toBeInTheDocument()
  expect(play).toBeInTheDocument()
  expect(ui).toBeInTheDocument()
  expect(notification).not.toBeInTheDocument()
  expect(user).not.toBeInTheDocument()
})

test("Should render the settings modal with the interface tab when clicking the respective link", async () => {
  const { ui } = setup(testUser)
  fireEvent.click(ui)
  expect(await screen.findByTestId("interface-settings-tab")).toBeInTheDocument()
})

test("Dismissing the settings modal should stop rendering it", async () => {
  const { general } = setup(testUser)

  fireEvent.click(general)
  expect(await screen.findByTestId("settings-modal")).toBeInTheDocument()

  fireEvent.click(screen.getByTitle("Close"))
  expect(screen.queryByTestId("settings-modal")).not.toBeInTheDocument()
})
