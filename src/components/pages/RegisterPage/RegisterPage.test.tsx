import { fireEvent, screen, waitFor } from "@testing-library/react"
import RegisterPage  from "./RegisterPage"
import { clearUser, setUser } from "../../../slices/UserSlice"
import { store } from "../../../store"
import auth from "../../../service/AuthenticationService"
import { testUser } from "../../../setupTests"
import { render } from "__test-utils__"

const mockUsernameEligible = vi.fn()
const mockEmailEligible = vi.fn()
const mockRegister = vi.fn()

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
  const { component } = render(<RegisterPage />)
  expect(component.getByTestId("registration-form")).toBeInTheDocument()
})

test("Should redirect to the home page if the user is already logged in", () => {
  store.dispatch(setUser(testUser))
  const { history } = render(<RegisterPage />)
  expect(history.location.pathname).toBe("/home")
})

test("Should redirect to the sign-in page if the registration is successful", async () => {
  store.dispatch(clearUser())
  const { component, history } = render(<RegisterPage />)

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
