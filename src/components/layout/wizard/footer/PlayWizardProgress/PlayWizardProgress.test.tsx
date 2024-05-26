import { fireEvent, render, screen } from "@testing-library/react"
import PlayWizardProgress, {
  PlayWizardProgressProps
} from "../../../../../components/layout/wizard/footer/PlayWizardProgress"
import { AppMode } from "types/AppMode"

const onSelectStageHandler = vi.fn()

let props: PlayWizardProgressProps

const setup = () => {
  const component = render(<PlayWizardProgress {...props} />)
  return {
    topic: component.getByTitle("Topic"),
    type: component.getByTitle("Preset or Custom"),
    ...component
  }
}

beforeEach(() => {
  props = {
    stage: 1,
    valid: true,
    custom: false,
    mode: AppMode.PLAY,
    onSelectStage: onSelectStageHandler
  }
})

test("Clicking a step should call on the onSelectStage handler with that stages numerical value", () => {
  const { topic } = setup()
  fireEvent.click(topic)
  expect(onSelectStageHandler).toHaveBeenLastCalledWith(1)
})

test("Passing custom as false should render only the topic, type and preset steps", () => {
  // Set custom to false for preset selection and current stage for 2 so we're selecting type
  props.custom = false
  props.stage = 2
  setup()

  // These steps should be rendered
  expect(screen.getByTitle("Play or Learn")).toBeInTheDocument()
  expect(screen.getByTitle("Topic")).toBeInTheDocument()
  expect(screen.getByTitle("Preset or Custom")).toBeInTheDocument()
  expect(screen.getByTitle("Preset")).toBeInTheDocument()

  // These should not
  expect(screen.queryByTitle("Question Settings")).not.toBeInTheDocument()
  expect(screen.queryByTitle("Hint Settings")).not.toBeInTheDocument()
  expect(screen.queryByTitle("Life Settings")).not.toBeInTheDocument()
  expect(screen.queryByTitle("Time Settings")).not.toBeInTheDocument()
  expect(screen.queryByTitle("Data Settings")).not.toBeInTheDocument()
  expect(screen.queryByTitle("Confirmation")).not.toBeInTheDocument()
})

test("Passing custom as true should render all steps except the preset one", () => {
  // Set custom to true for custom configuration
  props.custom = true
  setup()

  // These steps should be rendered
  expect(screen.getByTitle("Play or Learn")).toBeInTheDocument()
  expect(screen.getByTitle("Topic")).toBeInTheDocument()
  expect(screen.getByTitle("Preset or Custom")).toBeInTheDocument()
  expect(screen.getByTitle("Question Settings")).toBeInTheDocument()
  expect(screen.getByTitle("Hint Settings")).toBeInTheDocument()
  expect(screen.getByTitle("Life Settings")).toBeInTheDocument()
  expect(screen.getByTitle("Time Settings")).toBeInTheDocument()
  expect(screen.getByTitle("Data Settings")).toBeInTheDocument()
  expect(screen.getByTitle("Confirmation")).toBeInTheDocument()

  // This one should not
  expect(screen.queryByTitle("Preset")).not.toBeInTheDocument()
})

test("Passing valid as false should disable the final confirmation step", () => {
  props.valid = false
  props.custom = true
  setup()

  fireEvent.click(screen.getByTitle("Confirmation"))

  expect(onSelectStageHandler).not.toHaveBeenCalled()
})

test("Passing app mode at learn should not render game steps", () => {
  props.custom = true
  props.mode = AppMode.LEARN
  setup()

  // These steps should be rendered
  expect(screen.getByTitle("Play or Learn")).toBeInTheDocument()
  expect(screen.getByTitle("Topic")).toBeInTheDocument()
  expect(screen.getByTitle("Preset or Custom")).toBeInTheDocument()
  expect(screen.getByTitle("Data Settings")).toBeInTheDocument()
  expect(screen.getByTitle("Confirmation")).toBeInTheDocument()

  // This one should not
  expect(screen.queryByTitle("Preset")).not.toBeInTheDocument()
  expect(screen.queryByTitle("Question Settings")).not.toBeInTheDocument()
  expect(screen.queryByTitle("Hint Settings")).not.toBeInTheDocument()
  expect(screen.queryByTitle("Life Settings")).not.toBeInTheDocument()
  expect(screen.queryByTitle("Time Settings")).not.toBeInTheDocument()
})
