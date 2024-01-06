import SettingsDropdown, { SettingsDropdownProps }  from "./SettingsDropdown"
import { Preference } from "../../../../domain/user/Preference"
import { faGlobe, faUserFriends } from "@fortawesome/free-solid-svg-icons"
import { fireEvent, screen, waitFor, waitForElementToBeRemoved, within } from "@testing-library/react"
import renderTranslatedReduxConsumer from "__test-utils__/renderTranslatedReduxConsumer"
import { store } from "../../../../store"
import { clearUser, setPreference, setUser } from "../../../../slices/UserSlice"
import { localStorageMock, testUser } from "../../../../setupTests"

const mockUpdatePreferences = vi.fn()
vi.mock("service/UserService", () => ({
  default: function () {
    return { updatePreferences: mockUpdatePreferences }
  }
}))

const onChangeHandler = vi.fn()
const onErrorHandler = vi.fn()

let props: SettingsDropdownProps

beforeEach(() => {
  props = {
    loading: false,
    onError: onErrorHandler,
    onChange: onChangeHandler,
    id: "example-settings-dropdown",
    preference: Preference.PROFILE_VISIBILITY,
    options: [
      { name: "Public", value: "Public", icon: faGlobe },
      { name: "Friends Only", value: "Friends Only", icon: faUserFriends }
    ]
  }
  store.dispatch(setUser(testUser))
})

afterEach(() => {
  store.dispatch(clearUser())
})

it("Should render the default selected option as the one from the user in the redux store", () => {
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
  expect(within(component.getByTestId("settings-dropdown-selected")).getByText("Friends Only")).toBeInTheDocument()
})

it("Should add the inspect class to the chevron when the dropdown menu is expanded", () => {
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  // Should start with the default class and no inspect class
  expect(component.getByTestId("settings-dropdown-chevron")).toHaveClass("chevron")
  expect(component.getByTestId("settings-dropdown-chevron")).not.toHaveClass("inspect")

  // Expand the dropdown menu
  fireEvent.click(component.getByText("Friends Only"))

  // Should keep the default class and also get inspect class
  expect(component.getByTestId("settings-dropdown-chevron")).toHaveClass("chevron")
  expect(component.getByTestId("settings-dropdown-chevron")).toHaveClass("inspect")
})

it("Should call the update service function with the correct preference at name", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))

  expect(mockUpdatePreferences).toHaveBeenCalledWith([
    {
      preference: Preference.PROFILE_VISIBILITY,
      value: "Public"
    }
  ])
})

it("Should call the onChange event handled with the selected value name when the update call succeeds", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))

  expect(onChangeHandler).toHaveBeenCalledWith("Public")
})

it("Should not call the onChange event handled with the selected value name when the update call fails", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: false })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))

  expect(onChangeHandler).not.toHaveBeenCalled()
})

it("Should update the selected option name if the update call succeeds", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))

  expect(within(component.getByTestId("settings-dropdown-selected")).getByText("Public")).toBeInTheDocument()
})

it("Should not update the selected option name if the update call fails", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: false })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))

  expect(within(component.getByTestId("settings-dropdown-selected")).getByText("Friends Only")).toBeInTheDocument()
})

it("Should update the selected preference in the user redux store if the update call succeeds", async () => {
  store.dispatch(setUser(testUser))
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))

  expect(store.getState().user.user?.preferences.profileVisibility).toBe("Public")
})

it("Should call the onError event handler with the returned error message if the update call fails", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: false, error: "Something went wrong." })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))

  expect(onErrorHandler).toHaveBeenCalledWith("Something went wrong.")
})

it("Should call the onError event handler with a default error message if the update call fails and doesn't return one", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: false, error: undefined })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))

  expect(onErrorHandler).toHaveBeenCalledWith("Failed to update preference.")
})

it("Should call the onError event handler with the returned error message if the update call is rejected", async () => {
  mockUpdatePreferences.mockRejectedValueOnce({ error: "Something went wrong." })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))

  expect(onErrorHandler).toHaveBeenCalledWith("Something went wrong.")
})

