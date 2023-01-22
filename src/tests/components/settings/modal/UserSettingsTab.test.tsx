import { fireEvent, screen, within } from "@testing-library/react"
import UserSettingsTab from "../../../../components/settings/modal/UserSettingsTab"
import * as deviceDetect from "react-device-detect"
import renderTranslatedReduxConsumer from "../../../renderTranslatedReduxConsumer"

const mockClearLocalStorage = jest.fn()
jest.mock("../../../../service/LocalStorageService", () => {
  return function () {
    return { clear: mockClearLocalStorage }
  }
})

const mockDeleteHighScoresData = jest.fn()
jest.mock("../../../../service/HighScoresService", () => {
  return function () {
    return { delete: mockDeleteHighScoresData }
  }
})

beforeEach(() => {
  // @ts-ignore
  deviceDetect.isFirefox = false
  // @ts-ignore
  deviceDetect.isChrome = false
  // @ts-ignore
  deviceDetect.isSafari = false
})

test("Should render the profile visibility selector", async () => {
  const component = renderTranslatedReduxConsumer(<UserSettingsTab />)

  fireEvent.click(component.getByTestId("profile-visibility-selector"))

  // Should render the correct options
  expect(await screen.findByText("Public"))
  expect(await screen.findByText("Friends Only"))
  expect(await screen.findByText("Private"))
})

test("Should render the streak card preference selector", async () => {
  const component = renderTranslatedReduxConsumer(<UserSettingsTab />)

  fireEvent.click(component.getByTestId("streak-card-preference-selector"))

  // Should render the correct options
  expect(await screen.findByText("Start Date"))
  expect(await screen.findByText("Streak"))
  expect(await screen.findByText("Custom Date"))
})

test("Should clear the local storage when clicking the clear local storage button", () => {
  const component = renderTranslatedReduxConsumer(<UserSettingsTab />)
  fireEvent.click(component.getByTestId("clear-local-storage-button"))
  fireEvent.click(component.getByTestId("clear-local-storage-button"))
  expect(mockClearLocalStorage).toHaveBeenCalled()
})

test("Should call the delete high-scores function when clicking the clear high-scores button", async () => {
  mockDeleteHighScoresData.mockResolvedValueOnce({ success: true })
  const component = renderTranslatedReduxConsumer(<UserSettingsTab />)
  fireEvent.click(component.getByTestId("reset-high-scores-button"))
  fireEvent.click(component.getByTestId("reset-high-scores-button"))
  expect(await mockDeleteHighScoresData).toHaveBeenCalled()
})

test("Should render an error alert if the reset high-scores call fails", async () => {
  mockDeleteHighScoresData.mockResolvedValueOnce({ success: false, error: "Failed to update high-scores." })
  const component = renderTranslatedReduxConsumer(<UserSettingsTab />)
  fireEvent.click(component.getByTestId("reset-high-scores-button"))
  fireEvent.click(component.getByTestId("reset-high-scores-button"))
  expect(await screen.findByText("Failed to update high-scores.")).toBeInTheDocument()

  fireEvent.click(screen.getByTestId("dismiss-error-alert"))
  expect(screen.queryByText("Failed to update high-scores.")).not.toBeInTheDocument()
})

test("Should render an error alert if the reset high-scores call is rejected", async () => {
  mockDeleteHighScoresData.mockRejectedValueOnce({ success: false, error: "Failed to update high-scores." })
  const component = renderTranslatedReduxConsumer(<UserSettingsTab />)
  fireEvent.click(component.getByTestId("reset-high-scores-button"))
  fireEvent.click(component.getByTestId("reset-high-scores-button"))
  expect(await screen.findByText("Failed to update high-scores.")).toBeInTheDocument()
})

test("Should render the password confirmation modal when confirming to delete account", async () => {
  const component = renderTranslatedReduxConsumer(<UserSettingsTab />)
  fireEvent.click(component.getByTestId("delete-account-button"))
  fireEvent.click(component.getByTestId("delete-account-button"))

  const passwordConfirmation = await screen.findByTestId("password-confirmation")
  expect(passwordConfirmation).toBeInTheDocument()

  fireEvent.click(screen.getByText("I've changed my mind"))
  expect(passwordConfirmation).not.toBeInTheDocument()
})

test("Should render the firefox icon in the clear browser settings button when the browser is firefox", () => {
  // @ts-ignore
  deviceDetect.isFirefox = true
  const component = renderTranslatedReduxConsumer(<UserSettingsTab />)
  expect(within(component.getByTestId("clear-local-storage-button")).getByTestId("firefox-icon")).toBeInTheDocument()
})

test("Should render the safari icon in the clear browser settings button when the browser is firefox", () => {
  // @ts-ignore
  deviceDetect.isSafari = true
  const component = renderTranslatedReduxConsumer(<UserSettingsTab />)
  expect(within(component.getByTestId("clear-local-storage-button")).getByTestId("safari-icon")).toBeInTheDocument()
})

test("Should render the chrome icon in the clear browser settings button when the browser is firefox", () => {
  // @ts-ignore
  deviceDetect.isChrome = true
  const component = renderTranslatedReduxConsumer(<UserSettingsTab />)
  expect(within(component.getByTestId("clear-local-storage-button")).getByTestId("chrome-icon")).toBeInTheDocument()
})
