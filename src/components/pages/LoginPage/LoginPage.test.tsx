import LoginPage  from "./LoginPage"
import { fireEvent, waitFor } from "@testing-library/react"
import { testUser } from "setupTests"
import { render } from "__test-utils__"
import { server } from "__test-utils__/msw.ts";
import { useLoginHandlers } from "api/hooks/auth/useLogin/useLogin.handlers.ts";

test("Should redirect to the home page if the user is already logged in", () => {
  const { history } = render(<LoginPage />, { user: testUser })
  expect(history.location.pathname).toBe("/home")
})

test("Should render the login form when there is no user logged in", () => {
  const { component } = render(<LoginPage />)
  expect(component.getByTestId("login-form")).toBeInTheDocument()
})

test("Should redirect to the home page after successfully logging in", async () => {
  // Start with no user
  const { component, history } = render(<LoginPage />)

  // Log in
  server.use(...useLoginHandlers)
  fireEvent.change(component.getByPlaceholderText("Username"), { target: { value: "TomPlum" } })
  fireEvent.change(component.getByPlaceholderText("Password"), { target: { value: "MyPassword123-" } })

  // Should redirect to the home page on submit
  fireEvent.click(component.getByText("Login"))
  //await waitForElementToBeRemoved(await component.findByTestId('login-loading'));
  await waitFor(() => expect(history.location.pathname).toBe("/home"))
})

test("Should pass the username from the location query parameter into the login form", () => {
  const { component } = render(<LoginPage />, { url: "/login?username=TestingUser" })
  expect(component.getByPlaceholderText("Username")).toHaveValue("TestingUser")
})

test("Should render the info message about session expiry when the query param is passed as true", () => {
  const { component } = render(<LoginPage />, { url: "/login?session-expired=true" })
  expect(component.getByText("Your session has expired. Please log-in again.")).toBeInTheDocument()
})
