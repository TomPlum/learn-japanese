import { store } from "../../../store"
import { clearUser, setUser } from "../../../slices/UserSlice"
import LoginPage  from "./LoginPage"
import { fireEvent, waitFor } from "@testing-library/react"
import auth from "../../../service/AuthenticationService"
import { testUser } from "../../../setupTests"
import { render } from "__test-utils__"

const validLoginResponse = {
  username: "TomPlum42",
  email: "tom@hotmail.com",
  nickname: "Tom",
  roles: ["admin"],
  creationDate: "2021-10-15",
  locked: false,
  expired: false,
  credentialsExpired: false,
  enabled: true,
  token: "TOKEN",
  refreshToken: "REFRESH_TOKEN",
  preferences: {
    defaultFont: "Gothic",
    theme: "Dark Mode",
    language: "English",
    highScores: "Ask Each Time",
    defaultMode: "Play",
    cardsPerDay: 10,
    confidenceMenuStyle: "Numbers 1 - 6"
  }
}

const mockLogin = vi.fn()

beforeEach(() => {
  auth.login = mockLogin
  store.dispatch(clearUser())
})

test("Should redirect to the home page if the user is already logged in", () => {
  store.dispatch(setUser(testUser))
  const { history } = render(<LoginPage />)
  expect(history.location.pathname).toBe("/home")
})

test("Should render the login form when there is no user logged in", () => {
  store.dispatch(clearUser())
  const { component } = render(<LoginPage />)
  expect(component.getByTestId("login-form")).toBeInTheDocument()
})

test("Should redirect to the home page after successfully logging in", async () => {
  // Start with no user
  store.dispatch(clearUser())
  const { component, history } = render(<LoginPage />)

  // Log in
  mockLogin.mockResolvedValueOnce(validLoginResponse)
  fireEvent.change(component.getByPlaceholderText("Username"), { target: { value: "TomPlum" } })
  fireEvent.change(component.getByPlaceholderText("Password"), { target: { value: "MyPassword123-" } })

  // Should redirect to the home page on submit
  fireEvent.click(component.getByText("Login"))
  //await waitForElementToBeRemoved(await component.findByTestId('login-loading'));
  await waitFor(() => expect(history.location.pathname).toBe("/home"))
})

test("Should pass the username from the location query parameter into the login form", () => {
  store.dispatch(clearUser())
  const { component } = render(<LoginPage />, { url: "/login?username=TestingUser" })
  expect(component.getByPlaceholderText("Username")).toHaveValue("TestingUser")
})

test("Should render the info message about session expiry when the query param is passed as true", () => {
  store.dispatch(clearUser())
  const { component } = render(<LoginPage />, { url: "/login?session-expired=true" })
  expect(component.getByText("Your session has expired. Please log-in again.")).toBeInTheDocument()
})
