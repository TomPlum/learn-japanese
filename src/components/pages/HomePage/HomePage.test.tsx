import HomePage  from "./HomePage"
import { store } from "../../../store"
import { clearUser, setUser } from "../../../slices/UserSlice"
import { testUser } from "../../../setupTests"
import renderTranslatedReduxConsumer from "__test-utils__/renderTranslatedReduxConsumer.tsx";
import { BrowserRouter } from "react-router-dom";

const mockGetActivityStreak = vi.fn()
vi.mock("service/UserService", () => ({
  default: function () {
    return { getActivityStreak: mockGetActivityStreak }
  }
}))

beforeEach(() => {
  store.dispatch(clearUser())
})

test("Should render the user dashboard if there is a user logged in", async () => {
  mockGetActivityStreak.mockResolvedValueOnce(10)
  store.dispatch(setUser(testUser))

  const component = renderTranslatedReduxConsumer(<BrowserRouter><HomePage /></BrowserRouter>)

  // Wait for the streak card to load since its async
  expect(await component.findByText("Day 10")).toBeInTheDocument()

  expect(component.getByTestId("user-dashboard")).toBeInTheDocument()
  expect(component.queryByTestId("anonymous-dashboard")).not.toBeInTheDocument()
})

test("Should render the anonymous dashboard if there is no user logged in", () => {
  mockGetActivityStreak.mockResolvedValueOnce(10)
  store.dispatch(clearUser())

  const component = renderTranslatedReduxConsumer(<HomePage />)

  expect(component.getByTestId("anonymous-dashboard")).toBeInTheDocument()
  expect(component.queryByTestId("user-dashboard")).not.toBeInTheDocument()
})
