import { fireEvent, screen, waitFor } from "@testing-library/react"
import UserForm, { UserFormProps }  from "./UserForm"
import authService from "../../../service/AuthenticationService"
import { render } from "__test-utils__"
import { server } from "__test-utils__/msw.ts";
import { useRegisterUserHandlers } from "api/hooks/auth/useRegisterUser/useRegisterUser.handlers.ts";

let props: UserFormProps

const onCloseHandler = vi.fn()

beforeEach(() => {
  props = {
    show: true,
    onClose: onCloseHandler
  }
})

const setup = () => {
  const { component } = render(<UserForm {...props} />)

  return {
    switchForm: component.getByText("I don't have an account"),
    close: component.getByLabelText("Close"),
    ...component
  }
}

test("Should render the login form by default", () => {
  setup()
  expect(screen.getAllByText("Login")[1]).toBeInTheDocument()
})

test('Clicking the "I don\'t have an account" button should switch to the registration form', () => {
  const { switchForm } = setup()
  fireEvent.click(switchForm)
  expect(screen.getAllByText("Register")[1]).toBeInTheDocument()
})

test("Clicking the close button should call the onClose event handler", async () => {
  const { close } = setup()
  fireEvent.click(close)
  expect(onCloseHandler).toHaveBeenCalled()
})

test("Successfully registering a user should switch to the log-in form", async () => {
  //Mock a successful registration response and render the component
  server.use(...useRegisterUserHandlers)
  setup()
  fireEvent.click(screen.getByText("I don't have an account"))

  //Fill in the registration form and submit
  fireEvent.change(screen.getByPlaceholderText("Enter email"), { target: { value: "thomas.plumpton@domain.com" } })
  fireEvent.change(screen.getByPlaceholderText("Username"), { target: { value: "TomPlum42" } })
  fireEvent.change(screen.getByPlaceholderText("Nickname"), { target: { value: "Tom" } })
  fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "P4ssw0rd-" } })
  fireEvent.change(screen.getByPlaceholderText("Confirm Password"), { target: { value: "P4ssw0rd-" } })
  fireEvent.click(screen.getAllByText("Register")[1])

  await waitFor(() => expect(screen.getAllByText("Login")[1]).toBeInTheDocument())
})
