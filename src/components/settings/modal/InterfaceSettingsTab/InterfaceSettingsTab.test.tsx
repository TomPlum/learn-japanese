import { fireEvent, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import InterfaceSettingsTab  from "./InterfaceSettingsTab"
import { localStorageMock, testUser } from "../../../../setupTests"
import { render } from "__test-utils__"
import { getValueLastCalledWith } from "__test-utils__/Queries.ts";
import { FontContextBag } from "context/FontContext";
import { User } from "context/UserContext";

const onEditDashboardLayoutHandler = vi.fn()

const mockFontService = vi.fn()
vi.mock("service/FontService", () => ({
  default: function () {
    return { getFonts: mockFontService }
  }
}))

const mockUpdatePreferences = vi.fn()
vi.mock("service/UserService", () => ({
  default: function () {
    return { updatePreferences: mockUpdatePreferences }
  }
}))

beforeEach(() => {
  localStorageMock.clear()
})

test("Should render the main tab contents on initial render", async () => {
  mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }])
  const { component } = render(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />)
  expect(await component.findByTestId("interface-settings-tab")).toBeInTheDocument()
})

test("Should call the onEditDashboard event handler after clicking the button", async () => {
  mockFontService.mockResolvedValueOnce([{ name: "Test Font", displayName: "Test Font" }])
  const { component } = render(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />)
  fireEvent.click(await component.findByText("Open Layout Editor"))
  expect(onEditDashboardLayoutHandler).toHaveBeenCalled()
})

test("Should render the theme selector dropdown", async () => {
  mockFontService.mockResolvedValueOnce([])
  const { component } = render(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />)

  fireEvent.click(component.getByTestId("interface-settings-theme-selector"))

  // Should render the correct options
  expect(await screen.findByText("Dark Mode")).toBeInTheDocument()
  expect(await screen.findByText("Light Mode")).toBeInTheDocument()
})

test("Should render the font selector dropdown", async () => {
  mockFontService.mockResolvedValueOnce([
    { name: "Test Font", slug: "mincho" },
    { name: "Test Font2", slug: "gothic" }
  ])
  const { component, onFontContextValueChange } = render(
    <InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />,
    { font: 'test-font-slug' }
  )

  await waitForElementToBeRemoved(component.getByTestId("settings-dropdown-loading"))
  fireEvent.click(component.getByTestId("interface-settings-font-selector"))

  // Should render the correct options
  expect(await screen.findByText("Mincho")).toBeInTheDocument()
  expect(await screen.findByText("Gothic")).toBeInTheDocument()

  // Selecting a font should store its slug in context
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  fireEvent.click(await screen.findByText("Gothic"))
  await waitForElementToBeRemoved(component.getByTestId("settings-dropdown-spinner"))
  expect(getValueLastCalledWith<FontContextBag>(onFontContextValueChange).font).toBe("gothic")
})

test("Should render the language selector dropdown", async () => {
  mockFontService.mockResolvedValueOnce([])
  const { component } = render(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />)

  fireEvent.click(component.getByTestId("interface-settings-language-selector"))

  // Should render the correct options
  expect(await screen.findByText("Japanese")).toBeInTheDocument()
  expect(await screen.findByText("English")).toBeInTheDocument()
})

test("Should render the confidence menu style selector dropdown", async () => {
  mockFontService.mockResolvedValueOnce([])
  const { component } = render(<InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />)

  fireEvent.click(component.getByTestId("interface-settings-confidence-menu-selector"))

  // Should render the correct options
  expect(await screen.findByText("Numbers 1 - 6")).toBeInTheDocument()
  expect(await screen.findByText("Emoji Style")).toBeInTheDocument()
})

test("Should call the i18n change language function with the correct english code", async () => {
  const user: User = { ...testUser, preferences: { ...testUser.preferences, language: "日本語" }}
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  mockFontService.mockResolvedValueOnce([])
  const { component } = render(
    <InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />,
    { user }
  )

  fireEvent.click(component.getByTestId("interface-settings-language-selector"))
  fireEvent.click(component.getByText("English"))

  await waitFor(() => expect(localStorageMock.getItem("i18nextLng")).toBe("en"))
})

test("Should call the i18n change language function with the correct japanese code", async () => {
  const user: User = { ...testUser, preferences: { ...testUser.preferences, language: "English" }}
  mockFontService.mockResolvedValueOnce([])

  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  const { component } = render(
    <InterfaceSettingsTab onEditDashboardLayout={onEditDashboardLayoutHandler} />,
    { user }
  )

  fireEvent.click(component.getByTestId("interface-settings-language-selector"))
  fireEvent.click(component.getByText("Japanese"))

  await waitFor(() => expect(localStorageMock.getItem("i18nextLng")).toBe("jp"))
})
