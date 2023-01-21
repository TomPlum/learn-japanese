import { fireEvent, screen } from "@testing-library/react"
import ModeSelectionStep, {
    ModeSelectionStepProps
} from "../../../../../components/layout/wizard/steps/ModeSelectionStep"
import { AppMode } from "../../../../../domain/AppMode"
import renderWithTranslation from "../../../../renderWithTranslation"

const onSelectHandler = jest.fn()

let props: ModeSelectionStepProps

const setup = () => {
    const component = renderWithTranslation(<ModeSelectionStep {...props} />)
    return {
        play: component.getByText("Play").parentElement,
        learn: component.getByText("Learn").parentElement,
        ...component
    }
}

beforeEach(() => {
    props = {
        mode: AppMode.PLAY,
        onSelect: onSelectHandler
    }
})

test("Passing mode as play should set the class name to selected", () => {
    props.mode = AppMode.PLAY
    const { play } = setup()
    expect(play).toHaveClass("selected")
})

test("Clicking the learn mode button should call the onSelect event handler with Learn mode", () => {
    const { learn } = setup()
    fireEvent.click(learn!)
    expect(onSelectHandler).toHaveBeenCalled()
})

test("Passing mode as learn should set the class name to selected", () => {
    props.mode = AppMode.LEARN
    const { learn } = setup()
    expect(learn).toHaveClass("selected")
})

test("Clicking the learn mode button should call the onSelect event handler with Learn mode", () => {
    const { learn } = setup()
    fireEvent.click(learn!)
    expect(onSelectHandler).toHaveBeenLastCalledWith(AppMode.LEARN)
})

test("Clicking the play mode button should call the onSelect event handler with Play mode", () => {
    const { play } = setup()
    fireEvent.click(play!)
    expect(onSelectHandler).toHaveBeenLastCalledWith(AppMode.PLAY)
})

test("Clicking the learn mode button should display the Learn mode description", () => {
    props.mode = AppMode.LEARN
    const { learn } = setup()

    fireEvent.click(learn!)

    expect(
        screen.getByText("Study a topic of your choice via flash cards and spaced repetition learning.")
    ).toBeInTheDocument()
})

test("Clicking the play mode button should display the Play mode description", () => {
    const { play } = setup()
    fireEvent.click(play!)
    expect(
        screen.getByText(
            "Test your knowledge on a given topic. Choose from a preset game mode or customise your own settings."
        )
    ).toBeInTheDocument()
})