it("Should call the onError event handler with a default error message if the update call is rejected and doesn't return one", async () => {
  mockUpdatePreferences.mockRejectedValueOnce({ error: undefined })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))

  expect(onErrorHandler).toHaveBeenCalledWith("Failed to update preference.")
})

it("Should render the button with the default 'Click to see options' title", () => {
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
  expect(component.getByTitle("Click to see options")).toBeInTheDocument()
})

it("Should render the button with a 'Saving your selection...' title when updating", async () => {
  mockUpdatePreferences.mockResolvedValueOnce({ success: true })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  // Expand the menu and select an option
  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  // Should immediately update the title on next render
  expect(screen.getByTitle("Saving your selection...")).toBeInTheDocument()

  // Should return to the default title after updating
  await waitForElementToBeRemoved(screen.getByTestId("settings-dropdown-spinner"))
  expect(component.getByTitle("Click to see options")).toBeInTheDocument()
})

it("Clicking the button while a previous selection is updating should not call the service again", async () => {
  mockUpdatePreferences.mockResolvedValue({ success: true })
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  // Expand the menu and select an option
  fireEvent.click(component.getByText("Friends Only"))
  fireEvent.click(await screen.findByText("Public"))

  const spinner = screen.getByTestId("settings-dropdown-spinner")
  expect(spinner).toBeInTheDocument()

  // Should prevent any intermittent clicks from showing the menu
  fireEvent.click(screen.getByText("Friends Only"))

  // Should now render the selection option
  await waitForElementToBeRemoved(spinner)
  expect(mockUpdatePreferences).toHaveBeenCalledTimes(1)
  expect(screen.queryByText("Public")).toBeInTheDocument()
})

it("Should stop rendering the dropdown menu when blurring the button", async () => {
  const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

  // Expand the menu
  fireEvent.click(component.getByText("Friends Only"))
  const dropdownOption = await screen.findByText("Public")
  expect(dropdownOption).toBeInTheDocument()

  // Blurring the menu / button should stop rendering the menu
  fireEvent.click(document.body)
  await waitForElementToBeRemoved(dropdownOption)
})

describe("Language Preference", () => {
  it("Should set the english language code in local storage when updating the language preference", async () => {
    props.id = "language-button"
    props.options = [{ name: "English" }, { name: "日本語" }]
    props.preference = Preference.LANGUAGE
    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.LANGUAGE, value: "日本語" }))
    mockUpdatePreferences.mockResolvedValueOnce({ success: true })
    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

    // Switch from Japanese to English
    fireEvent.click(component.getByTestId("language-button"))
    fireEvent.click(component.getByText("English"))

    await waitFor(() => expect(localStorageMock.getItem("i18nextLng")).toBe("en"))
  })

  it("Should set the japanese language code in local storage when updating the language preference", async () => {
    props.id = "language-button"
    props.options = [{ name: "English" }, { name: "日本語" }]
    props.preference = Preference.LANGUAGE
    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.LANGUAGE, value: "English" }))
    mockUpdatePreferences.mockResolvedValueOnce({ success: true })
    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)

    // Switch from English to Japanese
    fireEvent.click(component.getByTestId("language-button"))
    fireEvent.click(component.getByText("日本語"))

    await waitFor(() => expect(localStorageMock.getItem("i18nextLng")).toBe("jp"))
  })
})

