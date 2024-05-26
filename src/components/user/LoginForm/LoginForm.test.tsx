import { fireEvent, screen, waitFor } from "@testing-library/react"
import LoginForm  from "./LoginForm"
import { render } from "__test-utils__"
import { getValueLastCalledWith } from "__test-utils__/Queries.ts";
import { UserContextBag } from "context/UserContext";
import { server } from "__test-utils__/msw.ts";
import {
  useLoginBadRequestHandlers,
  useLoginErrorHandlers,
  useLoginHandlers
} from "api/hooks/auth/useLogin/useLogin.handlers.ts";
import { useLoginResponses } from "api/hooks/auth/useLogin/useLogin.responses.ts";

vi.mock("service/AuthenticationService")

const onSuccessHandler = vi.fn()
let registeredUsername: string | undefined = undefined
let infoMessage: string | undefined = undefined

const setup = () => {
  const response = render(
    <LoginForm
      info={infoMessage}
      onSuccess={onSuccessHandler}
      registeredUsername={registeredUsername}
    />
  )

  return {
    form: response.component.getByTestId('login-form'),
    username: response.component.getByPlaceholderText("Username"),
    password: response.component.getByPlaceholderText("Password"),
    login: response.component.getByText("Login"),
    ...response
  }
}

test("Should focus the username field on mount", () => {
  const { username } = setup()
  expect(username).toHaveFocus()
})

test("Pressing the enter key while the username and password are valid should invoke login", async () => {
  server.use(...useLoginHandlers)

  const { username, password, form } = setup()

  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "Password" } })
  fireEvent.keyDown(form, { key: "Enter", code: 13, charCode: 13 })

  await waitFor(() => expect(onSuccessHandler).toHaveBeenCalled())
})

test("Pressing the enter key while the username is invalid should not call the onSuccess handler", () => {
  const { password, form } = setup()
  fireEvent.change(password, { target: { value: "Password" } })
  fireEvent.keyDown(form, { key: "Enter", code: 13, charCode: 13 })
  expect(onSuccessHandler).not.toHaveBeenCalled()
})

test("Pressing the enter key while the password is invalid should not call the onSuccess handler", () => {
  const { username, form } = setup()
  fireEvent.change(username, { target: { value: "Tom" } })
  fireEvent.keyDown(form, { key: "Enter", code: 13, charCode: 13 })
  expect(onSuccessHandler).not.toHaveBeenCalled()
})

test("Clicking the login button while the form is invalid should not call the onSuccess event handler", () => {
  const { login } = setup()
  fireEvent.click(login)
  expect(onSuccessHandler).not.toHaveBeenCalled()
})

test("The username must be present for the form the be valid", () => {
  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd " } })

  expect(login).toBeDisabled()
})

test("The password must be present for the form the be valid", () => {
  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "" } })

  expect(login).toBeDisabled()
})

test("Entering a valid username and password should enable the Login button", () => {
  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "Password" } })

  expect(login).not.toBeDisabled()
})

test("When the login API call returns successfully, then it should call the onSuccess event handler", async () => {
  server.use(...useLoginHandlers)

  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  //Login
  fireEvent.click(login)
  await waitFor(() => expect(onSuccessHandler).toHaveBeenCalled())
})

test("When the auth service returns an error, it should render a generic error message", async () => {
  server.use(...useLoginErrorHandlers)

  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  //Login
  fireEvent.click(login)

  expect(await screen.findByText("Sorry, an unknown error has occurred.")).toBeInTheDocument()
})

test("When the auth service returns an an authentication error then it should render an alert", async () => {
  server.use(...useLoginBadRequestHandlers)

  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  //Login
  fireEvent.click(login)

  await waitFor(() => expect(screen.getByText("Username or password is incorrect.")).toBeInTheDocument())
})

test("When the auth service returns an an authentication error then it should remove the password value", async () => {
  server.use(...useLoginBadRequestHandlers)

  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  expect(password).toHaveValue("P4ssw0rd")

  //Login
  fireEvent.click(login)

  await waitFor(() => expect(password).toHaveValue(""))
})

test("When the auth service returns an an authentication error then it should invalidate the form", async () => {
  server.use(...useLoginBadRequestHandlers)

  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  expect(login).not.toBeDisabled()

  //Login
  fireEvent.click(login)

  await waitFor(() => expect(login).toBeDisabled())
})

test("When the username prop is passed then it should populate the username field with it", () => {
  registeredUsername = "TomPlum42"
  const { username } = setup()
  expect(username).toHaveValue("TomPlum42")
})

test("When the username prop is passed then it should render a success alert", () => {
  registeredUsername = "TomPlum42"
  setup()
  expect(screen.getByText("Registration successful. You can log-in below.")).toBeInTheDocument()
})

test("When the username prop is passed then it should focus the password field", () => {
  registeredUsername = "TomPlum42"
  const { password } = setup()
  expect(password).toHaveFocus()
})

test("When the info prop is passed then it should render the info alert", () => {
  infoMessage = "Your session has expired. Please log-in again."
  setup()
  expect(screen.getByText("Your session has expired. Please log-in again.")).toBeInTheDocument()
})

test("When the info prop is passed then it should not render the success alert", () => {
  registeredUsername = "TomPlum42"
  infoMessage = "Your session has expired. Please log-in again."
  setup()
  expect(screen.queryByText("Registration successful. You can log-in below.")).not.toBeInTheDocument()
})

test("When successfully logging in, it should set the user object in context", async () => {
  server.use(...useLoginHandlers)

  const { username, password, login, onUserContextValueChange } = setup()

  // Enter Credentials
  fireEvent.change(username, { target: { value: "Tom" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  // Login
  fireEvent.click(login)
  await waitFor(() => expect(onSuccessHandler).toHaveBeenCalled())
  expect(getValueLastCalledWith<UserContextBag>(onUserContextValueChange).user).toStrictEqual(useLoginResponses)
})
