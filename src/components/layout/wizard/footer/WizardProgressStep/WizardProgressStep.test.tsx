import { fireEvent, render, screen } from "@testing-library/react"
import WizardProgressStep, {
  WizardProgressStepProps
} from "../../../../../components/layout/wizard/footer/WizardProgressStep"
import { faApple } from "@fortawesome/free-brands-svg-icons"

const onClickHandler = vi.fn()

let props: WizardProgressStepProps

const setup = () => {
  const component = render(<WizardProgressStep {...props} />)
  return {
    ...component
  }
}

beforeEach(() => {
  props = {
    stage: 0,
    icon: faApple,
    disabled: false,
    currentStage: 1,
    title: "Test Step",
    onClick: onClickHandler
  }
})

test("Clicking the step should call the onClick event handler with its stage", () => {
  setup()
  fireEvent.click(screen.getByTestId("wizard-progress-step-0"))
  expect(onClickHandler).toHaveBeenCalled()
})

test("Clicking the step should NOT call the onClick event handler if disabled", () => {
  props.disabled = true

  setup()
  fireEvent.click(screen.getByTestId("wizard-progress-step-0"))

  expect(onClickHandler).not.toHaveBeenCalled()
})

test('Should set the className as "complete" if the current stage is greater than the step stage', () => {
  props.stage = 2
  props.currentStage = 4
  setup()
  expect(screen.getByTestId("wizard-progress-step-2")).toHaveClass("complete")
})

test('Should set the className as "inProgress" if the current stage is equal to the step stage', () => {
  props.stage = 4
  props.currentStage = 4
  setup()
  expect(screen.getByTestId("wizard-progress-step-4")).toHaveClass("inProgress")
})

test('Should set the className as "incomplete" if the current stage is less than the step stage', () => {
  props.stage = 5
  props.currentStage = 2
  setup()
  expect(screen.getByTestId("wizard-progress-step-5")).toHaveClass("incomplete")
})

test('Should set the className as "disabled" if the disabled prop is passed as true', () => {
  props.stage = 5
  props.currentStage = 2
  props.disabled = true

  setup()

  expect(screen.getByTestId("wizard-progress-step-5")).toHaveClass("disabled")
})