describe("Default selected values from local storage", () => {
  it("Should set the default selected value for profile visibility from the local user", () => {
    props.options = [
      { name: "Public", value: "Public" },
      { name: "Example", value: "Example Visibility" }
    ]
    props.preference = Preference.PROFILE_VISIBILITY

    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.PROFILE_VISIBILITY, value: "Example Visibility" }))

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(within(component.getByTestId("settings-dropdown-selected")).getByText("Example")).toBeInTheDocument()
  })

  it("Should set the default selected value for kanji font from the local user", () => {
    props.options = [
      { name: "Montserrat", value: "Montserrat" },
      { name: "Example Font", value: "Example Font" }
    ]
    props.preference = Preference.DEFAULT_KANJI_FONT

    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.DEFAULT_KANJI_FONT, value: "Example Font" }))

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(within(component.getByTestId("settings-dropdown-selected")).getByText("Example Font")).toBeInTheDocument()
  })

  it("Should set the default selected value for confidence menu style from the local user", () => {
    props.options = [
      { name: "Emoji", value: "Emoji" },
      { name: "Example Style", value: "Example Style" }
    ]
    props.preference = Preference.CONFIDENCE_MENU_STYLE

    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.CONFIDENCE_MENU_STYLE, value: "Example Style" }))

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(within(component.getByTestId("settings-dropdown-selected")).getByText("Example Style")).toBeInTheDocument()
  })

  it("Should set the default selected value for language from the local user", () => {
    props.options = [
      { name: "English", value: "English" },
      { name: "Example Language", value: "Example Language" }
    ]
    props.preference = Preference.LANGUAGE

    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.LANGUAGE, value: "Example Language" }))

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(
      within(component.getByTestId("settings-dropdown-selected")).getByText("Example Language")
    ).toBeInTheDocument()
  })

  it("Should set the default selected value for romaji visibility from the local user", () => {
    props.options = [
      { name: "Always Show", value: "Always Show" },
      { name: "Example Visibility", value: "Example Visibility" }
    ]
    props.preference = Preference.ROMAJI_VISIBILITY

    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.ROMAJI_VISIBILITY, value: "Example Visibility" }))

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(
      within(component.getByTestId("settings-dropdown-selected")).getByText("Example Visibility")
    ).toBeInTheDocument()
  })

  it("Should set the default selected value for high scores behaviour from the local user", () => {
    props.options = [
      { name: "Auto Submit", value: "Auto Submit" },
      { name: "Example Behaviour", value: "Example Behaviour" }
    ]
    props.preference = Preference.HIGH_SCORES_BEHAVIOUR

    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.HIGH_SCORES_BEHAVIOUR, value: "Example Behaviour" }))

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(
      within(component.getByTestId("settings-dropdown-selected")).getByText("Example Behaviour")
    ).toBeInTheDocument()
  })

  it("Should set the default selected value for flash cards quantity from the local user", () => {
    props.options = [
      { name: "5", value: "5" },
      { name: "10", value: "10" },
      { name: "15", value: "15" }
    ]
    props.preference = Preference.FLASH_CARDS_QUANTITY

    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.FLASH_CARDS_QUANTITY, value: "15" }))

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(within(component.getByTestId("settings-dropdown-selected")).getByText("15")).toBeInTheDocument()
  })

  it("Should set the default selected value for streak card view from the local user", () => {
    props.options = [
      { name: "Start Date", value: "Start Date" },
      { name: "Example View", value: "Example View" }
    ]
    props.preference = Preference.STREAK_CARD_VIEW

    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.STREAK_CARD_VIEW, value: "Example View" }))

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(within(component.getByTestId("settings-dropdown-selected")).getByText("Example View")).toBeInTheDocument()
  })

  it("Should set the default selected value for activity feed quantity from the local user", () => {
    props.options = [
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" }
    ]
    props.preference = Preference.ACTIVITY_FEED_QUANTITY

    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.ACTIVITY_FEED_QUANTITY, value: "5" }))

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(within(component.getByTestId("settings-dropdown-selected")).getByText("5")).toBeInTheDocument()
  })

  it("Should set the default selected value for the theme from the local user", () => {
    props.options = [
      { name: "Dark Mode", value: "Dark Mode" },
      { name: "Test Theme", value: "Test Theme" }
    ]
    props.preference = Preference.THEME

    store.dispatch(setUser(testUser))
    store.dispatch(setPreference({ preference: Preference.THEME, value: "Test Theme" }))

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(within(component.getByTestId("settings-dropdown-selected")).getByText("Test Theme")).toBeInTheDocument()
  })

  it("Should set the default selected value to unknown if the value in the local user is undefined", () => {
    props.options = [
      { name: "Start Date", value: "Start Date" },
      { name: "Custom Date", value: "Custom Date" }
    ]
    props.preference = Preference.STREAK_CARD_VIEW

    store.dispatch(clearUser())

    const component = renderTranslatedReduxConsumer(<SettingsDropdown {...props} />)
    expect(within(component.getByTestId("settings-dropdown-selected")).getByText("Unknown")).toBeInTheDocument()
  })
})
