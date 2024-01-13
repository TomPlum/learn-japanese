import ProfileCard  from "./ProfileCard"
import { fireEvent } from "@testing-library/react"
import { testUser } from "../../../setupTests"
import { render } from "__test-utils__"

const onDismissHandler = vi.fn()

test("It should render the dismiss button if there no user logged in", () => {
  const { component } = render(<ProfileCard onDismiss={onDismissHandler} />)
  fireEvent.click(component.getByTestId("dismiss-profile-card"))
  expect(onDismissHandler).toHaveBeenCalled()
})

test("It should not render the dismiss button if there a user logged in", () => {
  const { component } = render(<ProfileCard onDismiss={onDismissHandler} />, { user: testUser })
  expect(component.queryByTitle("Dismiss")).not.toBeInTheDocument()
})

test("It should render the username if there is a user logged in", () => {
  const { component } = render(<ProfileCard onDismiss={onDismissHandler} />, { user: testUser })
  expect(component.getByText("TomPlum42")).toBeInTheDocument()
})

test("It should render a generic username text if the user is not logged in", () => {
  const { component } = render(<ProfileCard onDismiss={onDismissHandler} />)
  expect(component.getByText("User Profile")).toBeInTheDocument()
})

test("It should render a go-to-profile link button if the user is logged in", () => {
  const { component } = render(<ProfileCard onDismiss={onDismissHandler} />, { user: testUser })
  expect(component.getByText("Go to profile")).toHaveAttribute("href", "/example-base-path/profile")
})

test("It should render a register link button if the user is not logged in", () => {
  const { component } = render(<ProfileCard onDismiss={onDismissHandler} />)
  expect(component.getByText("Register")).toHaveAttribute("href", "/example-base-path/register")
})

test("It should render a notification centre link if the user is logged in", () => {
  const { component } = render(<ProfileCard onDismiss={onDismissHandler} />, { user: testUser })
  expect(component.getByText("Notification Centre").parentElement).toHaveAttribute("href", "/notifications")
})

test("It should render an account settings link if the user is logged in", () => {
  const { component } = render(<ProfileCard onDismiss={onDismissHandler} />, { user: testUser })
  expect(component.getByText("Account Settings").parentElement).toHaveAttribute("href", "/settings?type=user")
})

test("It should render a show me around tour link if the user is logged in", () => {
  const { component } = render(<ProfileCard onDismiss={onDismissHandler} />, { user: testUser })
  expect(component.getByText("Show Me Around").parentElement).toHaveAttribute("href", "/home/tour")
})

test("It should render an registration reason when the user is not logged in", () => {
  const { component } = render(<ProfileCard onDismiss={onDismissHandler} />)
  const reason = "Create an account to save custom presets, compete in the high-scores, and track your progress."
  expect(component.getByText(reason)).toBeInTheDocument()
})
