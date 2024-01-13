import NotificationSettingsTab  from "./NotificationsSettingsTab"
import { fireEvent, within } from "@testing-library/react"
import { testUser } from "../../../../setupTests"
import { render } from "__test-utils__"
import { User } from "context/UserContext";

const mockUpdatePreferences = vi.fn()
vi.mock("service/UserService", () => ({
  default: function () {
    return { updatePreferences: mockUpdatePreferences }
  }
}))

test("Should render the streak notifications toggle", async () => {
  // Start with the preference enabled
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  const user: User = { ...testUser, preferences: { ...testUser.preferences, streakNotifications: true }}
  const { component } = render(<NotificationSettingsTab />, { user })

  // It should default to the truthy text
  const notificationsToggle = component.getByTestId("streak-notifications-toggle")
  expect(within(notificationsToggle).getByText("Enabled")).toBeInTheDocument()

  // Mousing over should render the correct falsy hover text
  fireEvent.mouseOver(notificationsToggle)
  expect(within(notificationsToggle).getByText("Disable")).toBeInTheDocument()

  // Toggling the option should render the falsy text
  fireEvent.click(notificationsToggle)
  expect(await within(notificationsToggle).findByText("Disabled")).toBeInTheDocument()

  // Mousing over its falsy state should render the truthy hover text
  fireEvent.mouseOver(notificationsToggle)
  expect(within(notificationsToggle).getByText("Enable")).toBeInTheDocument()
})

test("Should render the mistakes reminder toggle", async () => {
  // Start with the preference enabled
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  const user: User = { ...testUser, preferences: { ...testUser.preferences, mistakesReminders: true }}
  const { component } = render(<NotificationSettingsTab />, { user })

  // It should default to the truthy text
  const mistakesToggle = component.getByTestId("mistakes-reminders-toggle")
  expect(within(mistakesToggle).getByText("Enabled")).toBeInTheDocument()

  // Mousing over should render the correct falsy hover text
  fireEvent.mouseOver(mistakesToggle)
  expect(within(mistakesToggle).getByText("Disable")).toBeInTheDocument()

  // Toggling the option should render the falsy text
  fireEvent.click(mistakesToggle)
  expect(await within(mistakesToggle).findByText("Disabled")).toBeInTheDocument()

  // Mousing over its falsy state should render the truthy hover text
  fireEvent.mouseOver(mistakesToggle)
  expect(within(mistakesToggle).getByText("Enable")).toBeInTheDocument()
})
