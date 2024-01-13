import { render } from "__test-utils__"
import NotificationsButton from "./NotificationsButton"
import { fireEvent, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { v4 } from "uuid"
import { Mock } from "vitest"
import { NotificationList, NotificationType } from "context/NotificationContext"

const mockUUID = v4 as Mock
vi.mock("uuid", () => ({
  ...vi.importActual("uuid"),
  v4: vi.fn()
}))

const setup = (notifications?: NotificationList) => {
  const result = render(<NotificationsButton />, { notifications })
  return {
    button: result.component.getByTestId("notifications-button"),
    ...result
  }
}

beforeEach(() => {
  mockUUID.mockReturnValueOnce("1")
  mockUUID.mockReturnValueOnce("2")
})

test("Should render the notifications popover when clicking the button", async () => {
  const { button } = setup()
  fireEvent.click(button)
  expect(await screen.findByTestId("notifications-menu")).toBeInTheDocument()
})

test("Should render an empty state message if there are no notifications", async () => {
  const { button } = setup({})
  fireEvent.click(button)
  expect(await screen.findByText("You're all up to date!")).toBeInTheDocument()
})

test('Should render "1 Notification" if there is a single notification present', async () => {
  const { button } = setup({'1': {
    title: "Example Title", 
    body: "Example Body",
    precedence: 0,
    type: NotificationType.INFO,
    time: 0
  }})

  fireEvent.click(button)
  expect(await screen.findByText("1 Notification")).toBeInTheDocument()
})

test('Should render "N Notifications" in plural if there is more than one notification', async () => {
  const { button } = setup({'1': {
      title: "Example Title",
      body: "Example Body",
      precedence: 0,
      type: NotificationType.INFO,
      time: 0
    },
    '2': {
      title: "Example Title 2",
      body: "Example Body 2",
      precedence: 1,
      type: NotificationType.INFO,
      time: 0
    }}
  )

  fireEvent.click(button)
  expect(await screen.findByText("2 Notifications")).toBeInTheDocument()
})

test('Clicking the "Clear" button should clear all of the notifications', async () => {
  // Add 2 notifications into the context
  const { button } = setup({'1': {
      title: "Example Title",
      body: "Example Body",
      precedence: 0,
      type: NotificationType.INFO,
      time: 0
    },
    '2': {
      title: "Example Title 2",
      body: "Example Body 2",
      precedence: 1,
      type: NotificationType.INFO,
      time: 0
    }}
  )

  // Open the menu - should show both notifications
  fireEvent.click(button)
  expect(await screen.findByText("Example Title")).toBeInTheDocument()
  expect(await screen.findByText("Example Title 2")).toBeInTheDocument()

  // Click clear - should stop rendering the notifications and show empty state message
  fireEvent.click(screen.getByText("Clear"))
  expect(screen.queryByText("Example Title")).not.toBeInTheDocument()
  expect(screen.queryByText("Example Title 2")).not.toBeInTheDocument()
  expect(await screen.findByText("You're all up to date!")).toBeInTheDocument()
})

test("Clicking the dismiss button for a single notification should remove it", async () => {
  // Add 1 notification in the context
  const { button } = setup({'1': {
      title: "Example Title",
      body: "Example Body",
      precedence: 0,
      type: NotificationType.INFO,
      time: 0
    }})

  // Open the menu - should show our notification
  fireEvent.click(button)
  expect(await screen.findByText("Example Title")).toBeInTheDocument()

  // Dismiss it - should be removed
  fireEvent.click(screen.getByTestId("dismiss-notification-1"))
  await waitFor(() => {
    expect(screen.queryByText("Example Title")).not.toBeInTheDocument()
  })
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
