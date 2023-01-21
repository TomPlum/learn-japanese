import DataSettingsStep, { DataSettingsStepProps } from "../../../../../components/layout/wizard/steps/DataSettingsStep"
import { fireEvent, render, screen } from "@testing-library/react"
import Topic from "../../../../../domain/Topic"
import { KanaSettingsBuilder } from "../../../../../domain/session/settings/data/KanaSettings"

const onSelectHandler = jest.fn()
const isValidHandler = jest.fn()

let props: DataSettingsStepProps

const setup = () => {
    const component = render(<DataSettingsStep {...props} />)
    return {
        ...component
    }
}

beforeEach(() => {
    props = {
        topic: Topic.KANA,
        onSelect: onSelectHandler,
        isValid: isValidHandler
    }
})

test("Should render the data settings form from the given topic", () => {
    setup()
    expect(screen.getByTestId("kana-settings-form-body")).toBeInTheDocument()
})

test("Should call the isValid event handler when the state of the data settings form changes", () => {
    setup()
    fireEvent.click(screen.getByTestId("hiragana"))
    expect(isValidHandler).toHaveBeenLastCalledWith(false)
})

test("Should call the onSelect event handler when the state of the data settings form changes", () => {
    setup()
    fireEvent.click(screen.getByTestId("hiragana"))
    expect(onSelectHandler).toHaveBeenLastCalledWith(new KanaSettingsBuilder().build())
})
