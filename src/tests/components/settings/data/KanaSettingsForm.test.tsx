import { fireEvent } from "@testing-library/react"
import KanaSettingsForm from "../../../../components/settings/data/KanaSettingsForm"
import KanaSettings, { KanaSettingsBuilder } from "../../../../domain/session/settings/data/KanaSettings"
import { DataSettingsMenuProps } from "../../../../components/settings/data/DataSettingsMenu"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
import renderWithTranslation from "../../../renderWithTranslation"

const onConfirmHandler = jest.fn()
const onResetHandler = jest.fn()
const onQuitHandler = jest.fn()

let props: DataSettingsMenuProps<KanaSettings>

beforeEach(() => {
    props = {
        title: "Hiragana & Katakana",
        icon: faAddressCard,
        onConfirm: onConfirmHandler,
        onQuit: onQuitHandler,
        onReset: onResetHandler
    }
})

const setup = () => {
    const component = renderWithTranslation(<KanaSettingsForm {...props} />)
    return {
        hiragana: component.getByTestId("hiragana"),
        katakana: component.getByTestId("katakana"),
        diagraphs: component.getByTestId("diagraphs"),
        quantity: component.getByPlaceholderText("Quantity"),
        back: component.getByText("Back"),
        reset: component.getByText("Reset"),
        confirm: component.getByText("Confirm"),
        ...component
    }
}

test("Hiragana should be disabled if it selected but Katakana is not", () => {
    const { hiragana } = setup()
    expect(hiragana).toBeDisabled()
})

test("Katakana should be disabled if it selected and Hiragana is not", () => {
    const { hiragana, katakana } = setup()
    fireEvent.click(katakana)
    fireEvent.click(hiragana)
    expect(katakana).toBeDisabled()
})

test("Selecting both Hiragana and Katakana should enable both options", () => {
    const { hiragana, katakana } = setup()
    fireEvent.click(katakana)
    expect(hiragana).not.toBeDisabled()
    expect(katakana).not.toBeDisabled()
})

test("Clicking confirm should call the confirm event handler with the custom data settings", () => {
    const { quantity, diagraphs, katakana, confirm } = setup()

    fireEvent.click(diagraphs)
    fireEvent.click(katakana)
    fireEvent.change(quantity, { target: { value: 75 } })
    fireEvent.click(confirm)

    expect(onConfirmHandler).toHaveBeenCalledWith(
        new KanaSettingsBuilder().withHiragana().withKatakana().withDiagraphs().withQuantity(75).build()
    )
})

test("Clicking reset should reset the form to its default state", () => {
    const { katakana, confirm, reset } = setup()

    //Change defaults
    fireEvent.click(katakana)

    //Reset
    fireEvent.click(reset)

    expect(onResetHandler).toHaveBeenCalled()
    expect(confirm.parentElement).toBeDisabled()
})

test("Clicking back should call the onQuit event handler", () => {
    const { back } = setup()
    fireEvent.click(back)
    expect(onQuitHandler).toHaveBeenCalled()
})
