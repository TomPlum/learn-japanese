import { fireEvent, screen, waitFor } from "@testing-library/react"
import RegisterPage  from "./RegisterPage"
import { clearUser, setUser } from "../../../slices/UserSlice"
import { store } from "../../../store"
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import { History } from "@remix-run/router"
import { createMemoryHistory } from "history"
import auth from "../../../service/AuthenticationService"
import { testUser } from "../../../setupTests"
import { render } from "__test-utils__"

const mockUsernameEligible = vi.fn()
const mockEmailEligible = vi.fn()
const mockRegister = vi.fn()
const history = createMemoryHistory() as never as History

vi.mock("service/UserService", () => ({
  default: function () {
    return {
      usernameExists: mockUsernameEligible,
      emailAlreadyRegistered: mockEmailEligible
    }
  }
}))

beforeEach(() => {
  auth.register = mockRegister
  store.dispatch(clearUser())
})

test("Should render the registration form if there is no user logged in", () => {
  store.dispatch(clearUser())
  const component = render(
    <HistoryRouter history={history}>
      <RegisterPage />
    </HistoryRouter>
  )
  expect(component.getByTestId("registration-form")).toBeInTheDocument()
})

test("Should redirect to the home page if the user is already logged in", () => {
  store.dispatch(setUser(testUser))
  render(
    <HistoryRouter history={history}>
      <RegisterPage />
    </HistoryRouter>
  )
  expect(history.location.pathname).toBe("/home")
})

test("Should redirect to the sign-in page if the registration is successful", async () => {
  store.dispatch(clearUser())
  const component = render(
    <HistoryRouter history={history}>
      <RegisterPage />
    </HistoryRouter>
  )

  // Fill in the form
  mockRegister.mockResolvedValueOnce({ success: true, data: {} })
  mockUsernameEligible.mockResolvedValueOnce({ exists: false })
  mockEmailEligible.mockResolvedValueOnce({ exists: false })

  fireEvent.change(component.getByPlaceholderText("Enter email"), {
    target: { value: "thomas.plumpton@domain.com" }
  })
  expect(await screen.findByText("Email address is available."))
  fireEvent.change(component.getByPlaceholderText("Username"), { target: { value: "TomPlum42" } })
  expect(await screen.findByText("Username is available."))
  fireEvent.change(component.getByPlaceholderText("Nickname"), { target: { value: "Tom" } })
  fireEvent.change(component.getByPlaceholderText("Password"), { target: { value: "P4ssw0rd-" } })
  fireEvent.change(component.getByPlaceholderText("Confirm Password"), { target: { value: "P4ssw0rd-" } })

  // Should redirect to the sign-in page after successfully registering
  fireEvent.click(component.getByText("Register"))
  await waitFor(() => expect(history.location.pathname).toBe("/login"))
})
