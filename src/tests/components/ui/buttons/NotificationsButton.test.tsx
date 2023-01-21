import renderReduxConsumer from "../../../renderReduxConsumer"
import NotificationsButton from "../../../../components/ui/buttons/NotificationsButton"
import { fireEvent, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { store } from "../../../../store"
import { addNotification, clearNotifications } from "../../../../slices/NotificationSlice"
import { v4 } from "uuid"

const mockUUID = v4 as jest.MockedFunction<typeof v4>
jest.mock("uuid", () => ({
  ...jest.requireActual("uuid"),
  v4: jest.fn()
}))

const setup = () => {
  const component = renderReduxConsumer(<NotificationsButton />)
  return {
    button: component.getByTestId("notifications-button"),
    ...component
  }
}

beforeEach(() => {
  mockUUID.mockReturnValueOnce("1")
  mockUUID.mockReturnValueOnce("2")
  store.dispatch(clearNotifications())
})

afterEach(() => {
  store.dispatch(clearNotifications())
})

test("Should render the notifications popover when clicking the button", async () => {
  const { button } = setup()
  fireEvent.click(button)
  expect(await screen.findByTestId("notifications-menu")).toBeInTheDocument()
})

test("Should render an empty state message if there are no notifications", async () => {
  store.dispatch(clearNotifications())
  const { button } = setup()
  fireEvent.click(button)
  expect(await screen.findByText("You're all up to date!")).toBeInTheDocument()
})

test('Should render "1 Notification" if there is a single notification present', async () => {
  store.dispatch(addNotification({ title: "Example Title", body: "Example Body" }))
  const { button } = setup()

  fireEvent.click(button)
  expect(await screen.findByText("1 Notification")).toBeInTheDocument()
})

test('Should render "N Notifications" in plural if there is more than one notification', async () => {
  store.dispatch(addNotification({ title: "Example Title", body: "Example Body" }))
  store.dispatch(addNotification({ title: "Example Title 2", body: "Example Body 2" }))
  const { button } = setup()

  fireEvent.click(button)
  expect(await screen.findByText("2 Notifications")).toBeInTheDocument()
})

test('Clicking the "Clear" button should clear all of the notifications', async () => {
  // Add 2 notifications into the store
  store.dispatch(addNotification({ title: "Example Title", body: "Example Body" }))
  store.dispatch(addNotification({ title: "Example Title 2", body: "Example Body 2" }))
  const { button } = setup()

  // Open the menu - should show both notifications
  fireEvent.click(button)
  expect(await screen.findByText("Example Title")).toBeInTheDocument()
  expect(await screen.findByText("Example Title 2")).toBeInTheDocument()

  // Click clear - should stop rendering the notifications and show empty state message
  fireEvent.click(screen.getByText("Clear"))
  expect(await screen.queryByText("Example Title")).not.toBeInTheDocument()
  expect(await screen.queryByText("Example Title 2")).not.toBeInTheDocument()
  expect(await screen.findByText("You're all up to date!")).toBeInTheDocument()
})

test("Clicking the dismiss button for a single notification should remove it", async () => {
  // Add 1 notification in the store
  store.dispatch(addNotification({ title: "Example Title", body: "Example Body" }))
  const { button } = setup()

  // Open the menu - should show our notification
  fireEvent.click(button)
  expect(await screen.findByText("Example Title")).toBeInTheDocument()

  // Dismiss it - should be removed
  fireEvent.click(screen.getByTestId("dismiss-notification-1"))
  expect(await screen.queryByText("Example Title")).not.toBeInTheDocument()
})

test("Clicking outside of the menu should stop rendering it", async () => {
  // Click the button
  const { button } = setup()
  fireEvent.click(button)

  // Should render menu
  const menu = await screen.findByTestId("notifications-menu")
  expect(menu).toBeInTheDocument()

  // Blur the menu, should stop rendering
  fireEvent.click(document.body)
  await waitForElementToBeRemoved(menu)
})
