import { fireEvent, screen } from "@testing-library/react"
import DangerZone  from "./DangerZone"
import renderTranslatedReduxConsumer from "__test-utils__/renderTranslatedReduxConsumer"

const setup = () => {
  const component = renderTranslatedReduxConsumer(<DangerZone />)
  return {
    unlock: component.getByTitle("Un-Lock"),
    clearLocalStorage: component.getByText("Clear"),
    resetHighScores: component.getAllByText("Reset")[0],
    resetStats: component.getAllByText("Reset")[1],
    resetFlashCards: component.getAllByText("Reset")[2],
    deleteAccount: component.getByText("Delete"),
    ...component
  }
}

test("Clicking the lock should enable the clear local storage button", () => {
  const { unlock, clearLocalStorage } = setup()
  expect(clearLocalStorage).toBeDisabled()
  fireEvent.click(unlock)
  expect(clearLocalStorage).not.toBeDisabled()
})

test("Clicking the lock should enable the reset high-scores button", () => {
  const { unlock, resetHighScores } = setup()
  expect(resetHighScores).toBeDisabled()
  fireEvent.click(unlock)
  expect(resetHighScores).not.toBeDisabled()
})

test("Clicking the lock should enable the reset stats button", () => {
  const { unlock, resetStats } = setup()
  expect(resetStats).toBeDisabled()
  fireEvent.click(unlock)
  expect(resetStats).not.toBeDisabled()
})

test("Clicking the lock should enable the reset flash cards button", () => {
  const { unlock, resetFlashCards } = setup()
  expect(resetFlashCards).toBeDisabled()
  fireEvent.click(unlock)
  expect(resetFlashCards).not.toBeDisabled()
})

test("Clicking the lock should enable the delete account button", () => {
  const { unlock, deleteAccount } = setup()
  expect(deleteAccount).toBeDisabled()
  fireEvent.click(unlock)
  expect(deleteAccount).not.toBeDisabled()
})

test("Clicking the delete account button should render the confirm password view", () => {
  const { unlock, deleteAccount } = setup()
  fireEvent.click(unlock)
  fireEvent.click(deleteAccount)
  expect(screen.getByText("Please confirm your password.")).toBeInTheDocument()
})

test("Dismissing the confirm password screen should return to the main view", () => {
  const { unlock, deleteAccount } = setup()
  fireEvent.click(unlock)
  fireEvent.click(deleteAccount)
  fireEvent.click(screen.getByText("I've changed my mind"))
  expect(screen.getByText("Delete Account")).toBeInTheDocument()
})

test("Clicking the lock button when in password confirmation should do nothing", () => {
  const { unlock, deleteAccount } = setup()

  //Open password confirmation
  fireEvent.click(unlock)
  fireEvent.click(deleteAccount)

  //Lock should persist after clicking
  expect(screen.queryByTitle("Un-Lock")).not.toBeInTheDocument()
  fireEvent.click(screen.getByTitle("Lock"))
  expect(screen.queryByTitle("Un-Lock")).not.toBeInTheDocument()
})

test("Clicking the lock button while unlocked should re-lock the menu", () => {
  const { unlock, deleteAccount } = setup()
  fireEvent.click(unlock)
  fireEvent.click(screen.getByTitle("Lock"))
  fireEvent.click(deleteAccount)
  expect(screen.queryByText("Please confirm your password")).not.toBeInTheDocument()
})
