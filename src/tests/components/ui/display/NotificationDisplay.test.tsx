import { fireEvent, render, screen } from "@testing-library/react"
import NotificationDisplay, { NotificationDisplayProps } from "../../../../components/ui/display/NotificationDisplay"
import { NotificationType } from "../../../../slices/NotificationSlice"

const onDismissHandler = jest.fn()
let mockDate: typeof jest

let props: NotificationDisplayProps

beforeEach(() => {
  mockDate = jest.useFakeTimers("modern")

  props = {
    id: "1",
    notification: {
      title: "Welcome!",
      body: "Here you'll see a list of your notifications.",
      time: Date.now(),
      type: NotificationType.INFO,
      precedence: 1
    },
    className: "myNotificationClass",
    onDismiss: onDismissHandler
  }
})

const setup = () => {
  const component = render(<NotificationDisplay {...props} />)
  return {
    dismiss: component.getByTestId("dismiss-notification-1"),
    ...component
  }
}

test("Should render the notification title", () => {
  setup()
  expect(screen.getByText("Welcome!")).toBeInTheDocument()
})

test("Should render the notification body", () => {
  setup()
  expect(screen.getByText("Here you'll see a list of your notifications.")).toBeInTheDocument()
})

test("Should render the notification body", () => {
  setup()
  expect(screen.getByText("Here you'll see a list of your notifications.")).toBeInTheDocument()
})

test('Should render the timestamp as "Just now" if it was dispatched less than 1 minute ago', () => {
  // Set the notification dispatch time as 12:24:00
  props.notification.time = new Date(Date.UTC(2021, 9, 25, 12, 24, 0)).getTime()

  // Set the current time as 12:24:59 (59s after the notification)
  mockDate.setSystemTime(new Date(Date.UTC(2021, 9, 25, 12, 24, 59)))

  // Should render "Just now" as it's less than 1 minute old
  setup()
  expect(screen.getByText("Just now")).toBeInTheDocument()
})

test("Should render the timestamp as n minutes ago if it was dispatched more than 1 minute but less than an hour", () => {
  // Set the notification dispatch time as 12:24:00
  props.notification.time = new Date(Date.UTC(2021, 9, 25, 12, 24, 0)).getTime()

  // Set the current time as 12:29:25 (5m 25s after the notification - but only whole minutes matter here)
  mockDate.setSystemTime(new Date(Date.UTC(2021, 9, 25, 12, 29, 25)))

  // Should render "5m ago" as it's more than 1 minute old
  setup()
  expect(screen.getByText("5m ago")).toBeInTheDocument()
})

test("Should render the timestamp as Xm Yh ago if it was dispatched more than 1 hour ago", () => {
  // Set the notification dispatch time as 12:24:00
  props.notification.time = new Date(Date.UTC(2021, 9, 25, 12, 24, 0)).getTime()

  // Set the current time as 13:45:10 (1h 21m after the notification - but only whole hours/minutes matter)
  mockDate.setSystemTime(new Date(Date.UTC(2021, 9, 25, 13, 45, 10)))

  // Should render "1h 21m ago" as it's more than 1 hour old
  setup()
  expect(screen.getByText("1h 21m ago")).toBeInTheDocument()
})

test("Should render an info icon if the notification type is INFO", () => {
  props.notification.type = NotificationType.INFO
  setup()
  expect(screen.getByTestId("info")).toBeInTheDocument()
})

test("Should render an error icon if the notification type is ERROR", () => {
  props.notification.type = NotificationType.ERROR
  setup()
  expect(screen.getByTestId("error")).toBeInTheDocument()
})

test("Should render a special icon if the notification type is SPECIAL", () => {
  props.notification.type = NotificationType.SPECIAL
  setup()
  expect(screen.getByTestId("special")).toBeInTheDocument()
})

test('Clicking the "x" button should call the onDismiss event handler', () => {
  const { dismiss } = setup()
  fireEvent.click(dismiss)
  expect(onDismissHandler).toHaveBeenCalled()
})
