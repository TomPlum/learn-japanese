import { fireEvent, screen, waitFor } from "@testing-library/react"
import LoginForm from "../../../components/user/LoginForm"
import auth, { LoginResponse } from "../../../service/AuthenticationService"
import { store } from "../../../store"
import { clearUser } from "../../../slices/UserSlice"
import renderTranslatedReduxConsumer from "../../renderTranslatedReduxConsumer"

vi.mock("../../../service/AuthenticationService")

const onSuccessHandler = vi.fn()
const loginService = auth.login as jest.MockedFunction<() => Promise<LoginResponse>>
let registeredUsername: string | undefined = undefined
let infoMessage: string | undefined = undefined

const validLoginResponse: LoginResponse = {
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
    kanjiFont: "Gothic",
    theme: "Dark Mode",
    language: "English",
    highScoresBehaviour: "Ask Each Time",
    defaultMode: "Play",
    flashCardsQuantity: 10,
    confidenceMenuStyle: "Numbers 1 - 6",
    profileVisibility: "Friends Only",
    streakCardView: "Start Date",
    romajiVisibility: "Ask Each Time",
    streakNotifications: true,
    mistakesReminders: true,
    activityFeedQuantity: 3
  }
}

const setup = () => {
  const component = renderTranslatedReduxConsumer(
    <LoginForm onSuccess={onSuccessHandler} username={registeredUsername} info={infoMessage} />
  )

  return {
    username: component.getByPlaceholderText("Username"),
    password: component.getByPlaceholderText("Password"),
    login: component.getByText("Login"),
    ...component
  }
}

afterEach(() => {
  store.dispatch(clearUser())
})

test("Should focus the username field on mount", () => {
  const { username } = setup()
  expect(username).toHaveFocus()
})

test("Pressing the enter key while the username and password are valid should invoke login", async () => {
  loginService.mockResolvedValueOnce(validLoginResponse)

  const { username, password, container } = setup()

  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "Password" } })
  fireEvent.keyDown(container, { key: "Enter", code: 13, charCode: 13 })

  await waitFor(() => expect(onSuccessHandler).toHaveBeenCalled())
})

test("Pressing the enter key while the username is invalid should not call the onSuccess handler", () => {
  const { password, container } = setup()
  fireEvent.change(password, { target: { value: "Password" } })
  fireEvent.keyDown(container, { key: "Enter", code: 13, charCode: 13 })
  expect(onSuccessHandler).not.toHaveBeenCalled()
})

test("Pressing the enter key while the password is invalid should not call the onSuccess handler", () => {
  const { username, container } = setup()
  fireEvent.change(username, { target: { value: "Tom" } })
  fireEvent.keyDown(container, { key: "Enter", code: 13, charCode: 13 })
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
  loginService.mockResolvedValueOnce(validLoginResponse)

  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  //Login
  fireEvent.click(login)
  await waitFor(() => expect(onSuccessHandler).toHaveBeenCalled())
})

test("Clicking the login button while the form is valid should call the authentication service", async () => {
  loginService.mockResolvedValueOnce(validLoginResponse)

  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  //Login
  fireEvent.click(login)

  await waitFor(() => expect(loginService).toHaveBeenLastCalledWith("TomPlum42", "P4ssw0rd"))
})

test("When the auth service returns an error, it should render a generic error message", async () => {
  loginService.mockRejectedValue("It's broken")

  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  //Login
  fireEvent.click(login)

  expect(await screen.findByText("Sorry, an unknown error has occurred.")).toBeInTheDocument()
})

test("When the auth service returns an an authentication error then it should render an alert", async () => {
  loginService.mockRejectedValue("AUTHENTICATION_ERROR")

  const { username, password, login } = setup()

  //Enter Credentials
  fireEvent.change(username, { target: { value: "TomPlum42" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  //Login
  fireEvent.click(login)

  await waitFor(() => expect(screen.getByText("Username or password is incorrect.")).toBeInTheDocument())
})

test("When the auth service returns an an authentication error then it should remove the password value", async () => {
  loginService.mockRejectedValue("AUTHENTICATION_ERROR")

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
  loginService.mockRejectedValue("AUTHENTICATION_ERROR")

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

test("When successfully logging in, it should set the user object in the Redux store", async () => {
  loginService.mockResolvedValueOnce(validLoginResponse)

  const { username, password, login } = setup()

  // Enter Credentials
  fireEvent.change(username, { target: { value: "Tom" } })
  fireEvent.change(password, { target: { value: "P4ssw0rd" } })

  // Login
  fireEvent.click(login)
  await waitFor(() => expect(onSuccessHandler).toHaveBeenCalled())
  expect(store.getState().user.user).toStrictEqual({
    creationDate: "2021-10-15",
    credentialsExpired: false,
    email: "tom@hotmail.com",
    enabled: true,
    expired: false,
    locked: false,
    nickname: "Tom",
    preferences: {
      activityFeedQuantity: 3,
      confidenceMenuStyle: "Numbers 1 - 6",
      defaultMode: "Play",
      flashCardsQuantity: 10,
      highScoresBehaviour: "Ask Each Time",
      kanjiFont: "Gothic",
      language: "English",
      mistakesReminders: true,
      profileVisibility: "Friends Only",
      romajiVisibility: "Ask Each Time",
      streakCardView: "Start Date",
      streakNotifications: true,
      theme: "Dark Mode"
    },
    refreshToken: "REFRESH_TOKEN",
    roles: ["admin"],
    token: "TOKEN",
    username: "TomPlum42"
  })
})
