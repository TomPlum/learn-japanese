import { fireEvent, screen } from "@testing-library/react"
import SettingsModal, { SettingsModalProps, SettingsType }  from "./SettingsModal"
import { store } from "../../../../store"
import { setPreference, setUser } from "../../../../slices/UserSlice"
import { Preference } from "../../../../domain/user/Preference"
import { testUser } from "../../../../setupTests"
import { render } from "__test-utils__"

const mockFontService = vi.fn()
vi.mock("service/FontService", () => ({
  default: function () {
    return { getFonts: mockFontService }
  }
}))

const onCloseHandler = vi.fn()

let props: SettingsModalProps

beforeEach(() => {
  props = {
    type: SettingsType.GENERAL,
    onClose: onCloseHandler
  }
})

const setup = () => {
  const { component } = render(<SettingsModal {...props} />)
  return {
    general: component.getByTitle("General"),
    learn: component.getByTitle("Learn"),
    play: component.getByTitle("Play"),
    ui: component.getByTitle("Interface"),
    notification: component.getByTitle("Notification"),
    user: component.getByTitle("User"),
    close: component.getByTitle("Close"),
    ...component
  }
}

test("It should render the interface settings tab when clicking the tab", async () => {
  mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }])
  props.type = SettingsType.PLAY // Load with a different default tab

  const { ui } = setup()

  fireEvent.click(ui)
  expect(await screen.findByTestId("interface-settings-tab")).toBeInTheDocument()
})

test("It should render the general settings tab when clicking the tab", () => {
  mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }])
  props.type = SettingsType.PLAY // Load with a different default tab

  const { general } = setup()

  fireEvent.click(general)
  expect(screen.getByTestId("general-settings-tab")).toBeInTheDocument()
})

test("It should render the learn settings tab when clicking the tab", () => {
  mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }])
  props.type = SettingsType.PLAY // Load with a different default tab

  const { learn } = setup()

  fireEvent.click(learn)
  expect(screen.getByTestId("learn-settings-tab")).toBeInTheDocument()
})

test("It should render the learn settings tab when clicking the tab", () => {
  mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }])
  props.type = SettingsType.LEARN // Load with a different default tab

  const { play } = setup()

  fireEvent.click(play)
  expect(screen.getByTestId("play-settings-tab")).toBeInTheDocument()
})

test("It should render the notification settings tab when clicking the tab", () => {
  mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }])
  props.type = SettingsType.LEARN // Load with a different default tab

  const { notification } = setup()

  fireEvent.click(notification)
  expect(screen.getByTestId("notification-settings-tab")).toBeInTheDocument()
})

test("It should render the user settings tab when clicking the tab", () => {
  mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }])
  props.type = SettingsType.LEARN // Load with a different default tab

  const { user } = setup()

  fireEvent.click(user)
  expect(screen.getByTestId("user-settings-tab")).toBeInTheDocument()
})

it("Should render the dashboard layout editor when launching it from the interface settings tab", async () => {
  store.dispatch(setUser(testUser))
  store.dispatch(setPreference({ preference: Preference.DEFAULT_KANJI_FONT, value: "default" }))
  mockFontService.mockResolvedValue([{ name: "Test Font", slug: "default" }])
  props.type = SettingsType.INTERFACE
  setup()
  expect(await screen.findByText("Default")).toBeInTheDocument()

  // Clicking the button should render the editor
  fireEvent.click(screen.getByTestId("open-layout-editor-button"))
  expect(screen.getByTestId("dashboard-layout-editor")).toBeInTheDocument()

  // Should close when clicking the 'x'
  fireEvent.click(screen.getByTestId("close-settings-tab"))
  expect(screen.queryByTestId("dashboard-layout-editor")).not.toBeInTheDocument()
  expect(await screen.findByTestId("interface-settings-tab")).toBeInTheDocument()
})
