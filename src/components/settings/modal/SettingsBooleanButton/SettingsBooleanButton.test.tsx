import SettingsBooleanButton, {
  SettingsBooleanButtonProps
} from "../../../../components/settings/modal/SettingsBooleanButton"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import { faCrown } from "@fortawesome/free-solid-svg-icons"
import { Preference } from "../../../../domain/user/Preference"
import { render } from "__test-utils__"
import { testUser } from "../../../../setupTests"
import { fireEvent, waitFor } from "@testing-library/react";
import { User } from "context/UserContext";

const mockUpdatePreferences = vi.fn()
vi.mock("service/UserService", () => ({
  default: function() {
    return { updatePreferences: mockUpdatePreferences }
  }
}))

const onErrorHandler = vi.fn()

let props: SettingsBooleanButtonProps

beforeEach(() => {
  props = {
    id: "test-toggle",
    truthy: {
      name: "Enabled",
      hover: "Disable Thing",
      icon: faApple,
      className: "truthyClass"
    },
    falsy: {
      name: "Disabled",
      hover: "Enable Thing",
      icon: faCrown,
      className: "falsyClass"
    },
    onError: onErrorHandler,
    preference: Preference.MISTAKES_REMINDERS,
    enableHoverColours: false
  }
})

test("Should render the truthy text if the value from context is true", () => {
  const user: User = { ...testUser, preferences: { ...testUser.preferences, mistakesReminders: true }}
  const { component } = render(<SettingsBooleanButton {...props} />, { user })
  expect(component.getByText("Enabled")).toBeInTheDocument()
})

test("Should render the falsy text if the value from context is false", () => {
  const user: User = { ...testUser, preferences: { ...testUser.preferences, mistakesReminders: false }}
  const { component } = render(<SettingsBooleanButton {...props} />, { user })
  expect(component.getByText("Disabled")).toBeInTheDocument()
})

test("Should render an unknown text if the value from context is undefined", () => {
  const { component } = render(<SettingsBooleanButton {...props} />)
  expect(component.getByText("Unknown")).toBeInTheDocument()
})

test("Should render an unknown text if the passed preference is not known as a boolean property", () => {
  props.preference = Preference.THEME
  const { component } = render(<SettingsBooleanButton {...props} />)
  expect(component.getByText("Unknown")).toBeInTheDocument()
})

test("Should render the truthy hover text if the value from context is true and the mouse is over", () => {
  // Default the state to truthy so its enabled
  const user: User = { ...testUser, preferences: { ...testUser.preferences, mistakesReminders: true }}
  const { component } = render(<SettingsBooleanButton {...props} />, { user })

  // Mousing over should render the falsy hover text
  fireEvent.mouseOver(component.getByTestId("test-toggle"))
  expect(component.getByText("Disable Thing")).toBeInTheDocument()

  // Mousing out should re-render the truthy state text
  fireEvent.mouseOut(component.getByTestId("test-toggle"))
  expect(component.getByText("Enabled")).toBeInTheDocument()
})

test("Should render the falsy hover text if the value from context is false and the mouse is over", () => {
  const user: User = { ...testUser, preferences: { ...testUser.preferences, mistakesReminders: false }}
  const { component } = render(<SettingsBooleanButton {...props} />, { user })
  fireEvent.mouseOver(component.getByTestId("test-toggle"))
  expect(component.getByText("Enable Thing")).toBeInTheDocument()
})

test("Should continue rendering the default text value when hovering if no hover text is passed", () => {
  props.truthy.hover = undefined
  const user: User = { ...testUser, preferences: { ...testUser.preferences, mistakesReminders: true }}
  const { component } = render(<SettingsBooleanButton {...props} />,  { user })

  // Should default to the enabled text
  expect(component.getByText("Enabled")).toBeInTheDocument()

  // Mousing over shouldn't change it
  fireEvent.mouseOver(component.getByTestId("test-toggle"))
  expect(component.getByText("Enabled")).toBeInTheDocument()
})

test("Should call the service with the correct parameters when clicking the button in its truthy state", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  const user: User = { ...testUser, preferences: { ...testUser.preferences, mistakesReminders: true }}

  const { component } = render(<SettingsBooleanButton {...props} />, { user })
  fireEvent.click(component.getByTestId("test-toggle"))
  expect(await component.findByTestId("settings-boolean-button-spinner")).not.toBeInTheDocument()

  expect(mockUpdatePreferences).toHaveBeenCalledWith([{ preference: Preference.MISTAKES_REMINDERS, value: "false" }])
})

test("Should call the service with the correct parameters when clicking the button in its falsy state", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  const user: User = { ...testUser, preferences: { ...testUser.preferences, mistakesReminders: false }}

  const { component } = render(<SettingsBooleanButton {...props} />, { user })
  fireEvent.click(component.getByTestId("test-toggle"))
  expect(await component.findByTestId("settings-boolean-button-spinner")).not.toBeInTheDocument()

  expect(mockUpdatePreferences).toHaveBeenCalledWith([{ preference: Preference.MISTAKES_REMINDERS, value: "true" }])
})

test("Should call the onError event handler with the response error if not successful", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: false, error: "Something went wrong." })

  const { component } = render(<SettingsBooleanButton {...props} />)
  fireEvent.click(component.getByTestId("test-toggle"))

  await waitFor(() => {
    expect(onErrorHandler).toHaveBeenCalledWith("Something went wrong.")
  })
})

test("Should call the onError event handler with the response error if rejected", async () => {
  mockUpdatePreferences.mockRejectedValueOnce({ error: "Something went wrong." })

  const { component } = render(<SettingsBooleanButton {...props} />)
  fireEvent.click(component.getByTestId("test-toggle"))
  expect(await component.findByTestId("settings-boolean-button-spinner")).not.toBeInTheDocument()

  expect(onErrorHandler).toHaveBeenCalledWith("Something went wrong.")
})

test("Should call the onError event handler with a default error message if failed and not provided", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: false, error: undefined })

  const { component } = render(<SettingsBooleanButton {...props} />)
  fireEvent.click(component.getByTestId("test-toggle"))
  expect(await component.findByTestId("settings-boolean-button-spinner")).not.toBeInTheDocument()

  expect(onErrorHandler).toHaveBeenCalledWith("Failed to update preference.")
})

test("Should call the onError event handler with a default error message if rejected and not provided", async () => {
  mockUpdatePreferences.mockRejectedValueOnce({ error: undefined })

  const { component } = render(<SettingsBooleanButton {...props} />, { user: testUser })
  fireEvent.click(component.getByTestId("test-toggle"))
  expect(await component.findByTestId("settings-boolean-button-spinner")).not.toBeInTheDocument()

  expect(onErrorHandler).toHaveBeenCalledWith("Failed to update preference.")
})
