import { fireEvent } from "@testing-library/react"
import StreakCard  from "./StreakCard"
import renderWithTranslation from "__test-utils__/renderWithTranslation"

const mockGetActivityStreak = vi.fn()
vi.mock("service/UserService", () => ({
  default: function () {
    return { getActivityStreak: mockGetActivityStreak }
  }
}))

test("Should render the cards in the correct order when clicking right", async () => {
  mockGetActivityStreak.mockResolvedValueOnce(481)

  // Default Custom Date
  const component = renderWithTranslation(<StreakCard />)
  expect(await component.findByText("Day 481")).toBeInTheDocument()

  // Streak
  fireEvent.click(component.getByTitle("Streak"))
  expect(component.getByText("481 Day Streak")).toBeInTheDocument()

  // Account Creation
  fireEvent.click(component.getByTitle("Account Creation"))
  expect(component.getByText("481 Days Old")).toBeInTheDocument()

  // Back to -> Custom Date
  fireEvent.click(component.getByTitle("Custom Date"))
  expect(component.getByText("Day 481")).toBeInTheDocument()
})

test("Should render the cards in the correct order when clicking left", async () => {
  mockGetActivityStreak.mockResolvedValueOnce(235)

  // Default Custom Date
  const component = renderWithTranslation(<StreakCard />)
  expect(await component.findByText("Day 235")).toBeInTheDocument()

  // Account Creation
  fireEvent.click(component.getByTitle("Account Creation"))
  expect(component.getByText("235 Days Old")).toBeInTheDocument()

  // Streak
  fireEvent.click(component.getByTitle("Streak"))
  expect(await component.findByText("235 Day Streak")).toBeInTheDocument()

  // Back to -> Custom Date
  fireEvent.click(component.getByTitle("Custom Date"))
  expect(component.getByText("Day 235")).toBeInTheDocument()
})
