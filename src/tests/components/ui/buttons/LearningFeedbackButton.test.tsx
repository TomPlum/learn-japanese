import { render, screen } from "@testing-library/react"
import LearningFeedbackButton, {
  LearningFeedback,
  LearningFeedbackButtonProps
} from "../../../../components/ui/buttons/LearningFeedbackButton"

const onClickHandler = jest.fn()

let props: LearningFeedbackButtonProps

beforeEach(() => {
  props = {
    type: LearningFeedback.REMEMBERED,
    active: true,
    disabled: false,
    onClick: onClickHandler
  }
})

test("Passing type as REMEMBERED should render the button with 'REMEMBERED IT!' text", () => {
  props.type = LearningFeedback.REMEMBERED
  render(<LearningFeedbackButton {...props} />)
  expect(screen.getByText("Remembered It!")).toBeInTheDocument()
})

test("Passing type as FORGOT should render the button with 'FORGOT IT' text", () => {
  props.type = LearningFeedback.FORGOT
  render(<LearningFeedbackButton {...props} />)
  expect(screen.getByText("Forgot It")).toBeInTheDocument()
})

test("Passing type as REMEMBERED should render the button with 'I remembered it' title", () => {
  props.type = LearningFeedback.REMEMBERED
  render(<LearningFeedbackButton {...props} />)
  expect(screen.getByTitle("I remembered it")).toBeInTheDocument()
})

test("Passing type as FORGOT should render the button with 'I couldn't remember it' title", () => {
  props.type = LearningFeedback.FORGOT
  render(<LearningFeedbackButton {...props} />)
  expect(screen.getByTitle("I couldn't remember it")).toBeInTheDocument()
})

test("Passing active property as true when type is Remembered should apply the 'active' class to the button", () => {
  props.type = LearningFeedback.REMEMBERED
  props.active = true
  const { container } = render(<LearningFeedbackButton {...props} />)
  expect(container.firstChild).toHaveClass("activeRemembered")
})

test("Passing active property as true when type is Remembered should apply the 'active' class to the button", () => {
  props.type = LearningFeedback.FORGOT
  props.active = true
  const { container } = render(<LearningFeedbackButton {...props} />)
  expect(container.firstChild).toHaveClass("activeForgotten")
})

test("Passing active property as false and disabled as false should apply the 'inactive' class to the button", () => {
  props.active = false
  props.disabled = false
  const { container } = render(<LearningFeedbackButton {...props} />)
  expect(container.firstChild).toHaveClass("inactive")
})

test("Passing active property as false and disabled as true should not apply any extra classes", () => {
  props.active = false
  props.disabled = true
  const { container } = render(<LearningFeedbackButton {...props} />)
  expect(container.firstChild).toHaveClass("button")
  expect(container.firstChild).not.toHaveClass("active")
  expect(container.firstChild).not.toHaveClass("inactive")
})
