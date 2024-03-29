import HomePage  from "./HomePage"
import { testUser } from "../../../setupTests"
import { render } from "__test-utils__";

const mockGetActivityStreak = vi.fn()
vi.mock("service/UserService", () => ({
  default: function () {
    return { getActivityStreak: mockGetActivityStreak }
  }
}))

test("Should render the user dashboard if there is a user logged in", async () => {
  mockGetActivityStreak.mockResolvedValueOnce(10)

  const { component } = render(<HomePage />, { user: testUser })

  // Wait for the streak card to load since its async
  expect(await component.findByText("Day 10")).toBeInTheDocument()

  expect(component.getByTestId("user-dashboard")).toBeInTheDocument()
  expect(component.queryByTestId("anonymous-dashboard")).not.toBeInTheDocument()
})

test("Should render the anonymous dashboard if there is no user logged in", () => {
  mockGetActivityStreak.mockResolvedValueOnce(10)

  const { component } = render(<HomePage />)

  expect(component.getByTestId("anonymous-dashboard")).toBeInTheDocument()
  expect(component.queryByTestId("user-dashboard")).not.toBeInTheDocument()
})
