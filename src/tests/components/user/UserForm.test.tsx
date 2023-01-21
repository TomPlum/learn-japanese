import { fireEvent, screen, waitFor } from "@testing-library/react"
import UserForm, { UserFormProps } from "../../../components/user/UserForm"
import { Provider } from "react-redux"
import { store } from "../../../store"
import authService from "../../../service/AuthenticationService"
import renderWithTranslation from "../../renderWithTranslation"

let props: UserFormProps

const onCloseHandler = jest.fn()
const mockRegister = jest.fn()

beforeEach(() => {
  authService.register = mockRegister

  props = {
    show: true,
    onClose: onCloseHandler
  }
})

const setup = () => {
  const component = renderWithTranslation(
    <Provider store={store}>
      <UserForm {...props} />
    </Provider>
  )
  return {
    switchForm: component.getByText("I don't have an account"),
    close: component.getByText("Close"),
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
  mockRegister.mockResolvedValueOnce({ data: {} })
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
